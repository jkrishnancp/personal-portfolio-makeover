export const profileData = {
  name: "Jayakrishnan C Prakash",
  title: "Cybersecurity Leader",
  subtitle: "Security Operations | Cloud | Automation",
  tagline: "I build and lead security programs that improve detection, reduce risk, and create operational clarity at scale.",
  email: "jay@jayakrishnancp.com",
  linkedin: "https://www.linkedin.com/in/jaykrishnancp/",
  resumeUrl: "#",
  keywords: ["SOC Operations", "Detection Engineering", "Cloud Security", "Vulnerability Management", "GRC Programs", "Automation"]
};

export const summaryData = {
  text: `I am a cybersecurity leader with deep experience across security operations, cloud security, vulnerability management, and governance programs. I specialize in building practical, measurable security capabilities that scale across complex enterprise environments. My work focuses on transforming security from reactive operations into reliable systems: improving detection quality, reducing exposure, automating visibility, and aligning security priorities with business risk. Today, I continue to invest in detection engineering, automation, and AI-driven security workflows while leading programs that strengthen operational maturity and executive-level decision making.`
};

export const statsData = {
  yearsExperience: "20+",
  projectsDelivered: "250+",
  countries: "20+",
  teamSize: "400+"
};

export const careerTimeline = [
  { stage: "System Administrator", focus: "Technical foundations", years: "2 yrs", period: "2005-2007", cumulative: 2 },
  { stage: "Assistant Manager - InfoSec", focus: "Security program ownership", years: "5 yrs", period: "2007-2011", cumulative: 7 },
  { stage: "Senior Security Analyst", focus: "Security expertise", years: "1 yr", period: "2011-2012", cumulative: 8 },
  { stage: "Team Lead", focus: "Operational execution", years: "1 yr", period: "2012-2013", cumulative: 9 },
  { stage: "Manager - Security Ops", focus: "Process + People", years: "10 yrs", period: "2013-2023", cumulative: 19 },
  { stage: "Senior Director", focus: "Strategy + Scale", years: "2+ yrs", period: "2023-Present", cumulative: 21 }
];

export const securityPhilosophy = [
  { number: 1, principle: "Security must be measurable", detail: "If it can't be tracked, it can't be improved." },
  { number: 2, principle: "Detection quality beats alert volume", detail: "Signal over noise." },
  { number: 3, principle: "Visibility comes before control", detail: "You protect what you understand." },
  { number: 4, principle: "Automation is mandatory", detail: "Scale depends on systems, not heroics." },
  { number: 5, principle: "Risk must be expressed in business language", detail: "Security exists to support decisions." },
  { number: 6, principle: "Simple systems win", detail: "Reliability beats architectural perfection." }
];

export const impactHighlights = [
  "Reduced vulnerability remediation backlog by 40% through redesigned prioritization and workflows.",
  "Improved SOC detection quality and reduced false positives via telemetry alignment.",
  "Built executive dashboards providing real-time visibility across cloud, endpoint, and identity.",
  "Standardized incident response processes improving MTTR and consistency.",
  "Consolidated overlapping security tools reducing operational complexity.",
  "Delivered automation replacing manual reporting and analysis workflows."
];

// Project categories summarized from 250+ projects database
export const projectCategories = [
  {
    category: "SIEM & Detection",
    count: 35,
    description: "SIEM deployments, migrations, detection engineering, and log management across Splunk, Elastic, Microsoft Sentinel, QRadar, and Datadog.",
    highlights: ["Splunk → Elastic global migration", "SIEM cost optimization & tiering", "UEBA pilots", "Detection content development"],
    technologies: ["Microsoft Sentinel", "Splunk", "Elastic", "IBM QRadar", "Datadog", "Sumo Logic"]
  },
  {
    category: "SOC Operations",
    count: 30,
    description: "SOC operating model builds, tiering structures, SLAs, analyst training, metrics programs, and case management standardization.",
    highlights: ["SOC operating model builds", "Tier structure & SLA frameworks", "Analyst skill matrices", "KPI/metrics programs"],
    technologies: ["ServiceNow", "SOAR platforms", "Ticketing systems", "PagerDuty"]
  },
  {
    category: "Zero Trust & IAM",
    count: 28,
    description: "Zero trust strategy, ZTNA rollouts, conditional access, PAM implementations, MFA programs, and access review governance.",
    highlights: ["Zero trust roadmaps", "ZTNA/SASE rollouts", "PAM implementations", "Service account governance"],
    technologies: ["Azure AD", "Okta", "CyberArk", "Conditional Access", "ZTNA/SASE"]
  },
  {
    category: "MDR/XDR & Endpoint",
    count: 25,
    description: "MDR provider selection, XDR use-case development, endpoint telemetry expansion, and SOC-MDR handoff processes.",
    highlights: ["MDR provider RFP & transitions", "XDR use-case packs", "Endpoint coverage expansion", "Containment playbooks"],
    technologies: ["CrowdStrike", "Microsoft Defender XDR", "SentinelOne", "Carbon Black"]
  },
  {
    category: "Cloud Security",
    count: 25,
    description: "Cloud security baselines, landing zone controls, CSPM implementations, container security, and DevSecOps integration.",
    highlights: ["Landing zone security controls", "Cloud asset inventory", "API security baselines", "DevSecOps pipelines"],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "CSPM tools", "CI/CD security"]
  },
  {
    category: "GRC & Audit",
    count: 30,
    description: "Compliance programs, audit readiness, control frameworks, policy governance, TPRM, and evidence automation.",
    highlights: ["ISO 27001 implementations", "PCI DSS programs", "SOC 2 readiness", "Control testing automation"],
    technologies: ["ISO 27001", "PCI DSS", "SOC 2", "NIST", "Risk registers"]
  },
  {
    category: "SOAR & Automation",
    count: 20,
    description: "SOAR platform implementations, playbook automation, IOC enrichment workflows, and ITSM integrations.",
    highlights: ["SOAR platform builds", "Automated enrichment workflows", "ITSM case integrations", "Automation ROI models"],
    technologies: ["Cortex XSOAR", "Splunk SOAR", "Azure Logic Apps", "ServiceNow SecOps"]
  },
  {
    category: "Vulnerability Management",
    count: 22,
    description: "Vulnerability programs, patch governance, remediation sprint models, database hardening, and exposure management.",
    highlights: ["Enterprise vuln programs", "Remediation sprint models", "Patch compliance governance", "Database hardening"],
    technologies: ["Qualys", "Tenable", "Rapid7", "KEV prioritization"]
  },
  {
    category: "Network Security",
    count: 18,
    description: "Network segmentation, firewall governance, NAC rollouts, proxy modernization, and egress controls.",
    highlights: ["Micro-segmentation pilots", "Firewall rulebase cleanup", "NAC (802.1X) rollouts", "Proxy modernization"],
    technologies: ["NGFW", "IDS/IPS", "NAC", "DNS Security", "Proxy/SWG"]
  },
  {
    category: "Data Protection",
    count: 12,
    description: "DLP programs, data classification, encryption standards, and insider risk programs.",
    highlights: ["DLP policy frameworks", "Data classification schemes", "Insider risk correlation", "Legal hold alignment"],
    technologies: ["M365 DLP", "Endpoint DLP", "CASB", "Encryption", "eDiscovery"]
  },
  {
    category: "Forensics & IR",
    count: 15,
    description: "Forensic readiness, evidence handling, memory capture, cloud forensics, and investigation protocols.",
    highlights: ["Forensic triage playbooks", "Memory capture workflows", "Cloud forensics", "Legal/HR investigation protocols"],
    technologies: ["EDR forensics", "CloudTrail", "PCAP analysis", "Disk imaging"]
  },
  {
    category: "IT Security & Hardening",
    count: 18,
    description: "AD hardening, server/endpoint standards, PKI, legacy system risk treatment, and configuration baselines.",
    highlights: ["AD hardening programs", "Server hardening standards", "Linux hardening", "Legacy risk treatment"],
    technologies: ["Active Directory", "GPO", "SCCM", "Intune", "PKI"]
  }
];

// Featured highlight projects (top 6 from the database)
export const featuredProjects = [
  {
    id: 1,
    title: "Global SIEM Migration (Splunk → Elastic)",
    category: "SIEM",
    role: "Program Lead",
    duration: "6 months",
    problem: "Enterprise needed to re-platform SIEM and rebuild detection content without disrupting operations.",
    solution: "Led end-to-end migration, aligned log sources, built ingestion pipelines, optimized detections with ATT&CK testing.",
    result: "Improved query performance, reduced ingestion cost, increased detection coverage.",
    technologies: ["Splunk", "Elastic", "Beats", "Logstash"]
  },
  {
    id: 2,
    title: "Zero Trust Strategy & Roadmap",
    category: "Zero Trust",
    role: "Owner",
    duration: "3 months",
    problem: "Enterprise lacked a clear Zero Trust vision aligned to risk priorities.",
    solution: "Defined target-state architecture, phased roadmap across identity, device, network, and application access.",
    result: "Clear north star established, accelerated control adoption across the organization.",
    technologies: ["ZTNA", "Azure AD", "Conditional Access", "PAM"]
  },
  {
    id: 3,
    title: "Enterprise Vulnerability Management Program",
    category: "Vulnerability Mgmt",
    role: "Owner",
    duration: "6 months",
    problem: "No structured SLAs, remediation workflows, or executive reporting for vulnerabilities.",
    solution: "Built asset + vulnerability operating model with SLAs, KEV prioritization, and ITSM integration.",
    result: "Reduced critical backlog, improved compliance posture, measurable exposure reduction.",
    technologies: ["Qualys", "Tenable", "ITSM", "KEV/VPR"]
  },
  {
    id: 4,
    title: "SOC Operating Model Build",
    category: "SOC",
    role: "Owner",
    duration: "3 months",
    problem: "SOC lacked defined tiers, SLAs, escalation paths, and coverage model.",
    solution: "Established operating model, standardized case management, defined KPIs, implemented playbooks.",
    result: "Predictable operations, reduced MTTR, improved analyst efficiency.",
    technologies: ["ITSM", "SOAR", "Playbooks"]
  },
  {
    id: 5,
    title: "Cloud Security Baseline & Guardrails",
    category: "Cloud Security",
    role: "Program Owner",
    duration: "12 months",
    problem: "Multi-cloud environment lacked consistent security controls and governance.",
    solution: "Defined landing zone controls, implemented CSPM, integrated DevSecOps pipelines.",
    result: "Standardized security posture, reduced misconfigurations, improved audit readiness.",
    technologies: ["AWS", "Azure", "CSPM", "CI/CD", "Kubernetes"]
  },
  {
    id: 6,
    title: "SOAR Platform Implementation",
    category: "SOAR/Automation",
    role: "Platform Engineer",
    duration: "9 months",
    problem: "Manual enrichment and response workflows causing analyst burnout and slow MTTR.",
    solution: "Deployed SOAR platform, built IOC enrichment workflows, integrated ITSM for case management.",
    result: "Automated 60%+ of Tier-1 tasks, reduced analyst toil, accelerated remediation.",
    technologies: ["Cortex XSOAR", "ServiceNow", "Azure Logic Apps"]
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Senior Director - Security Operations",
    company: "UltraViolet Cyber",
    location: "San Francisco Bay Area",
    period: "2023 – Present (2+ years)",
    scope: {
      teamSize: "Global SOC teams",
      regions: "Multi-region",
      platforms: "Multi-cloud (Azure, AWS, GCP)"
    },
    responsibilities: [
      "Zero Trust strategy and implementation",
      "AI/ML-driven threat detection and automation",
      "MDR/XDR program leadership"
    ],
    outcomes: [
      "Spearheaded AI-driven anomaly detection deployment",
      "Led phishing defense and SOAR solutions implementation",
      "Ensured seamless security operations in hybrid and cloud environments"
    ],
    stack: ["Zero Trust", "AI/ML", "MDR", "XDR", "SOAR"]
  },
  {
    id: 2,
    title: "Manager - Security Operations",
    company: "METMOX",
    location: "San Francisco Bay Area",
    period: "2013 – 2023 (10 years)",
    scope: {
      teamSize: "Security operations team",
      regions: "Enterprise-wide",
      platforms: "Hybrid infrastructure"
    },
    responsibilities: [
      "SIEM platform management and optimization",
      "EDR and endpoint security programs",
      "Cloud security and DLP implementation"
    ],
    outcomes: [
      "Built and scaled enterprise security operations",
      "Designed scalable security programs aligned with business goals",
      "Enhanced operational efficiency and resilience"
    ],
    stack: ["SIEM", "EDR", "Cloud Security", "DLP"]
  },
  {
    id: 3,
    title: "Team Lead - Incident Management",
    company: "Verizon Business",
    location: "Mumbai, India",
    period: "2012 – 2013 (1 year)",
    scope: {
      teamSize: "Incident response team",
      regions: "APAC",
      platforms: "Enterprise networks"
    },
    responsibilities: [
      "Incident management and response leadership",
      "SOC operations oversight",
      "Process standardization and improvement"
    ],
    outcomes: [
      "Improved incident response times",
      "Standardized incident handling procedures",
      "Enhanced team capabilities and performance"
    ],
    stack: ["Incident Response", "SIEM", "SOC Operations"]
  },
  {
    id: 4,
    title: "Senior Security Analyst",
    company: "Super Computers Trading",
    location: "Abu Dhabi, UAE",
    period: "2011 – 2012 (8 months)",
    scope: {
      teamSize: "Security team",
      regions: "Middle East",
      platforms: "Enterprise infrastructure"
    },
    responsibilities: [
      "Security analysis and threat assessment",
      "Vulnerability management",
      "Security monitoring and alerting"
    ],
    outcomes: [
      "Strengthened security posture",
      "Implemented security monitoring solutions",
      "Reduced vulnerability exposure"
    ],
    stack: ["Security Analysis", "Vulnerability Assessment", "SIEM"]
  },
  {
    id: 5,
    title: "Assistant Manager - Information Security",
    company: "Geojit Financial Services",
    location: "Cochin, India",
    period: "2007 – 2011 (4 years 8 months)",
    scope: {
      teamSize: "IT Security team",
      regions: "Pan-India",
      platforms: "Financial services infrastructure"
    },
    responsibilities: [
      "Information security program management",
      "Compliance and audit coordination",
      "Security policy development"
    ],
    outcomes: [
      "Established security governance framework",
      "Achieved regulatory compliance",
      "Built security awareness programs"
    ],
    stack: ["Information Security", "Compliance", "Risk Management"]
  },
  {
    id: 6,
    title: "System Administrator",
    company: "Safe Software",
    location: "Palakkad, India",
    period: "2005 – 2007 (2 years)",
    scope: {
      teamSize: "IT team",
      regions: "Local",
      platforms: "Enterprise systems"
    },
    responsibilities: [
      "System administration and maintenance",
      "Network management",
      "IT infrastructure support"
    ],
    outcomes: [
      "Maintained high system availability",
      "Implemented infrastructure improvements",
      "Supported business operations"
    ],
    stack: ["System Administration", "Network Management", "IT Support"]
  }
];

export const skillsData = {
  topStrengths: [
    "Security Operations Leadership",
    "Detection Engineering",
    "Cloud Security Architecture",
    "Vulnerability Management",
    "GRC Program Design",
    "Automation & Analytics"
  ],
  levelingUp: [
    "AI-driven SOC workflows",
    "Detection quality metrics",
    "Executive security reporting"
  ],
  technicalSkills: [
    { category: "SIEM/Detection", skills: ["Microsoft Sentinel", "Splunk", "Elastic", "QRadar", "Datadog"] },
    { category: "Endpoint/XDR", skills: ["CrowdStrike", "Defender XDR", "SentinelOne", "Carbon Black"] },
    { category: "Cloud Security", skills: ["AWS Security Hub", "Azure Security Center", "CSPM", "Kubernetes"] },
    { category: "Identity/Access", skills: ["Azure AD", "Okta", "CyberArk", "Conditional Access"] },
    { category: "GRC/Compliance", skills: ["ISO 27001", "PCI DSS", "SOC 2", "NIST", "RSA Archer"] },
    { category: "Automation", skills: ["Cortex XSOAR", "Splunk SOAR", "Azure Logic Apps", "ServiceNow"] }
  ]
};

export const activeBuilding = [
  {
    name: "Threat Intelligence Engine",
    description: "Aggregates RSS feeds, CVEs, and IOCs into a searchable database and daily intelligence digest.",
    status: "Active development"
  },
  {
    name: "Detection Engineering Library",
    description: "Standardized detection rules and validation framework.",
    status: "Expanding"
  },
  {
    name: "AI Pentest Scoping Framework",
    description: "Automates scope definition and reporting for security testing.",
    status: "Prototype"
  },
  {
    name: "Security Dashboard Automation",
    description: "Unified executive reporting across multiple security platforms.",
    status: "Production"
  }
];

export const ninetyDayPlan = {
  days1to30: {
    title: "Days 1–30",
    items: ["Understand security posture", "Validate telemetry", "Identify risk hotspots", "Align stakeholders"]
  },
  days31to60: {
    title: "Days 31–60",
    items: ["Stabilize SOC operations", "Improve detection quality", "Close high-risk gaps"]
  },
  days61to90: {
    title: "Days 61–90",
    items: ["Deliver automation", "Publish KPIs", "Present roadmap"]
  }
};

export const educationData = [
  {
    degree: "Master of Business Administration (MBA)",
    year: "2013",
    focus: "Information Technology Management"
  },
  {
    degree: "Graduate Diploma in Business Administration (GDBA)",
    year: "2009",
    focus: "Business Administration"
  },
  {
    degree: "Diploma in Computer Applications",
    year: "2003",
    focus: "Computer Applications"
  }
];

export const certificationsData = {
  cybersecurity: [
    { name: "CISSP", fullName: "Certified Information Systems Security Professional", issuer: "ISC²" },
    { name: "CISM", fullName: "Certified Information Security Manager", issuer: "ISACA" },
    { name: "CISA", fullName: "Certified Information Systems Auditor", issuer: "ISACA" },
    { name: "CEH", fullName: "Certified Ethical Hacker", issuer: "EC-Council" },
    { name: "ISO 27001 LI", fullName: "ISO 27001 Lead Implementer", issuer: "PECB" },
    { name: "ISO 27001 LA", fullName: "ISO 27001 Lead Auditor", issuer: "PECB" }
  ],
  cloud: [
    { name: "Azure Security", fullName: "Microsoft Azure Security Engineer", issuer: "Microsoft" },
    { name: "AWS Security", fullName: "AWS Certified Security Specialty", issuer: "AWS" }
  ],
  leadership: [
    { name: "PMP", fullName: "Project Management Professional", issuer: "PMI" },
    { name: "ITIL v4", fullName: "ITIL v4 Foundation", issuer: "Axelos" },
    { name: "Six Sigma", fullName: "Six Sigma Green Belt", issuer: "ASQ" }
  ],
  dataAI: [
    { name: "Azure AI", fullName: "Microsoft Azure AI Fundamentals", issuer: "Microsoft" },
    { name: "Azure Data", fullName: "Microsoft Azure Data Fundamentals", issuer: "Microsoft" },
    { name: "Power BI", fullName: "Microsoft Power BI Data Analyst", issuer: "Microsoft" }
  ]
};

// Industries served
export const industriesServed = [
  "Enterprise (Global)",
  "Banking & Financial Services",
  "Retail",
  "Manufacturing",
  "Healthcare",
  "Public Sector",
  "SaaS/Cloud"
];
