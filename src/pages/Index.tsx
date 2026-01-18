import { profileData, summaryData, statsData, careerTimeline, securityPhilosophy, impactHighlights, experienceData, skillsData, activeBuilding, featuredProjects, projectCategories, ninetyDayPlan, educationData, certificationsData, industriesServed } from "@/data/portfolioData";
import { Mail, Linkedin, ChevronRight, Shield, Zap, Award, Briefcase, GraduationCap, Target, TrendingUp, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 gradient-hero text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Main Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
                Senior Cybersecurity Executive
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                {profileData.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl">{profileData.tagline}</p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href={`mailto:${profileData.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 pt-6 justify-center lg:justify-start">
                {profileData.keywords.map((keyword, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-white/10 text-white/90 rounded border border-white/20">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="w-full lg:w-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{statsData.yearsExperience}</div>
                  <div className="text-sm text-white/70 mt-1">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{statsData.projectsDelivered}</div>
                  <div className="text-sm text-white/70 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{statsData.teamSize}</div>
                  <div className="text-sm text-white/70 mt-1">Team Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{statsData.countries}</div>
                  <div className="text-sm text-white/70 mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Bar */}
      <section className="py-6 px-6 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-12 text-muted-foreground font-medium text-sm">
          {industriesServed.map((industry, index) => (
            <span key={index} className="flex items-center gap-6">
              {industry}
              {index < industriesServed.length - 1 && <span className="text-accent hidden md:inline">◆</span>}
            </span>
          ))}
        </div>
      </section>

      {/* Summary Section - Gradient Background */}
      <section id="summary" className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium uppercase tracking-widest mb-4">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">Executive Summary</h2>
          <div className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed">{summaryData.text}</p>
          </div>
        </div>
      </section>

      {/* Career Timeline - Visual Journey */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Career Progression</h2>
            <p className="text-white/60 mt-4">20+ years of growth in cybersecurity</p>
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Central connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-accent to-emerald-500 transform -translate-y-1/2 rounded-full"></div>
            
            <div className="flex justify-between items-center relative">
              {careerTimeline.map((item, index) => {
                const colors = [
                  { bg: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/50' },
                  { bg: 'from-cyan-500 to-cyan-600', glow: 'shadow-cyan-500/50' },
                  { bg: 'from-teal-500 to-teal-600', glow: 'shadow-teal-500/50' },
                  { bg: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/50' },
                  { bg: 'from-emerald-500 to-emerald-600', glow: 'shadow-emerald-500/50' },
                ];
                const color = colors[index % colors.length];
                const isTop = index % 2 === 0;
                
                return (
                  <div key={index} className="flex flex-col items-center group relative">
                    {/* Content card - alternating top/bottom */}
                    <div className={`absolute ${isTop ? 'bottom-20' : 'top-20'} w-48 transform transition-all duration-300 group-hover:scale-105`}>
                      <div className={`p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl ${color.glow}`}>
                        <h3 className="font-bold text-white text-sm leading-tight">{item.stage}</h3>
                        <p className="text-white/70 text-xs mt-2">{item.focus}</p>
                      </div>
                      {/* Connector line */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b ${isTop ? 'top-full from-white/40 to-transparent' : 'bottom-full from-transparent to-white/40'}`}></div>
                    </div>
                    
                    {/* Center node */}
                    <div className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${color.bg} flex items-center justify-center shadow-lg ${color.glow} transform transition-all duration-300 group-hover:scale-110`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile/Tablet Timeline - Vertical */}
          <div className="lg:hidden relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-accent to-emerald-500 rounded-full"></div>
            
            <div className="space-y-8">
              {careerTimeline.map((item, index) => {
                const colors = [
                  { bg: 'from-blue-500 to-blue-600', border: 'border-blue-500/30' },
                  { bg: 'from-cyan-500 to-cyan-600', border: 'border-cyan-500/30' },
                  { bg: 'from-teal-500 to-teal-600', border: 'border-teal-500/30' },
                  { bg: 'from-amber-500 to-amber-600', border: 'border-amber-500/30' },
                  { bg: 'from-emerald-500 to-emerald-600', border: 'border-emerald-500/30' },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <div key={index} className="flex items-center gap-6 group">
                    {/* Node */}
                    <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${color.bg} flex items-center justify-center shadow-lg flex-shrink-0 transform transition-all duration-300 group-hover:scale-110`}>
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 p-5 rounded-xl bg-white/10 backdrop-blur-sm border ${color.border} transform transition-all duration-300 group-hover:bg-white/15`}>
                      <h3 className="font-bold text-white">{item.stage}</h3>
                      <p className="text-white/70 text-sm mt-1">{item.focus}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Security Philosophy - Colorful Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-widest mb-4">Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">Security Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div key={item.number} className={`p-6 rounded-xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm hover:scale-105 transition-transform`}>
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-accent-foreground">{item.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.principle}</h3>
                  <p className="text-muted-foreground mt-2">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Impact Highlights</h2>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">Action → Outcome → Business Value</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {impactHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories - NEW */}
      <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">250+ Projects Across 12 Domains</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Comprehensive security programs delivered across enterprise, BFSI, retail, healthcare, manufacturing, and public sector organizations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((cat, index) => (
              <div key={index} className="card-executive p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-display">{cat.category}</h3>
                  <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full font-semibold">{cat.count}+</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Highlights</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Featured Projects</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card-executive p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded font-medium">{project.category}</span>
                  <span className="text-sm text-muted-foreground">{project.duration}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 font-display">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-1"><span className="font-medium text-foreground">Role:</span> {project.role}</p>
                <div className="space-y-3 text-sm mt-4">
                  <div>
                    <span className="font-semibold text-red-600 dark:text-red-400">Problem:</span>
                    <p className="text-muted-foreground mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-accent">Solution:</span>
                    <p className="text-muted-foreground mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-600 dark:text-green-400">Result:</span>
                    <p className="text-muted-foreground mt-1">{project.result}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-primary/5 text-primary border border-primary/20 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Professional History</h2>
          </div>
          <div className="space-y-6">
            {experienceData.map((job) => (
              <div key={job.id} className="card-executive p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold font-display">{job.title}</h3>
                    <p className="text-accent font-semibold mt-1">{job.company}</p>
                    <p className="text-muted-foreground text-sm mt-1">{job.location} • {job.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-primary/5 text-primary border border-primary/20 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-accent" />
                      Scope
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Team: {job.scope.teamSize}</li>
                      <li>Regions: {job.scope.regions}</li>
                      <li>Platforms: {job.scope.platforms}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" />
                      Responsibilities
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {job.responsibilities.map((r, i) => (
                        <li key={i}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      Outcomes
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {job.outcomes.map((o, i) => (
                        <li key={i}>• {o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 font-display">
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
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 font-display">
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
                <h4 className="font-semibold mb-4">{category.category}</h4>
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
                  <h3 className="text-lg font-bold font-display">{project.name}</h3>
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
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Education</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Academic Background</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {educationData.map((edu, index) => (
              <div key={index} className="card-executive p-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold font-display">{edu.degree}</h3>
                <p className="text-accent font-medium mt-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mt-2">{edu.year} • {edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-display">Licenses & Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-executive p-6">
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-4 font-display">
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
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-4 font-display">
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
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-4 font-display">
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
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-4 font-display">
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
      <footer className="py-20 px-6 md:px-12 lg:px-24 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Let's Connect</h2>
          <p className="text-white/70 mb-8 text-lg">Open to new opportunities and strategic collaborations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg" asChild>
              <a href={`mailto:${profileData.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10" asChild>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-white/50 text-sm mt-16">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
