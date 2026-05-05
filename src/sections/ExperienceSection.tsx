import { useState } from "react";
import { experienceData, type Experience } from "@/data/portfolioData";
import { Briefcase, TrendingUp, CheckCircle2, Shield, Calendar, MapPin, Target } from "lucide-react";
import { CarouselSection } from "@/components/CarouselSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";


export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <>
      <CarouselSection
        id="experience"
        label="Experience"
        title="Professional History"
        subtitle="Over 20 years of progressive experience building and leading security programs across enterprise, financial services, and technology sectors. Click any role to explore full details."
        cardWidth={340}
      >
        {experienceData.map((job, index) => {
          return (
            <div
              key={job.id}
              className={`w-[340px] flex-shrink-0 card-executive p-6 border-l-4 border-l-primary/60 hover:border-l-primary hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]`}
              onClick={() => setSelectedExperience(job)}
            >
              {/* Header */}
              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded mb-2">{job.period}</span>
                <h3 className="text-lg font-bold font-display leading-tight">{job.title}</h3>
                <p className="text-accent font-semibold text-sm mt-1">{job.company}</p>
                <p className="text-muted-foreground text-xs mt-1">{job.location}</p>
              </div>

              {/* Scope */}
              <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-foreground">Scope</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Team: {job.scope.teamSize}</p>
                  <p>Regions: {job.scope.regions}</p>
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-foreground">Key Outcomes</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {job.outcomes.slice(0, 2).map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 pt-3 border-t border-border">
                {job.stack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 text-xs bg-primary/5 text-primary border border-primary/20 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </CarouselSection>

      {/* Experience Details Dialog */}
      <Dialog open={!!selectedExperience} onOpenChange={(open) => !open && setSelectedExperience(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold font-display text-foreground">
                  {selectedExperience.title}
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="space-y-3 pt-2">
                    <p className="text-accent font-semibold text-base">
                      {selectedExperience.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {selectedExperience.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {selectedExperience.location}
                      </span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Scope */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Scope</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Team:</span> {selectedExperience.scope.teamSize}</p>
                    <p><span className="font-medium text-foreground">Regions:</span> {selectedExperience.scope.regions}</p>
                    <p><span className="font-medium text-foreground">Platforms:</span> {selectedExperience.scope.platforms}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Role Overview</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedExperience.description}
                  </div>
                </div>

                {/* Key Outcomes */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Key Outcomes</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {selectedExperience.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Technologies & Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
