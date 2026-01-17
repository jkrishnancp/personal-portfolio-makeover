import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Calendar, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { experienceData } from "@/data/portfolioData";

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Professional Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

            <div className="space-y-6">
              {experienceData.map((job, index) => (
                <div key={job.id} className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className={cn(
                    "absolute left-2 md:left-6 w-4 h-4 rounded-full border-2 bg-background",
                    index === 0 ? "border-primary glow-primary" : "border-secondary"
                  )} />

                  <Card className={cn(
                    "glass-card overflow-hidden transition-all duration-300",
                    expandedId === job.id && "border-primary/50"
                  )}>
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpand(job.id)}
                        className="w-full p-4 md:p-6 text-left hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4 text-secondary" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-end mt-2">
                          {expandedId === job.id ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </button>

                      {expandedId === job.id && (
                        <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-border/50">
                          <ul className="mt-4 space-y-3">
                            {job.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 mt-2 rounded-full gradient-bg flex-shrink-0" />
                                <span className="text-foreground/80 text-sm md:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
