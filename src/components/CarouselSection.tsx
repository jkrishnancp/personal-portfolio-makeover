import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSectionProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  label: string;
  id?: string;
  rows?: number;
  cardWidth?: number;
  bgClassName?: string;
}

export function CarouselSection({
  children,
  title,
  subtitle,
  label,
  id,
  rows = 1,
  cardWidth = 350,
  bgClassName = "",
}: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = cardWidth * 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section id={id} className={`py-20 overflow-hidden ${bgClassName}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
        <span className="section-label">{label}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
      </div>

      {/* Carousel with Side Navigation */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Navigation Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={checkScrollPosition}
          className="overflow-x-auto scrollbar-hide px-6 md:px-16 lg:px-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className={`flex gap-4 ${rows === 2 ? "flex-wrap" : ""}`}
            style={{ 
              width: rows === 2 ? "max-content" : "auto",
              maxHeight: rows === 2 ? "none" : "auto"
            }}
          >
            {children}
          </div>
        </div>

        {/* Right Navigation Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
