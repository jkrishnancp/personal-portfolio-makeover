import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { educationData } from "@/data/portfolioData";

const EducationSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-7 h-7 text-primary-foreground" />
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>

                      <p className="text-foreground/70">
                        Focus: {edu.focus}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
