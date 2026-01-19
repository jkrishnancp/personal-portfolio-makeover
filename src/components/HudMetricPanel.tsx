import { useEffect, useState, useRef } from "react";

interface HudMetricPanelProps {
  value: string;
  numericValue: number;
  label: string;
  delay?: number;
}

export function HudMetricPanel({ value, numericValue, label, delay = 0 }: HudMetricPanelProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Count-up animation
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 1500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCurrentValue(Math.round(numericValue * easeOut));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Trigger glow pulse after count-up completes
          setIsGlowing(true);
          setTimeout(() => setIsGlowing(false), 800);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, numericValue, delay]);

  // Subtle parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const displayValue = isVisible ? `${currentValue}+` : "0+";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative group cursor-default
        transition-all duration-300 ease-out
      `}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
    >
      {/* Main Panel */}
      <div
        className={`
          relative p-4 sm:p-5 lg:p-6
          bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent
          backdrop-blur-md
          border border-accent/30
          transition-all duration-300
          group-hover:border-accent/60 group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.15)]
          ${isGlowing ? 'shadow-[0_0_30px_hsl(var(--accent)/0.3)]' : ''}
        `}
        style={{
          clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))',
        }}
      >
        {/* Circuit/Grid texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px),
              linear-gradient(hsl(var(--accent)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/60" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/60" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/60" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/60" />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Value with glow */}
          <div 
            className={`
              text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight
              text-accent
              transition-all duration-300
              ${isGlowing ? 'animate-pulse' : ''}
            `}
            style={{
              textShadow: isGlowing 
                ? '0 0 20px hsl(var(--accent)), 0 0 40px hsl(var(--accent)/0.5)' 
                : '0 0 10px hsl(var(--accent)/0.4)',
            }}
          >
            {displayValue}
          </div>

          {/* Divider line */}
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto my-2" />

          {/* Label */}
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/60 font-medium">
            {label}
          </div>
        </div>

        {/* Scan line effect */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden opacity-20"
          style={{
            background: 'linear-gradient(transparent 50%, hsl(var(--accent)/0.03) 50%)',
            backgroundSize: '100% 4px',
          }}
        />
      </div>

      {/* Outer glow ring on hover */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div 
          className="absolute inset-0 border border-accent/20"
          style={{
            clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))',
          }}
        />
      </div>
    </div>
  );
}