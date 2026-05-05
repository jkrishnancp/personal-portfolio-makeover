import { impactHighlights } from "@/data/portfolioData";
import { Zap } from "lucide-react";

export function ImpactSection() {
  return (
    <section id="impact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest">Impact</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 font-display">Impact Highlights</h2>
          <p className="text-primary-foreground/70 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">Action → Outcome → Business Value</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {impactHighlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <p className="text-primary-foreground/90 leading-relaxed text-sm sm:text-base">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
