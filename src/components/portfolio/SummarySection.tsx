import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { summaryData } from "@/data/portfolioData";

const SummarySection = () => {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Professional Summary</span>
          </h2>

          <Card className="glass-card mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                {summaryData.overview}
              </p>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mb-6 text-foreground/90">Key Highlights</h3>
          
          <div className="grid gap-4">
            {summaryData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
