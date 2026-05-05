import { executiveReporting } from "@/data/portfolioData";
import { TrendingUp, CheckCircle2, Users } from "lucide-react";

export function ExecutiveReportingSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Executive Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Board & C-Suite Communication</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-executive p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-display">Audiences</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {executiveReporting.audiences.map((audience, i) => (
                <span key={i} className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium">{audience}</span>
              ))}
            </div>
          </div>
          <div className="card-executive p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-display">KPIs & Dashboards</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {executiveReporting.kpisDashboards.map((kpi, i) => (
                <span key={i} className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded">{kpi}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 card-executive p-6">
          <h3 className="text-xl font-bold mb-4 font-display">Deliverables</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {executiveReporting.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
