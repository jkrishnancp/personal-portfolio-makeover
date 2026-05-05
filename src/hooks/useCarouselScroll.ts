import { useRef, useState } from "react";

const SCROLL_AMOUNT = 700;
const SCROLL_CHECK_DELAY_MS = 300;
const SCROLL_END_THRESHOLD_PX = 10;

/**
 * Encapsulates scroll-state and scroll helpers for a single inline carousel.
 * Used by SkillsSection and PortfolioSection where the carousel is embedded
 * inside a larger section and cannot be replaced by CarouselSection directly.
 */
export function useCarouselScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - SCROLL_END_THRESHOLD_PX);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
        behavior: "smooth",
      });
      setTimeout(checkScroll, SCROLL_CHECK_DELAY_MS);
    }
  };

  return { scrollRef, canScrollLeft, canScrollRight, checkScroll, scroll };
}
