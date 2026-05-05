import { blueprintsData } from "@/data/blueprintsData";
import { CarouselSection } from "@/components/CarouselSection";

export function FeaturedProjectsSection() {
  return (
    <CarouselSection
      id="featured-projects"
      label="Highlights"
      title="Featured Projects"
      subtitle={`Showing 30 of ${blueprintsData.length} implementation blueprints. Each card links to the full blueprint.`}
      bgClassName="bg-muted/50"
      cardWidth={380}
      headerRight={
        <a href="/security-blueprints.html" className="px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors whitespace-nowrap">
          View All {blueprintsData.length} →
        </a>
      }
    >
      {blueprintsData.slice(0, 30).map((project) => (
        <a key={project.id} href={`/blueprints/${project.file}`} target="_blank" rel="noopener noreferrer" className="w-[380px] flex-shrink-0 card-executive p-6 bg-card hover:scale-[1.02] transition-all block no-underline">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded font-medium">{project.category}</span>
            <span className="text-sm text-muted-foreground">{project.duration}</span>
          </div>
          <h3 className="text-lg font-bold mb-2 font-display text-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-1"><span className="font-medium text-foreground">Role:</span> {project.role}</p>
          <div className="space-y-3 text-sm mt-4">
            <div>
              <span className="font-semibold text-red-600 dark:text-red-400">Objective:</span>
              <p className="text-muted-foreground mt-1 line-clamp-2">{project.problem}</p>
            </div>
            <div>
              <span className="font-semibold text-green-600 dark:text-green-400">Impact:</span>
              <p className="text-muted-foreground mt-1 line-clamp-2">{project.result}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-2 py-1 text-xs bg-primary/5 text-primary border border-primary/20 rounded">{tech}</span>
            ))}
          </div>
        </a>
      ))}
    </CarouselSection>
  );
}
