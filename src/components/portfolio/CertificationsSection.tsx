import { useState } from "react";
import { Shield, Users, Database, Monitor, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { certificationsData } from "@/data/portfolioData";

const categoryIcons = {
  cybersecurity: Shield,
  leadership: Users,
  dataAI: Database,
  operatingSystems: Monitor,
};

const categoryLabels = {
  cybersecurity: "Cybersecurity",
  leadership: "Leadership",
  dataAI: "Data & AI",
  operatingSystems: "Operating Systems",
};

interface Certification {
  name: string;
  fullName: string;
  issuer: string;
  year: string;
}

const CertificationCard = ({ cert }: { cert: Certification }) => {
  return (
    <div className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all">
      <div className="flex items-start justify-between mb-2">
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
          {cert.name}
        </Badge>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>{cert.year}</span>
        </div>
      </div>
      <h4 className="font-medium text-foreground text-sm mb-1">{cert.fullName}</h4>
      <p className="text-xs text-muted-foreground">Issued by {cert.issuer}</p>
    </div>
  );
};

const CertificationsSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Licenses & Certifications</span>
          </h2>

          <Tabs defaultValue="cybersecurity" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
              {Object.entries(categoryLabels).map(([key, label]) => {
                const Icon = categoryIcons[key as keyof typeof categoryIcons];
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(certificationsData).map(([key, certs]) => {
              const Icon = categoryIcons[key as keyof typeof categoryIcons];
              return (
                <TabsContent key={key} value={key}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-secondary" />
                        {categoryLabels[key as keyof typeof categoryLabels]} Certifications
                        <Badge variant="secondary" className="ml-auto">
                          {certs.length} Certifications
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {certs.map((cert) => (
                          <CertificationCard key={cert.name} cert={cert} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
