import { activeBuilding } from "@/data/portfolioData";

export function ActiveInitiativesSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Innovation</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Active Initiatives</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {activeBuilding.map((project, index) => (
            <div key={index} className="card-executive p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-display">{project.name}</h3>
                <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                  project.status === 'Production' ? 'bg-accent/10 text-accent' :
                  project.status === 'Active development' ? 'bg-primary/10 text-primary' :
                  project.status === 'Expanding' ? 'bg-primary/10 text-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
