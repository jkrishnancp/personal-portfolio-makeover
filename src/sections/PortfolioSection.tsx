import { projectCategories } from "@/data/portfolioData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";

export function PortfolioSection() {
  const { scrollRef, canScrollLeft, canScrollRight, checkScroll, scroll } = useCarouselScroll();

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 mb-6 sm:mb-8">
        <span className="section-label text-xs sm:text-sm">Portfolio</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 font-display">250+ Projects Across 12 Domains</h2>
        <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">Comprehensive security programs delivered across enterprise, BFSI, retail, healthcare, manufacturing, and public sector.</p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll("left")} disabled={!canScrollLeft}>
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div ref={scrollRef} onScroll={checkScroll} className="overflow-x-auto px-4 sm:px-6 md:px-16 lg:px-20 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4" style={{ width: "max-content" }}>
            {projectCategories.map((cat, index) => (
              <div key={index} className="w-[280px] sm:w-[320px] card-executive p-4 sm:p-5 bg-card">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-sm sm:text-base font-bold font-display">{cat.category}</h3>
                  <span className="px-2 py-0.5 text-xs sm:text-sm bg-accent/10 text-accent rounded-full font-semibold">{cat.count}+</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{cat.description}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-1.5 sm:px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll("right")} disabled={!canScrollRight}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
