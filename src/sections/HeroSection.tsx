import { profileData } from "@/data/portfolioData";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HudMetricPanel } from "@/components/HudMetricPanel";

export function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-24 gradient-hero text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm">
              Senior Cybersecurity Executive
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              {profileData.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 font-medium italic tracking-wide">{profileData.tagline}</p>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start pt-2 sm:pt-4">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base sm:h-10" asChild>
                <a href={`mailto:${profileData.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent text-sm sm:text-base sm:h-10" asChild>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6 justify-center lg:justify-start">
              {profileData.keywords.map((keyword, index) => (
                <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-white/10 text-white/90 rounded border border-white/20">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* HUD Metric Panels */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              <HudMetricPanel numericValue={20} label="Years Experience" delay={0} />
              <HudMetricPanel numericValue={250} label="Projects" delay={100} />
              <HudMetricPanel numericValue={400} label="Team Size" delay={200} />
              <HudMetricPanel numericValue={20} label="Countries" delay={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
