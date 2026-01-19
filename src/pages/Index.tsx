import { profileData, summaryData, statsData, securityPhilosophy, impactHighlights, experienceData, skillsData, activeBuilding, featuredProjects, projectCategories, ninetyDayPlan, educationData, certificationsData, industriesServed, executiveReporting, costOptimization, thoughtLeadership, openToRoles } from "@/data/portfolioData";
import { Mail, Linkedin, ChevronRight, Shield, Zap, Award, Briefcase, GraduationCap, Target, TrendingUp, CheckCircle2, ChevronLeft, Users, DollarSign, Mic, Sparkles, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { useRef, useState } from "react";
import executiveSummaryBg from "@/assets/executive-summary-bg.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Index = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [portfolioCanScrollLeft, setPortfolioCanScrollLeft] = useState(false);
  const [portfolioCanScrollRight, setPortfolioCanScrollRight] = useState(true);
  const [featuredCanScrollLeft, setFeaturedCanScrollLeft] = useState(false);
  const [featuredCanScrollRight, setFeaturedCanScrollRight] = useState(true);
  const [experienceCanScrollLeft, setExperienceCanScrollLeft] = useState(false);
  const [experienceCanScrollRight, setExperienceCanScrollRight] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState<typeof experienceData[0] | null>(null);

  const checkScroll = (ref: React.RefObject<HTMLDivElement>, setLeft: (v: boolean) => void, setRight: (v: boolean) => void) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setLeft(scrollLeft > 0);
      setRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right", setLeft: (v: boolean) => void, setRight: (v: boolean) => void) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === "left" ? -700 : 700, behavior: "smooth" });
      setTimeout(() => checkScroll(ref, setLeft, setRight), 300);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-24 gradient-hero text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm">
                Senior Cybersecurity Executive
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                {profileData.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 font-medium italic tracking-wide">{profileData.tagline}</p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start pt-2 sm:pt-4">
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base sm:h-10" asChild>
                  <a href={`mailto:${profileData.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent text-sm sm:text-base sm:h-10" asChild>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6 justify-center lg:justify-start">
                {profileData.keywords.map((keyword, index) => (
                  <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-white/10 text-white/90 rounded border border-white/20">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="w-full lg:w-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{statsData.yearsExperience}</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{statsData.projectsDelivered}</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{statsData.teamSize}</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">Team Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{statsData.countries}</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Bar */}
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

      {/* Executive Summary - Eye-Catching Section */}
      <section id="summary" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${executiveSummaryBg})` }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
        
        {/* Animated decorative elements - hidden on mobile */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-accent/30 rounded-full animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-accent/20 rounded-full animate-pulse delay-150 hidden sm:block"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping hidden sm:block"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Content - Main Summary */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest">About Me</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight">
                Executive <span className="text-accent">Summary</span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                {summaryData.text}
              </p>
              
              {/* Quick highlights */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                {["Systems Thinker", "Operational Leader", "Risk Focused"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Stats Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center transform hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">{statsData.yearsExperience}</div>
                  <div className="text-white/70 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center transform hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">{statsData.projectsDelivered}</div>
                  <div className="text-white/70 text-xs sm:text-sm">Projects</div>
                </div>
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center transform hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">{statsData.countries}</div>
                  <div className="text-white/70 text-xs sm:text-sm">Countries</div>
                </div>
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center transform hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">{statsData.teamSize}</div>
                  <div className="text-white/70 text-xs sm:text-sm">Team Size</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Security Philosophy - Colorful Grid */}
      <section id="philosophy" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4">Philosophy</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">Security Philosophy</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {securityPhilosophy.map((item) => {
              const colors = [
                'from-blue-500/20 to-blue-600/10 border-blue-500/30',
                'from-amber-500/20 to-amber-600/10 border-amber-500/30',
                'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
                'from-purple-500/20 to-purple-600/10 border-purple-500/30',
                'from-rose-500/20 to-rose-600/10 border-rose-500/30',
                'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
              ];
              const colorClass = colors[(item.number - 1) % colors.length];
              return (
                <div key={item.number} className={`p-4 sm:p-6 rounded-xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm hover:scale-105 transition-transform`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-lg sm:text-xl font-bold text-accent-foreground">{item.number}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{item.principle}</h3>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section id="impact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest">Impact</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 font-display">Impact Highlights</h2>
            <p className="text-primary-foreground/70 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">Action → Outcome → Business Value</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {impactHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <p className="text-primary-foreground/90 leading-relaxed text-sm sm:text-base">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Horizontal Carousel with 2 rows */}
      <section id="portfolio" className="py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 mb-6 sm:mb-8">
          <span className="section-label text-xs sm:text-sm">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 font-display">250+ Projects Across 12 Domains</h2>
          <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">Comprehensive security programs delivered across enterprise, BFSI, retail, healthcare, manufacturing, and public sector.</p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll(portfolioRef, "left", setPortfolioCanScrollLeft, setPortfolioCanScrollRight)} disabled={!portfolioCanScrollLeft}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div ref={portfolioRef} onScroll={() => checkScroll(portfolioRef, setPortfolioCanScrollLeft, setPortfolioCanScrollRight)} className="overflow-x-auto px-4 sm:px-6 md:px-16 lg:px-20 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4" style={{ width: "max-content" }}>
              {projectCategories.map((cat, index) => (
                <div key={index} className="w-[280px] sm:w-[320px] card-executive p-4 sm:p-5 bg-card">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-sm sm:text-base font-bold font-display">{cat.category}</h3>
                    <span className="px-2 py-0.5 text-xs sm:text-sm bg-accent/10 text-accent rounded-full font-semibold">{cat.count}+</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{cat.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-1.5 sm:px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll(portfolioRef, "right", setPortfolioCanScrollLeft, setPortfolioCanScrollRight)} disabled={!portfolioCanScrollRight}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Featured Projects - Horizontal Carousel */}
      <section id="featured-projects" className="py-20 bg-muted/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <span className="section-label">Highlights</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">
            Explore detailed security implementation blueprints on the{" "}
            <a href="/security-blueprints.html" className="text-accent hover:underline font-medium">
              Security Blueprints
            </a>{" "}
            page.
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll(featuredRef, "left", setFeaturedCanScrollLeft, setFeaturedCanScrollRight)} disabled={!featuredCanScrollLeft}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div ref={featuredRef} onScroll={() => checkScroll(featuredRef, setFeaturedCanScrollLeft, setFeaturedCanScrollRight)} className="overflow-x-auto px-6 md:px-16 lg:px-20 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {featuredProjects.map((project) => (
                <div key={project.id} className="w-[380px] card-executive p-6 bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded font-medium">{project.category}</span>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-display">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1"><span className="font-medium text-foreground">Role:</span> {project.role}</p>
                  <div className="space-y-3 text-sm mt-4">
                    <div>
                      <span className="font-semibold text-red-600 dark:text-red-400">Problem:</span>
                      <p className="text-muted-foreground mt-1 line-clamp-2">{project.problem}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-accent">Solution:</span>
                      <p className="text-muted-foreground mt-1 line-clamp-2">{project.solution}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-600 dark:text-green-400">Result:</span>
                      <p className="text-muted-foreground mt-1 line-clamp-2">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-primary/5 text-primary border border-primary/20 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll(featuredRef, "right", setFeaturedCanScrollLeft, setFeaturedCanScrollRight)} disabled={!featuredCanScrollRight}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Experience - Horizontal Carousel */}
      <section id="experience" className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <span className="section-label">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Professional History</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Over 20 years of progressive experience building and leading security programs across enterprise, financial services, and technology sectors. From hands-on technical roles to executive leadership, each position has shaped my approach to security operations and risk management.
          </p>
          <p className="text-muted-foreground/70 mt-3 text-sm flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Click on any role to explore detailed responsibilities and key achievements
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll(experienceRef, "left", setExperienceCanScrollLeft, setExperienceCanScrollRight)} disabled={!experienceCanScrollLeft}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div ref={experienceRef} onScroll={() => checkScroll(experienceRef, setExperienceCanScrollLeft, setExperienceCanScrollRight)} className="overflow-x-auto px-6 md:px-16 lg:px-20 pb-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {experienceData.map((job, index) => {
                const colors = [
                  'border-l-blue-500',
                  'border-l-cyan-500',
                  'border-l-teal-500',
                  'border-l-purple-500',
                  'border-l-amber-500',
                  'border-l-emerald-500',
                ];
                const borderColor = colors[index % colors.length];

                return (
                  <div
                    key={job.id}
                    className={`w-[340px] flex-shrink-0 card-executive p-6 border-l-4 ${borderColor} hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]`}
                    onClick={() => setSelectedExperience(job)}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <span className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded mb-2">{job.period}</span>
                      <h3 className="text-lg font-bold font-display leading-tight">{job.title}</h3>
                      <p className="text-accent font-semibold text-sm mt-1">{job.company}</p>
                      <p className="text-muted-foreground text-xs mt-1">{job.location}</p>
                    </div>

                    {/* Scope */}
                    <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold text-foreground">Scope</span>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>Team: {job.scope.teamSize}</p>
                        <p>Regions: {job.scope.regions}</p>
                      </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold text-foreground">Key Outcomes</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {job.outcomes.slice(0, 2).map((o, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-border">
                      {job.stack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs bg-primary/5 text-primary border border-primary/20 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hidden md:flex" onClick={() => scroll(experienceRef, "right", setExperienceCanScrollLeft, setExperienceCanScrollRight)} disabled={!experienceCanScrollRight}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Core Competencies</h2>
          </div>
          
          {/* Top Strengths & Leveling Up */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="card-executive p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 font-display">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                Top Strengths
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.topStrengths.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-executive p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 font-display">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                Currently Developing
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.levelingUp.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-accent text-accent-foreground rounded font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.technicalSkills.map((category, index) => (
              <div key={index} className="card-executive p-6">
                <h4 className="font-bold mb-4 font-display">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Building */}
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
                  <span className={`px-3 py-1 text-xs font-medium rounded ${
                    project.status === 'Production' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    project.status === 'Active development' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                    project.status === 'Expanding' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
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

      {/* Executive Reporting & Board Communication */}
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

      {/* Cost Optimization */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Value Delivered</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Cost Optimization</h2>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              <DollarSign className="w-5 h-5" />
              <span className="text-2xl font-bold">{costOptimization.totalSavings}</span>
              <span className="text-sm">Total Annual Savings</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {costOptimization.highlights.map((item, index) => (
              <div key={index} className="card-executive p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold font-display">{item.action}</h3>
                  <span className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-semibold">{item.savings}</span>
                </div>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Plan */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Hiring?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">90-Day Operating Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[ninetyDayPlan.days1to30, ninetyDayPlan.days31to60, ninetyDayPlan.days61to90].map((phase, index) => (
              <div key={index} className="card-executive p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 font-display">{phase.title}</h3>
                <ul className="space-y-3 mb-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-accent">
                    <Target className="w-4 h-4" />
                    <span className="text-sm font-medium">Outcome:</span>
                  </div>
                  <p className="text-sm text-foreground mt-1">{phase.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
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

      {/* Open To Roles */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">{openToRoles.headline}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-executive p-6">
              <h3 className="text-xl font-bold mb-4 font-display flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                Role Interests
              </h3>
              <ul className="space-y-3">
                {openToRoles.interests.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-executive p-6">
              <h3 className="text-xl font-bold mb-4 font-display flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Preferences
              </h3>
              <ul className="space-y-3">
                {openToRoles.preferences.map((item, i) => (
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

      {/* Education & Certifications Combined */}
      <section id="education" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Education & Certifications</h2>
          </div>
          
          {/* Education Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {educationData.map((edu, index) => (
              <div key={index} className="card-executive p-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-display">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mt-2">{edu.year} • {edu.focus}</p>
              </div>
            ))}
          </div>
          
          {/* Certifications Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-executive p-6">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 font-display">
                <Shield className="w-5 h-5 text-accent" />
                Cybersecurity
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.cybersecurity.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded">{cert.name}</span>
                ))}
              </div>
            </div>
            <div className="card-executive p-6">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 font-display">
                <Zap className="w-5 h-5 text-accent" />
                Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.cloud.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded">{cert.name}</span>
                ))}
              </div>
            </div>
            <div className="card-executive p-6">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 font-display">
                <Award className="w-5 h-5 text-accent" />
                Leadership
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.leadership.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded">{cert.name}</span>
                ))}
              </div>
            </div>
            <div className="card-executive p-6">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 font-display">
                <Target className="w-5 h-5 text-accent" />
                Data & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.dataAI.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded">{cert.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Let's Connect</h2>
          <p className="text-white/70 mb-6">Open to new opportunities and strategic collaborations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href={`mailto:${profileData.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10" asChild>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-white/50 text-sm mt-8">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Experience Details Dialog */}
      <Dialog open={!!selectedExperience} onOpenChange={(open) => !open && setSelectedExperience(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold font-display text-foreground">
                  {selectedExperience.title}
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="space-y-3 pt-2">
                    <p className="text-accent font-semibold text-base">
                      {selectedExperience.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {selectedExperience.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {selectedExperience.location}
                      </span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Scope */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Scope</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Team:</span> {selectedExperience.scope.teamSize}</p>
                    <p><span className="font-medium text-foreground">Regions:</span> {selectedExperience.scope.regions}</p>
                    <p><span className="font-medium text-foreground">Platforms:</span> {selectedExperience.scope.platforms}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Role Overview</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedExperience.description}
                  </div>
                </div>

                {/* Key Outcomes */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Key Outcomes</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {selectedExperience.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Technologies & Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
