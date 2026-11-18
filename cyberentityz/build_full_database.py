import json

# Load base 10 services from generate_services.py
from generate_services import services as base_services
from generate_all_services import raw_definitions as adv_services

all_services = list(base_services) + list(adv_services)

# DATA & PRIVACY (7 items)
data_privacy = [
    {
        "id": "data-security-audit",
        "title": "Data Security Audit",
        "category": "DATA & PRIVACY",
        "domain": "Assurance",
        "tagline": "End-to-End Structured & Unstructured Sensitive Data Security Assessment",
        "overview": "A Data Security Audit comprehensively identifies where your enterprise's most confidential data resides, how it moves across databases and cloud buckets, and whether existing encryption, DLP, and access controls adequately protect it from unauthorized exfiltration, accidental leaks, and insider threats.",
        "threats": ["Unmonitored Sensitive Data Sprawl (PII, Financial, Health)", "Unencrypted Data In Transit & At Rest", "Inadequate Database Access Controls & Excessive Grants", "Data Loss via Shadow Cloud Storage & Personal Drives", "Insider Threat Exfiltration Without Audit Trails"],
        "benefits": ["Complete Data Discovery & Classification Matrix", "Gap Analysis Against PCI-DSS, HIPAA, GDPR & DPDPA", "Cryptographic Key Management Hardening", "Prevention of Catastrophic Regulatory Fines & Breach Penalties"],
        "methodology": [
            {"phase": "Data Discovery & Asset Inventory", "desc": "Scan on-premise servers, cloud databases, and SaaS tools to discover structured and unstructured sensitive data."},
            {"phase": "Data Flow & Architecture Mapping", "desc": "Map how data is collected, processed, transmitted across network boundaries, and archived."},
            {"phase": "Access Control & Entitlement Audit", "desc": "Examine user permissions, service accounts, and multi-tenant isolation policies safeguarding data repositories."},
            {"phase": "Encryption & Key Management Validation", "desc": "Verify AES-256, TLS 1.3, KMS policies, and key rotation lifecycles protecting critical data stores."},
            {"phase": "Remediation & DLP Strategy", "desc": "Provide Data Loss Prevention (DLP) configuration blueprints and data lifecycle security policies."}
        ],
        "deliverables": ["Comprehensive Data Security Audit Dossier", "Enterprise Data Classification Register", "Data Loss Prevention (DLP) Deployment Roadmap", "Data Security Governance Statement"],
        "standards": ["NIST SP 800-53 (Data Security)", "ISO/IEC 27701", "DPDPA 2023", "GDPR Article 32"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "data-privacy-audit",
        "title": "Data Privacy Audit",
        "category": "DATA & PRIVACY",
        "domain": "Assurance",
        "tagline": "Comprehensive Privacy Impact Assessment & Regulatory Gap Analysis",
        "overview": "With global data privacy regulations expanding, organizations face strict accountability requirements for personal data processing. Our Data Privacy Audit conducts thorough Privacy Impact Assessments (PIA) and Data Protection Impact Assessments (DPIA), evaluating consent collection, user rights fulfillment, and cross-border data transfer safeguards.",
        "threats": ["Non-Compliance with GDPR, DPDPA, and Regional Privacy Laws", "Improper Consent Collection & Lack of Consent Logs", "Inability to Fulfill Data Subject Access Requests (DSAR)", "Unauthorized Cross-Border Data Transfers", "Dark Patterns in User Privacy Settings"],
        "benefits": ["Complete DPIA / PIA Readiness Report", "Standard Operating Procedures for DSAR Response within Legal Deadlines", "Privacy by Design Architecture Alignment", "Avoidance of Multi-Million Dollar Regulatory Sanctions"],
        "methodology": [
            {"phase": "Regulatory Scoping & Jurisdiction Mapping", "desc": "Determine applicable legal frameworks based on customer geography (GDPR, DPDPA, CCPA/CPRA, PDPL)."},
            {"phase": "Record of Processing Activities (RoPA) Review", "desc": "Audit legal basis for processing, data categories collected, third-party disclosures, and retention limits."},
            {"phase": "Consent Architecture & Cookie Compliance", "desc": "Inspect web banners, consent management platforms (CMPs), and unsubscribe workflows for legal validity."},
            {"phase": "Data Subject Rights (DSAR) Testing", "desc": "Simulate right-to-erasure, right-to-access, and data portability requests to test operational readiness."},
            {"phase": "Privacy Governance & Policy Delivery", "desc": "Deliver updated privacy notices, vendor processing agreements (DPAs), and privacy training roadmaps."}
        ],
        "deliverables": ["Data Privacy Impact Assessment (DPIA) Report", "Validated Record of Processing Activities (RoPA)", "DSAR Operational Playbook & Workflows", "Data Privacy Regulatory Compliance Scorecard"],
        "standards": ["EU GDPR", "India DPDPA 2023", "ISO/IEC 27701", "California CCPA/CPRA"],
        "duration": "2 to 4 Weeks"
    },
    {
        "id": "data-masking-privacy",
        "title": "Data Masking & Privacy",
        "category": "DATA & PRIVACY",
        "domain": "Assurance",
        "tagline": "Static & Dynamic Data Masking, Tokenization & Anonymization",
        "overview": "Prevent sensitive customer information from leaking into staging environments, analytics pipelines, and developer sandboxes. We design and implement Static Data Masking (SDM), Dynamic Data Masking (DDM), tokenization, and differential privacy algorithms that preserve format and referential integrity while protecting privacy.",
        "threats": ["Production PII Copied Directly into Staging / Test Databases", "Developers Having Unrestricted Access to Real Customer Data", "Analytics Tools Exposing Personally Identifiable Information", "Re-Identification Attacks on Anonymized Datasets", "Insider Data Scraping via Database Read Access"],
        "benefits": ["Safe Developer Staging Environments with Format-Preserving Masking", "Zero Exposure of Real Customer Data in Lower Environments", "Compliance with HIPAA De-Identification & GDPR Anonymization", "Referential Integrity Preserved Across Relational Schemas"],
        "methodology": [
            {"phase": "Sensitive Column & Field Discovery", "desc": "Scan databases to pinpoint credit cards, SSNs, Aadhaar numbers, phone numbers, and emails requiring masking."},
            {"phase": "Masking Architecture Design", "desc": "Select optimal algorithms (format-preserving encryption, deterministic tokenization, pseudonymization)."},
            {"phase": "Static Masking for Non-Prod", "desc": "Implement ETL masking pipelines that sanitize production databases before deployment to developer tiers."},
            {"phase": "Dynamic Masking for Role-Based Access", "desc": "Configure database proxy rules that mask sensitive columns in real time based on user role."},
            {"phase": "De-Identification Re-Identification Testing", "desc": "Attempt algorithmic re-identification to verify mathematical irreversibility."}
        ],
        "deliverables": ["Data Masking Architecture & Engineering Blueprint", "Configured Automated ETL Masking Scripts", "Anonymization Mathematical Resilience Report", "Privacy Engineering Verification Certificate"],
        "standards": ["ISO/IEC 20889 (De-identification techniques)", "HIPAA Safe Harbor Method", "GDPR Recital 26"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "dspm",
        "title": "DSPM",
        "category": "DATA & PRIVACY",
        "domain": "Assurance",
        "tagline": "Data Security Posture Management for Multi-Cloud & SaaS Repositories",
        "overview": "Data Security Posture Management (DSPM) delivers autonomous visibility into where sensitive data lives across AWS, Azure, GCP, Snowflake, BigQuery, and Salesforce. Our DSPM service discovers shadow data stores, maps who has access to them, and remediates security misconfigurations before data exfiltration occurs.",
        "threats": ["Forgotten Cloud Database Snapshots & Shadow Data", "Public Cloud Buckets Containing Sensitive Customer Records", "Dormant Accounts with Admin Access to Data Stores", "Cross-Account IAM Roles Permitting Unauthorized Extraction", "Unmonitored Data Drift Across Microservices and Lakes"],
        "benefits": ["Real-Time Cloud Data Discovery Across IaaS, PaaS & SaaS", "Context-Aware Risk Prioritization Based on Data Sensitivity", "Autonomous Policy Enforcement & Misconfiguration Remediation", "Full Visibility into Multi-Cloud Data Lineage & Access Paths"],
        "methodology": [
            {"phase": "Cloud Data Inventory Scanning", "desc": "Connect read-only DSPM scanners to cloud environments to inventory object stores, databases, and message queues."},
            {"phase": "Automated Content Classification", "desc": "Utilize NLP and pattern recognition to classify structured and unstructured documents containing secrets and PII."},
            {"phase": "Access & Identity Pathway Analysis", "desc": "Correlate IAM roles, network access paths, and public endpoints to identify exposed crown jewels."},
            {"phase": "Remediation & Least Privilege Enforcement", "desc": "Execute automated least-privilege policies and terminate dormant access permissions."},
            {"phase": "Continuous Posture Monitoring", "desc": "Establish real-time alerts for newly created shadow storage buckets or unauthorized data exports."}
        ],
        "deliverables": ["DSPM Cloud Data Asset Inventory", "Data Exposure & Attack Path Graph Analysis", "Automated Least-Privilege IAM Remediation Plan", "Executive Cloud Data Security Dashboard"],
        "standards": ["Gartner DSPM Framework", "CIS Multi-Cloud Benchmarks", "NIST SP 800-145"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "data-breach-simulation",
        "title": "Data Breach Simulation",
        "category": "DATA & PRIVACY",
        "domain": "Assurance",
        "tagline": "Real-World Data Exfiltration, Ransomware & Tabletop Breach Scenarios",
        "overview": "How would your executive leadership, legal counsel, and technical responders behave if 500,000 sensitive customer records were leaked online right now? Our Data Breach Simulation combines live technical exfiltration testing with executive tabletop crisis simulations to evaluate breach readiness, containment speed, and regulatory reporting capabilities.",
        "threats": ["Paralysis During High-Pressure Cyber Extortion Incidents", "Delayed Regulatory Breach Notifications (GDPR 72hr, CERT-In 6hr)", "Failure of DLP Egress Filtering Controls", "Uncoordinated Public Relations & Brand Reputation Collapse", "Lack of Clear Executive Decision-Making Authority During Crisis"],
        "benefits": ["Validates Technical Exfiltration Egress Filtering & DLP", "Stress-Tests C-Suite & Board Incident Response Playbooks", "Ensures Compliance with Strict 6-Hour and 72-Hour Reporting Mandates", "Identifies Gaps in Legal, Forensic, and PR Coordination"],
        "methodology": [
            {"phase": "Scenario Development & Crown Jewel Scoping", "desc": "Customize realistic scenarios (double-extortion ransomware, insider data theft, supply chain breach)."},
            {"phase": "Live Technical Data Exfiltration Simulation", "desc": "Attempt stealthy data egress over DNS tunneling, ICMP, HTTPS, and encrypted cloud channels to test DLP alarms."},
            {"phase": "Executive Tabletop Exercise (TTX)", "desc": "Facilitate a structured crisis simulation with executive leadership, legal counsel, HR, PR, and technical leads."},
            {"phase": "Regulatory Notification Timeline Evaluation", "desc": "Audit compliance with regulatory breach notification windows (CERT-In 6-hour, GDPR 72-hour)."},
            {"phase": "Post-Simulation Action Plan", "desc": "Deliver an executive after-action report with prioritized strategic improvements."}
        ],
        "deliverables": ["Executive Breach Simulation After-Action Report (AAR)", "Technical Data Exfiltration Resilience Scorecard", "Updated Cyber Crisis Management & Communication Plan", "Regulatory Breach Notification Checklist"],
        "standards": ["NIST SP 800-61 (Computer Security Incident Handling)", "ISO 22301", "CERT-In Cyber Crisis Management Plan"],
        "duration": "1 to 2 Weeks"
    },
    {
        "id": "sbom-sca",
        "title": "SBOM & SCA",
        "category": "DATA & PRIVACY",
        "domain": "Assurance",
        "tagline": "Software Bill of Materials & Software Composition Analysis",
        "overview": "Modern applications are constructed of up to 80% open-source third-party dependencies. Recent attacks (Log4j, SolarWinds, XZ Utils) demonstrate that supply chains are prime targets. We generate machine-readable Software Bills of Materials (SBOM in SPDX and CycloneDX formats) and conduct deep Software Composition Analysis (SCA) to identify vulnerable, poisoned, and out-of-license libraries.",
        "threats": ["Critical Zero-Day Vulnerabilities in Open-Source Libraries (Log4j)", "Malicious Dependency Confusion & Typosquatting Attacks", "Compromised Upstream Package Maintainers (Backdoors)", "GPL & Viral License Infringements Creating Legal Liabilities", "Lack of Inventory Visibility into Enterprise Software Components"],
        "benefits": ["Automated Generation of SPDX & CycloneDX Industry-Standard SBOMs", "Compliance with US Executive Order 14028 & EU Cyber Resilience Act", "Instant Triage When New Global Zero-Days are Disclosed", "Elimination of Legal Risks Associated with Open Source Licenses"],
        "methodology": [
            {"phase": "Repository & Binary Dependency Ingestion", "desc": "Ingest package lockfiles (npm, pip, Maven, Gradle, Go modules) and compiled container images."},
            {"phase": "SBOM Generation & Validation", "desc": "Generate standardized CycloneDX and SPDX SBOMs detailing every direct and transitive dependency."},
            {"phase": "Vulnerability Matching (CVE/NVD)", "desc": "Cross-reference dependencies against real-time vulnerability databases and exploit availability feeds."},
            {"phase": "License Risk & Compliance Audit", "desc": "Classify licenses into permissive, weak copyleft, and viral copyleft (GPL) to prevent IP exposure."},
            {"phase": "Continuous Supply Chain Governance", "desc": "Integrate automated dependency upgrade bots (Dependabot/Renovate) and policy gates into CI/CD."}
        ],
        "deliverables": ["Standardized Machine-Readable SBOM (SPDX/CycloneDX)", "Software Supply Chain Vulnerability Dossier", "Open Source Legal License Compliance Matrix", "Automated Dependency Gate Integration Scripts"],
        "standards": ["CycloneDX / SPDX Standards", "NTIA Minimum Elements for SBOM", "US Executive Order 14028", "EU Cyber Resilience Act (CRA)"],
        "duration": "1 to 2 Weeks"
    },
    {
        "id": "website-security",
        "title": "Website Security",
        "category": "DATA & PRIVACY",
        "domain": "Assurance",
        "tagline": "Continuous Perimeter Monitoring, Defacement Protection & SSL Hardening",
        "overview": "Your website is your organization's digital storefront and the most visible target for threat actors. Our Website Security service provides holistic 24/7 scanning, SSL/TLS certificate configuration audits, malware detection, web defacement monitoring, and Web Application Firewall (WAF) optimization to ensure uptime, trust, and client privacy.",
        "threats": ["Malicious Script Injections & Magecart Payment Skimming", "Website Defacement & Unauthorized Content Modification", "Expired or Misconfigured SSL/TLS Certificates", "Blacklisting by Google Safe Browsing and Search Engines", "Clickjacking, MIME Sniffing & Missing Security Headers", "DDoS Attacks Splicing Web Server Availability"],
        "benefits": ["Continuous External Perimeter & Defacement Monitoring", "A+ Grade SSL/TLS & Security Header Configurations", "Magecart & Client-Side JavaScript Tamper Protection", "Protection of Search Engine Reputation & Safe Browsing Status"],
        "methodology": [
            {"phase": "External Perimeter & Content Baseline", "desc": "Establish cryptographic baselines of production HTML, scripts, and media to detect unauthorized alterations."},
            {"phase": "SSL/TLS & Security Header Audit", "desc": "Audit cipher suites, HSTS preloading, Content-Security-Policy (CSP), and X-Frame-Options."},
            {"phase": "Client-Side Script & Supply Chain Audit", "desc": "Inspect third-party analytics and tracking tags for Magecart-style credit card skimming scripts."},
            {"phase": "WAF & DDoS Mitigation Hardening", "desc": "Fine-tune Cloudflare, AWS WAF, or Akamai rules to block scrapers, bots, and brute force floods."},
            {"phase": "Continuous Uptime & Integrity Monitoring", "desc": "Deploy automated 5-minute health and integrity pings with instant escalation for defacement."}
        ],
        "deliverables": ["Website Security Architecture Assessment", "A+ SSL/TLS & CSP Header Hardening Guide", "Magecart Client-Side Script Audit Dossier", "Official CYBERENTITYZ Website Security Seal"],
        "standards": ["OWASP Top 10", "Mozilla Web Security Guidelines", "PCI-DSS Requirement 6.4.3 (Script Security)"],
        "duration": "Ongoing / 1 Week Initial Audit"
    }
]

all_services.extend(data_privacy)

print(f"Total services loaded so far: {len(all_services)}")
