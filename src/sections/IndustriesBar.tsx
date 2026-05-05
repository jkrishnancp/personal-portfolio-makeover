import { industriesServed } from "@/data/portfolioData";

export function IndustriesBar() {
  return (
    <section className="py-4 px-4 bg-card border-b border-border overflow-x-auto">
      <div className="max-w-6xl mx-auto flex justify-start md:justify-center items-center gap-4 md:gap-8 text-muted-foreground font-medium text-xs md:text-sm whitespace-nowrap min-w-max">
        {industriesServed.map((industry, index) => (
          <span key={index} className="flex items-center gap-3 md:gap-4 shrink-0">
            {industry}
            {index < industriesServed.length - 1 && <span className="text-accent">◆</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
