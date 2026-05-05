import { profileData } from "@/data/portfolioData";
import { Mail, Linkedin, Github, MapPin, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileAvatar from "@/assets/profile-avatar.jpg";

const socialLinks = [
  { label: "LinkedIn", href: profileData.linkedin, Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/jkrishnancp", Icon: Github },
  { label: "Email", href: `mailto:${profileData.email}`, Icon: Mail },
  { label: "Blog", href: "https://blog.jayakrishnancp.com", Icon: BookOpen },
];

const coreSkills = [
  "Detection Engineering", "XDR / MDR", "Zero Trust",
  "Cloud Security", "GRC & Compliance", "SOAR Automation",
  "M&A Security", "MITRE ATT&CK",
];

function StatBlock({ area, value, label }: { area?: string; value: string; label: string }) {
  return (
    <div
      style={area ? { gridArea: area } : undefined}
      className="bg-card border border-border rounded-2xl p-5 flex flex-col justify-between min-h-[110px] hover:border-primary/30 transition-colors"
    >
      <span className="text-3xl xl:text-4xl font-display font-bold text-primary">{value}</span>
      <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{label}</span>
    </div>
  );
}

export function BentoHeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto w-full">

        {/* ── Desktop bento grid ── */}
        <div
          className="hidden lg:grid gap-3"
          style={{
            gridTemplateAreas: `
              "id id st1 st2"
              "id id st3 st4"
              "sc loc rol bl"
              "sc ski ski bl"
            `,
            gridTemplateColumns: "2fr 1fr 1fr 1.4fr",
            gridTemplateRows: "1fr 1fr auto auto",
          }}
        >
          {/* Identity — large orange block */}
          <div
            style={{ gridArea: "id" }}
            className="bg-primary rounded-3xl p-8 text-primary-foreground flex flex-col justify-between min-h-[280px] relative overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10 flex items-center gap-3">
              <Avatar className="h-11 w-11 border-2 border-white/25 flex-shrink-0">
                <AvatarImage src={profileAvatar} alt="Jay Prakash" />
                <AvatarFallback className="bg-white/20 text-white text-sm font-bold">JP</AvatarFallback>
              </Avatar>
              <span className="text-[10px] font-mono text-white/55 uppercase tracking-[0.16em] leading-tight">
                Senior Director<br />Security Operations
              </span>
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl xl:text-5xl font-display font-bold leading-tight mt-4">
                Jayakrishnan<br />C Prakash
              </h1>
              <p className="text-white/70 text-sm mt-3 mb-5 max-w-xs leading-relaxed">
                I build security programs that improve detection, reduce risk, and create operational clarity at scale.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full h-8 px-4 text-xs" asChild>
                  <a href={`mailto:${profileData.email}`}>
                    <Mail className="w-3.5 h-3.5 mr-1.5" />Get in touch
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats — four small tiles */}
          <StatBlock area="st1" value="20+" label="Years Experience" />
          <StatBlock area="st2" value="256" label="Blueprints" />
          <StatBlock area="st3" value="15+" label="Team Led" />
          <StatBlock area="st4" value="20+" label="Countries" />

          {/* Social — dark vertical block */}
          <div style={{ gridArea: "sc" }} className="bg-foreground rounded-3xl p-5 flex flex-col">
            <span className="text-[10px] font-mono text-background/35 uppercase tracking-widest mb-4">Find me</span>
            <div className="flex flex-col gap-4 flex-1 justify-center">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-background/45 hover:text-background transition-colors"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-mono">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location — small */}
          <div style={{ gridArea: "loc" }} className="bg-card border border-border rounded-3xl p-5 flex flex-col justify-between">
            <MapPin className="w-4 h-4 text-accent" />
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">San Francisco</p>
              <p className="text-xs text-muted-foreground">Bay Area, CA</p>
            </div>
          </div>

          {/* Current role — teal tinted */}
          <div style={{ gridArea: "rol" }} className="bg-accent/10 border border-accent/20 rounded-3xl p-5 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Currently</span>
            <div>
              <p className="text-sm font-bold text-foreground leading-tight">UltraViolet Cyber</p>
              <p className="text-xs text-muted-foreground mt-1">Dedicated SecOps leader · Reporting to CIO</p>
            </div>
          </div>

          {/* Featured blueprint — tall right block */}
          <div style={{ gridArea: "bl" }} className="bg-card border border-border rounded-3xl p-5 flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Featured</span>
              <h3 className="text-sm font-bold mt-2 text-foreground leading-snug">
                SIEM Migration<br />Splunk → Elastic
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                End-to-end migration. 85%+ ATT&CK coverage. Reduced ingestion cost across a 7,000-asset environment.
              </p>
            </div>
            <a
              href="/security-blueprints.html"
              className="text-xs text-primary font-mono hover:underline mt-4 inline-block"
            >
              View all 256 blueprints →
            </a>
          </div>

          {/* Skills — wide bottom block */}
          <div style={{ gridArea: "ski" }} className="bg-card border border-border rounded-3xl p-5">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">Core expertise</span>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="lg:hidden space-y-3">
          <div className="bg-primary rounded-3xl p-6 text-primary-foreground relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10 flex items-center gap-3 mb-4">
              <Avatar className="h-10 w-10 border-2 border-white/25">
                <AvatarImage src={profileAvatar} alt="Jay Prakash" />
                <AvatarFallback className="bg-white/20 text-white font-bold">JP</AvatarFallback>
              </Avatar>
              <span className="text-[10px] font-mono text-white/55 uppercase tracking-widest">Sr. Director, Security Ops</span>
            </div>
            <h1 className="text-3xl font-display font-bold leading-tight relative z-10">Jayakrishnan C Prakash</h1>
            <p className="text-white/70 text-sm mt-3 mb-5 leading-relaxed relative z-10">
              I build security programs that improve detection, reduce risk, and create operational clarity at scale.
            </p>
            <div className="flex gap-2 flex-wrap relative z-10">
              <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-full h-8 px-4 text-xs" asChild>
                <a href={`mailto:${profileData.email}`}><Mail className="w-3.5 h-3.5 mr-1.5" />Get in touch</a>
              </Button>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent rounded-full h-8 px-4 text-xs" asChild>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-3.5 h-3.5 mr-1.5" />LinkedIn</a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <StatBlock value="20+" label="Years Experience" />
            <StatBlock value="256" label="Blueprints" />
            <StatBlock value="15+" label="Team Led" />
            <StatBlock value="20+" label="Countries" />
          </div>
          <div className="bg-card border border-border rounded-3xl p-5">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">Core expertise</span>
            <div className="flex flex-wrap gap-2">
              {coreSkills.slice(0, 6).map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-medium">{skill}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
