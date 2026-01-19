import { useEffect, useState, useRef } from "react";

interface CircularProgressProps {
  value: number;
  maxValue?: number;
  label: string;
  displayValue: string;
  isPercentage?: boolean;
  delay?: number;
}

export function CircularProgress({
  value,
  maxValue = 100,
  label,
  displayValue,
  isPercentage = true,
  delay = 0,
}: CircularProgressProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate the value when visible
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 1200;
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = startValue + (endValue - startValue) * easeOut;
        
        setCurrentValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  const percentage = (currentValue / maxValue) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Format display value with animation
  const getAnimatedDisplayValue = () => {
    if (!isPercentage) {
      return displayValue;
    }
    return `${Math.round(currentValue)}%`;
  };

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl" />
        
        {/* SVG Progress Ring */}
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-white/10"
          />
          
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isPercentage ? strokeDashoffset : circumference * 0.05}
            className="transition-all duration-100 ease-out drop-shadow-[0_0_8px_hsl(var(--accent)/0.5)]"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(45, 100%, 60%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-accent drop-shadow-lg">
            {getAnimatedDisplayValue()}
          </span>
        </div>
      </div>
      
      {/* Label */}
      <span className="mt-3 sm:mt-4 text-white/80 text-xs sm:text-sm font-medium text-center max-w-[120px] leading-tight">
        {label}
      </span>
    </div>
  );
}