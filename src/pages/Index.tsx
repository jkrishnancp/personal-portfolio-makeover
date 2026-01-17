import { profileData, summaryData, careerTimeline, securityPhilosophy, impactHighlights, experienceData, skillsData, activeBuilding, projectsData, ninetyDayPlan, educationData, certificationsData } from "@/data/portfolioData";
import { Mail, Linkedin, Download, ChevronRight, Shield, Zap, Eye, Bot, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Social Links */}
            <div className="flex md:flex-col gap-4">
              <span className="text-muted-foreground text-sm hidden md:block">Follow</span>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href={`mailto:${profileData.email}`} className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-primary">{profileData.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">{profileData.subtitle}</p>
              <p className="text-xl md:text-2xl font-medium max-w-2xl">{profileData.tagline}</p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild>
                  <a href={`mailto:${profileData.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 pt-6">
                {profileData.keywords.map((keyword, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="hidden lg:block w-64 h-72 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <Shield className="w-24 h-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Keywords Bar */}
      <section className="py-8 px-6 bg-muted/50 border-y border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-12 text-muted-foreground">
          <span>Agency</span>
          <span className="text-primary">✦</span>
          <span>Enterprise</span>
          <span className="text-primary">✦</span>
          <span>Retail</span>
          <span className="text-primary">✦</span>
          <span>Banking</span>
          <span className="text-primary">✦</span>
          <span>Global</span>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Summary</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Who's behind all this work?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{summaryData.text}</p>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Career Timeline</h2>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {careerTimeline.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-center">
                  <span className="font-semibold text-foreground">{item.stage}</span>
                  <p className="text-sm text-muted-foreground">{item.focus}</p>
                </div>
                {index < careerTimeline.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-primary hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Philosophy */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">My Security Philosophy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPhilosophy.map((item) => (
              <div key={item.number} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <span className="text-4xl font-bold text-primary/20">{item.number}</span>
                <h3 className="text-lg font-semibold mt-2">{item.principle}</h3>
                <p className="text-muted-foreground mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {impactHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Professional Journey</h2>
          <div className="space-y-8">
            {experienceData.map((job) => (
              <div key={job.id} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-muted-foreground text-sm">{job.location} • {job.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-muted-foreground mb-2">Scope</h4>
                    <ul className="space-y-1">
                      <li>Team: {job.scope.teamSize}</li>
                      <li>Regions: {job.scope.regions}</li>
                      <li>Platforms: {job.scope.platforms}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground mb-2">Responsibilities</h4>
                    <ul className="space-y-1">
                      {job.responsibilities.map((r, i) => (
                        <li key={i}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground mb-2">Outcomes</h4>
                    <ul className="space-y-1">
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
      <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Top Strengths
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.topStrengths.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Currently Leveling Up
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.levelingUp.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Building */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Building</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">What I'm Actively Building</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activeBuilding.map((project, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Active development' ? 'bg-blue-500/20 text-blue-400' :
                    project.status === 'Expanding' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-yellow-500/20 text-yellow-400'
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

      {/* Projects */}
      <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Featured Work</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div key={project.id} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <h3 className="text-lg font-bold mb-4">{project.title}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-destructive font-medium">Problem:</span>
                    <p className="text-muted-foreground mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Solution:</span>
                    <p className="text-muted-foreground mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-green-500 font-medium">Result:</span>
                    <p className="text-muted-foreground mt-1">{project.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Plan */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Hiring?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">My 90-Day Operating Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[ninetyDayPlan.days1to30, ninetyDayPlan.days31to60, ninetyDayPlan.days61to90].map((phase, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary" />
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
      <section id="education" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Academic Background</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {educationData.map((edu, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="text-primary mt-1">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mt-2">{edu.year} • {edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Licenses & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Cybersecurity
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.cybersecurity.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">{cert.name}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.cloud.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">{cert.name}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Leadership
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.leadership.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">{cert.name}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                Data & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {certificationsData.dataAI.map((cert, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">{cert.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-20 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-primary-foreground/80 mb-8">Open to new opportunities and collaborations.</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href={`mailto:${profileData.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-12">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
