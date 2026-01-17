import { useState } from "react";
import { Star, Brain, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { skillsData } from "@/data/portfolioData";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-4 h-4",
            star <= rating ? "fill-primary text-primary" : "text-muted"
          )}
        />
      ))}
    </div>
  );
};

const SkillCard = ({ name, proficiency }: { name: string; proficiency: number }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all hover:bg-muted/20">
      <span className="text-sm text-foreground/90">{name}</span>
      <StarRating rating={proficiency} />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>

          <Tabs defaultValue="industry" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50">
              <TabsTrigger value="industry" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">Industry Knowledge</span>
                <span className="sm:hidden">Knowledge</span>
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Wrench className="w-4 h-4" />
                <span className="hidden sm:inline">Tools & Technologies</span>
                <span className="sm:hidden">Tools</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="industry">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    Industry Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {skillsData.industryKnowledge.map((skill) => (
                      <SkillCard key={skill.name} {...skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tools">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-secondary" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {skillsData.tools.map((skill) => (
                      <SkillCard key={skill.name} {...skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
