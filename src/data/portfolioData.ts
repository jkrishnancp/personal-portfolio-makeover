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
  text: `I am a cybersecurity leader with deep experience across security operations, cloud security, vulnerability management, and governance programs. I specialize in building practical, measurable security capabilities that scale across complex enterprise environments. My work focuses on transforming security from reactive operations into reliable systems: improving detection quality, reducing exposure, automating visibility, and aligning security priorities with business risk. I translate security strategy into executive-ready risk narratives and regulatory compliance programs. Today, I continue to invest in detection engineering, automation, and AI-driven security workflows while leading programs that strengthen operational maturity and executive-level decision making.`
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
  { stage: "Senior Director", focus: "Strategy + Scale", years: "3 yrs", period: "2023-Present", cumulative: 22 }
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
  "Led 50+ incident investigations with average resolution time under 4 hours and 98% eradication success rate.",
  "Consolidated overlapping security tools reducing operational complexity and saving $400K+ annually.",
  "Delivered automation replacing manual reporting and analysis workflows.",
  "Achieved 85% phishing simulation pass rate through security awareness training and champion programs.",
  "Present quarterly security posture and risk updates to C-suite and Audit Committee.",
  "Negotiated vendor contracts achieving 25% cost reduction on MDR and SIEM renewals."
];

export const executiveReporting = {
  audiences: ["Board of Directors", "Audit Committee", "C-Suite (CEO, CFO, CTO)", "Risk Committee"],
  deliverables: [
    "Quarterly security posture reports with risk trending and remediation progress",
    "Board-ready executive dashboards covering threats, incidents, and compliance status",
    "Annual security strategy presentations with budget justification and ROI metrics",
    "Incident briefings translating technical events into business impact narratives"
  ],
  kpisDashboards: ["MTTR/MTTD", "Detection coverage %", "Vulnerability SLA compliance", "Phishing click rates", "Third-party risk scores"]
};

export const costOptimization = {
  totalSavings: "$1.2M+",
  highlights: [
    { action: "SIEM license consolidation", savings: "$400K/year", detail: "Migrated from Splunk to Elastic, reduced ingestion costs" },
    { action: "MDR vendor renegotiation", savings: "$180K/year", detail: "Competitive RFP achieved 25% cost reduction" },
    { action: "Tool stack rationalization", savings: "$350K/year", detail: "Eliminated 4 overlapping security tools" },
    { action: "Automation ROI", savings: "$270K/year", detail: "SOAR reduced manual analyst hours by 40%" }
  ]
};

export const thoughtLeadership = {
  speaking: [
    "Active participant in RSA Conference and regional cybersecurity industry events",
    "Led internal training sessions on Zero Trust architecture, detection engineering, and incident response",
    "Mentor and knowledge-sharing facilitator for security operations and compliance teams"
  ],
  contributions: [
    "Detection rule libraries shared with security community",
    "Security operations playbook templates",
    "Mentorship of 20+ security professionals across career levels"
  ]
};

export const openToRoles = {
  headline: "Open to CISO, VP Security, or Director-level opportunities",
  interests: [
    "CISO / VP of Security – building and leading enterprise security programs",
    "Security Operations leadership – scaling SOC, MDR, and detection capabilities",
    "Strategic advisory – board-level security consulting and fractional CISO engagements",
    "Consulting – security program assessments, GRC strategy, and transformation initiatives"
  ],
  preferences: [
    "Remote-first or hybrid roles",
    "Organizations committed to security as a business enabler",
    "Opportunities to build, not just maintain"
  ]
};

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
    company: "UltraViolet Cyber (MDR provider serving 500+ enterprises)",
    location: "San Francisco Bay Area",
    period: "2023 – Present (3 years)",
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
    stack: ["Zero Trust", "AI/ML", "MDR", "XDR", "SOAR"],
    description: `As the Senior Director of Security Operations at UltraViolet Cyber, I focus on delivering practical, results-driven cybersecurity solutions tailored to meet enterprise needs. Over my career, I've led transformative projects, including implementing Zero Trust architectures (ZIA and ZPA), deploying AI-powered tools for proactive threat detection, and rolling out enterprise-grade EDR solutions. My hands-on approach ensures that critical projects are completed efficiently—often within 90-120 days—while maintaining 100% SLA compliance.

Building and leading teams is a passion of mine. From creating MDR operations to driving security processes for SIEM, XDR, CASB, and CSPM, I strive to develop teams that can take on the toughest security challenges with confidence. I'm also deeply involved in leveraging AI and automation, such as SOAR platforms, to simplify incident response and improve resolution times.

Key Responsibilities:
• Lead security operations strategy and execution for 500+ enterprise clients
• Drive Zero Trust adoption and AI-powered threat detection initiatives
• Manage global SOC teams across multiple regions and time zones
• Ensure 100% SLA compliance while delivering projects within 90-120 days
• Collaborate with C-suite executives on security roadmaps and risk management`
  },
  {
    id: 2,
    title: "Manager - Security Operations",
    company: "METMOX (Cybersecurity consulting firm)",
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
    stack: ["SIEM", "EDR", "Cloud Security", "DLP"],
    description: `Evaluated current security processes, tools, and practices as a member of the information security team reporting directly to the CISO. Charged with evaluating the effectiveness of current solutions and identifying gaps in security protection. Developed a comprehensive security architecture framework to evaluate and manage security architecture strategy for both traditional on-premises and cloud environments.

Worked with vendors and cross-organizationally to identify, evaluate, and test (pilot) solutions. Technologies evaluated included data loss prevention (DLP), endpoint detection and response (EDR), traditional endpoint security, email security solutions (on-prem and Office 365), network security tools and capabilities, identity and access management tools and capabilities, application security practices, and cloud security tools.

Key Responsibilities:
• Lead the response to Cyber Security threats and incidents for the collection, analysis, and preservation of digital evidence
• Oversee day-to-day operations of multiple teams of security analysts and investigators
• Manage critical security infrastructure including IPS, SIEM, and endpoint protection
• Conduct root cause analysis to identify gaps and recommendations ultimately remediating risks to the firm
• Plan, research, and design robust security architectures
• Define, implement and maintain corporate security policies and procedures`
  },
  {
    id: 3,
    title: "Team Lead - Incident Management",
    company: "Verizon Business (Global telecom & managed security)",
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
    stack: ["Incident Response", "SIEM", "SOC Operations"],
    description: `As a member of the enterprise architecture team, charged with broad responsibilities to inject security practices into the overall application stack. Reviewed overall environment and developed an incremental roadmap for addressing critical gaps and charting a progressive course to more effective enterprise security over time. Included collaborating with the team driving a DevOps initiative, as well as initiating changes to implement and leverage SecOps automation.

Key Responsibilities:
• Analysis of organization's overall security risks and requirements, rating the importance of company's products and offerings
• Design, configuration, implementation and support of the information infrastructure to protect the business from potential security breaches
• Create reports for assigned areas of responsibility; Manage Security Programs
• Lead and mentor a team of 6 people and took ownership of their deliverables
• Monitor security audit and intrusion detection system logs for system and network anomalies
• Investigate and escalate security violations, attempts to gain unauthorized access, virus infections that may affect the network
• Assist in performing product evaluations and recommends products/services for network security`
  },
  {
    id: 4,
    title: "Senior Security Analyst",
    company: "Super Computers Trading (Enterprise IT solutions)",
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
    stack: ["Security Analysis", "Vulnerability Assessment", "SIEM"],
    description: `Held multifaceted responsibilities including implementation, design architecture, upgrades, health checks and advanced troubleshooting.

Key Responsibilities:
• Address and administer peer-level client relationships
• Facilitate participation in business development and technical pre-sales activities
• Primary contact for operations and SOC Operations
• Designing, implementation, integration, and administration of SIEM technologies
• Conduct knowledge transfer and security awareness sessions for resources
• Vulnerability Assessment and Penetration Testing
• Being primary contacts for operations and SOC Operations`
  },
  {
    id: 5,
    title: "Assistant Manager - Information Security",
    company: "Geojit Financial Services (Stock brokerage & wealth management)",
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
    stack: ["Information Security", "Compliance", "Risk Management"],
    description: `Key Responsibilities:
• Coordinating the implementation of data processing with personnel and outside vendors and conduct tests to ensure the processing activities and security measures
• Modifying the security files for incorporating new software and correcting the errors
• Evaluating the security features of various information systems and products
• Responsible for handling the disaster scenarios and implementing redundancy, protection mechanisms for critical resources
• Applying skills and knowledge to initiate good security practice and planning
• Ensures that right training is provided to all levels of the staff
• Taking responsibility for providing all arrangements for physical and logical security policies
• Installation of internal and external firewalls & IPS to ensure that the device is configured optimally
• Evaluating and investigating various threats
• Configure network switches/routers/Juniper SSG devices as per the configuration baselines
• Vendor Management, Incident Management, and Change management
• Monitor mail logs and critical services for warning/errors, coordinate with anti-spam provider for blacklisting/whitelisting
• Help Desk in Charge, handling client queries, assigning persons to rectify the same`
  },
  {
    id: 6,
    title: "System Administrator",
    company: "Safe Software (Software development firm)",
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
    stack: ["System Administration", "Network Management", "IT Support"],
    description: `Key Responsibilities:
• Installation of Workstations/servers at the client end
• Installation of Networking Devices and Software's for Co-Operate Banks
• Preparing Documentation for every instruments and location
• Maintaining 100% Uptime on Banking Hours
• Backing up and Restoration of SQL databases
• Installing backup devices on Servers`
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
    title: "Days 1–30: Discovery & Assessment",
    items: [
      "Understand security posture through tooling audit and gap analysis",
      "Validate telemetry coverage across cloud, endpoint, and identity",
      "Identify top 5 risk hotspots with remediation owners",
      "Align with stakeholders (IT, Legal, Compliance, Business Units)"
    ],
    outcome: "Deliver Security State Assessment with prioritized risk register"
  },
  days31to60: {
    title: "Days 31–60: Stabilization & Quick Wins",
    items: [
      "Stabilize SOC operations – refine escalation paths and SLAs",
      "Improve detection quality – tune high-noise alerts, add ATT&CK coverage",
      "Close 3 high-risk gaps identified in Day 30 assessment",
      "Launch security champion pilot in 2 business units"
    ],
    outcome: "Publish first KPI dashboard: MTTR, detection coverage %, SLA compliance"
  },
  days61to90: {
    title: "Days 61–90: Scale & Strategic Roadmap",
    items: [
      "Deliver first automation wins – SOAR playbooks for top 5 use cases",
      "Present 12-month security roadmap to C-suite with budget requirements",
      "Establish quarterly business review cadence with executive sponsors",
      "Define Year 1 OKRs: reduce MTTR by 30%, achieve 90% detection coverage"
    ],
    outcome: "Board-ready roadmap with KPIs: risk reduction trajectory, compliance milestones, cost projections"
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
