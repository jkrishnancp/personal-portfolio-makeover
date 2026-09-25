import { useState, useEffect, useRef } from "react";
import { profileData, securityPhilosophy, impactHighlights, experienceData, skillsData, projectCategories, industriesServed, activeBuilding, executiveReporting, openToRoles } from "@/data/portfolioData";
import { blueprintsData, type BlueprintEntry } from "@/data/blueprintsData";
import { Mail, Linkedin, Github, BookOpen, ArrowUpRight, Sun, Moon, Shield, Cloud, Search, Radar, Activity, KeyRound, FileCheck, Workflow, Bug, Network, Lock, Server, Eye, Boxes, TrendingDown, Presentation, Rocket, MapPin, Users } from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

function StatFigure({ target, suffix, label, delay, onClick }: {
  target: number; suffix: string; label: string; delay: number; onClick?: () => void;
}) {
  const { count, ref } = useCountUp(target, delay);
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLButtonElement>}
      onClick={onClick}
      className={`group text-left ${onClick ? "cursor-pointer" : "cursor-default"}`}
    >
      <span className="block text-5xl lg:text-6xl font-display font-medium text-foreground tabular-nums leading-none">
        {count}<span className="text-primary">{suffix}</span>
      </span>
      <span className={`mt-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground ${onClick ? "group-hover:text-primary transition-colors" : ""}`}>
        {label}
      </span>
    </Tag>
  );
}

function SectionHeader({ index, title, action }: { index: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-border pb-4 mb-10">
      <div className="flex items-baseline gap-4">
        <span className="text-[11px] font-mono text-primary tracking-[0.2em]">{index}</span>
        <h2 className="text-2xl lg:text-3xl font-display font-medium text-foreground">{title}</h2>
      </div>
      {action}
    </div>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: profileData.linkedin,               Icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/jkrishnancp",   Icon: Github   },
  { label: "Email",    href: `mailto:${profileData.email}`,      Icon: Mail     },
  { label: "Blog",     href: "https://blog.jayakrishnancp.com",  Icon: BookOpen },
];

const moreLinks = [
  { label: "Blog",                 href: "https://blog.jayakrishnancp.com" },
  { label: "n8n Projects",         href: "https://n8n.jayakrishnancp.com" },
  { label: "Security Blueprints",  href: "/security-blueprints.html" },
  { label: "Cyber Periodic Table", href: "/cybersecurity-periodic-table.html" },
];

const keyOutcomes = [
  { metric: "MTTD",     to: "4h",   note: "Detection speed, from 24h"        },
  { metric: "MTTR",     to: "3h",   note: "Response time, from 8h"           },
  { metric: "Vuln",     to: "−40%", note: "Backlog reduction"                },
  { metric: "Cloud IR", to: "−42%", note: "Incidents in first year"          },
];

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "SIEM & Detection": Radar,
  "SOC Operations": Activity,
  "Zero Trust & IAM": KeyRound,
  "MDR/XDR & Endpoint": Shield,
  "Cloud Security": Cloud,
  "GRC & Audit": FileCheck,
  "SOAR & Automation": Workflow,
  "Vulnerability Management": Bug,
  "Network Security": Network,
  "Data Protection": Lock,
  "Forensics & IR": Search,
  "IT Security & Hardening": Server,
};

const techCategoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "SIEM/Detection": Radar,
  "Endpoint/XDR": Shield,
  "Cloud Security": Cloud,
  "Identity/Access": KeyRound,
  "GRC/Compliance": FileCheck,
  "Automation/SOAR": Workflow,
  "Vulnerability Management": Bug,
  "Network Security": Network,
  "Threat Intelligence": Eye,
  "Application Security": Boxes,
};

const targetRoles = openToRoles.interests.map((entry) => {
  const [role, ...rest] = entry.split(" – ");
  return { role, detail: rest.join(" – ") };
});

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

  const featured: BlueprintEntry = blueprintsData[4];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Top navigation ── */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-sm font-display font-semibold text-foreground truncate">Jayakrishnan C Prakash</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground truncate">Senior Director · Security Operations</p>
          </div>
          <nav className="flex items-center gap-1 sm:gap-2">
            {[
              { label: "Work",       target: () => setShowBlueprints(true) },
              { label: "Experience", target: () => setShowExperience(true) },
            ].map(({ label, target }) => (
              <button
                key={label}
                onClick={target}
                className="hidden sm:inline-flex px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href={`mailto:${profileData.email}`}
              className="hidden sm:inline-flex px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="ml-1 w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/60 hover:text-primary transition-colors"
            >
              {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* ── HERO ── */}
        <section className="reveal grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center pt-16 lg:pt-24 pb-16">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary mb-6">
              Available for Director &amp; Head of Security roles
            </p>
            <h1 className="font-display font-medium leading-[1.02] text-5xl sm:text-6xl lg:text-7xl text-foreground text-balance">
              I build security operations that <span className="italic text-primary">actually catch things.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              I&apos;m Jayakrishnan — I stand up SOC programs from scratch and scale them into structured,
              repeatable systems. Twenty years, three countries, two acquisitions.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" /> Get in touch
              </a>
              <button
                onClick={() => setShowAbout(true)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                Read my story <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src={profilePhoto}
                alt="Jayakrishnan C Prakash — Senior Director, Security Operations"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:block bg-background border border-border rounded-xl px-4 py-3 shadow-sm">
              <p className="text-2xl font-display font-semibold text-foreground leading-none">85%<span className="text-primary">+</span></p>
              <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground mt-1">MITRE ATT&amp;CK coverage</p>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="reveal grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 py-14 border-y border-border">
          <StatFigure target={20}  suffix="+" label="Years experience"    delay={80}  onClick={() => setShowExperience(true)} />
          <StatFigure target={256} suffix=""  label="Blueprints shipped"  delay={120} onClick={() => setShowBlueprints(true)} />
          <StatFigure target={145} suffix=""  label="Largest team scaled" delay={160} />
          <StatFigure target={industriesServed.length} suffix="+" label="Sectors served" delay={200} onClick={() => setShowSectors(true)} />
        </section>

        {/* ── ABOUT ── */}
        <section className="reveal py-20">
          <SectionHeader
            index="01"
            title="About"
            action={
              <button onClick={() => setShowAbout(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                Full story <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            }
          />
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              From zero to enterprise scale
            </p>
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl font-display leading-snug text-foreground text-balance">
                I built a SOC from scratch at a 450-branch bank. I co-founded a security consultancy in Abu Dhabi
                that got acquired. I grew a SecOps team from 5 to 145 at a company that also got acquired.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Today I lead security operations for a 7,000-asset hybrid enterprise — full ownership across SOC
                program management, detection &amp; response, incident response, vulnerability management, cloud
                security, GRC, and third-party risk. Reporting to the CIO and Head of Security, I turned an ad hoc
                operation into a structured, measurable system processing 800M–1B+ events daily.
              </p>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE (timeline) ── */}
        <section className="reveal py-20">
          <SectionHeader
            index="02"
            title="Experience"
            action={
              <button onClick={() => setShowExperience(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                All roles <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            }
          />
          <ol className="relative ml-1.5 border-l border-border space-y-4">
            {experienceData.slice(0, 5).map((job) => (
              <li key={job.id} className="relative pl-6 sm:pl-8">
                <span className="absolute -left-[6.5px] top-6 w-3 h-3 rounded-full border-2 border-primary bg-background" aria-hidden />
                <button
                  onClick={() => setShowExperience(true)}
                  className="group block w-full text-left rounded-2xl border border-border p-5 sm:p-6 hover:border-primary/50 hover:bg-card transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-primary/10 text-primary">{job.period}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg lg:text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{job.company}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted text-[11px] text-muted-foreground max-w-full">
                      <Users className="w-3 h-3 flex-shrink-0" /> <span className="truncate">{job.scope.teamSize}</span>
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ol>
        </section>

        {/* ── SELECTED WORK ── */}
        <section className="reveal py-20">
          <SectionHeader
            index="03"
            title="Selected work"
            action={
              <button onClick={() => setShowBlueprints(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                256 blueprints <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            }
          />

          {/* Featured project */}
          <a
            href={`/blueprints/${featured.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/50 transition-colors mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full font-mono">{featured.category}</span>
              <span className="text-[10px] font-mono text-muted-foreground">{featured.duration}</span>
              <span className="text-[10px] font-mono text-muted-foreground ml-auto">Featured</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors max-w-2xl">
              {featured.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground mb-1">Objective</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{featured.problem}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-primary mb-1">Impact</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{featured.result}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-6">
              {featured.technologies.slice(0, 5).map((t, i) => (
                <span key={i} className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded font-mono">{t}</span>
              ))}
            </div>
          </a>

          {/* Domain grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projectCategories.slice(0, 6).map((cat) => (
              <button
                key={cat.category}
                onClick={() => setShowBlueprints(true)}
                className="group text-left rounded-xl border border-border p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors">{cat.category}</span>
                  <span className="text-2xl font-display font-medium text-primary">{cat.count}+</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{cat.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* ── OUTCOMES ── */}
        <section className="reveal py-20">
          <SectionHeader
            index="04"
            title="Key outcomes"
            action={
              <button onClick={() => setShowImpact(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                All outcomes <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            }
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyOutcomes.map((o) => (
              <div key={o.metric} className="border-l border-primary/40 pl-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">{o.metric}</p>
                <p className="text-4xl lg:text-5xl font-display font-medium text-foreground mt-2 leading-none">{o.to}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{o.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS + PHILOSOPHY ── */}
        <section className="reveal py-20 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              index="05"
              title="Capabilities"
              action={
                <button onClick={() => setShowSkills(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                  All skills <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              }
            />
            <div className="flex flex-wrap gap-2">
              {skillsData.coreCompetencies.slice(0, 10).map((s) => (
                <button
                  key={s}
                  onClick={() => setShowSkills(true)}
                  className="px-3 py-1.5 text-sm rounded-full border border-border text-foreground hover:border-primary/60 hover:text-primary transition-colors"
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setShowSkills(true)}
                className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-mono"
              >
                +{skillsData.coreCompetencies.length - 10} more
              </button>
            </div>
          </div>

          <div>
            <SectionHeader
              index="06"
              title="Philosophy"
              action={
                <button onClick={() => setShowPhilosophy(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                  8 principles <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              }
            />
            <blockquote className="text-2xl lg:text-3xl font-display italic leading-snug text-foreground text-balance">
              &ldquo;Precision over volume — a tuned detection is worth a thousand alerts.&rdquo;
            </blockquote>
            <button onClick={() => setShowPhilosophy(true)} className="mt-6 text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
              Read all principles <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* ── INNOVATION + BOARD ── */}
        <section className="reveal py-20 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              index="07"
              title="Building now"
              action={
                <button onClick={() => setShowInnovation(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                  {activeBuilding.length} initiatives <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              }
            />
            <ul className="space-y-4">
              {activeBuilding.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <button onClick={() => setShowInnovation(true)} className="group w-full text-left flex items-start gap-3">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.status === "Production" ? "bg-primary" : item.status === "Expanding" ? "bg-accent" : "bg-muted-foreground"
                    }`} />
                    <span>
                      <span className="block text-base font-display font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">{item.status}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              index="08"
              title="Board influence"
              action={
                <button onClick={() => setShowBoardComms(true)} className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1">
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              }
            />
            <div className="flex flex-wrap gap-2">
              {executiveReporting.audiences.map((a) => (
                <span key={a} className="px-3 py-1.5 text-sm rounded-full border border-border text-foreground">{a}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              I make security understandable to the business — translating detection coverage, risk, and M&amp;A
              posture into decisions leadership can act on.
            </p>
          </div>
        </section>

        {/* ── OPEN TO OPPORTUNITIES / CONTACT ── */}
        <section className="reveal py-20">
          <div className="rounded-2xl border border-border p-8 lg:p-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">Open to opportunities · Immediately available</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-medium text-foreground max-w-2xl text-balance">
              If your SOC makes more noise than signal, that&apos;s my favourite conversation.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground mb-2">Target roles</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Director, Information Security", "Director, Security Operations", "Head of Security"].map((r) => (
                    <span key={r} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">{r}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground mb-2">Locations</p>
                <p className="text-sm text-foreground leading-relaxed">
                  On-site: Washington DC · SF Bay Area · Chicago · Michigan<br />
                  Remote: San Jose, CA · Hybrid nationwide
                </p>
              </div>
            </div>
            <a
              href={`mailto:${profileData.email}`}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" /> {profileData.email}
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border mt-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-lg font-display font-semibold text-foreground">Jayakrishnan C Prakash</p>
            <div className="mt-3 flex flex-wrap gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" /> {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {moreLinks.map(({ label, href }) => (
              <a key={label} href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>

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
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold font-display text-foreground leading-snug">{item.name}</h3>
                  <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full flex-shrink-0 ${
                    item.status === 'Production'         ? 'bg-accent/15 text-accent'     :
                    item.status === 'Expanding'          ? 'bg-primary/15 text-primary'   :
                                                           'bg-muted text-muted-foreground'
                  }`}>{item.status}</span>
                </div>
                {item.highlight && (
                  <p className="text-[11px] font-mono text-primary">{item.highlight}</p>
                )}
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded font-mono">{tag}</span>
                    ))}
                  </div>
                )}
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

          <div className="mt-3">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">Core Competencies</p>
            <div className="flex flex-wrap gap-2">
              {skillsData.coreCompetencies.map((s) => (
                <span key={s} className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-full font-medium">{s}</span>
              ))}
            </div>
          </div>

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
    </div>
  );
}
