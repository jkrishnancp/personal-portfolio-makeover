import { securityPhilosophy } from "@/data/portfolioData";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";


export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <span className="section-label mb-3 sm:mb-4 block">Philosophy</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">Security Philosophy</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {securityPhilosophy.map((item) => {
            return (
              <Dialog key={item.number}>
                <DialogTrigger asChild>
                  <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-primary/8 to-accent/5 border border-border hover:border-primary/40 backdrop-blur-sm hover:scale-105 transition-all cursor-pointer group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-sm sm:text-base font-bold text-accent-foreground">{item.number}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground leading-tight">{item.principle}</h3>
                    <p className="text-muted-foreground mt-1.5 text-xs sm:text-sm line-clamp-2">{item.detail}</p>
                    <div className="mt-2 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-lg font-bold text-accent-foreground">{item.number}</span>
                      </div>
                      <DialogTitle className="text-xl">{item.principle}</DialogTitle>
                    </div>
                    <DialogDescription className="text-base font-medium text-foreground/80">
                      {item.detail}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 text-muted-foreground leading-relaxed">
                    {item.extended}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
