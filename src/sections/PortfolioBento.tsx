import { useState, useEffect, useRef } from "react";
import { profileData, securityPhilosophy, impactHighlights, experienceData, skillsData, projectCategories, industriesServed, activeBuilding, executiveReporting } from "@/data/portfolioData";
import { blueprintsData, type BlueprintEntry } from "@/data/blueprintsData";
import { Mail, Linkedin, Github, BookOpen, ArrowDownRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import profileAvatar from "@/assets/profile-avatar.jpg";
import profilePhoto from "@/assets/profile-photo.png";

function useCountUp(target: number, delay = 0) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      const duration = 1200;
      const start = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(target * ease));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, target, delay]);

  return { count, ref };
}

function AnimatedStatTile({ area, target, suffix, label, delay, onClick }: {
  area: string; target: number; suffix: string; label: string; delay: number; onClick?: () => void;
}) {
  const { count, ref } = useCountUp(target, delay);
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLButtonElement>}
      style={{ gridArea: area, animationDelay: `${delay}ms` }}
      onClick={onClick}
      className={`bento-block stat-glow bg-card border border-border rounded-2xl p-4 lg:p-5 flex flex-col justify-center gap-2 relative transition-all duration-300 text-left w-full ${onClick ? "hover:border-primary/50 hover:scale-[1.02] cursor-pointer group" : "cursor-default"}`}
    >
      <span className="text-4xl lg:text-5xl font-display font-bold text-primary tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{label}</span>
      {onClick && (
        <span className="absolute bottom-3 right-3 text-[10px] text-primary font-mono opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
      )}
    </Tag>
  );
}

const topSkills = [
  "Detection Engineering", "XDR / MDR", "Zero Trust",
  "Cloud Security", "GRC & Compliance", "SOAR Automation",
  "M&A Security", "MITRE ATT&CK",
];

const socialLinks = [
  { label: "LinkedIn", href: profileData.linkedin,              Icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/jkrishnancp", Icon: Github   },
  { label: "Email",    href: `mailto:${profileData.email}`,    Icon: Mail     },
  { label: "Blog",     href: "https://blog.jayakrishnancp.com",     Icon: BookOpen },
];

const keyOutcomes = [
  { metric: "MTTD",     from: "24h",  to: "4h",   note: "Detection speed"      },
  { metric: "MTTR",     from: "8h",   to: "3h",   note: "Response time"        },
  { metric: "Vuln",     from: "100%", to: "−40%", note: "Backlog reduction"     },
  { metric: "Cloud IR", from: "",     to: "−42%", note: "Incidents first year"  },
];

export function PortfolioBento() {
  const [showExperience, setShowExperience] = useState(false);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [showImpact,     setShowImpact]     = useState(false);
  const [showSkills,      setShowSkills]      = useState(false);
  const [showBlueprints,  setShowBlueprints]  = useState(false);
  const [showSectors,     setShowSectors]     = useState(false);
  const [showInnovation,  setShowInnovation]  = useState(false);
  const [showBoardComms,  setShowBoardComms]  = useState(false);
  const [showAbout,       setShowAbout]       = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const featured: BlueprintEntry = blueprintsData[0];

  return (
    <section className="px-3 sm:px-4 md:px-8 lg:px-12 py-3 lg:py-5 relative">

      {/* Dark / Light mode toggle — fixed top-right */}
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-primary/40 transition-all duration-200"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        {resolvedTheme === "dark"
          ? <Sun className="w-4 h-4" />
          : <Moon className="w-4 h-4" />
        }
      </button>

      {/* Background decorative orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-15%] left-[-8%] w-[520px] h-[520px] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, hsl(16 87% 40% / 0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, hsl(175 78% 26% / 0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-[55%] left-[45%] w-[350px] h-[350px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(16 87% 40% / 0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="portfolio-bento-grid max-w-7xl mx-auto">

        {/* ── IDENTITY — orange block, photo fades in from the right corner ── */}
        <div
          style={{ gridArea: "id", animationDelay: "0ms" }}
          className="bento-block bg-primary rounded-2xl text-white relative overflow-hidden"
        >
          {/* Photo pinned to right, masked to fade into the orange */}
          <img
            src={profilePhoto}
            alt="Jayakrishnan C Prakash — Senior Director, Security Operations"
            loading="eager"
            className="absolute top-0 right-0 h-full w-[52%] object-cover object-top pointer-events-none select-none"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 30%, black 60%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 30%, black 60%)",
            }}
          />

          {/* Animated dot texture */}
          <div className="dots-animated absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
          />
          {/* Shimmer sweep */}
          <div className="shimmer-sweep" />

          {/* Content — left side */}
          <div className="relative z-10 p-5 sm:p-6 lg:p-8 flex flex-col justify-between h-full">
            <span className="text-[10px] font-mono text-white/55 uppercase tracking-[0.16em]">
              Senior Director · Security Operations
            </span>
            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold leading-tight">
                Jayakrishnan<br />C Prakash
              </h1>
              <p className="text-white/65 text-[11px] font-mono mt-2 leading-relaxed">
                I build SOC programs from scratch and scale them.<br />20 years · 3 countries · 2 acquisitions.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                {["Detection Engineering","Security Operations","XDR / SIEM","Incident Response","Zero Trust"].map((s) => (
                  <span key={s} className="px-2 py-0.5 text-[10px] bg-white/10 text-white/80 border border-white/20 rounded-full font-mono">{s}</span>
                ))}
              </div>
              <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full h-8 px-4 text-xs" asChild>
                <a href={`mailto:${profileData.email}`}>
                  <Mail className="w-3.5 h-3.5 mr-1.5" />Get in touch
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ── STATS — count-up animation ── */}
        <AnimatedStatTile area="st1" target={20}  suffix="+" label="Years Experience"    delay={80}  onClick={() => setShowExperience(true)} />
        <AnimatedStatTile area="st2" target={250} suffix="+" label="Projects Delivered" delay={120} onClick={() => setShowBlueprints(true)} />
        <AnimatedStatTile area="st3" target={400} suffix="+" label="Team Size"          delay={160} />
        <AnimatedStatTile area="st4" target={industriesServed.length} suffix="+" label="Sectors"  delay={200} onClick={() => setShowSectors(true)} />

        {/* ── ABOUT — clickable → full story popup ── */}
        <button
          style={{ gridArea: "ab", animationDelay: "100ms" }}
          onClick={() => setShowAbout(true)}
          aria-label="Read full about"
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 flex flex-col justify-between text-left group hover:border-primary/40 hover:scale-[1.01] transition-all"
        >
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">About</span>
          <p className="font-display italic text-foreground/85 leading-relaxed text-sm lg:text-[15px] mt-2">
            I built a SOC from scratch at a 450-branch bank. I co-founded a security consultancy in Abu Dhabi that got acquired. I grew a SecOps team from 5 to 145 at a company that also got acquired.
          </p>
          <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            Read more →
          </span>
        </button>

        {/* ── CONNECT ── */}
        <div
          style={{ gridArea: "sc", animationDelay: "115ms" }}
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 flex flex-col gap-3"
        >
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Connect</span>
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all group"
              >
                <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-[11px] font-mono text-foreground group-hover:text-primary transition-colors truncate">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── OPEN TO OPPORTUNITIES ── */}
        <div
          style={{ gridArea: "ot", animationDelay: "340ms" }}
          className="bento-block animate-border-pulse bg-card border border-accent/20 rounded-2xl p-4 lg:p-5 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Open to Opportunities</span>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {/* Target roles */}
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">Target Roles</p>
              <div className="flex flex-wrap gap-1.5">
                {["Director, Information Security", "Director, Security Operations", "Head of Security"].map((r) => (
                  <span key={r} className="px-2.5 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-medium">{r}</span>
                ))}
              </div>
            </div>

            {/* Work style */}
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">Work Style</p>
              <div className="flex flex-wrap gap-1.5">
                {["On-site", "Hybrid", "Remote"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[11px] bg-accent/10 text-accent border border-accent/20 rounded-full font-mono">{t}</span>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="p-2.5 bg-muted/50 rounded-xl">
                <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mb-1">On-site</p>
                <p className="text-xs text-foreground leading-snug">Washington DC · SF Bay Area · Chicago · Michigan</p>
              </div>
              <div className="p-2.5 bg-muted/50 rounded-xl">
                <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Remote</p>
                <p className="text-xs text-foreground">San Jose, CA</p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="pt-3 mt-auto border-t border-border">
            <p className="text-xs font-display font-semibold text-foreground">Immediately available · Full-time</p>
            <p className="text-[10px] text-muted-foreground font-mono mt-0.5">Actively applying</p>
          </div>
        </div>

        {/* ── CURRENT ROLE — mini card grid, clickable ── */}
        <button
          style={{ gridArea: "rol", animationDelay: "180ms" }}
          onClick={() => setShowExperience(true)}
          aria-label="View full experience"
          className="bento-block bg-accent/10 border border-accent/20 rounded-2xl p-4 lg:p-5 text-left flex flex-col justify-between group hover:border-accent/50 hover:scale-[1.01] transition-all"
        >
          <div className="w-full">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Current Role · UltraViolet Cyber</span>
            <div className="grid grid-cols-2 gap-2 mt-2.5">
              {[
                { label: "Since",      value: "Sep 2019", note: "6+ years"            },
                { label: "Reports to", value: "CIO",      note: "& Head of Security"  },
                { label: "Assets",     value: "7,000+",   note: "Hybrid environment"  },
                { label: "Team",       value: "15+",      note: "Internal + vendors"  },
              ].map(({ label, value, note }) => (
                <div key={label} className="bg-accent/10 border border-accent/15 rounded-lg p-2">
                  <span className="text-[9px] font-mono text-accent/70 uppercase tracking-widest">{label}</span>
                  <p className="text-sm font-bold text-foreground font-display">{value}</p>
                  <p className="text-[9px] text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[10px] text-accent font-mono mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            View full experience →
          </span>
        </button>

        {/* ── SKILLS — mini card grid, clickable ── */}
        <button
          style={{ gridArea: "ski", animationDelay: "220ms" }}
          onClick={() => setShowSkills(true)}
          aria-label="View all competencies and skills"
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 text-left group hover:border-primary/40 hover:scale-[1.01] transition-all w-full"
        >
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">Core competencies</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {skillsData.coreCompetencies.slice(0, 8).map((skill) => (
              <div key={skill} className="bg-primary/5 border border-primary/10 rounded-lg px-2.5 py-2 flex items-center justify-center text-center">
                <span className="text-xs font-display font-semibold text-primary leading-snug">{skill}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground font-mono mt-2">+{skillsData.coreCompetencies.length - 8} more inside</p>
          <span className="text-[10px] text-primary font-mono mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">View all competencies →</span>
        </button>

        {/* ── PHILOSOPHY — single quote, click for all 8 ── */}
        <button
          style={{ gridArea: "ph", animationDelay: "260ms" }}
          onClick={() => setShowPhilosophy(true)}
          aria-label="View all 8 security principles"
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 text-left group hover:border-primary/40 hover:scale-[1.01] transition-all"
        >
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">Philosophy</span>
          <p className="text-sm lg:text-base font-display font-semibold text-foreground leading-snug italic">
            "Precision over volume — a tuned detection is worth a thousand alerts."
          </p>
          <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            View all 8 principles →
          </span>
        </button>

        {/* ── KEY OUTCOMES — visual metrics, clickable ── */}
        <button
          style={{ gridArea: "im", animationDelay: "300ms" }}
          onClick={() => setShowImpact(true)}
          aria-label="View all key outcomes and metrics"
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 text-left group hover:border-primary/40 hover:scale-[1.01] transition-all flex flex-col justify-between"
        >
          <div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">Key Outcomes</span>
            <div className="grid grid-cols-2 gap-2">
              {keyOutcomes.map((o) => (
                <div key={o.metric} className="bg-primary/5 border border-primary/10 rounded-lg p-2 flex flex-col justify-between min-h-[64px]">
                  <div className="flex items-center gap-1">
                    <ArrowDownRight className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase leading-none">{o.metric}</span>
                  </div>
                  <p className="text-sm font-bold text-primary font-display leading-none mt-1">{o.to}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{o.note}</p>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            View all outcomes →
          </span>
        </button>

        {/* ── BLUEPRINTS — domain overview, clickable ── */}
        <button
          style={{ gridArea: "bl", animationDelay: "180ms" }}
          onClick={() => setShowBlueprints(true)}
          aria-label="View all 256 blueprints across 12 domains"
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 flex flex-col justify-between group hover:border-primary/40 hover:scale-[1.01] transition-all text-left w-full"
        >
          <div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">256 Blueprints · 12 Domains</span>
            <div className="grid grid-cols-2 gap-1.5 mt-3">
              {projectCategories.slice(0, 6).map((cat) => (
                <div key={cat.category} className="bg-muted/60 border border-border rounded-xl p-2.5 flex flex-col gap-1">
                  <span className="text-lg font-display font-bold text-primary leading-none">{cat.count}+</span>
                  <span className="text-xs font-display font-semibold text-foreground leading-tight">{cat.category}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground font-mono mt-2">+6 more domains inside</p>
          </div>
          <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            View all domains →
          </span>
        </button>

        {/* ── FEATURED PROJECT ── */}
        <a
          href={`/blueprints/${blueprintsData[4].file}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridArea: "fp", animationDelay: "200ms" }}
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 flex flex-col justify-between group hover:border-primary/40 hover:scale-[1.01] transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Featured Project</span>
              <span className="text-[10px] font-mono text-muted-foreground">{blueprintsData[4].duration}</span>
            </div>
            <span className="inline-block px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full font-mono mb-2">{blueprintsData[4].category}</span>
            <h3 className="text-sm font-bold text-foreground leading-snug font-display">{blueprintsData[4].title}</h3>
            <p className="text-[10px] text-muted-foreground font-mono mt-1">Role: {blueprintsData[4].role}</p>

            <div className="mt-3 space-y-2">
              <div>
                <p className="text-[9px] font-mono text-red-500 uppercase tracking-widest mb-0.5">Objective</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{blueprintsData[4].problem}</p>
              </div>
              <div>
                <p className="text-[9px] font-mono text-green-600 uppercase tracking-widest mb-0.5">Impact</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{blueprintsData[4].result}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {blueprintsData[4].technologies.slice(0, 3).map((t, i) => (
                <span key={i} className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded font-mono">{t}</span>
              ))}
            </div>
          </div>

          <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            Open full blueprint →
          </span>
        </a>

        {/* ── INNOVATION / ACTIVE INITIATIVES ── */}
        <button
          style={{ gridArea: "inn", animationDelay: "360ms" }}
          onClick={() => setShowInnovation(true)}
          aria-label="View active innovation initiatives"
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 text-left group hover:border-primary/40 hover:scale-[1.01] transition-all w-full flex flex-col justify-between"
        >
          <div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">Innovation · Active Initiatives</span>
            <div className="grid grid-cols-2 gap-2">
              {activeBuilding.slice(0, 4).map((item) => (
                <div key={item.name} className="bg-primary/5 border border-primary/10 rounded-lg p-2.5">
                  <span className={`inline-block px-1.5 py-0.5 text-[9px] font-mono rounded-full mb-1.5 ${
                    item.status === 'Production'         ? 'bg-accent/15 text-accent'     :
                    item.status === 'Expanding'          ? 'bg-primary/15 text-primary'   :
                                                           'bg-muted text-muted-foreground'
                  }`}>{item.status}</span>
                  <p className="text-xs font-display font-bold text-foreground leading-snug">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            View all {activeBuilding.length} initiatives →
          </span>
        </button>

        {/* ── BOARD COMMUNICATION & INFLUENCE ── */}
        <button
          style={{ gridArea: "brd", animationDelay: "380ms" }}
          onClick={() => setShowBoardComms(true)}
          aria-label="View board communication and executive reporting"
          className="bento-block bg-card border border-border rounded-2xl p-4 lg:p-5 text-left group hover:border-primary/40 hover:scale-[1.01] transition-all w-full flex flex-col justify-between"
        >
          <div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">Board Communication & Influence</span>
            <div className="flex flex-col gap-2">
              {executiveReporting.audiences.map((audience) => (
                <div key={audience} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-xs font-display font-semibold text-foreground">{audience}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[10px] text-primary font-mono mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
            View details →
          </span>
        </button>

      </div>

      {/* ── EXPERIENCE POPUP — horizontal carousel ── */}
      <Dialog open={showExperience} onOpenChange={setShowExperience}>
        <DialogContent className="max-w-5xl max-h-[85vh] flex flex-col overflow-hidden p-0">
          <div className="px-6 pt-6 pb-3 border-b border-border flex-shrink-0">
            <DialogTitle className="font-display text-2xl">Experience</DialogTitle>
            <p className="text-xs text-muted-foreground font-mono mt-1">20+ years · scroll to explore →</p>
          </div>
          <div className="overflow-x-auto flex-1 px-6 py-5" style={{ scrollbarWidth: "none" }}>
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {experienceData.map((job) => (
                <div key={job.id}
                  className="w-[290px] flex-shrink-0 bg-card border border-border rounded-2xl p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div>
                    <span className="inline-block px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full font-mono mb-2">{job.period}</span>
                    <h3 className="text-sm font-bold font-display leading-snug text-foreground">{job.title}</h3>
                    <p className="text-xs text-primary font-semibold mt-1">{job.company}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{job.location}</p>
                    <div className="mt-3 p-2.5 bg-muted/50 rounded-lg text-[10px] text-muted-foreground space-y-0.5">
                      <p><span className="font-semibold text-foreground">Team:</span> {job.scope.teamSize}</p>
                      <p><span className="font-semibold text-foreground">Scope:</span> {job.scope.regions}</p>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {job.outcomes.slice(0, 3).map((o, i) => (
                        <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                          <span className="text-primary mt-0.5 flex-shrink-0">·</span>{o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-border">
                    {job.stack.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-1.5 py-0.5 text-[10px] bg-muted text-muted-foreground rounded font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── PHILOSOPHY POPUP ── */}
      <Dialog open={showPhilosophy} onOpenChange={setShowPhilosophy}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Security Philosophy</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {securityPhilosophy.map((item) => (
              <div key={item.number} className="p-4 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center font-mono flex-shrink-0">
                    {item.number}
                  </span>
                  <h3 className="text-sm font-display font-bold text-foreground">{item.principle}</h3>
                </div>
                <p className="text-xs text-primary/80 font-medium mb-1.5">{item.detail}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.extended}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* ── BOTTOM LINKS BAR ── */}
      <div className="max-w-7xl mx-auto mt-3">
        <div className="bg-card border border-border rounded-2xl px-5 py-3 flex items-center justify-between flex-wrap gap-3">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">More from Jay</span>
          <div className="flex items-center gap-1 flex-wrap">
            {[
              { label: "Blog",                  href: "https://blog.jayakrishnancp.com",              Icon: BookOpen  },
              { label: "n8n Projects",          href: "https://n8n.jayakrishnancp.com",           Icon: ArrowDownRight },
              { label: "Security Blueprints",   href: "/security-blueprints.html",               Icon: BookOpen  },
              { label: "Cyber Periodic Table",  href: "/cybersecurity-periodic-table.html",      Icon: BookOpen  },
            ].map(({ label, href, Icon }) => (
              <a key={label} href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Icon className="w-3 h-3" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── INNOVATION POPUP ── */}
      <Dialog open={showInnovation} onOpenChange={setShowInnovation}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Active Initiatives</DialogTitle>
            <p className="text-xs text-muted-foreground font-mono mt-1">What I'm currently building</p>
          </DialogHeader>
          <div className="space-y-4 mt-3">
            {activeBuilding.map((item) => (
              <div key={item.name} className="p-4 bg-card border border-border rounded-2xl flex flex-col gap-3">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold font-display text-foreground leading-snug">{item.name}</h3>
                  <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full flex-shrink-0 ${
                    item.status === 'Production'         ? 'bg-accent/15 text-accent'     :
                    item.status === 'Expanding'          ? 'bg-primary/15 text-primary'   :
                                                           'bg-muted text-muted-foreground'
                  }`}>{item.status}</span>
                </div>
                {/* Highlight */}
                {item.highlight && (
                  <p className="text-[11px] font-mono text-primary">{item.highlight}</p>
                )}
                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded font-mono">{tag}</span>
                    ))}
                  </div>
                )}
                {/* View link */}
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-mono hover:underline self-start">
                    View documentation →
                  </a>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* ── BOARD COMMS POPUP ── */}
      <Dialog open={showBoardComms} onOpenChange={setShowBoardComms}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Board Communication & Influence</DialogTitle>
          </DialogHeader>
          <div className="space-y-5 mt-3">
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2.5">Audiences</p>
              <div className="grid grid-cols-2 gap-2">
                {executiveReporting.audiences.map((a) => (
                  <div key={a} className="p-3 bg-card border border-border rounded-xl flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs font-display font-semibold text-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2.5">Deliverables</p>
              <div className="space-y-2">
                {executiveReporting.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 flex-shrink-0 font-bold">·</span>{d}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2.5">KPIs & Dashboards</p>
              <div className="flex flex-wrap gap-2">
                {executiveReporting.kpisDashboards.map((k) => (
                  <span key={k} className="px-2.5 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-mono">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── ABOUT POPUP ── */}
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">About</DialogTitle>
          </DialogHeader>
          <div className="space-y-5 mt-3">
            {[
              "I built a SOC from scratch at a 450-branch bank. I co-founded a security consultancy in Abu Dhabi that got acquired. I grew a SecOps team from 5 to 145 at a company that also got acquired. Today I run security operations for a 7,000-asset enterprise.",
              "Today, I lead security operations for a global consumer and enterprise networking company, with full ownership across SOC program management, threat detection and response, incident response, vulnerability management, cloud security, GRC, and third-party risk in a 7,000-asset hybrid environment. I report directly to the CIO and Head of Security and have built the program from an ad hoc operation into a structured, repeatable system.",
              "The outcomes are measurable. Detection coverage exceeds 85% of MITRE ATT&CK techniques, MTTD has been reduced from over 24 hours to under 4, and the environment processes 800M to 1B+ events daily through SIEM and SOAR pipelines I helped architect.",
              "What I am known for is building from scratch, scaling teams, and making security understandable to the business. I have led security due diligence across multiple acquisitions, run a TPRM program covering 500+ vendors annually, implemented Zero Trust across identity, network, and cloud, and built an enterprise AI security governance framework covering 20+ active tools.",
              "Across my career I have led security program development from zero to enterprise scale, owned security operations center leadership for 24×7 environments, and completed M&A security due diligence across 4 to 6 acquisitions.",
              "I care about detection that actually catches things, response that is fast and repeatable, and security programs that support the business rather than just satisfy audit requirements.",
              "If your SOC is generating more noise than signal, your MTTD is measured in days, or you are heading into an acquisition and your security posture is not boardroom ready — those are my favourite conversations. Open to Director and Senior Director Security Operations roles. DM me.",
            ].map((para, i) => (
              <p key={i} className="font-display italic text-foreground/85 leading-relaxed text-sm lg:text-base">
                {para}
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* ── SECTORS POPUP ── */}
      <Dialog open={showSectors} onOpenChange={setShowSectors}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Sectors Served</DialogTitle>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Security programs delivered across {industriesServed.length} industries
            </p>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {industriesServed.map((sector) => (
              <div key={sector.name} className="p-4 bg-card border border-border rounded-2xl flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="text-2xl flex-shrink-0">{sector.icon}</span>
                <div>
                  <p className="text-sm font-bold font-display text-foreground">{sector.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{sector.note}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* ── BLUEPRINTS POPUP ── */}
      <Dialog open={showBlueprints} onOpenChange={setShowBlueprints}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">256 Blueprints · 12 Domains</DialogTitle>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Real implementation deliverables — not decks.
            </p>
          </DialogHeader>

          {/* Domain breakdown grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {projectCategories.map((cat) => (
              <div key={cat.category} className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-xs font-bold font-display text-foreground leading-snug">{cat.category}</h3>
                  <span className="text-lg font-display font-bold text-primary flex-shrink-0">{cat.count}+</span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">{cat.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {cat.technologies.slice(0, 2).map((t) => (
                    <span key={t} className="px-1.5 py-0.5 text-[9px] bg-muted text-muted-foreground rounded font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured blueprints */}
          <div className="mt-6">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">Featured Work</p>
            <div className="space-y-2">
              {blueprintsData.slice(0, 6).map((bp) => (
                <a
                  key={bp.id}
                  href={`/blueprints/${bp.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="px-1.5 py-0.5 text-[9px] bg-primary/10 text-primary rounded-full font-mono">{bp.category}</span>
                      <span className="text-[9px] text-muted-foreground font-mono">{bp.duration}</span>
                    </div>
                    <p className="text-xs font-display font-bold text-foreground truncate">{bp.title}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{bp.result}</p>
                  </div>
                  <span className="text-[10px] text-primary font-mono ml-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">Open →</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-5 text-center">
            <a
              href="/security-blueprints.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Browse all 256 blueprints
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── SKILLS POPUP ── */}
      <Dialog open={showSkills} onOpenChange={setShowSkills}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Skills & Competencies</DialogTitle>
          </DialogHeader>

          {/* Core Competencies */}
          <div className="mt-3">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">Core Competencies</p>
            <div className="flex flex-wrap gap-2">
              {skillsData.coreCompetencies.map((s) => (
                <span key={s} className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-full font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* Strategy / Analytics / Financial */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            {[
              { label: "Strategy & Operations", items: skillsData.strategyOperations },
              { label: "Analytics & Reporting", items: skillsData.analyticsReporting },
              { label: "Financial & Risk",       items: skillsData.financialRisk      },
            ].map(({ label, items }) => (
              <div key={label} className="p-4 bg-card border border-border rounded-2xl">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="px-2 py-1 text-xs bg-accent/10 text-accent border border-accent/20 rounded-full font-medium">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">Technical Platforms & Tools</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.technicalSkills.map((cat) => (
                <div key={cat.category} className="p-3 bg-card border border-border rounded-xl">
                  <p className="text-xs font-bold font-display text-foreground mb-2">{cat.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded font-mono">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── KEY OUTCOMES POPUP ── */}
      <Dialog open={showImpact} onOpenChange={setShowImpact}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Key Outcomes</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {impactHighlights.map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center font-mono flex-shrink-0">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
