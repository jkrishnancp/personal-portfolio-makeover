import { useState } from "react";
import { projectCategories } from "@/data/portfolioData";
import { blueprintsData, type BlueprintEntry } from "@/data/blueprintsData";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

type ProjectCategory = typeof projectCategories[0];

export function BlueprintsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [selectedBlueprint, setSelectedBlueprint] = useState<BlueprintEntry | null>(null);

  const featured = blueprintsData.slice(0, 6);

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="section-label">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 font-display">
            {blueprintsData.length} Blueprints. 12 Domains.
          </h2>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl">
            Real implementation blueprints across every security domain — each one a deliverable, not a deck.
          </p>
        </div>

        {/* Category grid — click opens popup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-14">
          {projectCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className="card-executive p-4 text-left group hover:border-primary/40 hover:scale-[1.02] transition-all"
            >
              <span className="text-2xl font-display font-bold text-primary">{cat.count}+</span>
              <h3 className="text-sm font-bold font-display leading-tight text-foreground mt-1">{cat.category}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">{cat.description}</p>
              <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity tracking-wide">
                Details →
              </span>
            </button>
          ))}
        </div>

        {/* Featured blueprints header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold font-display">Featured Work</h3>
          <a href="/security-blueprints.html" className="text-sm text-primary font-mono hover:underline">
            View all {blueprintsData.length} →
          </a>
        </div>

        {/* Featured blueprint cards — click opens popup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {featured.map((bp) => (
            <button
              key={bp.id}
              onClick={() => setSelectedBlueprint(bp)}
              className="card-executive p-5 text-left group hover:border-primary/40 hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full font-mono uppercase tracking-wide">{bp.category}</span>
                <span className="text-xs text-muted-foreground font-mono">{bp.duration}</span>
              </div>
              <h3 className="text-sm font-bold font-display text-foreground leading-snug">{bp.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{bp.problem}</p>
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                {bp.technologies.slice(0, 3).map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded font-mono">{t}</span>
                ))}
              </div>
              <span className="text-[10px] text-primary font-mono mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity tracking-wide">
                Open blueprint →
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/security-blueprints.html"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Browse all {blueprintsData.length} blueprints
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── Category detail popup ── */}
      <Dialog open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {selectedCategory && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4">
                  <DialogTitle className="font-display text-xl leading-snug">{selectedCategory.category}</DialogTitle>
                  <span className="text-3xl font-display font-bold text-primary flex-shrink-0">{selectedCategory.count}+</span>
                </div>
                <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                  {selectedCategory.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-5 mt-2">
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2.5">Highlights</p>
                  <ul className="space-y-2">
                    {selectedCategory.highlights.map((h, i) => (
                      <li key={i} className="text-sm flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-0.5 font-bold">·</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2.5">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.technologies.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Blueprint detail popup ── */}
      <Dialog open={!!selectedBlueprint} onOpenChange={(open) => !open && setSelectedBlueprint(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {selectedBlueprint && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full font-mono uppercase tracking-wide">{selectedBlueprint.category}</span>
                  <span className="text-xs text-muted-foreground font-mono">{selectedBlueprint.duration}</span>
                </div>
                <DialogTitle className="font-display text-xl leading-snug">{selectedBlueprint.title}</DialogTitle>
                <DialogDescription asChild>
                  <p className="text-sm text-muted-foreground">
                    Role: <span className="font-medium text-foreground">{selectedBlueprint.role}</span>
                  </p>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-5 mt-2">
                <div>
                  <p className="text-[10px] font-mono text-red-500 dark:text-red-400 uppercase tracking-widest mb-1.5">Objective</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedBlueprint.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-green-600 dark:text-green-400 uppercase tracking-widest mb-1.5">Impact</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedBlueprint.result}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2.5">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedBlueprint.technologies.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs bg-muted text-muted-foreground rounded font-mono">{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={`/blueprints/${selectedBlueprint.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-mono hover:underline"
                >
                  View full blueprint <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
