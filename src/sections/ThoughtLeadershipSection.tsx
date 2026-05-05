import { thoughtLeadership } from "@/data/portfolioData";
import { CheckCircle2, Mic, Sparkles } from "lucide-react";

export function ThoughtLeadershipSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Influence</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Thought Leadership</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-executive p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Mic className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-display">Speaking & Panels</h3>
            </div>
            <ul className="space-y-4">
              {thoughtLeadership.speaking.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-executive p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-display">Community Contributions</h3>
            </div>
            <ul className="space-y-4">
              {thoughtLeadership.contributions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
