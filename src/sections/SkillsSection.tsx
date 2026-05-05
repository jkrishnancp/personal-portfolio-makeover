import { skillsData } from "@/data/portfolioData";
import { Shield, Target, TrendingUp, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";

export function SkillsSection() {
  const { scrollRef, canScrollLeft, canScrollRight, checkScroll, scroll } = useCarouselScroll();

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Core Competencies</h2>
        </div>

        {/* Core Competencies - prominent badges */}
        <div className="card-executive p-8 mb-8">
          <h3 className="text-lg font-bold mb-5 flex items-center gap-3 font-display">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            Leadership & Security Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.coreCompetencies.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Strategy, Analytics, Financial groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card-executive p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2 font-display">
              <Target className="w-4 h-4 text-accent" />
              Strategy & Operations
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.strategyOperations.map((item, i) => (
                <span key={i} className="px-3 py-1.5 text-xs bg-accent text-accent-foreground rounded font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="card-executive p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2 font-display">
              <TrendingUp className="w-4 h-4 text-accent" />
              Analytics & Reporting
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.analyticsReporting.map((item, i) => (
                <span key={i} className="px-3 py-1.5 text-xs bg-accent text-accent-foreground rounded font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="card-executive p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2 font-display">
              <Zap className="w-4 h-4 text-accent" />
              Financial & Risk Management
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.financialRisk.map((item, i) => (
                <span key={i} className="px-3 py-1.5 text-xs bg-accent text-accent-foreground rounded font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills Carousel */}
        <div className="relative -mx-6 md:-mx-12 lg:-mx-24 overflow-hidden">
          <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll("left")} disabled={!canScrollLeft}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div ref={scrollRef} onScroll={checkScroll} className="overflow-x-auto px-6 md:px-16 lg:px-20 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {skillsData.technicalSkills.map((category, index) => (
                <div key={index} className="w-[260px] flex-shrink-0 card-executive p-6">
                  <h4 className="font-bold mb-4 font-display text-sm">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">{skill}</span>
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
      </div>
    </section>
  );
}
