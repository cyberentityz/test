import json
from append_governance_and_mssp import all_services

mssp_services = [
    # MANAGED SECURITY (6 items)
    {
        "id": "managed-security-mssp",
        "title": "Managed Security (MSSP)",
        "category": "MANAGED SECURITY",
        "domain": "MSSP",
        "tagline": "End-to-End Managed Cyber Defense, Threat Hunting & 24/7 Monitoring",
        "overview": "CYBERENTITYZ Managed Security Services Provider (MSSP) delivers enterprise-grade cyber defense without the exorbitant cost of building an in-house Security Operations Center. We manage firewalls, EDR agents, cloud perimeters, and SIEM platforms around the clock, providing automated containment, active threat hunting, and proactive patch management.",
        "threats": ["Ransomware Outbreaks Over Weekends and Holidays", "Alert Fatigue Overwhelming Internal IT Staff", "Unmonitored Cloud Infrastructure and Remote Workforces", "High Cost & Scarcity of Dedicated Cybersecurity Talent"],
        "benefits": ["24/7/365 Continuous Threat Monitoring by Certified Cyber Analysts", "Sub-15 Minute Rapid Threat Containment SLA", "Significant Cost Savings Compared to Building an In-House SOC", "Full Stack Coverage: Cloud, Network, Endpoints & SaaS"],
        "methodology": [
            {"phase": "Onboarding & Sensor Deployment", "desc": "Deploy lightweight EDR agents, syslog forwarders, and cloud native log integrations."},
            {"phase": "Baseline Behavior Profiling", "desc": "Establish organizational baselines for network traffic, user access hours, and API calls."},
            {"phase": "24/7 Continuous Surveillance", "desc": "Monitor alerts 24/7/365, filtering noise and investigating anomalous signals in real time."},
            {"phase": "Rapid Threat Containment", "desc": "Isolate compromised endpoints, revoke compromised tokens, and block malicious IPs within minutes."},
            {"phase": "Monthly Executive Cyber Review", "desc": "Deliver detailed monthly threat metrics, patch statuses, and posture elevation roadmaps."}
        ],
        "deliverables": ["24/7/365 Managed Security Operations Retainer", "Real-Time Threat Notification & Containment SLA", "Monthly Executive Cybersecurity Threat Dossier", "Continuous Vulnerability Surveillance Feed"],
        "standards": ["NIST SP 800-61", "ISO 27001", "MITRE ATT&CK Framework"],
        "duration": "Annual Managed Service Agreement"
    },
    {
        "id": "soc-as-a-service",
        "title": "SOC as a Service",
        "category": "MANAGED SECURITY",
        "domain": "MSSP",
        "tagline": "Cloud-Native Next-Gen Security Operations Center (SIEM/XDR)",
        "overview": "Our SOC-as-a-Service provides your organization with an accredited, high-velocity Security Operations Center powered by state-of-the-art Next-Gen SIEM and XDR technologies. We correlate billions of telemetry events across endpoints, cloud providers, and identity systems to detect stealthy adversary behavior and neutralize threats in real time.",
        "threats": ["Stealthy Lateral Movement Evading Simple Antivirus Alarms", "Complex Multi-Stage Living-Off-The-Land (LotL) Attacks", "Unmonitored Multi-Cloud Event Logs across AWS, Azure, and GCP", "Delayed Incident Detection Leading to 200+ Day Attacker Dwell Times"],
        "benefits": ["Instant Cloud-Native SOC Deployment Without Capital Infrastructure Costs", "Tier 1, Tier 2, and Tier 3 Certified Incident Handler Coverage", "AI-Powered Threat Correlation Slashing Mean Time to Remediate (MTTR)", "Full Regulatory Compliance for Continuous Log Monitoring (PCI, SOC 2, HIPAA)"],
        "methodology": [
            {"phase": "SIEM Ingestion & Log Aggregation", "desc": "Ingest firewalls, Active Directory, cloud audit trails (CloudTrail, Azure Activity), and EDR telemetry."},
            {"phase": "Detection Engineering & Use-Case Rules", "desc": "Author customized correlation rules aligned with MITRE ATT&CK techniques specific to your tech stack."},
            {"phase": "Automated Triage & Human Investigation", "desc": "AI triage engines filter false alarms; certified security analysts investigate high-fidelity detections."},
            {"phase": "Active Incident Escalation & Response", "desc": "Execute containment playbooks, isolate compromised hosts, and support client remediation."},
            {"phase": "Continuous Tuning & Threat Hunting", "desc": "Proactively search logs for indicators of compromise (IOCs) and tune detection thresholds."}
        ],
        "deliverables": ["24/7 Cloud SOC Operations Desk", "Live Customer Threat Incident Dashboard", "Monthly Threat Detection & Response Metric Reports", "Annual SOC Log Integrity & Retention Attestation"],
        "standards": ["CREST SOC Criteria", "ISO 27035 (Incident Management)", "NIST SP 800-61"],
        "duration": "Annual Managed Service"
    },
    {
        "id": "v-ciso",
        "title": "V-CISO",
        "category": "MANAGED SECURITY",
        "domain": "MSSP",
        "tagline": "Virtual Chief Information Security Officer for Strategic Leadership & Governance",
        "overview": "Recruiting an experienced full-time CISO costs upwards of $300,000 annually and takes months. Our Virtual CISO (vCISO) service provides executive-level cybersecurity leadership on a flexible, fractional basis. Your vCISO directs your cyber strategy, presents to your Board of Directors, leads compliance programs, manages vendor risks, and represents your company in high-stakes enterprise sales deals.",
        "threats": ["Lack of Executive Cybersecurity Strategy & Clear Accountability", "Inability to Communicate Cyber Risk to Board Directors and Investors", "Security Bottlenecks Stalling Multi-Million Dollar B2B Enterprise Deals", "Misallocated Cybersecurity Budgets on Ineffective Point Tools"],
        "benefits": ["Seasoned Board-Level Security Leadership at a Fraction of the Cost", "Dedicated CISO Attending Board Meetings and Client Security Calls", "End-to-End Oversight of Audits, Certifications & Defense Operations", "Objective Technology Architecture & Tool Rationalization"],
        "methodology": [
            {"phase": "Executive Onboarding & Risk Baseline", "desc": "Interview board members and C-suite leaders to align cyber strategy with commercial revenue goals."},
            {"phase": "Cybersecurity Strategic Roadmap", "desc": "Author a 1-year and 3-year prioritized cybersecurity strategy and capital expenditure budget."},
            {"phase": "Governance & Policy Implementation", "desc": "Establish security steering committees, update enterprise policies, and oversee compliance."},
            {"phase": "Enterprise Sales & Customer Assurance", "desc": "Directly handle customer security reviews, questionnaires, and RFP security negotiations."},
            {"phase": "Board of Directors Reporting", "desc": "Deliver quarterly board-level cyber risk presentations and maturity progress reports."}
        ],
        "deliverables": ["Dedicated vCISO Executive Retainer", "Enterprise Multi-Year Cyber Strategy & Budget Document", "Quarterly Board of Directors Cyber Risk Briefing Pack", "Enterprise Security Representation on Sales Calls"],
        "standards": ["NIST CSF 2.0 (Govern Function)", "ISO 27001", "NACD Cyber-Risk Governance Handbook"],
        "duration": "Annual Executive Retainer"
    },
    {
        "id": "incident-response",
        "title": "Incident Response",
        "category": "MANAGED SECURITY",
        "domain": "MSSP",
        "tagline": "24/7 Emergency Breach Containment, Digital Forensics & Ransomware Triage",
        "overview": "When an active cyber attack strikes, every second counts. CYBERENTITYZ Incident Response retainer provides a 24/7 guaranteed emergency response hotline (+91 9500551090) with elite digital forensics specialists. We halt ransomware spread, evict adversaries, recover critical data safely, and guide legal and regulatory disclosure mandates.",
        "threats": ["Active Ransomware Encryption Paralyzing Enterprise Operations", "Compromised Domain Controllers and Cloud Admin Consoles", "Massive Data Exfiltration Demanding Multi-Million Dollar Extortion", "Paralysis Due to Lack of Prepared Emergency Response Personnel"],
        "benefits": ["Guaranteed Sub-1-Hour Emergency Response SLA (24/7/365)", "Immediate Adversary Eviction and Threat Containment", "Courtroom-Admissible Digital Forensics and Evidence Preservation", "Complete Support with Regulatory Notifications (CERT-In 6hr, GDPR 72hr)"],
        "methodology": [
            {"phase": "Emergency Triage & Scoping", "desc": "Establish secure out-of-band communication, assess incident severity, and establish containment plan."},
            {"phase": "Threat Containment & Isolation", "desc": "Sever infected networks, disable compromised accounts, and halt active malware beaconing."},
            {"phase": "Eradication & Backdoor Removal", "desc": "Hunt down persistence mechanisms, web shells, rogue admin keys, and malicious scheduled tasks."},
            {"phase": "Forensic Analysis & Root Cause", "desc": "Determine Patient Zero, infection vectors, exfiltrated files, and timeline of adversary dwell time."},
            {"phase": "Recovery & Hardened Restoration", "desc": "Restore clean systems from verified immutable backups and execute post-incident defense hardening."}
        ],
        "deliverables": ["Comprehensive Incident Response & Root Cause Dossier", "Executive Briefing for Board, Legal Counsel, and Insurers", "Post-Incident Hardening & Remediation Action Plan", "Regulatory Breach Notification Support Pack"],
        "standards": ["NIST SP 800-61 (Computer Security Incident Handling)", "ISO 27035", "SANS Incident Handler's Handbook"],
        "duration": "Immediate Emergency Dispatch / Annual Retainer"
    },
    {
        "id": "virtual-security-team",
        "title": "Virtual Security Team",
        "category": "MANAGED SECURITY",
        "domain": "MSSP",
        "tagline": "Turnkey On-Demand Team of Security Engineers, Architects & Analysts",
        "overview": "Building an in-house security department requires hiring security architects, penetration testers, GRC analysts, and SOC engineers. Our Virtual Security Team provides an entire multidisciplinary cybersecurity department on-demand. Scalable to your roadmap, we handle vulnerability scanning, architecture reviews, compliance updates, and security engineering.",
        "threats": ["Severe Scarcity and Staggering Cost of Hiring In-House Security Engineers", "Single-Point-of-Failure When Sole Security Employee Departs", "Lack of Breadth Needed Across AppSec, CloudSec, Network & Compliance"],
        "benefits": ["Instant Access to a Full Team of Certified Security Specialists", "No Recruitment Costs, HR Overhead, or Long-Term Hiring Risk", "Scalable Hours Based on Product Sprints and Audit Calendars", "Full Spectrum Coverage from Code Review to Cloud Architecture"],
        "methodology": [
            {"phase": "Resource Mapping & Skill Alignment", "desc": "Identify required disciplines (AppSec, Cloud, Compliance) and assign specialized security engineers."},
            {"phase": "Integration into Sprints & Workflows", "desc": "Embed our engineers directly into your Jira, Slack, and engineering standups."},
            {"phase": "Continuous Task Execution", "desc": "Conduct sprint code reviews, cloud posture fixes, policy updates, and employee training."},
            {"phase": "Proactive Security Projects", "desc": "Execute planned penetration tests, tabletop drills, and vendor risk reviews."},
            {"phase": "Monthly Retrospective & Velocity Review", "desc": "Evaluate security engineering output and align targets with upcoming milestones."}
        ],
        "deliverables": ["Dedicated Virtual Security Engineering Team Retainer", "Sprint Security Ticket Burndown & Velocity Reports", "Comprehensive Security Architecture Reviews", "Monthly Executive Security Operational Review"],
        "standards": ["OWASP SAMM", "NIST SP 800-181 (NICE Framework)", "ISO 27001"],
        "duration": "Annual Dedicated Retainer"
    },
    {
        "id": "third-eye-surveillance",
        "title": "Third Eye (Surveillance)",
        "category": "MANAGED SECURITY",
        "domain": "MSSP",
        "tagline": "Autonomous External Attack Surface Monitoring & Brand Protection",
        "overview": "Adversaries scan your organization continuously. CYBERENTITYZ Third Eye is an autonomous reconnaissance platform that looks at your enterprise from an attacker's outside perspective. Operating 24/7, Third Eye discovers newly created subdomains, exposed developer ports, leaked API credentials, rogue GitHub repositories, and typosquatted domains.",
        "threats": ["Shadow IT Subdomains Created by Marketing and Devs Without Security Knowledge", "Accidentally Exposed Database Ports (Elasticsearch, Redis, MongoDB) on AWS", "Leaked Corporate Source Code and API Tokens on GitHub", "Phishing Domains Impersonating Your Brand to Scam Customers"],
        "benefits": ["100% Real-Time Outside-In Attack Surface Visibility", "Zero-Configuration Asset Discovery (Finds Assets You Forgot Existed)", "Instant Alerts When High-Risk Ports or Secrets are Exposed", "Autonomous Brand Protection and Typosquat Domain Takedowns"],
        "methodology": [
            {"phase": "Autonomous Seed Discovery", "desc": "Input root domain, company name, and ASN to initiate automated recursive surface mapping."},
            {"phase": "Subdomain & Asset Enumeration", "desc": "Continuously query certificate transparency logs, DNS records, and internet-wide scanning sensors."},
            {"phase": "Port & Service Fingerprinting", "desc": "Identify newly opened ports, services, cloud storage buckets, and software versions."},
            {"phase": "Public Repository & Pastebin Scraping", "desc": "Scan public GitHub commits, Pastebin, and dark web dumps for company credentials."},
            {"phase": "Automated Alerting & Takedowns", "desc": "Trigger immediate Slack/email alerts for newly exposed risks and initiate domain takedowns."}
        ],
        "deliverables": ["Continuous Third Eye Attack Surface Surveillance Portal", "Weekly External Exposure & Shadow IT Summaries", "Real-Time Critical Exposure Emergency Alerts", "Brand Protection & Typosquat Domain Status Dashboard"],
        "standards": ["MITRE ATT&CK for Reconnaissance", "NIST SP 800-115", "OSSTMM"],
        "duration": "Continuous Annual Platform Subscription"
    },

    # CONTINUOUS MONITORING (6 items)
    {
        "id": "soar-integration",
        "title": "SOAR Integration",
        "category": "CONTINUOUS MONITORING",
        "domain": "MSSP",
        "tagline": "Security Orchestration, Automation & Response Workflow Engineering",
        "overview": "Manual response to cyber threats is too slow against automated attacks. We architect and implement Security Orchestration, Automation, and Response (SOAR) playbooks that connect your SIEM, firewalls, EDR, and identity providers. When threats are detected, our automated workflows quarantine hosts, revoke tokens, and block IPs in seconds.",
        "threats": ["Slow Manual Triage Allowing Ransomware to Spread Unchecked", "Alert Fatigue Burning Out SOC Analysts with Repetitive Low-Level Alarms", "Inconsistent Incident Containment Actions Dependent on Shift Quality"],
        "benefits": ["Reduces Mean Time to Respond (MTTR) from Hours to Milliseconds", "Automates 80% of Repetitive Tier-1 Security Ticket Operations", "Standardized, Repeatable Incident Containment Playbooks", "Seamless Orchestration Across Multi-Vendor Security Stacks"],
        "methodology": [
            {"phase": "Toolchain API Audit", "desc": "Map existing security tools (Splunk, Sentinel, CrowdStrike, Palo Alto, Okta) and API connectivity."},
            {"phase": "Playbook Workflow Design", "desc": "Design automated workflows for phishing triage, malware containment, and brute-force lockouts."},
            {"phase": "Automation Scripting & Integration", "desc": "Code robust Python/REST integration scripts with fail-safes to prevent accidental network disruption."},
            {"phase": "Simulated Attack Testing", "desc": "Trigger controlled test attacks to measure end-to-end automation execution speed."},
            {"phase": "Operational Handover & Training", "desc": "Deliver customized SOAR management documentation and train internal analysts."}
        ],
        "deliverables": ["SOAR Automated Playbook Engineering Blueprint", "Configured Production SOAR Playbooks Suite", "API Integration Code & Fail-Safe Documentation", "Automated Response Validation Dossier"],
        "standards": ["NIST SP 800-61", "Gartner SOAR Framework", "OASIS CACAO Playbooks"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "security-monitoring",
        "title": "Security Monitoring",
        "category": "CONTINUOUS MONITORING",
        "domain": "MSSP",
        "tagline": "24/7 Proactive Security Telemetry, Log Correlation & Threat Detection",
        "overview": "Modern organizations generate millions of log entries every hour. Our Security Monitoring service aggregates and analyzes security telemetry across servers, cloud workloads, network firewalls, and employee endpoints. Using advanced behavioural analytics, we cut through the noise to identify malicious anomalies before breaches occur.",
        "threats": ["Silent Dwell Time of Advanced Threat Actors Inside Corporate Networks", "Uncorrelated Security Events Dispersed Across Disparate IT Tools", "Compliance Failures for Missing Continuous Log Analysis (PCI, ISO, SOC 2)"],
        "benefits": ["Complete Real-Time Visibility Across Hybrid IT & Cloud Assets", "Substantially Reduces Attacker Dwell Time", "Fully Aligns with Mandatory Regulatory Log Review Clauses", "Customized Threat Detection Rules Tailored to Your Architecture"],
        "methodology": [
            {"phase": "Log Source Architecture & Forwarding", "desc": "Configure secure TLS syslog forwarding from firewalls, Active Directory, cloud, and databases."},
            {"phase": "Normalization & Parser Development", "desc": "Normalize diverse log formats into Common Event Format (CEF) for correlation."},
            {"phase": "Behavioral Anomaly Rules", "desc": "Deploy machine learning baselines to spot abnormal login hours, massive downloads, and privilege escalation."},
            {"phase": "24/7 Threat Investigation", "desc": "Dedicated analysts triage correlated incidents 24/7 and verify true positive indicators."},
            {"phase": "Quarterly Detection Optimization", "desc": "Refine rules based on emerging attack trends and environmental changes."}
        ],
        "deliverables": ["24/7 Security Monitoring Service Agreement", "Comprehensive Log Ingestion & Architecture Blueprint", "Weekly & Monthly Threat Detection Reports", "Regulatory Compliance Log Audit Certificate"],
        "standards": ["ISO 27001 Annex A.8.15", "PCI-DSS Requirement 10", "NIST SP 800-92"],
        "duration": "Annual Continuous Monitoring"
    },
    {
        "id": "threat-intelligence-platform",
        "title": "Threat Intelligence Platform",
        "category": "CONTINUOUS MONITORING",
        "domain": "MSSP",
        "tagline": "Automated TIP Deployment, IOC Ingestion & STIX/TAXII Threat Sharing",
        "overview": "A Threat Intelligence Platform (TIP) centralizes, correlates, and operationalizes threat data from commercial feeds, open-source intelligence, and industry ISACs. We deploy and manage enterprise TIPs that automatically push high-confidence Indicators of Compromise (IOCs) directly into your perimeter firewalls and EDR to block attacks pre-emptively.",
        "threats": ["Manual Ingestion of Threat Feeds Overwhelming Security Teams", "Stale and Outdated Threat Indicators Causing False Positive Blocks", "Lack of Industry-Specific Context on Threat Actor Tactics Targeting Your Sector"],
        "benefits": ["Automated Real-Time Blocklist Updates to Firewalls and EDR", "Eliminates Duplicate and Low-Confidence Threat Feed Noise", "Bi-Directional Threat Sharing via STIX/TAXII Standards", "Actionable Threat Intelligence Context Aligned with MITRE ATT&CK"],
        "methodology": [
            {"phase": "Feed Selection & ISAC Integration", "desc": "Integrate commercial, open-source (MISP), and industry-specific ISAC threat feeds."},
            {"phase": "Deduplication & Confidence Scoring", "desc": "Configure automated scoring algorithms to age out stale indicators and eliminate noise."},
            {"phase": "Enrichment & Contextualization", "desc": "Enrich IP/domain indicators with WHOIS, ASN, geolocation, and threat actor attribution."},
            {"phase": "Firewall & SIEM Push Automation", "desc": "Establish automated API feeds that push high-confidence blocklists directly to edge devices."},
            {"phase": "Platform Governance & Maintenance", "desc": "Provide ongoing maintenance, feed health checks, and rule tuning."}
        ],
        "deliverables": ["Enterprise Threat Intelligence Platform Architecture", "Configured Automated STIX/TAXII Threat Feed Pipeline", "Enriched IOC Export Automation to Edge Firewalls", "Threat Intelligence Governance Manual"],
        "standards": ["OASIS STIX/TAXII v2.1", "NIST SP 800-150", "MITRE ATT&CK Framework"],
        "duration": "3 to 5 Weeks Setup / Ongoing Support"
    },
    {
        "id": "cyber-threat-intel",
        "title": "Cyber Threat Intelligence",
        "category": "CONTINUOUS MONITORING",
        "domain": "MSSP",
        "tagline": "Strategic, Operational & Tactical Threat Intelligence for Decision-Makers",
        "overview": "Cyber Threat Intelligence (CTI) translates adversary activity into actionable business insight. We provide strategic briefings for boards and executives on geopolitical cyber risks, operational intelligence on threat actor groups targeting your industry sector, and tactical machine-readable indicators for your SOC engineers.",
        "threats": ["Blindness to Emerging Ransomware Groups Actively Targeting Your Sector", "Inability to Anticipate Nation-State Cyber Operations During Geopolitical Conflicts", "Reactive Security Operations Lacking Strategic Forward-Looking Vision"],
        "benefits": ["Executive Briefings on Emerging Cyber Threats and Geopolitical Risks", "Deep Insights into Specific Threat Actor Motives, Capabilities & TTPs", "Pre-Emptive Hardening of Defenses Before New Attack Waves Arrive", "Supports Enterprise Risk Management and Cyber Insurance Underwriting"],
        "methodology": [
            {"phase": "Threat Landscape & Sector Scoping", "desc": "Define organizational footprint, geography, industry sector, and critical assets."},
            {"phase": "Underground & Adversary Reconnaissance", "desc": "Track threat actor campaigns, infrastructure staging, and exploit development."},
            {"phase": "Adversary TTP Mapping", "desc": "Map observed threat group tactics against the MITRE ATT&CK enterprise matrix."},
            {"phase": "Strategic & Tactical Report Authoring", "desc": "Publish tailored intelligence reports with specific defensive recommendations."},
            {"phase": "Executive Briefings & Defense Alignment", "desc": "Conduct quarterly briefing sessions with executive leadership and defense engineers."}
        ],
        "deliverables": ["Quarterly Strategic Cyber Threat Intelligence Reports", "Real-Time Flash Threat Bulletins for Emerging Zero-Days", "Industry Threat Actor Profile Dossiers", "Executive CTI Briefing Sessions"],
        "standards": ["MITRE ATT&CK for CTI", "NIST SP 800-150", "ENISA Threat Landscape Framework"],
        "duration": "Annual Subscription"
    },
    {
        "id": "lateral-movement-detection",
        "title": "Lateral Movement Detection",
        "category": "CONTINUOUS MONITORING",
        "domain": "MSSP",
        "tagline": "Active Directory Deception, Honeypots & Internal Attack Containment",
        "overview": "Once attackers breach a single employee workstation, they attempt to move laterally across Active Directory to compromise domain controllers and sensitive servers. Our Lateral Movement Detection deploys deception technology, honeypots, breadcrumbs, and honey-tokens that trigger un-ignorable alarms the moment an intruder attempts credential dumping or lateral pivoting.",
        "threats": ["Attacker Silently Navigating Internal LAN for Months Undetected", "Pass-the-Hash, Pass-the-Ticket, and Overpass-the-Hash Exploitation", "Compromise of Active Directory Domain Administrator Credentials", "Ransomware Spreading Automously to Every Connected File Server"],
        "benefits": ["Instant High-Fidelity Alarms on Internal Attacker Reconnaissance", "Zero False Positives (Legitimate Users Never Touch Honeypot Assets)", "Slows Down and Traps Advanced Adversaries in Decoy Environments", "Protects Critical Domain Controllers and Database Segments"],
        "methodology": [
            {"phase": "Active Directory Hygiene & Path Mapping", "desc": "Map existing attack paths using BloodHound and identify unneeded administrative privileges."},
            {"phase": "Deception Strategy Architecture", "desc": "Design strategic placement of honey-tokens, fake credentials, and decoy file shares."},
            {"phase": "Decoy System & Honeypot Deployment", "desc": "Deploy decoy servers and honeypots designed to look like high-value financial or DB targets."},
            {"phase": "Alert Integration & High-Priority Triaging", "desc": "Route honeypot triggers directly to Tier-3 incident response teams for immediate isolation."},
            {"phase": "Red Team Validation Testing", "desc": "Conduct simulated internal attack to verify that deception triggers fire accurately."}
        ],
        "deliverables": ["Active Directory Deception Architecture Blueprint", "Deployed Decoy & Honeypot Infrastructure Suite", "Lateral Movement Rapid Containment Playbook", "Internal Attack Detection Verification Certificate"],
        "standards": ["MITRE ATT&CK Lateral Movement Techniques", "NIST SP 800-115", "CIS Active Directory Hardening Guide"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "pentest-as-service",
        "title": "Penetration Test as Service",
        "category": "CONTINUOUS MONITORING",
        "domain": "MSSP",
        "tagline": "Continuous Automated & Manual Penetration Testing (PTaaS)",
        "overview": "Annual penetration testing is no longer sufficient in fast-moving cloud environments with continuous CI/CD deployments. Penetration Testing as a Service (PTaaS) delivers continuous, on-demand testing combining automated scanning with scheduled manual ethical hacking sprints whenever your engineers release new features.",
        "threats": ["Vulnerabilities Introduced During Bi-Weekly Feature Sprints Going Undetected for a Year", "Compliance Deadlines Missed Due to Scheduling Bottlenecks with External Testers", "Lack of Real-Time Visibility into Remediation Progress and Retesting"],
        "benefits": ["Test on Every Major Release Sprint Rather Than Once a Year", "On-Demand Retesting Included at Zero Additional Cost", "Real-Time Cloud Vulnerability Dashboard with Jira Integration", "Accelerates Compliance for SOC 2, ISO 27001, and PCI-DSS"],
        "methodology": [
            {"phase": "Asset Onboarding & Continuous Scanners", "desc": "Connect external domains, APIs, and cloud perimeters to continuous daily vulnerability scanners."},
            {"phase": "Sprint-Aligned Manual Testing", "desc": "Schedule dedicated manual penetration testing sprints aligned with engineering release cycles."},
            {"phase": "Real-Time Vulnerability Ingestion", "desc": "Stream validated findings directly into developer Jira queues with proof-of-concept steps."},
            {"phase": "1-Click Developer Retesting", "desc": "Developers click re-test upon patch commit; our security team re-verifies within 24 hours."},
            {"phase": "Continuous Compliance Attestation", "desc": "Generate real-time executive compliance letters for prospective enterprise buyers."}
        ],
        "deliverables": ["PTaaS Continuous Vulnerability Platform Access", "Live Developer Jira Synchronization Integration", "Continuous Real-Time VAPT Executive Clearance Letters", "Quarterly Comprehensive Penetration Testing Summaries"],
        "standards": ["OWASP Top 10", "CREST Standards", "PTES", "NIST SP 800-115"],
        "duration": "Annual Continuous PTaaS Subscription"
    },

    # DEFENSIVE OPS (7 items)
    {
        "id": "perimeter-security",
        "title": "Perimeter Security",
        "category": "DEFENSIVE OPS",
        "domain": "MSSP",
        "tagline": "Next-Gen Firewall (NGFW), Edge Security & Zero-Trust Perimeter Hardening",
        "overview": "The modern enterprise perimeter has expanded across cloud gateways, remote workers, and software-defined WANs. Our Perimeter Security service audits, designs, and optimizes Next-Generation Firewalls (Palo Alto, Fortinet, Check Point), Zero Trust Network Access (ZTNA) gateways, and edge intrusion prevention systems.",
        "threats": ["Legacy Firewall Rule Sprawl Creating Inadvertent Security Holes", "Inbound Port Exposure Permitting Direct Brute Force on RDP/SSH", "Evasion of Perimeter IPS by Modern Encrypted Malware Traffic", "Unmonitored Outbound Connections Exfiltrating Sensitive Corporate Data"],
        "benefits": ["Zero-Trust Network Access (ZTNA) Architecture Migration", "Optimization and Cleanup of Legacy Firewall Rule Bloat", "Deep Packet Inspection (DPI) and SSL/TLS Decryption Optimization", "Robust Defense Against Inbound Exploits and Outbound C2 Traffic"],
        "methodology": [
            {"phase": "Firewall Rule Base & Config Review", "desc": "Audit all active and inactive firewall rules, NAT configurations, and access control lists (ACLs)."},
            {"phase": "Traffic Inspection & SSL Decryption", "desc": "Optimize deep packet inspection and safe SSL/TLS decryption policies for outbound web traffic."},
            {"phase": "Intrusion Prevention (IPS) Tuning", "desc": "Fine-tune IPS signature sets and behavioral heuristics to block threats without false drops."},
            {"phase": "Egress Filtering Enforcement", "desc": "Strictly restrict outbound ports and protocols to prevent reverse shells and data exfiltration."},
            {"phase": "Zero-Trust Architecture Roadmap", "desc": "Transition from permissive VPN access to identity-aware Zero Trust Network Access (ZTNA)."}
        ],
        "deliverables": ["Perimeter Firewall Architecture & Rule Optimization Dossier", "Zero-Trust Network Access (ZTNA) Implementation Guide", "Intrusion Prevention (IPS) Tuning Report", "Perimeter Defense Certification Statement"],
        "standards": ["NIST SP 800-41 (Firewalls)", "CIS Firewall Benchmarks", "Zero Trust Architecture (NIST SP 800-207)"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "access-control-review",
        "title": "Access Control Review",
        "category": "DEFENSIVE OPS",
        "domain": "MSSP",
        "tagline": "Identity & Access Management (IAM), Least Privilege & Privileged Access (PAM)",
        "overview": "Identity is the new security perimeter. Our Access Control Review conducts exhaustive evaluations of your enterprise Identity and Access Management (IAM), Active Directory, Okta, Azure AD, and Privileged Access Management (PAM) systems. We eliminate privilege creep, enforce least privilege, and implement robust multi-factor authentication.",
        "threats": ["Privilege Creep Accumulating Excessive Rights Over Employee Lifecycles", "Dormant Accounts of Former Employees Retaining System Access", "Lack of Multi-Factor Authentication (MFA) on Critical Admin Consoles", "Unvaulted Hardcoded Credentials in Automated Service Accounts"],
        "benefits": ["Enforcement of Strict Principle of Least Privilege (PoLP)", "Elimination of Orphaned and Dormant User Accounts", "Secure Vaulting of High-Privilege Domain Admin Credentials", "Compliance with Identity Requirements in ISO 27001, SOC 2, and PCI-DSS"],
        "methodology": [
            {"phase": "Identity Directory Ingestion", "desc": "Extract and analyze all user accounts, groups, role assignments, and service accounts."},
            {"phase": "Privilege Creep & Orphan Account Analysis", "desc": "Cross-reference active directories against HR termination lists to eliminate orphaned access."},
            {"phase": "Role-Based Access Control (RBAC) Design", "desc": "Define streamlined, standardized RBAC and Attribute-Based Access Control (ABAC) roles."},
            {"phase": "Privileged Access Management (PAM) Setup", "desc": "Implement just-in-time access, session recording, and credential vaulting for admins."},
            {"phase": "Continuous Access Review Certification", "desc": "Establish automated quarterly access review workflows for business managers."}
        ],
        "deliverables": ["Enterprise Access Control & IAM Audit Dossier", "Privileged Account Hardening Blueprint", "Role-Based Access Control (RBAC) Clean Matrix", "Identity Security Governance Certificate"],
        "standards": ["NIST SP 800-63 (Digital Identity Guidelines)", "ISO 27001 Annex A.9", "CIS Identity Benchmarks"],
        "duration": "2 to 4 Weeks"
    },
    {
        "id": "cloud-config-review",
        "title": "Cloud Config Review",
        "category": "DEFENSIVE OPS",
        "domain": "MSSP",
        "tagline": "Automated & Expert Manual Hardening for AWS, Azure & Google Cloud",
        "overview": "Over 90% of cloud security failures result from customer misconfigurations. Our Cloud Configuration Review evaluates your AWS, Microsoft Azure, and GCP foundations against CIS Cloud Benchmarks, examining storage encryption, VPC security groups, serverless execution permissions, and centralized logging architecture.",
        "threats": ["Public S3 Buckets or Azure Storage Accounts Exposing Customer Records", "VPC Security Groups Permitting 0.0.0.0/0 Inbound to Databases", "Missing CloudTrail / Activity Log Retention Preventing Forensic Analysis", "Root Account Operating Without Multi-Factor Authentication"],
        "benefits": ["Identifies and Remediates Dangerous Cloud Misconfigurations", "CIS Cloud Foundation Benchmark Level 1 & 2 Alignment", "Infrastructure as Code (Terraform) Remediation Snippets", "Prevents Accidental Cloud Security Breaches and Catastrophic Leaks"],
        "methodology": [
            {"phase": "Cloud Organization Hierarchy Review", "desc": "Audit multi-account architecture, AWS Organizations, Azure Management Groups, and GCP Projects."},
            {"phase": "Identity, Root & IAM Audit", "desc": "Verify root account lockout, MFA enforcement, and elimination of wildcards in IAM policies."},
            {"phase": "Network & Perimeter Configuration", "desc": "Inspect VPC peering, security group rules, route tables, and Internet Gateway access."},
            {"phase": "Data Storage & Cryptography Review", "desc": "Audit KMS key policies, default bucket encryption, and object versioning protections."},
            {"phase": "Logging, Monitoring & Alarms", "desc": "Verify centralized SIEM log export, CloudWatch/CloudTrail alarms, and retention policies."}
        ],
        "deliverables": ["Cloud Infrastructure Configuration Audit Dossier", "CIS Cloud Benchmark Compliance Scorecard", "Terraform & IaC Remediation Code Library", "Cloud Hardening Verification Certificate"],
        "standards": ["CIS AWS/Azure/GCP Foundations Benchmarks", "NIST SP 800-145", "Cloud Security Alliance (CSA) CCM"],
        "duration": "1 to 2 Weeks"
    },
    {
        "id": "cdn-security",
        "title": "CDN Security",
        "category": "DEFENSIVE OPS",
        "domain": "MSSP",
        "tagline": "Cloudflare, Akamai, AWS CloudFront & Fastly Edge Defense & WAF Tuning",
        "overview": "Content Delivery Networks (CDNs) and edge reverse proxies serve as your primary shield against massive DDoS attacks and malicious web traffic. We optimize and harden Cloudflare, Akamai, Fastly, and AWS CloudFront configurations: authoring custom WAF rules, configuring bot management, and stopping origin server bypasses.",
        "threats": ["Adversaries Bypassing CDN to Attack Origin Server IP Directly", "Automated Scraping Bots Consuming Expensive Backend API Bandwidth", "Volumetric Distributed Denial of Service (DDoS) Saturating Origin Bandwidth", "Misconfigured Edge Caching Leaking Private User Data to Other Clients"],
        "benefits": ["Guaranteed Defense Against Massive L3/L4 and L7 DDoS Attacks", "Zero Leakage of Origin Server IP Addresses via Strict Shielding", "Custom WAF Rules Blocking Advanced Zero-Days at the Edge", "Bot Management Preventing Scalpers, Credential Stuffers, and Scrapers"],
        "methodology": [
            {"phase": "Edge Architecture & Routing Audit", "desc": "Verify that all corporate DNS records are proxied through CDN and origin IPs are concealed."},
            {"phase": "Origin Shielding & Mutual TLS (mTLS)", "desc": "Enforce strict firewall rules allowing inbound traffic only from authenticated CDN IP ranges."},
            {"phase": "Web Application Firewall (WAF) Rule Tuning", "desc": "Deploy custom edge rules blocking malicious user agents, SQLi, XSS, and rate abusers."},
            {"phase": "Bot Management & Challenge Configuration", "desc": "Configure JavaScript challenges and managed challenges for automated scraping tools."},
            {"phase": "Cache Poisoning & Edge Performance Audit", "desc": "Verify that private user sessions and Authorization headers are never cached at the edge."}
        ],
        "deliverables": ["CDN Edge Architecture & WAF Optimization Report", "Origin Server Lockdown & mTLS Configuration Guide", "Edge Bot Management & Rate-Limiting Policy Suite", "DDoS Resilience Verification Certificate"],
        "standards": ["OWASP Top 10", "Cloudflare / Akamai Security Best Practices", "NIST SP 800-189"],
        "duration": "1 to 2 Weeks"
    },
    {
        "id": "network-architecture",
        "title": "Network Architecture",
        "category": "DEFENSIVE OPS",
        "domain": "MSSP",
        "tagline": "Secure Network Design, Micro-Segmentation & Zero-Trust Architecture",
        "overview": "Flawed network architecture cannot be fixed by software patches. Our Network Architecture consulting designs secure, segmented, and scalable network topologies for campus headquarters, data centers, branch offices, and multi-cloud environments. We implement micro-segmentation, software-defined perimeters (SDP), and Zero-Trust architecture.",
        "threats": ["Flat Network Architecture Allowing Single Compromise to Impact Entire Company", "Unrestricted Lateral Movement Between Workstations and Production Databases", "Insecure Branch Office VPN Tunnels Lacking Traffic Inspection", "Complex Spaghetti Topologies that Nobody Fully Understands"],
        "benefits": ["Micro-Segmentation Containing Attacks to Their Point of Origin", "Defense-in-Depth Network Design Following Zero-Trust Principles", "Optimized Routing and Reduced Network Latency Across Multi-Cloud", "Clear, Auditable Network Topology Blueprints for Compliance"],
        "methodology": [
            {"phase": "Current State Topology Discovery", "desc": "Map physical and logical network diagrams, routing tables, subnets, and VLANs."},
            {"phase": "Zone & Trust Boundary Partitioning", "desc": "Define micro-segmented security zones separating user endpoints, DMZ, and databases."},
            {"phase": "Zero-Trust Architecture Design", "desc": "Design identity-aware software-defined perimeters replacing legacy broad-access VPNs."},
            {"phase": "Redundancy & High Availability Engineering", "desc": "Engineer active-active firewall clusters, BGP dynamic routing, and redundant uplinks."},
            {"phase": "Implementation & Verification Plan", "desc": "Deliver phased, zero-downtime cutover plans and configuration templates for Cisco/Palo Alto/Arista."}
        ],
        "deliverables": ["Enterprise Secure Network Architecture Blueprint", "Zero-Trust Micro-Segmentation Design Manual", "Firewall Zone & Traffic Flow Matrix", "Network Architecture Executive Summary"],
        "standards": ["NIST SP 800-207 (Zero Trust Architecture)", "CIS Network Security Benchmarks", "IEEE 802.1Q"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "cloud-security-management",
        "title": "Cloud Security Management",
        "category": "DEFENSIVE OPS",
        "domain": "MSSP",
        "tagline": "24/7 Managed Cloud Security Operations, Guardrails & Policy Enforcement",
        "overview": "Managing multi-cloud security requires specialized tooling, continuous vigilance, and rapid incident handling. Our Cloud Security Management service provides 24/7 proactive security administration across AWS, Azure, and GCP: deploying automated security guardrails, managing AWS Security Hub / Azure Defender, and conducting continuous patch management.",
        "threats": ["Rapid Cloud Innovation Outpacing Security Team Governance", "Multi-Cloud Blind Spots Where Incidents Go Unnoticed for Days", "Exhausting Developer Time Triaging Generic Cloud Security Alerts", "Unauthorized Cryptomining Instances Launched on Compromised Cloud Keys"],
        "benefits": ["24/7 Proactive Security Administration Across Multi-Cloud Accounts", "Automated Cloud Guardrails Preventing Developers from Opening Public Ports", "Instant Neutralization of Compromised Cloud API Credentials", "Predictable Monthly Operating Cost for Complete Cloud Security"],
        "methodology": [
            {"phase": "Cloud Organization Onboarding", "desc": "Connect centralized security tooling (AWS Security Hub, GuardDuty, Azure Security Center, GCP SCC)."},
            {"phase": "Guardrail & Service Control Policy (SCP) Setup", "desc": "Enforce strict organizational SCPs restricting unauthorized regions and dangerous services."},
            {"phase": "24/7 Cloud Alert Triage & Response", "desc": "Investigate real-time threat alarms from GuardDuty, CloudTrail, and Defender."},
            {"phase": "Automated Secret & Key Rotation", "desc": "Manage automated KMS cryptographic key rotation and IAM credential lifecycles."},
            {"phase": "Monthly Cloud Security Review", "desc": "Deliver monthly cost, compliance, and threat mitigation reports to cloud engineering leadership."}
        ],
        "deliverables": ["24/7 Managed Cloud Security Operations Agreement", "Multi-Cloud Security Guardrail Architecture Blueprint", "Automated Cloud Incident Containment SLA", "Monthly Cloud Security Governance Scorecard"],
        "standards": ["CIS Cloud Benchmarks", "Cloud Security Alliance (CSA) Security Guidance", "NIST SP 800-145"],
        "duration": "Annual Managed Cloud Agreement"
    },
    {
        "id": "virtualization-security",
        "title": "Virtualization Security",
        "category": "DEFENSIVE OPS",
        "domain": "MSSP",
        "tagline": "VMware vSphere, Hyper-V, KVM, Nutanix & Hypervisor Hardening",
        "overview": "Hypervisors host the digital foundation of enterprise private clouds and data centers. If an attacker breaches the virtualization layer, all hosted virtual machines, databases, and guest operating systems fall. We audit and harden VMware vSphere/ESXi, Microsoft Hyper-V, Nutanix AHV, and KVM environments against hypervisor escapes and unauthorized VM snapshot extraction.",
        "threats": ["Hypervisor Escape Exploits (Guest-to-Host VM Breakouts)", "Ransomware Targeting ESXi Hypervisors (LockBit, BlackCat) Encrypting All VMs", "Unencrypted Virtual Machine Disk (VMDK) Backups Stolen from Storage LUNs", "Insecure vCenter Web Interfaces Exposed to Management Networks", "Virtual Switch (vSwitch) VLAN Hopping and Promiscuous Sniffing"],
        "benefits": ["Immunizes Hypervisors Against Ransomware Target Campaigns", "Hardens ESXi, vCenter, and Hyper-V Against Zero-Day Escapes", "Validates Virtual Switch Security and VLAN Isolation", "Ensures Strict Compliance for Virtualized PCI-DSS and HIPAA Workloads"],
        "methodology": [
            {"phase": "Hypervisor Architecture & Inventory", "desc": "Map physical host clusters, vCenter servers, hypervisor build versions, and SAN/NAS storage LUNs."},
            {"phase": "vCenter & Management Plane Lockdown", "desc": "Enforce MFA, restrict management network access, and disable insecure SSH/ESXi shell access."},
            {"phase": "Virtual Machine Isolation & Escape Audit", "desc": "Review VM configuration files (.vmx), disable unneeded virtual hardware, and check guest-host isolation."},
            {"phase": "Virtual Networking & vSwitch Hardening", "desc": "Configure MAC address changes, forged transmits, and promiscuous mode restrictions on port groups."},
            {"phase": "Storage & VMDK Encryption Verification", "desc": "Verify VMware vSphere Native Key Provider and VM encryption at rest on storage pools."}
        ],
        "deliverables": ["Enterprise Virtualization Security Hardening Dossier", "VMware vSphere & ESXi Hardening Scripts (PowerCLI)", "Virtual Switch & VLAN Security Configuration Blueprint", "Hypervisor Security Clearance Certificate"],
        "standards": ["VMware vSphere Security Configuration Guide", "CIS VMware ESXi Benchmarks", "NIST SP 800-125 (Virtualization Security)"],
        "duration": "2 to 3 Weeks"
    }
]

all_services.extend(mssp_services)

print(f"COMPLETE! Total services assembled across all domains: {len(all_services)}")

# Generate full services-data.js
js_content = "/**\n * CYBERENTITYZ™ — COMPREHENSIVE CYBERSECURITY SERVICES DATABASE\n * Full Briskinfosec-aligned knowledge base for all 75+ assurance, governance, and mssp offerings\n */\n\nconst SERVICES_DATA = " + json.dumps(all_services, indent=2) + ";\n\n// Helper to get service by id/slug\nfunction getServiceById(id) {\n  if (!id) return null;\n  const cleanId = id.toLowerCase().trim();\n  return SERVICES_DATA.find(s => s.id === cleanId) || null;\n}\n\n// Helper to get services by domain\nfunction getServicesByDomain(domain) {\n  return SERVICES_DATA.filter(s => s.domain.toLowerCase() === domain.toLowerCase());\n}\n\n// Helper to get services by category\nfunction getServicesByCategory(cat) {\n  return SERVICES_DATA.filter(s => s.category.toLowerCase() === cat.toLowerCase());\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SERVICES_DATA, getServiceById, getServicesByDomain, getServicesByCategory };\n}\n"

with open('services-data.js', 'w') as f:
    f.write(js_content)

print(f"Successfully generated services-data.js with {len(all_services)} services!")
