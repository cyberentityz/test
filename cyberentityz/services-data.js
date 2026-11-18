/**
 * CYBERENTITYZ™ — OFFICIAL SERVICES DATABASE
 * Authentic services and methodologies matching official CYBERENTITYZ curriculum and corporate offerings
 */

const SERVICES_DATA = [
  {
    id: "cybersecurity-workshops",
    title: "Cybersecurity Workshops",
    category: "Workshops",
    domain: "Training",
    tagline: "Hands-on Ethical Hacking, Network Security & Real-Time Threat Demonstrations",
    overview: "Engaging hands-on workshops covering ethical hacking, network security, web vulnerabilities, and real-time cyber threat demonstrations for students. Our instructors are active cybersecurity professionals with real-world offensive and defensive experience — not just educators. Students gain practical knowledge about ethical hacking, network security, and real-time cyber threats in an interactive setting.",
    threats: [
      "Web Application Flaws & Injections",
      "Network Infiltration & Packet Sniffing",
      "Phishing & Social Engineering Campaigns",
      "Malware Delivery & Ransomware Vectors",
      "Weak Authentication & Credential Dumping",
      "Data Leakage & Identity Compromise"
    ],
    benefits: [
      "Practical Hands-On Attack Simulations",
      "Wireshark, Metasploit & Burp Suite Labs",
      "Verified Industry Certificate of Completion",
      "Interactive Q&A with Certified Security Trainers",
      "Direct Mapping to Global Certifications (CEH, Security+)"
    ],
    methodology: [
      { phase: "Threat Landscape Briefing", desc: "Introduction to modern cyber threats, adversary tactics, and the role of ethical hacking in enterprise security." },
      { phase: "Network & Traffic Analysis", desc: "Live Wireshark packet capture, network mapping with Nmap, and perimeter scanning techniques." },
      { phase: "Web Application Pentesting", desc: "Hands-on exploitation of OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF) on dedicated sandboxed targets." },
      { phase: "Real-Time Attack Simulation", desc: "Demonstration of live credential harvesting, payload execution, and privilege escalation." },
      { phase: "Defense & Countermeasures", desc: "Best practices for hardening endpoints, firewall configurations, and certification roadmap guidance." }
    ]
  },
  {
    id: "industrial-visits",
    title: "Industrial Visits (IV)",
    category: "Experiential Learning",
    domain: "Academic",
    tagline: "Immersive Exposure to Live SOC Operations & Enterprise Security Infrastructure",
    overview: "Immersive IV programs where students experience live cybersecurity environments, SOC operations, and enterprise security infrastructure at CYBERENTITYZ in Teynampet, Chennai. Students gain practical insights into startup culture, emerging technologies, artificial intelligence, and real-world industry applications from practicing security professionals.",
    threats: [
      "Advanced Persistent Threats (APTs)",
      "Enterprise Ransomware Outbreaks",
      "Zero-Day Exploits Targeting Networks",
      "SOC Telemetry Gaps & Uncorrelated Logs",
      "Cloud Misconfigurations & Insider Threats"
    ],
    benefits: [
      "Live Security Operations Center (SOC) Walkthrough",
      "SIEM Dashboards & Real-Time Threat Hunting Demos",
      "Exposure to Startup Culture & Emerging AI Technologies",
      "Formal Institutional MOU Backing & Collaboration",
      "Interactive Sessions Encouraging Critical Thinking"
    ],
    methodology: [
      { phase: "Welcome & Industry Orientation", desc: "Orientation covering cybersecurity industry standards, enterprise infrastructure, and career horizons." },
      { phase: "SOC Operations Walkthrough", desc: "Guided inspection of live Security Operations Center workflows, SIEM dashboards, and triage queues." },
      { phase: "Threat Hunting & Forensics Demo", desc: "Demonstration of real-time attack vector detection, forensic artifact analysis, and incident isolation." },
      { phase: "AI & Modern Cyber Applications", desc: "Interactive briefing on how Artificial Intelligence is transforming cyber defense and offensive security." },
      { phase: "Executive Q&A & Career Guidance", desc: "Interactive mentoring session with senior consultants answering student queries on global careers." }
    ]
  },
  {
    id: "internship-programs",
    title: "Internship Programs",
    category: "Career Development",
    domain: "Training",
    tagline: "Structured Internships in Ethical Hacking, Digital Forensics & Security Operations",
    overview: "Structured internship opportunities in ethical hacking, digital forensics, and security operations — building real industry experience. Interns work on live attack simulations, vulnerability assessments, and enterprise defensive playbooks under 1-on-1 mentorship from senior security consultants.",
    threats: [
      "Zero-Day Vulnerability Identification",
      "Malware Dissection & Reverse Engineering",
      "Cross-Site Scripting & Injection Attacks",
      "Privilege Escalation & Lateral Movement",
      "API Security Flaws & Broken Authorization"
    ],
    benefits: [
      "Real-World Hands-On Industry Experience",
      "1-on-1 Mentorship from Senior Ethical Hackers",
      "Project-Driven Vulnerability Assessment Work",
      "Official Letter of Recommendation & Work Experience Certificate",
      "Direct Bridge to Global Cybersecurity Placements"
    ],
    methodology: [
      { phase: "Core Competency Onboarding", desc: "Intensive refresher on offensive Linux, network penetration tools, and security architecture." },
      { phase: "Simulated Vulnerability Research", desc: "Assigned hands-on testing of mock enterprise web apps and API endpoints." },
      { phase: "Digital Forensics & SOC Drills", desc: "Investigating mock security breaches, packet dumps, and creating forensic timeline reports." },
      { phase: "Capstone Security Audit Project", desc: "Independent security assessment with formal report writing and developer patch suggestions." },
      { phase: "Performance Review & Certification", desc: "Technical evaluation, exit interview, and award of official Internship Completion Credential." }
    ]
  },
  {
    id: "career-guidance-mock-interviews",
    title: "Career Guidance & Mock Interviews",
    category: "Placement Support",
    domain: "Training",
    tagline: "ATS Resume Optimization, Global Career Mapping & Technical Mock Interviews",
    overview: "Resume preparation with ATS optimization, career path planning, global job placement guidance, and mock technical interviews. We have successfully guided over 200 students toward international cybersecurity opportunities with personalized roadmap coaching, visa guidance, and rigorous interview simulations.",
    threats: [
      "Automated ATS Resume Rejections",
      "Technical Interview Knowledge Gaps",
      "Lack of Practical Proof-of-Concept Portfolios",
      "Global Market Requirement Mismatches",
      "Unoptimized LinkedIn & Professional Profiles"
    ],
    benefits: [
      "200+ Students Guided to International Placements",
      "ATS-Optimized Cybersecurity Resume Engineering",
      "Rigorous Technical Mocks (OffSec / SOC Analyst Scenarios)",
      "Global Salary Benchmarking & Country-Specific Guidance",
      "Certification Roadmap Tailored to Candidate Background"
    ],
    methodology: [
      { phase: "Candidate Diagnostic & Goal Audit", desc: "Comprehensive review of current skills, certifications, academic background, and global target markets." },
      { phase: "ATS Resume & Profile Re-Engineering", desc: "Restructuring resumes with high-impact keyword optimization and technical project portfolios." },
      { phase: "Offensive & Defensive Technical Mocks", desc: "Simulated interviews covering networking, web vulnerabilities, SOC triage, and real scenario problem solving." },
      { phase: "Behavioral & Communication Coaching", desc: "Fine-tuning professional presentation, articulating technical findings, and salary negotiation tactics." },
      { phase: "Global Application & Network Support", desc: "Guidance on international job portals, overseas visa requirements, and alumni referrals." }
    ]
  },
  {
    id: "college-lab-setup-support",
    title: "College Lab Setup Support",
    category: "Infrastructure",
    domain: "Academic",
    tagline: "End-to-End Cybersecurity Lab Design, Hardware Specs & Air-Gapped Cyber Ranges",
    overview: "Complete support for establishing cybersecurity labs — hardware, software, network architecture design, and ongoing technical consultation. Backed by formal MOUs with reputable engineering colleges across Tamil Nadu, strengthening academic partnerships and building a more secure digital ecosystem.",
    threats: [
      "Campus Network Sandbox Escapes",
      "Inadequate Virtualization Hardware Compute",
      "Unsecured Lab Network Architectures",
      "Outdated Academic Practical Tools",
      "Lack of Hands-On Offensive Cyber Ranges"
    ],
    benefits: [
      "Turnkey Cybersecurity Lab Architecture & Hardware Specs",
      "Air-Gapped Pen-Testing Sandboxes & Virtual Cyber Ranges",
      "Formal Institutional MOU Partnership Backing",
      "Faculty Training & Curriculum Modernization Included",
      "Continuous Technical Consultation & Equipment Support"
    ],
    methodology: [
      { phase: "Campus Needs & Space Assessment", desc: "On-site assessment of institutional infrastructure, student batch sizes, and power/network requirements." },
      { phase: "Architecture & Hardware Specification", desc: "Designing server compute, switch topology, air-gapped VLANs, and firewall rules for safe pen-testing." },
      { phase: "Cyber Range & Tool Deployment", desc: "Installation of virtualized attack ranges, Kali Linux suites, SIEM consoles, and vulnerable target machines." },
      { phase: "Security Hardening & Faculty Handover", desc: "Lockdown of campus boundary network and complete training for academic lab administrators." },
      { phase: "Formal MOU Execution & Ongoing Support", desc: "Signing formal institutional agreement with scheduled updates and guest workshop privileges." }
    ]
  },
  {
    id: "faculty-awareness-programs",
    title: "Faculty Awareness Programs",
    category: "Faculty Development",
    domain: "Academic",
    tagline: "Curriculum Modernization, Cyber Hygiene & Emerging Threat Upskilling",
    overview: "Cybersecurity awareness and upskilling programs tailored for faculty members to stay current with evolving threats and technologies. Equips academic leaders, deans, and professors to guide engineering cohorts with modern, industry-relevant cyber knowledge across Tamil Nadu.",
    threats: [
      "Phishing Campaigns Targeting Academic Portals",
      "Outdated Curriculums Misaligned with Industry Standards",
      "Ransomware & Data Theft in College Repositories",
      "Unsecured Research Data & Credential Compromise",
      "Faculty Lack of Hands-On Vulnerability Tools"
    ],
    benefits: [
      "Upskilling on Modern Offensive & Defensive Cybersecurity",
      "Curriculum Alignment with MITRE ATT&CK & NIST Standards",
      "Hands-On Demonstrations of Phishing, Malware & Data Protection",
      "Official Faculty Development Program (FDP) Certification",
      "Practical Knowledge Transfer Directly to Student Batches"
    ],
    methodology: [
      { phase: "Academic Threat Landscape Briefing", desc: "Overview of threat vectors impacting higher education and global industry demand for skills." },
      { phase: "Cyber Hygiene & Institutional Defense", desc: "Practical protocols for securing institutional accounts, multi-factor authentication, and safe browsing." },
      { phase: "Live Demonstrations of Cyber Attacks", desc: "Visualizing phishing attacks, credential harvesting, and malware delivery in safe demonstrations." },
      { phase: "Modern Curriculum Alignment", desc: "Integrating hands-on lab exercises, ethical hacking ethics, and bug bounty principles into coursework." },
      { phase: "Institutional Readiness & Certification", desc: "Actionable roadmap for departmental security readiness and distribution of completion credentials." }
    ]
  },
  {
    id: "ethical-hacking-training",
    title: "Ethical Hacking Training & Society",
    category: "Ethical Hacking Society",
    domain: "Training",
    tagline: "Real-World Attack Simulations, Global Certifications & Cyber Defense Education",
    overview: "We are CYBERENTITYZ, Chennai premier cybersecurity training & enterprise security company. Delivering real-world attack simulations, global certifications, and end-to-end cyber defense solutions. Successfully trained more than 100 students locally and guided over 200 students pursuing global opportunities.",
    threats: [
      "Network Exploitation & Lateral Movement",
      "Web Application Injections & Flaws",
      "Cloud Infrastructure Misconfigurations",
      "Wireless & Endpoint Vulnerabilities",
      "Social Engineering & Ransomware Infiltration"
    ],
    benefits: [
      "100+ Students Trained Locally in Chennai",
      "200+ Global Placements Guided Internationally",
      "Practicing Offensive & Defensive Security Professionals as Instructors",
      "Comprehensive Labs Mapped to CompTIA, EC-Council, OffSec, ISC2",
      "Flexible Cohort Timings for Students & Working Professionals"
    ],
    methodology: [
      { phase: "Fundamentals of Cyber Defense", desc: "Linux command line, networking topologies, packet analysis, and security architectures." },
      { phase: "Offensive Reconnaissance & Scanning", desc: "Target footprinting, port scanning with Nmap, and vulnerability enumeration." },
      { phase: "Exploit Execution & System Compromise", desc: "Exploiting known vulnerabilities, privilege escalation, and payload craft." },
      { phase: "Defensive Operations & Threat Mitigation", desc: "Patching, firewall configuration, SIEM alerting, and defense-in-depth." },
      { phase: "Certification Boot Camp & Exam Drill", desc: "Rigorous scenario preparation for CEH, Security+, OSCP, and CISSP exams." }
    ]
  },
  {
    id: "vapt-services",
    title: "VAPT Services & Corporate Security",
    category: "Corporate Security",
    domain: "Corporate",
    tagline: "Real-World Attack Simulations, Vulnerability Assessment & Enterprise Penetration Testing",
    overview: "Chennai premier enterprise cybersecurity company. End-to-end cyber defense solutions, real-world attack simulations, and actionable penetration testing across web applications, networks, and corporate IT infrastructure. We actively conduct cybersecurity awareness sessions in IT companies across Tamil Nadu.",
    threats: [
      "OWASP Top 10 Web Application Vulnerabilities",
      "Corporate Network Perimeter Breaches",
      "Employee Phishing Vulnerabilities",
      "Data Protection Failures & Information Leaks",
      "Unpatched Server Exposures & Remote Code Execution"
    ],
    benefits: [
      "Zero False-Positive Manual Exploitation Verification",
      "Actionable Developer Remediation Patch Snippets",
      "Complimentary 30-Day Verification Re-Test",
      "Formal Executive Summary & Technical Audit Reports",
      "Strict Confidentiality under Mutual Non-Disclosure Agreement (NDA)"
    ],
    methodology: [
      { phase: "Rules of Engagement & Scoping", desc: "Defining audit boundaries, test targets, asset domains, and timing parameters under strict NDA." },
      { phase: "Comprehensive Vulnerability Scanning", desc: "Automated perimeter scans combined with proprietary scripts to map exposure surfaces." },
      { phase: "Manual Exploitation & PoC Verification", desc: "Attempting ethical system compromise to prove vulnerability impact without disrupting operations." },
      { phase: "Remediation Reporting & Debrief", desc: "Delivering detailed executive report and technical developer fix guides." },
      { phase: "Verification Re-Testing & Attestation", desc: "Re-testing identified vulnerabilities after remediation and issuing formal certificate." }
    ]
  },
  {
    id: "vciso-advisory",
    title: "vCISO Advisory & Governance",
    category: "vCISO Advisory",
    domain: "Corporate",
    tagline: "Strategic Cybersecurity Leadership, Academic MOUs & Compliance Frameworks",
    overview: "Executive cybersecurity advisory for corporates, startups, and educational institutions. From institutional MOUs and lab setups to enterprise security roadmaps, our senior advisors deliver clear, actionable defense leadership without the overhead of full-time headcount.",
    threats: [
      "Regulatory Compliance Non-Conformities",
      "Third-Party Vendor Supply Chain Risks",
      "Lack of Incident Response & Disaster Recovery Plans",
      "Absence of Formal Cybersecurity Policies & Governance",
      "Unmanaged Security Budget & Tool Duplication"
    ],
    benefits: [
      "Senior Partner-Led Advisory with 5+ Years Industry Experience",
      "MOU Frameworks for Academic Institutions & IT Companies",
      "Audit Readiness for Global Standards (ISO 27001, SOC 2, NIST)",
      "Continuous Security Posture Oversight & Board Reporting",
      "Rapid Response Escalation for Security Incidents"
    ],
    methodology: [
      { phase: "Security Posture & Compliance Audit", desc: "Evaluating existing IT infrastructure, policies, and regulatory mandates." },
      { phase: "Risk Management & Governance Architecture", desc: "Drafting corporate security policies, access control guidelines, and compliance roadmaps." },
      { phase: "Institutional Partnership & MOU Execution", desc: "Establishing structured collaborative frameworks for colleges and enterprises." },
      { phase: "Incident Response & Continuity Planning", desc: "Building actionable playbooks for ransomware containment and breach recovery." },
      { phase: "Ongoing Executive Review", desc: "Quarterly security reviews, vendor assessments, and ongoing advisory consultation." }
    ]
  },
  {
    id: "web-application-vapt",
    title: "Web Application Security Assessment",
    category: "Application Layer",
    domain: "Assurance",
    tagline: "Manual and automated testing of websites, portals and web platforms",
    overview: "We assess web applications the way a real attacker would: mapping every page, parameter and workflow, then attempting to break authentication, access control and business rules. Findings are verified manually with proof of concept so your developers receive actionable results, not scanner noise.",
    threats: ["SQL Injection & XSS", "Broken Authentication & Session Flaws", "Business Logic Abuse", "IDOR / Broken Access Control", "Server-Side Request Forgery (SSRF)", "Insecure Deserialization", "Insecure File Uploads", "Security Misconfiguration"],
    benefits: ["OWASP Top 10 coverage", "Manual verification of every finding", "Developer-ready fix guidance", "Free re-test after remediation"],
    methodology: [
      { phase: "Scoping & Rules of Engagement", desc: "Agree on targets, user roles, test accounts, timelines and safe-testing boundaries." },
      { phase: "Reconnaissance & Mapping", desc: "Enumerate pages, endpoints, technologies and entry points to understand the attack surface." },
      { phase: "Vulnerability Discovery", desc: "Combine automated scanning with manual testing of inputs, sessions, access control and workflows." },
      { phase: "Exploitation & Validation", desc: "Safely demonstrate impact of each issue to confirm it is real and rate its risk." },
      { phase: "Reporting & Re-Test", desc: "Deliver an executive summary and technical report, then verify fixes once applied." }
    ],
    deliverables: ["Executive summary", "Detailed technical findings with proof of concept", "Risk-rated remediation roadmap", "Re-test report"],
    standards: ["OWASP Top 10", "OWASP ASVS", "SANS Top 25", "ISO 27001", "PCI-DSS"]
  },
  {
    id: "mobile-app-security",
    title: "Mobile Application Security Testing",
    category: "Application Layer",
    domain: "Assurance",
    tagline: "Android and iOS app testing across the app, device and backend",
    overview: "Mobile apps carry data on devices you do not control. We test the app binary, its local storage, its network traffic and the APIs behind it, so weaknesses are found before they reach users' phones.",
    threats: ["Insecure Local Data Storage", "Weak Transport Security & Pinning Bypass", "Hardcoded Secrets & Keys", "Root / Jailbreak Detection Bypass", "Insecure Deep Links & IPC", "Reverse Engineering & Tampering", "Weak Backend API Authorization"],
    benefits: ["Android and iOS coverage", "Static, dynamic and runtime analysis", "Backend API testing included", "Aligned with OWASP MASVS"],
    methodology: [
      { phase: "Scoping & Build Intake", desc: "Collect builds, test accounts and the list of supported platforms and versions." },
      { phase: "Static Analysis", desc: "Decompile and review code, manifests, permissions and embedded secrets." },
      { phase: "Dynamic & Runtime Testing", desc: "Test the running app on instrumented devices, including storage, memory and tampering resistance." },
      { phase: "Network & API Testing", desc: "Intercept traffic and test server-side endpoints for authorization and logic flaws." },
      { phase: "Reporting & Re-Test", desc: "Provide prioritised findings with fixes, and verify remediation." }
    ],
    deliverables: ["Executive summary", "Technical report mapped to MASVS", "Remediation guidance", "Re-test report"],
    standards: ["OWASP MASVS", "OWASP Mobile Top 10", "ISO 27001", "PCI-DSS"]
  },
  {
    id: "api-security-testing",
    title: "API Security Testing",
    category: "Application Layer",
    domain: "Assurance",
    tagline: "REST, GraphQL and SOAP API testing for modern applications",
    overview: "APIs expose business logic and data directly, and are a leading source of breaches. We test authentication, object-level and function-level authorization, rate limits and data exposure across your REST, GraphQL and SOAP interfaces.",
    threats: ["Broken Object Level Authorization (BOLA)", "Broken Function Level Authorization", "Excessive Data Exposure", "Mass Assignment", "Missing Rate Limiting", "Token & JWT Weaknesses", "GraphQL Introspection & Query Abuse", "Shadow / Undocumented Endpoints"],
    benefits: ["OWASP API Top 10 coverage", "Role-based authorization testing", "Detection of undocumented endpoints", "Clear fix guidance for developers"],
    methodology: [
      { phase: "API Discovery", desc: "Collect specifications, collections and traffic to inventory all endpoints, including undocumented ones." },
      { phase: "Authentication & Token Review", desc: "Test login, token issuance, expiry, signing and refresh flows." },
      { phase: "Authorization Testing", desc: "Attempt cross-user and cross-role access on every object and function." },
      { phase: "Input & Logic Testing", desc: "Probe for injection, mass assignment, abuse of business rules and rate-limit gaps." },
      { phase: "Reporting & Re-Test", desc: "Deliver findings with reproducible requests and verify the fixes." }
    ],
    deliverables: ["Executive summary", "Endpoint-level findings with sample requests", "Remediation roadmap", "Re-test report"],
    standards: ["OWASP API Security Top 10", "OWASP ASVS", "ISO 27001", "PCI-DSS"]
  },
  {
    id: "cloud-security-testing",
    title: "Cloud Security Testing",
    category: "Infrastructure Layer",
    domain: "Assurance",
    tagline: "Configuration and penetration testing for AWS, Azure and GCP",
    overview: "Most cloud incidents stem from misconfiguration and over-privileged identities. We review your cloud accounts and test how an attacker could move from a single weakness to sensitive data or control of your environment.",
    threats: ["Over-Permissive IAM Roles", "Publicly Exposed Storage & Databases", "Exposed Secrets & Access Keys", "Insecure Network Segmentation", "Missing Logging & Monitoring", "Container & Kubernetes Misconfiguration", "Privilege Escalation Paths"],
    benefits: ["AWS, Azure and GCP coverage", "Identity and privilege-escalation analysis", "Benchmark-aligned configuration review", "Prioritised, practical fixes"],
    methodology: [
      { phase: "Scoping & Access Setup", desc: "Define accounts, subscriptions and projects, and provision read-only or test access." },
      { phase: "Configuration Review", desc: "Check identity, storage, network, logging and encryption settings against best-practice benchmarks." },
      { phase: "Attack Path Analysis", desc: "Identify and test chains that lead from a foothold to sensitive data or admin control." },
      { phase: "Workload & Container Testing", desc: "Assess virtual machines, serverless functions, containers and clusters." },
      { phase: "Reporting & Re-Test", desc: "Report findings with infrastructure-level fixes and verify remediation." }
    ],
    deliverables: ["Executive summary", "Configuration findings by service", "Attack path narratives", "Remediation roadmap"],
    standards: ["CIS Benchmarks", "ISO 27001", "SOC 2", "PCI-DSS", "CERT-In"]
  },
  {
    id: "network-security-testing",
    title: "Network Security Testing",
    category: "Infrastructure Layer",
    domain: "Assurance",
    tagline: "Internal and external network penetration testing",
    overview: "We test your perimeter and internal network to find exposed services, weak configurations and paths an attacker could use to reach critical systems, including Active Directory and segmentation boundaries.",
    threats: ["Exposed & Unpatched Services", "Weak or Default Credentials", "Active Directory Misconfiguration", "Lateral Movement Paths", "Weak Network Segmentation", "Insecure Protocols", "Firewall & VPN Weaknesses"],
    benefits: ["External and internal testing", "Active Directory attack-path review", "Segmentation validation", "Evidence-backed findings"],
    methodology: [
      { phase: "Scoping & Authorisation", desc: "Confirm IP ranges, testing windows and escalation contacts." },
      { phase: "Discovery & Enumeration", desc: "Identify live hosts, open ports, services and versions." },
      { phase: "Vulnerability Assessment", desc: "Detect known weaknesses and misconfigurations, then manually verify them." },
      { phase: "Exploitation & Pivoting", desc: "Safely exploit issues and test movement between network zones." },
      { phase: "Reporting & Re-Test", desc: "Deliver prioritised findings and confirm fixes." }
    ],
    deliverables: ["Executive summary", "Host and service findings", "Attack path diagrams", "Re-test report"],
    standards: ["NIST SP 800-115", "PTES", "ISO 27001", "PCI-DSS", "CERT-In"]
  },
  {
    id: "iot-penetration-testing",
    title: "IoT Penetration Testing",
    category: "Device Layer",
    domain: "Assurance",
    tagline: "Security testing of connected devices, firmware and their ecosystem",
    overview: "Connected products combine hardware, firmware, mobile apps and cloud services, and a weakness in any layer can compromise the whole. We test the full device ecosystem end to end.",
    threats: ["Hardcoded Credentials in Firmware", "Exposed Debug Interfaces (UART/JTAG)", "Insecure Firmware Updates", "Weak Device-to-Cloud Communication", "Insecure Wireless Protocols (BLE, Zigbee, Wi-Fi)", "Insecure Companion Apps & APIs"],
    benefits: ["Hardware, firmware and cloud coverage", "Firmware extraction and analysis", "Protocol and radio testing", "Guidance for secure product design"],
    methodology: [
      { phase: "Architecture Review", desc: "Map the device, its interfaces, data flows and trust boundaries." },
      { phase: "Hardware Analysis", desc: "Inspect debug ports, storage and physical attack surface." },
      { phase: "Firmware Analysis", desc: "Extract and analyse firmware for secrets, vulnerable components and update weaknesses." },
      { phase: "Communication & Ecosystem Testing", desc: "Test wireless protocols, companion apps and cloud APIs." },
      { phase: "Reporting & Re-Test", desc: "Report findings with design and code-level fixes and verify them." }
    ],
    deliverables: ["Executive summary", "Technical findings by layer", "Remediation recommendations", "Re-test report"],
    standards: ["OWASP IoT Top 10", "OWASP FSTM", "ETSI EN 303 645", "ISO 27001"]
  },
  {
    id: "ot-security-testing",
    title: "OT / ICS Security Testing",
    category: "Industrial Layer",
    domain: "Assurance",
    tagline: "Safe security assessment of industrial control and SCADA environments",
    overview: "Industrial environments demand careful, non-disruptive testing. We assess OT networks, controllers and the boundary with corporate IT using safety-first methods agreed with your operations team.",
    threats: ["Flat or Poorly Segmented OT Networks", "Insecure Industrial Protocols (Modbus, DNP3, OPC)", "Unpatched Legacy Systems", "Weak Remote Access", "Compromised IT-to-OT Pivot Paths", "Default Credentials on PLCs & HMIs"],
    benefits: ["Safety-first, non-disruptive approach", "IT/OT boundary review", "Architecture and segmentation analysis", "Aligned to IEC 62443"],
    methodology: [
      { phase: "Safety Planning & Scoping", desc: "Agree on safe methods, windows and stop conditions with plant stakeholders." },
      { phase: "Asset & Architecture Review", desc: "Build an inventory and map zones, conduits and data flows." },
      { phase: "Passive & Controlled Testing", desc: "Analyse traffic and run carefully controlled tests on approved systems." },
      { phase: "IT/OT Boundary Testing", desc: "Evaluate paths from corporate networks and remote access into the control environment." },
      { phase: "Reporting & Roadmap", desc: "Provide risk-ranked findings and a phased hardening plan." }
    ],
    deliverables: ["Executive summary", "Asset and zone map", "Risk-ranked findings", "Phased remediation roadmap"],
    standards: ["IEC 62443", "NIST SP 800-82", "ISO 27001", "CERT-In"]
  },
  {
    id: "database-penetration-testing",
    title: "Database Penetration Testing",
    category: "Data Layer",
    domain: "Assurance",
    tagline: "Securing the systems that hold your most valuable data",
    overview: "We assess relational and NoSQL databases for weak authentication, excessive privileges, misconfiguration and injection paths, to make sure sensitive data is protected even if another layer fails.",
    threats: ["Weak or Default Database Credentials", "Excessive User Privileges", "SQL / NoSQL Injection Paths", "Unencrypted Data at Rest or in Transit", "Exposed Database Ports", "Missing Auditing & Logging", "Unpatched Database Engines"],
    benefits: ["Covers major SQL and NoSQL engines", "Privilege and role review", "Encryption and auditing checks", "Hardening guidance"],
    methodology: [
      { phase: "Scoping & Access", desc: "Identify database engines, versions, environments and test access." },
      { phase: "Configuration & Patch Review", desc: "Check settings, patch levels and exposed services." },
      { phase: "Authentication & Privilege Testing", desc: "Test credentials, roles, and paths to privilege escalation." },
      { phase: "Data Protection Review", desc: "Verify encryption, masking, backup security and audit logging." },
      { phase: "Reporting & Re-Test", desc: "Deliver hardening recommendations and verify fixes." }
    ],
    deliverables: ["Executive summary", "Technical findings per database", "Hardening checklist", "Re-test report"],
    standards: ["CIS Benchmarks", "ISO 27001", "PCI-DSS", "CERT-In"]
  },
  {
    id: "wireless-security-testing",
    title: "Wireless Security Testing",
    category: "Network Layer",
    domain: "Assurance",
    tagline: "Wi-Fi and wireless network assessment",
    overview: "Wireless networks extend your perimeter beyond the building. We test your Wi-Fi infrastructure, authentication and guest segregation to ensure an attacker nearby cannot reach your internal network.",
    threats: ["Weak Wi-Fi Encryption & Keys", "Rogue Access Points & Evil Twins", "Weak WPA-Enterprise Configuration", "Guest-to-Corporate Network Leakage", "Client Isolation Failures", "Unauthorised Devices"],
    benefits: ["On-site coverage testing", "Enterprise and guest network review", "Rogue device detection", "Practical configuration fixes"],
    methodology: [
      { phase: "Scoping & Site Survey", desc: "Identify SSIDs, access points and coverage areas." },
      { phase: "Encryption & Authentication Testing", desc: "Assess protocols, keys and enterprise authentication setup." },
      { phase: "Attack Simulation", desc: "Test rogue access point, evil twin and client-targeted scenarios under agreed rules." },
      { phase: "Segmentation Validation", desc: "Confirm guest and corporate networks are properly isolated." },
      { phase: "Reporting & Re-Test", desc: "Provide findings and configuration guidance, then verify fixes." }
    ],
    deliverables: ["Executive summary", "Wireless findings and coverage map", "Configuration recommendations", "Re-test report"],
    standards: ["NIST SP 800-153", "PCI-DSS", "ISO 27001", "CERT-In"]
  },
  {
    id: "vapt-security-testing",
    title: "VAPT Security Testing",
    category: "Full-Spectrum Assurance",
    domain: "Assurance",
    tagline: "Combined vulnerability assessment and penetration testing",
    overview: "A structured vulnerability assessment and penetration testing programme that covers your applications, networks and infrastructure in one engagement, producing a single prioritised view of risk suitable for audits and customers.",
    threats: ["Known Unpatched Vulnerabilities", "Exploitable Misconfigurations", "Weak Credentials & Access Control", "Chained Attack Paths", "Exposed Internet-Facing Assets", "Compliance Gaps"],
    benefits: ["Single engagement across multiple layers", "Audit-ready reporting", "Prioritised risk view", "Verified re-test and closure"],
    methodology: [
      { phase: "Scoping & Planning", desc: "Define in-scope assets, objectives, constraints and compliance drivers." },
      { phase: "Vulnerability Assessment", desc: "Identify weaknesses across assets using scanning and manual review." },
      { phase: "Penetration Testing", desc: "Exploit validated weaknesses to demonstrate real business impact." },
      { phase: "Risk Analysis & Reporting", desc: "Rate findings by severity and impact, and recommend fixes." },
      { phase: "Re-Test & Closure", desc: "Verify remediation and issue a closure report." }
    ],
    deliverables: ["Executive summary", "Technical findings report", "Compliance mapping", "Closure / re-test report"],
    standards: ["OWASP", "NIST SP 800-115", "PTES", "ISO 27001", "PCI-DSS", "CERT-In"]
  }
];

// Compact builder for additional assurance services
function assuranceService(id, title, category, tagline, overview, threats, benefits, phases, deliverables, standards) {
  return {
    id, title, category, domain: "Assurance", tagline, overview, threats, benefits,
    methodology: phases.map(([phase, desc]) => ({ phase, desc })),
    deliverables, standards
  };
}

SERVICES_DATA.push(
  assuranceService("red-team-operations", "Red Team Operations", "Adversary Simulation",
    "Goal-driven attack simulation against your people, process and technology",
    "A red team engagement tests your whole defence, not a single system. We emulate a realistic adversary pursuing agreed objectives, such as reaching critical data, and measure how well your team detects and responds.",
    ["Phishing & Social Engineering", "External Perimeter Compromise", "Credential Theft & Privilege Escalation", "Lateral Movement in Active Directory", "Physical Access Attempts", "Detection & Response Gaps"],
    ["Tests detection and response, not just prevention", "Objective-based, realistic scenarios", "Purple-team debrief with your defenders", "Evidence of real business impact"],
    [["Objectives & Rules of Engagement", "Agree goals, boundaries, escalation paths and a trusted contact group."], ["Intelligence Gathering", "Collect open-source information on people, systems and exposure."], ["Initial Access & Persistence", "Gain a foothold through technical or human weaknesses and maintain access."], ["Escalation & Objective Completion", "Move through the environment toward the agreed targets."], ["Debrief & Detection Review", "Walk through the attack timeline and what was or wasn't detected."]],
    ["Executive summary", "Attack narrative and timeline", "Detection gap analysis", "Defensive improvement plan"],
    ["MITRE ATT&CK", "TIBER-style approach", "ISO 27001", "CERT-In"]),

  assuranceService("ai-llm-security-testing", "AI & LLM Security Testing", "Emerging Technology",
    "Testing AI applications, models and their integrations",
    "AI features introduce new risks such as prompt manipulation, data leakage and unsafe tool use. We test your LLM applications, agents and surrounding pipelines for abuse and failure modes.",
    ["Prompt Injection & Jailbreaks", "Sensitive Data Leakage", "Insecure Plugin / Tool Use", "Training Data & Model Poisoning", "Excessive Agent Permissions", "Unsafe Output Handling", "Model Denial of Service"],
    ["Covers OWASP LLM Top 10", "Tests the application, not just the model", "Practical guardrail recommendations", "Applies to chatbots, RAG and agents"],
    [["Architecture Review", "Map models, data sources, tools and trust boundaries."], ["Threat Modelling", "Identify misuse and abuse scenarios specific to your use case."], ["Adversarial Testing", "Attempt prompt injection, data extraction and tool abuse."], ["Integration & API Testing", "Test the services, plugins and permissions around the model."], ["Reporting & Re-Test", "Deliver findings with mitigations and verify them."]],
    ["Executive summary", "Attack scenarios and evidence", "Guardrail and design recommendations", "Re-test report"],
    ["OWASP Top 10 for LLM Applications", "NIST AI RMF", "ISO/IEC 42001", "ISO 27001"]),

  assuranceService("digital-forensics-incident-response", "Digital Forensics & Incident Response (DFIR)", "Response & Recovery",
    "Investigate, contain and recover from security incidents",
    "When an incident happens, speed and evidence handling matter. We help you contain the threat, determine what occurred and preserve evidence, then strengthen your defences to prevent a repeat.",
    ["Ransomware", "Business Email Compromise", "Insider Data Theft", "Malware Infections", "Compromised Accounts & Servers", "Data Breaches"],
    ["Rapid containment support", "Forensically sound evidence handling", "Clear root-cause analysis", "Recovery and hardening guidance"],
    [["Triage & Containment", "Assess scope and stop further damage."], ["Evidence Collection", "Acquire disk, memory and log data with chain of custody."], ["Analysis", "Reconstruct the attacker's actions and determine impact."], ["Eradication & Recovery", "Remove the threat and restore systems safely."], ["Reporting & Lessons Learned", "Document findings and improve detection and response."]],
    ["Incident report", "Timeline and root cause", "Indicators of compromise", "Hardening recommendations"],
    ["NIST SP 800-61", "ISO/IEC 27035", "CERT-In Directions", "ISO 27001"]),

  assuranceService("cyber-intelligence", "Cyber Threat Intelligence", "Intelligence",
    "Know who targets you and what is exposed before attackers act",
    "We monitor open, deep and dark web sources for threats relevant to your organisation, including leaked credentials, impersonation and exposed assets, and turn them into actionable alerts.",
    ["Leaked Credentials", "Brand Impersonation & Phishing Domains", "Exposed Assets & Shadow IT", "Data Sale on Underground Forums", "Targeted Threat Actor Activity", "Third-Party Exposure"],
    ["Early warning of relevant threats", "Actionable, prioritised alerts", "Brand and executive monitoring", "Supports takedown requests"],
    [["Asset & Keyword Profiling", "Define your domains, brands, people and technologies to monitor."], ["Collection", "Gather data from open, deep and dark web sources."], ["Analysis & Validation", "Filter noise and validate relevance and credibility."], ["Alerting & Advice", "Send prioritised alerts with recommended actions."], ["Periodic Reporting", "Summarise trends and exposure over time."]],
    ["Intelligence alerts", "Periodic threat reports", "Exposure summary", "Remediation recommendations"],
    ["MITRE ATT&CK", "ISO 27001", "CERT-In"]),

  assuranceService("secure-code-review", "Secure Code Review", "Application Layer",
    "Find vulnerabilities in source code before they ship",
    "Our engineers review your source code, combining automated analysis with manual review of security-critical logic, to find flaws that testing a running application can miss.",
    ["Injection Flaws in Code", "Hardcoded Secrets", "Weak Cryptography", "Authentication & Authorization Logic Errors", "Unsafe Deserialization", "Vulnerable Dependencies", "Insecure Error Handling"],
    ["Finds root causes in code", "Language and framework aware", "Line-level fix guidance", "Fits into developer workflow"],
    [["Scoping & Threat Modelling", "Identify languages, frameworks and the highest-risk components."], ["Automated Analysis", "Run static analysis and dependency checks."], ["Manual Review", "Inspect authentication, access control, crypto and data handling."], ["Triage & Validation", "Remove false positives and rate real issues."], ["Reporting & Developer Walkthrough", "Share findings and fixes, then verify remediation."]],
    ["Executive summary", "Findings with code references", "Secure coding recommendations", "Re-review report"],
    ["OWASP ASVS", "OWASP Top 10", "CWE Top 25", "ISO 27001"]),

  assuranceService("devsecops-security-testing", "DevSecOps Security Testing", "Pipeline Layer",
    "Securing CI/CD pipelines and the software supply chain",
    "We assess your build and deployment pipeline for weaknesses an attacker could use to tamper with code or steal secrets, and help you build security checks into every stage.",
    ["Exposed Pipeline Secrets", "Over-Privileged Runners & Tokens", "Insecure Build Configuration", "Dependency & Image Tampering", "Missing Security Gates", "Infrastructure-as-Code Misconfiguration"],
    ["Pipeline and repository review", "Security gates that fit your tooling", "Reduces supply-chain risk", "Practical automation guidance"],
    [["Pipeline Discovery", "Map repositories, builds, artefacts and deployment stages."], ["Configuration Review", "Check access, secrets handling and runner permissions."], ["Attack Simulation", "Test paths to tamper with builds or extract secrets."], ["Control Integration", "Recommend SAST, SCA, secrets and image scanning gates."], ["Reporting & Re-Test", "Deliver a hardening plan and verify fixes."]],
    ["Executive summary", "Pipeline findings", "Security gate design", "Re-test report"],
    ["OWASP DevSecOps Guideline", "SLSA", "NIST SSDF", "ISO 27001"]),

  assuranceService("hardware-security-testing", "Hardware Security Testing", "Device Layer",
    "Physical and embedded device security assessment",
    "We examine boards, chips and embedded systems for weaknesses that software testing cannot reach, such as exposed debug interfaces, readable memory and weak secure-boot implementations.",
    ["Exposed UART / JTAG / SWD", "Firmware Extraction", "Weak Secure Boot", "Key Extraction from Memory", "Fault Injection Susceptibility", "Insecure Storage"],
    ["Board-level analysis", "Firmware and boot chain review", "Design-stage guidance", "Useful before mass production"],
    [["Device Teardown & Mapping", "Identify components, interfaces and test points."], ["Interface Analysis", "Probe debug and communication ports."], ["Firmware & Memory Analysis", "Extract and analyse firmware and stored data."], ["Boot & Protection Testing", "Evaluate secure boot and tamper protections."], ["Reporting", "Provide design-level mitigations."]],
    ["Executive summary", "Hardware findings", "Design recommendations", "Re-test report"],
    ["OWASP FSTM", "OWASP IoT Top 10", "ETSI EN 303 645"]),

  assuranceService("thick-client-security-testing", "Thick Client Security Testing", "Application Layer",
    "Testing desktop applications and their back-ends",
    "Desktop applications often trust the client too much. We analyse the application, its local data and its communication with servers to find ways to bypass controls or extract secrets.",
    ["Hardcoded Credentials", "Insecure Local Storage", "Unencrypted Network Traffic", "DLL Hijacking", "Client-Side Authorization Bypass", "Reverse Engineering & Tampering", "Insecure Updates"],
    ["Covers two-tier and three-tier apps", "Binary and traffic analysis", "Back-end testing included", "Clear fix guidance"],
    [["Application Profiling", "Identify architecture, technologies and data flows."], ["Static & Binary Analysis", "Reverse engineer and review the application for secrets and logic."], ["Traffic & Runtime Analysis", "Intercept communications and inspect memory and files."], ["Server-Side Testing", "Test the services the client talks to."], ["Reporting & Re-Test", "Deliver findings and verify fixes."]],
    ["Executive summary", "Technical findings", "Remediation guidance", "Re-test report"],
    ["OWASP Thick Client Top 10", "OWASP ASVS", "ISO 27001"]),

  assuranceService("host-level-security-testing", "Host Level Security Testing", "Infrastructure Layer",
    "Server and endpoint configuration and hardening review",
    "We review operating systems and servers against hardening baselines and test for local privilege escalation, so a single compromised account cannot take over the host.",
    ["Missing Patches", "Weak Local Permissions", "Insecure Services", "Local Privilege Escalation", "Weak Password Policy", "Insufficient Logging"],
    ["Windows, Linux and Unix coverage", "Benchmark-based review", "Privilege escalation testing", "Hardening scripts and guidance"],
    [["Scoping & Access", "Select representative hosts and agree access level."], ["Configuration Audit", "Compare settings against benchmarks."], ["Vulnerability Review", "Identify missing patches and weak services."], ["Privilege Escalation Testing", "Attempt to escalate from a low-privilege user."], ["Reporting & Re-Test", "Provide hardening steps and verify them."]],
    ["Executive summary", "Per-host findings", "Hardening checklist", "Re-test report"],
    ["CIS Benchmarks", "NIST SP 800-123", "ISO 27001", "PCI-DSS"]),

  assuranceService("automotive-vapt", "Automotive VAPT", "Industry Specific",
    "Security testing for connected vehicles and automotive components",
    "Modern vehicles are networks of computers with wireless connections. We test electronic control units, in-vehicle networks, infotainment, telematics and backend services for security weaknesses.",
    ["CAN Bus Manipulation", "ECU Firmware Weaknesses", "Insecure Infotainment Systems", "Telematics & Remote Access Flaws", "Key Fob / Wireless Attacks", "Insecure Mobile App & Cloud APIs", "Insecure OTA Updates"],
    ["Vehicle, component and cloud coverage", "Supports type-approval preparation", "Practical test-bench approach", "Design guidance for engineers"],
    [["Threat Analysis", "Map the vehicle architecture, interfaces and risks."], ["In-Vehicle Network Testing", "Assess CAN and other bus communications."], ["ECU & Infotainment Testing", "Analyse firmware, ports and applications."], ["Wireless & Backend Testing", "Test telematics, key systems, apps and cloud services."], ["Reporting & Re-Test", "Provide findings and verify fixes."]],
    ["Executive summary", "Technical findings by component", "Mitigation recommendations", "Re-test report"],
    ["ISO/SAE 21434", "UNECE R155", "ISO 27001"]),

  assuranceService("telecom-vapt", "Telecom & 5G VAPT", "Industry Specific",
    "Security testing for telecom and 5G network infrastructure",
    "Telecom networks run critical national services. We assess core and edge components, signalling interfaces and management systems for weaknesses that could disrupt service or expose subscriber data.",
    ["Signalling Protocol Abuse", "Insecure Core Network Interfaces", "Weak Management Plane Access", "Subscriber Data Exposure", "Container & Cloud-Native Core Flaws", "Roaming & Interconnect Risks"],
    ["Covers 4G and 5G environments", "Signalling and core testing", "Careful, service-safe methods", "Operator-focused reporting"],
    [["Scoping & Safety Planning", "Define in-scope elements and safe testing methods."], ["Architecture Review", "Map interfaces, trust boundaries and exposure."], ["Interface & Protocol Testing", "Test signalling, API and management interfaces."], ["Core & Cloud-Native Testing", "Assess virtualised and containerised functions."], ["Reporting & Re-Test", "Deliver findings and verify remediation."]],
    ["Executive summary", "Technical findings", "Hardening roadmap", "Re-test report"],
    ["3GPP Security Specifications", "GSMA NESAS", "ISO 27001", "CERT-In"]),

  assuranceService("data-security-audit", "Data Security Audit", "Data Layer",
    "Find where sensitive data lives and how well it is protected",
    "We locate sensitive data across your systems and review how it is stored, accessed, transmitted and shared, then identify gaps in protection and access control.",
    ["Unknown Sensitive Data Stores", "Excessive Access Rights", "Unencrypted Data", "Insecure Data Sharing", "Weak Backup Protection", "Missing Monitoring"],
    ["Clear data inventory", "Access and encryption review", "Prioritised gap list", "Supports compliance evidence"],
    [["Scoping", "Define systems, data types and stakeholders."], ["Data Discovery", "Identify where sensitive data is stored and flows."], ["Control Review", "Assess encryption, access, retention and monitoring."], ["Gap Analysis", "Compare against policy and regulatory expectations."], ["Reporting", "Deliver a prioritised remediation plan."]],
    ["Executive summary", "Data inventory", "Gap analysis", "Remediation roadmap"],
    ["ISO 27001", "DPDP Act", "GDPR", "PCI-DSS"]),

  assuranceService("data-privacy-audit", "Data Privacy Audit", "Data Layer",
    "Assess compliance with privacy law and good practice",
    "We review how personal data is collected, used, shared and retained against applicable privacy requirements, and recommend the changes needed to demonstrate compliance.",
    ["Missing Consent & Notices", "Over-Collection of Data", "Unmanaged Third-Party Sharing", "Weak Data Subject Request Handling", "Excessive Retention", "Cross-Border Transfer Gaps"],
    ["Law-aligned gap assessment", "Data flow mapping", "Practical policy and process fixes", "Audit-ready documentation"],
    [["Scoping & Legal Mapping", "Identify applicable laws and processing activities."], ["Data Flow Mapping", "Document collection, use, sharing and retention."], ["Control & Policy Review", "Assess consent, notices, rights handling and vendors."], ["Gap Analysis", "Identify compliance shortfalls and risks."], ["Reporting & Roadmap", "Recommend remediation priorities."]],
    ["Executive summary", "Data flow map", "Compliance gap report", "Remediation roadmap"],
    ["DPDP Act", "GDPR", "ISO/IEC 27701", "ISO 27001"]),

  assuranceService("data-masking-privacy-audit", "Data Masking & Privacy Audit", "Data Layer",
    "Ensure non-production and shared data does not expose real personal information",
    "Test and analytics environments often contain copies of live data. We review your masking and anonymisation approach and test whether individuals can still be identified.",
    ["Real Data in Test Environments", "Weak Masking Techniques", "Re-Identification Risk", "Inconsistent Masking Across Systems", "Unprotected Exports & Reports"],
    ["Masking effectiveness testing", "Re-identification risk assessment", "Tooling-neutral advice", "Supports privacy compliance"],
    [["Scoping", "Identify environments and data sets using masked data."], ["Technique Review", "Evaluate masking and anonymisation methods."], ["Effectiveness Testing", "Attempt to recover or re-identify original data."], ["Gap Analysis", "Identify inconsistencies and weak points."], ["Reporting", "Recommend improvements."]],
    ["Executive summary", "Masking assessment", "Re-identification findings", "Improvement plan"],
    ["DPDP Act", "GDPR", "ISO/IEC 27701"]),

  assuranceService("data-security-posture-management", "Data Security Posture Management", "Data Layer",
    "Continuous visibility into where your data is and how exposed it is",
    "We help you adopt a posture-management approach that continuously discovers data across cloud and on-premises stores, classifies it and flags risky exposure.",
    ["Shadow Data Stores", "Publicly Exposed Data", "Over-Shared Data", "Unclassified Sensitive Data", "Stale & Orphaned Data", "Misconfigured Access"],
    ["Continuous data visibility", "Risk-based prioritisation", "Cloud and on-premises scope", "Policy and tooling guidance"],
    [["Assessment & Scoping", "Understand environments, data types and goals."], ["Discovery & Classification", "Find and classify data across stores."], ["Exposure Analysis", "Identify risky access and sharing."], ["Remediation Planning", "Prioritise and plan fixes."], ["Operating Model", "Define ongoing monitoring and ownership."]],
    ["Executive summary", "Data exposure map", "Prioritised remediation plan", "Operating model recommendations"],
    ["ISO 27001", "DPDP Act", "GDPR", "NIST CSF"]),

  assuranceService("data-breach-simulation", "Data Breach Simulation Audit", "Data Layer",
    "Test whether you can detect, stop and respond to data theft",
    "We simulate an attacker stealing sensitive data in a controlled way to check whether your controls detect it and whether your team follows the response plan.",
    ["Undetected Data Exfiltration", "Weak Egress Controls", "Insider Misuse", "Delayed Incident Escalation", "Unclear Response Roles", "Notification Gaps"],
    ["Tests detection and response", "Safe, controlled simulation", "Highlights response plan gaps", "Includes tabletop exercise"],
    [["Scenario Design", "Agree realistic breach scenarios and safeguards."], ["Simulated Exfiltration", "Attempt controlled data movement using common techniques."], ["Detection Review", "Check which activity was logged and alerted."], ["Response Exercise", "Walk through escalation and notification steps."], ["Reporting", "Document gaps and improvements."]],
    ["Executive summary", "Scenario results", "Detection and response gaps", "Improvement plan"],
    ["NIST SP 800-61", "ISO/IEC 27035", "DPDP Act", "CERT-In Directions"]),

  assuranceService("sbom-software-composition-analysis", "SBOM & Software Composition Analysis", "Pipeline Layer",
    "Know and secure the third-party components in your software",
    "We generate and analyse a software bill of materials to identify vulnerable, outdated and risky open-source components, and review licence obligations.",
    ["Known Vulnerable Dependencies", "Outdated & Unmaintained Libraries", "Malicious Packages", "Licence Conflicts", "Transitive Dependency Risk", "Unknown Component Provenance"],
    ["Full component visibility", "Prioritised by exploitability", "Licence risk review", "SBOM in standard formats"],
    [["Scoping", "Identify applications, repositories and artefacts."], ["SBOM Generation", "Produce an inventory of direct and transitive components."], ["Vulnerability Analysis", "Match components against known vulnerabilities."], ["Risk & Licence Review", "Assess exploitability, maintenance health and licences."], ["Reporting", "Recommend upgrades and process improvements."]],
    ["SBOM (CycloneDX / SPDX)", "Vulnerability report", "Licence report", "Remediation plan"],
    ["CycloneDX", "SPDX", "NIST SSDF", "OWASP Dependency Check"]),

  assuranceService("website-security-testing", "Website Security Testing", "Application Layer",
    "Focused security assessment for business and public websites",
    "A practical assessment for corporate sites, CMS platforms and e-commerce stores, covering common vulnerabilities, outdated plugins, and configuration and hosting weaknesses.",
    ["Outdated CMS & Plugins", "Cross-Site Scripting", "Injection Flaws", "Weak Admin Access", "Missing Security Headers", "Malware & Defacement Risk", "Insecure Hosting Configuration"],
    ["Quick, affordable engagement", "CMS-specific checks", "Clear prioritised fixes", "Re-test included"],
    [["Scoping", "Confirm the website, platform and hosting."], ["Scanning & Enumeration", "Identify technologies, plugins and exposures."], ["Manual Testing", "Verify issues and test login, forms and uploads."], ["Configuration Review", "Check headers, TLS and server settings."], ["Reporting & Re-Test", "Provide fixes and verify them."]],
    ["Executive summary", "Findings with fix guidance", "Hardening checklist", "Re-test report"],
    ["OWASP Top 10", "ISO 27001", "PCI-DSS"])
);

// Compact builder for governance and compliance services
function governanceService(id, title, tagline, overview, risks, standards) {
  return {
    id, title, category: "Compliance & Governance", domain: "Governance", tagline, overview,
    threats: risks,
    benefits: ["Clear, prioritised path to compliance", "Practical policies your teams can follow", "Audit-ready evidence and documentation", "Support through to certification or sign-off"],
    methodology: [
      { phase: "Scoping & Kick-off", desc: `Define the scope, stakeholders, timelines and success criteria for ${title}.` },
      { phase: "Gap Assessment", desc: "Compare current policies, processes and controls against the requirements and record the gaps." },
      { phase: "Remediation Planning", desc: "Build a prioritised plan with owners, effort and deadlines." },
      { phase: "Implementation Support", desc: "Help draft policies, procedures and controls and guide your teams through rollout." },
      { phase: "Review & Audit Readiness", desc: "Run an internal review, close remaining gaps and prepare you for the external audit or assessment." }
    ],
    deliverables: ["Gap assessment report", "Policy and procedure set", "Remediation roadmap", "Audit-readiness report"],
    standards
  };
}

SERVICES_DATA.push(
  governanceService("iso-27001", "ISO 27001 Certification Consulting", "Build and certify an information security management system",
    "We help you design, implement and operate an information security management system (ISMS) that meets ISO/IEC 27001, from risk assessment through to certification audit.",
    ["No Formal Risk Assessment", "Undocumented Security Policies", "Unclear Asset Ownership", "Weak Supplier Controls", "Untested Incident Response", "No Internal Audit Programme"],
    ["ISO/IEC 27001", "ISO/IEC 27002", "ISO/IEC 27005"]),
  governanceService("soc-2-compliance", "SOC 2 Compliance & Audit Readiness", "Prepare for a SOC 2 report customers will trust",
    "We prepare your organisation for a SOC 2 examination by mapping controls to the Trust Services Criteria, closing gaps and organising evidence.",
    ["Missing Control Documentation", "Inconsistent Access Reviews", "Weak Change Management", "No Vendor Risk Process", "Incomplete Logging & Monitoring", "Evidence Collection Gaps"],
    ["AICPA SOC 2", "Trust Services Criteria", "ISO 27001"]),
  governanceService("pci-dss-compliance", "PCI DSS Compliance Consulting", "Protect cardholder data and meet PCI DSS",
    "We scope your cardholder data environment, find gaps against PCI DSS and guide remediation so you are ready for your assessment.",
    ["Unscoped Cardholder Data", "Weak Network Segmentation", "Unencrypted Card Data", "Poor Access Control", "Missing Log Review", "Untested Security Controls"],
    ["PCI DSS", "ISO 27001", "NIST CSF"]),
  governanceService("hipaa-compliance", "HIPAA Compliance Services", "Safeguard health information",
    "We assess how protected health information is handled and help you meet HIPAA Privacy, Security and Breach Notification requirements.",
    ["Unprotected Patient Data", "Weak Access Controls", "No Risk Analysis", "Missing Business Associate Agreements", "Inadequate Workforce Training", "No Breach Response Plan"],
    ["HIPAA Security Rule", "HIPAA Privacy Rule", "HITECH", "NIST SP 800-66"]),
  governanceService("gdpr-compliance", "GDPR Compliance Services", "Handle EU personal data lawfully and securely",
    "We map how you process personal data, assess it against the GDPR and help you put in place the records, rights processes and safeguards it requires.",
    ["No Record of Processing", "Weak Consent & Notices", "Slow Data Subject Request Handling", "Unmanaged Processors", "Cross-Border Transfer Gaps", "No Breach Notification Process"],
    ["GDPR", "ISO/IEC 27701", "ISO 27001"]),
  governanceService("dpdpa-compliance", "DPDP Act Compliance Services", "Prepare for India's data protection law",
    "We help organisations understand their obligations under the Digital Personal Data Protection Act and build consent, notice, rights and breach processes to meet them.",
    ["Unclear Data Fiduciary Duties", "Invalid Consent Practices", "No Grievance Process", "Weak Children's Data Handling", "Retention Without Purpose", "No Breach Reporting Plan"],
    ["DPDP Act 2023", "ISO/IEC 27701", "ISO 27001"]),
  governanceService("nist-csf", "NIST Cybersecurity Framework Implementation", "Structure your security programme around NIST CSF",
    "We assess your current maturity across the NIST CSF functions and build a target profile and roadmap to improve it.",
    ["Unmeasured Security Maturity", "No Asset Inventory", "Limited Detection Capability", "Untested Recovery Plans", "Unclear Governance Roles", "Ad Hoc Risk Decisions"],
    ["NIST CSF 2.0", "NIST SP 800-53", "ISO 27001"]),
  governanceService("irdai-compliance", "IRDAI Compliance & Insurance Security", "Meet insurance sector cybersecurity requirements",
    "We help insurers and intermediaries assess and meet IRDAI information and cyber security guidelines, including governance, audits and incident reporting.",
    ["Gaps Against IRDAI Guidelines", "Weak Outsourcing Controls", "Policyholder Data Exposure", "No Incident Reporting Process", "Insufficient Audit Coverage"],
    ["IRDAI Information & Cyber Security Guidelines", "ISO 27001", "CERT-In"]),
  governanceService("iso-22301-bcms", "ISO 22301 Business Continuity Management", "Keep critical services running through disruption",
    "We help you build a business continuity management system that identifies critical functions, defines recovery targets and is regularly tested.",
    ["No Business Impact Analysis", "Undefined Recovery Targets", "Untested Continuity Plans", "Single Points of Failure", "Supplier Dependency Risk"],
    ["ISO 22301", "ISO 27031", "NIST SP 800-34"]),
  governanceService("iso-42001-ai-management", "ISO 42001 AI Management System", "Govern AI responsibly and demonstrably",
    "We help you establish an AI management system covering risk, accountability, data quality and oversight, aligned to ISO/IEC 42001.",
    ["Ungoverned AI Use", "Biased or Unreliable Outputs", "Data Quality Issues", "Lack of Human Oversight", "Third-Party AI Risk", "Missing AI Risk Assessment"],
    ["ISO/IEC 42001", "NIST AI RMF", "EU AI Act"]),
  governanceService("iec-62443", "IEC 62443 Industrial Cybersecurity", "Secure industrial automation and control systems",
    "We assess industrial environments against IEC 62443, define zones and conduits, and plan the security levels and controls needed.",
    ["Flat Industrial Networks", "Weak Remote Access", "Unpatched Legacy Systems", "No Security Zoning", "Supplier Component Risk"],
    ["IEC 62443", "NIST SP 800-82", "ISO 27001"]),
  governanceService("iso-21434-automotive", "ISO 21434 Automotive Cybersecurity Management", "Build a cybersecurity management system for vehicles",
    "We help automotive manufacturers and suppliers establish processes for threat analysis, risk assessment and cybersecurity across the vehicle lifecycle.",
    ["No Threat Analysis & Risk Assessment", "Weak Supplier Cybersecurity Management", "Missing Post-Production Monitoring", "Undefined Cybersecurity Goals"],
    ["ISO/SAE 21434", "UNECE R155", "UNECE R156"]),
  governanceService("pdpl-compliance", "PDPL Compliance", "Meet Gulf-region personal data protection laws",
    "We assess your data practices against applicable Personal Data Protection Laws, such as those in the UAE and Saudi Arabia, and build the processes needed to comply.",
    ["Unclear Applicability", "Consent & Notice Gaps", "Cross-Border Transfer Restrictions", "Missing Data Protection Roles", "No Breach Process"],
    ["UAE PDPL", "Saudi PDPL", "GDPR", "ISO/IEC 27701"]),
  governanceService("grc-framework-implementation", "GRC Framework Implementation", "Unify governance, risk and compliance",
    "We design and implement a governance, risk and compliance framework so policies, risks and controls are managed in one consistent process.",
    ["Siloed Compliance Efforts", "Duplicate Controls", "Unowned Risks", "Manual Evidence Collection", "No Management Reporting"],
    ["ISO 27001", "NIST CSF", "COSO", "COBIT"]),
  governanceService("cybersecurity-risk-management", "Cybersecurity Risk Management", "Identify, rate and treat cyber risk",
    "We run structured risk assessments, rate risks by likelihood and impact, and help leadership choose and track treatments.",
    ["Unknown Risk Exposure", "Inconsistent Risk Ratings", "No Risk Appetite", "Untracked Treatment Actions", "Poor Executive Visibility"],
    ["ISO 27005", "NIST SP 800-30", "NIST RMF", "ISO 31000"]),
  governanceService("third-party-risk-management", "Third Party Risk Management (TPRM)", "Manage the risk your suppliers bring",
    "We build a process to classify vendors, assess their security, set contractual requirements and monitor them over time.",
    ["Unassessed Vendors", "Weak Contract Security Clauses", "Supplier Data Exposure", "No Continuous Monitoring", "Fourth-Party Dependency"],
    ["ISO 27036", "NIST SP 800-161", "SOC 2", "ISO 27001"]),
  governanceService("data-privacy-compliance-audit", "Data Privacy Compliance Audit", "Independent audit of your privacy programme",
    "An independent assessment of your privacy governance, records, notices, rights handling and safeguards against the laws that apply to you.",
    ["Incomplete Privacy Governance", "Outdated Notices", "Weak Rights Handling", "Unreviewed Processors", "Inadequate Impact Assessments"],
    ["DPDP Act", "GDPR", "ISO/IEC 27701"]),
  governanceService("data-retention-disposal-review", "Data Retention & Disposal Policies Review", "Keep data only as long as needed",
    "We review your retention schedules and disposal practices, and help you define and enforce rules for deleting data safely.",
    ["Indefinite Data Retention", "Unclear Retention Rules", "Insecure Disposal of Media", "Backups Outliving Policy", "Legal Hold Confusion"],
    ["DPDP Act", "GDPR", "ISO 27001", "NIST SP 800-88"]),
  governanceService("national-security-privacy-framework", "National Security & Privacy Framework Alignment", "Align with national cyber and privacy requirements",
    "We map your controls to national and sector regulatory requirements so you can demonstrate compliance to regulators and partners.",
    ["Unmapped Regulatory Obligations", "Sector-Specific Gaps", "Inconsistent Reporting", "Weak Critical Data Controls"],
    ["CERT-In Directions", "DPDP Act", "ISO 27001", "NIST CSF"]),
  governanceService("cybersecurity-insurance-guidance", "Cybersecurity Insurance Guidance", "Prepare for and get more from cyber insurance",
    "We help you understand insurer requirements, improve the controls underwriters check, and answer proposal questionnaires accurately.",
    ["Unmet Underwriting Controls", "Inaccurate Questionnaires", "Unclear Policy Coverage", "Weak Backup & MFA Posture", "Unplanned Claims Process"],
    ["ISO 27001", "NIST CSF", "CIS Controls"]),
  governanceService("compliance-data-governance", "Data Governance", "Define who owns, classifies and controls data",
    "We help you establish data ownership, classification, quality and access rules so data is trusted and protected.",
    ["No Data Ownership", "Unclassified Data", "Inconsistent Data Quality", "Uncontrolled Data Sharing", "Missing Data Catalogue"],
    ["DAMA-DMBOK", "ISO 27001", "DPDP Act", "GDPR"]),
  governanceService("compliance-security-posture", "Security Posture Assessment", "A clear view of your overall security standing",
    "We evaluate your people, process and technology controls to give leadership an honest, prioritised picture of security posture.",
    ["Unknown Control Effectiveness", "Misaligned Security Spending", "Tool Sprawl", "Unmeasured Improvement", "Blind Spots in Coverage"],
    ["NIST CSF", "CIS Controls", "ISO 27001"]),
  governanceService("cybersecurity-maturity-assessment", "Cybersecurity Maturity Assessment", "Measure maturity and plan the next step",
    "We score your capabilities across governance, protection, detection and response, benchmark them and set a staged improvement roadmap.",
    ["Ad Hoc Processes", "No Maturity Baseline", "Uneven Capability", "Unclear Improvement Priorities"],
    ["NIST CSF", "C2M2", "CMMI", "ISO 27001"]),
  governanceService("ai-maturity-assessment", "AI Maturity & Readiness Assessment", "Check your readiness to adopt AI safely",
    "We assess your data, governance, security and skills readiness for AI, and recommend steps to scale it responsibly.",
    ["Weak AI Governance", "Poor Data Readiness", "Shadow AI Usage", "Skill Gaps", "Unmanaged AI Security Risk"],
    ["NIST AI RMF", "ISO/IEC 42001", "ISO 27001"]),
  governanceService("cyber-resilience-assessment", "Cyber Resilience Assessment", "Test your ability to withstand and recover",
    "We evaluate how well your organisation can anticipate, withstand, recover from and adapt to cyber incidents, including backups and crisis processes.",
    ["Untested Recovery Capability", "Weak Backup Strategy", "Unclear Crisis Roles", "Long Recovery Times", "Over-Reliance on Single Systems"],
    ["NIST SP 800-160", "DORA", "ISO 22301", "ISO 27001"]),
  governanceService("bcp-dr-planning", "Business Continuity & Disaster Recovery Planning", "Plan for outages before they happen",
    "We help you design and test business continuity and disaster recovery plans with realistic recovery time and recovery point objectives.",
    ["No Written Plans", "Unrealistic Recovery Objectives", "Untested Failover", "Missing Communication Plans", "Unprotected Backups"],
    ["ISO 22301", "ISO 27031", "NIST SP 800-34"]),
  governanceService("vendor-it-compliance", "Vendor IT Compliance", "Make sure vendors meet your IT security requirements",
    "We define IT security standards for vendors, assess their compliance and track remediation of gaps.",
    ["Vendors Below Security Baseline", "No Right-to-Audit Clauses", "Unmanaged Vendor Access", "Weak Offboarding"],
    ["ISO 27001", "SOC 2", "ISO 27036"]),
  governanceService("business-impact-analysis", "Business Impact Analysis", "Understand what matters most when things go wrong",
    "We identify your critical processes, their dependencies and the impact of disruption over time, to set priorities for recovery.",
    ["Unknown Critical Processes", "Hidden Dependencies", "Unquantified Downtime Cost", "No Recovery Priorities"],
    ["ISO 22301", "ISO 22317", "NIST SP 800-34"])
);

// Compact builder for managed security and solution services
function mssService(id, title, tagline, overview, threats, benefits, phases) {
  return {
    id, title, category: "Managed Security", domain: "MSSP", tagline, overview, threats, benefits,
    methodology: phases.map(([phase, desc]) => ({ phase, desc })),
    deliverables: ["Onboarding and scope document", "Regular service reports", "Incident or finding records", "Improvement recommendations"],
    standards: ["ISO 27001", "NIST CSF", "MITRE ATT&CK", "CERT-In"]
  };
}

const MSS_PHASES = (a, b, c) => [
  ["Discovery & Onboarding", "Understand your environment, assets, risks and service expectations."],
  ["Design & Integration", a],
  ["Operation", b],
  ["Response & Escalation", c],
  ["Reporting & Improvement", "Review performance with you regularly and tune the service."]
];

SERVICES_DATA.push(
  mssService("mssp-managed-security", "Managed Security Services (MSSP)", "Outsourced security operations tailored to your business",
    "We run day-to-day security operations on your behalf, covering monitoring, vulnerability management, response and reporting, so you get mature security without building a full in-house team.",
    ["Alert Overload", "Skills Shortage", "Slow Detection & Response", "Fragmented Security Tools", "Limited After-Hours Coverage"],
    ["Predictable cost model", "Round-the-clock coverage", "Experienced analysts", "Single point of accountability"],
    MSS_PHASES("Connect log sources, tools and ticketing, and agree playbooks.", "Monitor, triage and manage security tools and vulnerabilities continuously.", "Escalate confirmed incidents with clear actions and support containment.")),
  mssService("soc-as-a-service", "SOC as a Service", "24/7 threat monitoring and response without building a SOC",
    "A fully managed security operations centre that collects your logs, detects threats around the clock and guides your response, delivered as a subscription.",
    ["Undetected Intrusions", "Ransomware Precursors", "Compromised Accounts", "Insider Activity", "Log Blind Spots"],
    ["24/7 monitoring", "Faster detection and triage", "No SIEM build burden", "Detection tuned to your environment"],
    MSS_PHASES("Onboard log sources to the SIEM and tune detection rules.", "Monitor alerts continuously and investigate suspicious activity.", "Notify your team with context and recommended containment steps.")),
  mssService("virtual-ciso", "Virtual CISO (vCISO)", "Senior security leadership on a flexible basis",
    "An experienced security leader who sets your strategy, runs your risk and compliance programme and reports to your board, without a full-time executive hire.",
    ["No Security Strategy", "Unmanaged Risk", "Compliance Pressure", "Weak Board Visibility", "Unprioritised Security Spend"],
    ["Executive-level guidance", "Flexible engagement", "Board and customer reporting", "Roadmap aligned to business goals"],
    [["Baseline Assessment", "Review current posture, risks, policies and obligations."], ["Strategy & Roadmap", "Define priorities, budget and a phased plan."], ["Programme Leadership", "Guide policies, risk management, vendor reviews and compliance."], ["Stakeholder Reporting", "Brief leadership and the board on risk and progress."], ["Continuous Review", "Adjust the programme as the business and threats change."]]),
  mssService("incident-response-recovery", "Incident Response & Recovery", "Expert help when an attack is under way",
    "On-call responders who contain attacks, investigate what happened and help you recover, backed by an optional retainer for fast engagement.",
    ["Ransomware", "Data Theft", "Account Takeover", "Malware Outbreaks", "Business Email Compromise"],
    ["Rapid engagement", "Evidence-preserving investigation", "Recovery support", "Post-incident hardening"],
    [["Triage", "Confirm the incident, scope impact and set priorities."], ["Containment", "Stop spread and cut off attacker access."], ["Investigation", "Determine root cause, timeline and affected data."], ["Eradication & Recovery", "Remove the threat and restore systems safely."], ["Lessons Learned", "Report and improve detection, response and defences."]]),
  mssService("virtual-security-team", "Virtual Security Team", "A flexible team of specialists on demand",
    "Access to a pool of security engineers, analysts and testers who work as an extension of your team on a continuing basis.",
    ["Hiring Gaps", "Inconsistent Security Delivery", "Backlogs in Security Tasks", "Key-Person Dependency"],
    ["Scale up or down as needed", "Broad skill coverage", "Lower cost than full-time hires", "Quick onboarding"],
    MSS_PHASES("Define roles, tools access and working practices with your team.", "Deliver agreed security tasks such as reviews, testing and monitoring.", "Escalate issues and support urgent work.")),
  mssService("third-eye-security-review", "Independent Security Review", "A fresh, objective look at your security setup",
    "An independent review of your existing security tools, services and provider performance, to confirm you are protected and getting value.",
    ["Provider Blind Spots", "Misconfigured Tools", "Unverified Vendor Claims", "Hidden Coverage Gaps", "Overlapping Spend"],
    ["Unbiased assessment", "Validates current providers", "Finds gaps and overlap", "Clear improvement actions"],
    [["Scoping", "Agree what tools, services and processes to review."], ["Evidence Collection", "Gather configurations, reports and incident history."], ["Independent Validation", "Test whether controls and services work as claimed."], ["Gap & Value Analysis", "Identify weaknesses and duplicated effort."], ["Recommendations", "Present a prioritised improvement plan."]]),
  mssService("soar-implementation", "SOAR Implementation & Automation", "Automate repetitive security operations",
    "We design and build security orchestration and automation playbooks that speed up triage, enrichment and response, and reduce analyst workload.",
    ["Manual Triage Delays", "Inconsistent Response", "Analyst Burnout", "Slow Containment", "Disconnected Tools"],
    ["Faster response times", "Consistent playbooks", "Less repetitive work", "Integrates with your existing tools"],
    [["Use-Case Selection", "Choose high-volume, high-value processes to automate."], ["Playbook Design", "Document and design workflows with approvals and safeguards."], ["Integration & Build", "Connect tools and build the automations."], ["Testing", "Validate playbooks safely before go-live."], ["Tuning & Handover", "Measure results and train your team."]]),
  mssService("security-monitoring-governance", "Security Monitoring Governance", "Make sure your monitoring is complete and effective",
    "We review what is monitored, how alerts are handled and whether detection supports your risk and compliance needs, then define clear governance for the process.",
    ["Unmonitored Critical Systems", "Unowned Alerts", "Weak Escalation Paths", "Untracked Detection Coverage", "Inconsistent Reporting"],
    ["Defined monitoring scope", "Clear alert ownership", "Coverage mapped to threats", "Management-level metrics"],
    [["Current-State Review", "Assess log sources, use cases and alert handling."], ["Coverage Mapping", "Map detection against relevant attack techniques."], ["Process Definition", "Define roles, severities, SLAs and escalation."], ["Metrics Design", "Set meaningful measures of monitoring quality."], ["Improvement Plan", "Prioritise gaps for remediation."]]),
  mssService("cyber-threat-intelligence-service", "Cyber Threat Intelligence Service", "Threat insight that feeds your defences",
    "A managed intelligence service that delivers relevant threat information and indicators, integrated into your monitoring and response.",
    ["Targeted Campaigns", "Emerging Vulnerabilities", "Leaked Data", "Impersonation", "Threat Actor Activity"],
    ["Relevant, filtered intelligence", "Feeds into detection", "Early warnings", "Analyst-written briefings"],
    MSS_PHASES("Define intelligence requirements and integrate feeds.", "Collect, analyse and curate threat information.", "Send alerts with recommended actions.")),
  mssService("lateral-movement-detection", "Lateral Movement Detection", "Spot attackers moving inside your network",
    "We improve your ability to detect an attacker who has already gained a foothold, by monitoring for credential abuse, remote execution and unusual internal connections.",
    ["Pass-the-Hash & Ticket Abuse", "Remote Service Abuse", "Credential Dumping", "Internal Scanning", "Privilege Escalation"],
    ["Detects post-compromise activity", "Reduces attacker dwell time", "Uses your existing telemetry", "Validated by simulation"],
    [["Telemetry Assessment", "Check that endpoint, identity and network logs are available."], ["Detection Engineering", "Build and tune rules for lateral movement techniques."], ["Simulation", "Safely simulate techniques to test detection."], ["Response Playbooks", "Define how analysts respond to these alerts."], ["Reporting", "Report coverage and remaining gaps."]]),
  mssService("pentest-as-a-service", "Penetration Testing as a Service", "Continuous testing on a subscription basis",
    "Regular, scheduled penetration testing delivered through a subscription, so new releases and changes are tested without repeated procurement.",
    ["Vulnerabilities After Releases", "Infrequent Testing", "Rushed Pre-Audit Testing", "Long Fix Cycles"],
    ["Testing throughout the year", "Predictable pricing", "Faster retesting", "Consistent testing team"],
    MSS_PHASES("Agree scope, cadence and a shared findings workflow.", "Perform scheduled tests on new and changed assets.", "Report critical findings immediately and retest fixes.")),
  mssService("perimeter-security", "Perimeter Security Management", "Manage your internet-facing defences",
    "We manage and review firewalls, VPNs, gateways and exposed services so your network edge stays tight and correctly configured.",
    ["Overly Permissive Firewall Rules", "Exposed Management Interfaces", "Outdated Firmware", "Weak VPN Configuration", "Unused Open Ports"],
    ["Cleaner rule sets", "Reduced attack surface", "Regular configuration review", "Change oversight"],
    MSS_PHASES("Integrate perimeter devices and baseline their configuration.", "Review rules, patch status and exposure on an ongoing basis.", "Recommend or apply approved changes quickly.")),
  mssService("access-control-management", "Access Control Management", "Make sure the right people have the right access",
    "We review and help manage identity and access, including privileged accounts, role design and periodic access reviews.",
    ["Excessive Privileges", "Orphaned Accounts", "Shared Credentials", "No Multi-Factor Authentication", "Unreviewed Admin Access"],
    ["Least-privilege access", "Regular access reviews", "Stronger authentication", "Audit evidence"],
    [["Access Inventory", "Identify users, roles, systems and privileged accounts."], ["Role & Policy Design", "Define role-based access and approval rules."], ["Review & Clean-up", "Remove excess and orphaned access."], ["Control Strengthening", "Enforce MFA and privileged access safeguards."], ["Ongoing Reviews", "Run periodic recertification."]]),
  mssService("cloud-configuration-review", "Cloud Configuration Review", "Keep cloud settings secure as they change",
    "We assess cloud accounts against security baselines and provide ongoing reviews to catch drift and risky changes.",
    ["Public Storage", "Over-Permissive Roles", "Disabled Logging", "Unencrypted Resources", "Configuration Drift"],
    ["Benchmark-based checks", "Multi-cloud coverage", "Drift detection", "Fix guidance"],
    MSS_PHASES("Connect read-only access to your cloud accounts.", "Scan and review configuration against benchmarks regularly.", "Report high-risk changes and guide fixes.")),
  mssService("cdn-security", "CDN & Edge Security", "Protect and harden content delivery and edge services",
    "We review and manage CDN, WAF and DDoS protection settings so your public sites stay fast, available and protected.",
    ["DDoS Attacks", "WAF Bypass", "Origin Server Exposure", "Cache Poisoning", "Misconfigured TLS"],
    ["Tuned WAF rules", "Origin protection", "DDoS readiness", "Improved availability"],
    MSS_PHASES("Review CDN, WAF and DNS configuration.", "Tune rules and monitor traffic and attacks.", "Respond to attacks and adjust protections.")),
  mssService("network-architecture-review", "Network Architecture Review", "Design networks that limit the blast radius",
    "We review your network design for segmentation, trust boundaries and resilience, and recommend improvements.",
    ["Flat Networks", "Weak Segmentation", "Single Points of Failure", "Unmanaged Remote Access", "Uncontrolled Third-Party Links"],
    ["Clear architecture findings", "Segmentation guidance", "Zero-trust aligned advice", "Practical roadmap"],
    [["Documentation Review", "Collect diagrams, rules and inventories."], ["Architecture Analysis", "Assess zones, flows and trust boundaries."], ["Validation", "Test key assumptions such as segmentation."], ["Design Recommendations", "Propose improved architecture."], ["Roadmap", "Prioritise changes into phases."]]),
  mssService("cloud-security-management", "Cloud Security Management", "Ongoing cloud security operations",
    "We continuously manage cloud security posture, identities, workloads and alerts across your cloud environments.",
    ["Misconfigurations", "Identity Misuse", "Workload Vulnerabilities", "Unmonitored Cloud Activity", "Compliance Drift"],
    ["Continuous posture monitoring", "Faster fixes", "Cloud-native expertise", "Compliance reporting"],
    MSS_PHASES("Connect accounts and enable security tooling.", "Monitor posture, identities and workloads continuously.", "Escalate and help remediate risky findings.")),
  mssService("virtualization-security", "Virtualization Security", "Secure hypervisors and virtual infrastructure",
    "We assess virtual platforms, hypervisors and management tools for weaknesses that could let an attacker reach many workloads at once.",
    ["Hypervisor Vulnerabilities", "VM Escape Risk", "Weak Management Access", "Poor VM Segmentation", "Unsecured Snapshots & Templates"],
    ["Platform hardening", "Management plane review", "Segmentation checks", "Benchmark-based findings"],
    [["Inventory", "Identify hosts, hypervisors and management tools."], ["Configuration Review", "Check against hardening guidance."], ["Access & Segmentation Review", "Test administrative access and network separation."], ["Vulnerability Review", "Identify missing patches and weaknesses."], ["Reporting", "Provide hardening recommendations."]])
);

function getServiceById(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase().trim();
  return SERVICES_DATA.find(item => item.id === s || item.id.replace(/-/g, "") === s.replace(/-/g, ""));
}
