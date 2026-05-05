import { summaryData, personaTags } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";
import { CircularProgress } from "@/components/CircularProgress";
import executiveSummaryBg from "@/assets/executive-summary-bg.jpg";

export function ExecutiveSummarySection() {
  return (
    <section id="summary" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${executiveSummaryBg})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>

      {/* Animated decorative elements - hidden on mobile */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-accent/30 rounded-full animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-accent/20 rounded-full animate-pulse delay-150 hidden sm:block"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping hidden sm:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content - Main Summary */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest">About Me</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight">
              Executive <span className="text-accent">Summary</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              {summaryData.text}
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              {personaTags.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Circular Progress Rings */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              <CircularProgress value={95} label="Alert Noise Reduced" displayValue="95%" isPercentage={true} delay={0} />
              <CircularProgress value={70} label="Faster Response Time" displayValue="70%" isPercentage={true} delay={150} />
              <CircularProgress value={100} label="Audit Success Rate" displayValue="100%" isPercentage={true} delay={300} />
              <CircularProgress value={15} maxValue={20} label="Compliance Frameworks" displayValue="15+" isPercentage={false} delay={450} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
