import json
from build_full_database import all_services

# COMPLIANCE FRAMEWORKS (13 items)
compliance_frameworks = [
    {
        "id": "iso-27001",
        "title": "ISO 27001:2022",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Information Security Management System (ISMS) Implementation & Audit",
        "overview": "ISO/IEC 27001:2022 is the globally recognized gold standard for Information Security Management Systems (ISMS). CYBERENTITYZ guides enterprises through every step of ISO 27001:2022 compliance: from initial gap analysis and risk assessment to the implementation of the 93 restructured Annex A controls and successful Stage 1 and Stage 2 certification audits.",
        "threats": ["Information Security Governance Deficits", "Non-Compliance with Global Enterprise RFP Mandates", "Unstructured Risk Assessment Methodologies", "Missing Annex A Technological & Organizational Controls", "Third-Party Vendor Information Security Exposure"],
        "benefits": ["100% Guaranteed ISO 27001:2022 Certification Readiness", "Seamless Transition from Legacy ISO 27001:2013 Standards", "Restructured Annex A Controls Implementation (4 Themes)", "Unlocks High-Value Global Enterprise Contracts & Partnerships"],
        "methodology": [
            {"phase": "Gap Assessment & ISMS Scoping", "desc": "Evaluate current information security policies against ISO 27001:2022 clauses and define ISMS scope."},
            {"phase": "Risk Assessment & Treatment Plan (RATP)", "desc": "Establish formal risk registers, define risk appetite, and map mitigations to Annex A controls."},
            {"phase": "Policy Formulation & Documentation", "desc": "Author comprehensive ISMS policies, procedures, and Statement of Applicability (SoA)."},
            {"phase": "Internal Audit & Management Review", "desc": "Execute rigorous mock internal audits to identify non-conformities before external auditors arrive."},
            {"phase": "Certification Audit Support", "desc": "Provide real-time liaison support during external Stage 1 and Stage 2 certification audits."}
        ],
        "deliverables": ["Complete ISO 27001:2022 ISMS Policy Toolkit", "Statement of Applicability (SoA) Document", "Risk Assessment & Treatment Plan (RATP)", "Internal Audit Report & Remediation Log"],
        "standards": ["ISO/IEC 27001:2022", "ISO/IEC 27002:2022", "ISO/IEC 27005"],
        "duration": "8 to 12 Weeks"
    },
    {
        "id": "soc-2",
        "title": "SOC 2",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "SOC 2 Type 1 & Type 2 Trust Services Criteria Attestation",
        "overview": "Service Organization Control (SOC 2) attestation is mandatory for SaaS, cloud, and technology vendors selling to North American and global enterprises. We prepare organizations for AICPA SOC 2 Type 1 and Type 2 examinations across the Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
        "threats": ["Loss of Enterprise B2B SaaS Sales Deals", "Lack of Auditable Evidence for Security Controls Over Time", "Deficient Change Management & CI/CD Traceability", "Unmonitored Subservice Organizations & Cloud Vendors", "Unauthorized Data Access to Multi-Tenant Environments"],
        "benefits": ["Accelerates B2B Enterprise Sales Cycles", "AICPA Accredited CPA Partner Audit Readout", "Continuous Evidence Collection Automation", "Type 1 (Design) and Type 2 (Operational Effectiveness) Preparedness"],
        "methodology": [
            {"phase": "Trust Services Criteria Scoping", "desc": "Select relevant TSC categories (Security baseline, plus Availability, Confidentiality, etc.)."},
            {"phase": "Gap Analysis & Remediation Roadmap", "desc": "Assess system description, employee onboarding, access controls, and infrastructure monitoring."},
            {"phase": "Automated Evidence Engine Deployment", "desc": "Connect compliance automation platforms to AWS, GitHub, Okta, and Jira for continuous evidence harvesting."},
            {"phase": "Readiness Assessment & Mock Audit", "desc": "Simulate auditor requests, sample control populations, and resolve non-conformances."},
            {"phase": "CPA Examination Liaison", "desc": "Coordinate directly with accredited independent CPA auditors until the final SOC 2 report is issued."}
        ],
        "deliverables": ["SOC 2 System Description Document", "Trust Services Criteria Evidence Catalog", "SOC 2 Remediation & Policy Manual", "Final SOC 2 Type 1 / Type 2 CPA Attestation Report"],
        "standards": ["AICPA Trust Services Criteria (TSP Section 100)", "SSAE 18", "AT-C Section 205"],
        "duration": "6 to 8 Weeks (Type 1) / 3 to 6 Months (Type 2 Window)"
    },
    {
        "id": "pci-dss",
        "title": "PCI-DSS",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Payment Card Industry Data Security Standard (v4.0 Transition & QSA Audit)",
        "overview": "Any business that stores, processes, or transmits payment cardholder data must comply with PCI-DSS. With the mandatory enforcement of PCI-DSS v4.0, organizations must meet heightened customized validation requirements, multi-factor authentication mandates, and client-side script security checks. Our Qualified Security Assessor (QSA) network guides you through ROC, SAQ, and ASV scanning.",
        "threats": ["Payment Cardholder Data Breaches & Fines from Card Brands", "Card Skimming Attacks on Web Checkout Pages (Magecart)", "Scope Creep Expanding Cardholder Data Environment (CDE)", "Non-Compliance Penalties of up to $100,000/Month from Banks", "Loss of Ability to Process Visa, Mastercard, and Amex Transactions"],
        "benefits": ["Smooth Transition to PCI-DSS v4.0 Enhanced Requirements", "CDE Scope Reduction Strategies to Minimize Audit Overhead", "Approved Scanning Vendor (ASV) Quarterly Scans Included", "Attestation of Compliance (AoC) and Report on Compliance (RoC) Issuance"],
        "methodology": [
            {"phase": "Cardholder Data Environment (CDE) Scoping", "desc": "Map payment flows, tokenization points, point-of-sale systems, and isolate CDE to minimize audit scope."},
            {"phase": "v4.0 12-Requirement Gap Assessment", "desc": "Review all 12 core requirements, targeted risk analyses, and customized implementation options."},
            {"phase": "Technical Penetration & ASV Scanning", "desc": "Conduct mandatory annual network/app penetration testing and quarterly ASV vulnerability scans."},
            {"phase": "Policy, Script & MFA Remediation", "desc": "Implement client-side script management (Req 6.4.3), automated phishing defense, and MFA (Req 8.4.2)."},
            {"phase": "Formal QSA Audit & AoC Delivery", "desc": "Perform formal QSA audit, sign off Report on Compliance (RoC), and submit AoC to acquiring banks."}
        ],
        "deliverables": ["Official Report on Compliance (RoC) or SAQ (A, A-EP, D)", "Attestation of Compliance (AoC) Signed by QSA", "Quarterly ASV Vulnerability Scan Certificates", "Annual PCI-DSS Penetration Testing Report"],
        "standards": ["PCI-DSS v4.0", "PCI SSC Guidelines", "NIST SP 800-52"],
        "duration": "6 to 10 Weeks"
    },
    {
        "id": "hipaa",
        "title": "HIPAA",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Health Insurance Portability and Accountability Act Security & Privacy Audit",
        "overview": "Healthcare providers, health tech startups, and Business Associates handling Protected Health Information (ePHI) are legally required to comply with the HIPAA Security, Privacy, and Breach Notification Rules. We conduct rigorous gap assessments, technical safeguards audits, Business Associate Agreement (BAA) reviews, and workforce compliance training to eliminate OCR penalty liabilities.",
        "threats": ["Massive OCR Civil Monetary Penalties (Up to $1.9M/Violation)", "Ransomware Attacks Locking Hospital Systems & Electronic Health Records", "Unencrypted ePHI Stored on Laptops, Mobile Devices, and Cloud Shares", "Improper Disposal of Physical & Electronic Medical Records", "Missing or Deficient Business Associate Agreements (BAAs)"],
        "benefits": ["Full Alignment with HIPAA Privacy, Security, and Omnibus Rules", "Protection of Electronic Protected Health Information (ePHI)", "Business Associate Agreement (BAA) Inventory and Remediation", "Shield Against HHS Office for Civil Rights (OCR) Enforcement Actions"],
        "methodology": [
            {"phase": "ePHI Flow & System Inventory", "desc": "Map everywhere electronic protected health information is created, received, maintained, or transmitted."},
            {"phase": "Administrative Safeguards Audit", "desc": "Review security management processes, assigned security responsibility, and workforce clearance procedures."},
            {"phase": "Physical Safeguards Review", "desc": "Inspect facility access controls, workstation use policies, and physical server room protections."},
            {"phase": "Technical Safeguards Testing", "desc": "Audit unique user identification, emergency access procedures, automatic logoff, and end-to-end encryption."},
            {"phase": "Breach Notification & BAA Overhaul", "desc": "Establish 60-day breach notification procedures and update vendor BAA contracts."}
        ],
        "deliverables": ["HIPAA Security & Privacy Risk Assessment Dossier", "ePHI Data Flow Architecture Diagram", "HIPAA Policy & Business Associate Agreement (BAA) Toolkit", "Executive HIPAA Compliance Verification Certificate"],
        "standards": ["HIPAA Security Rule (45 CFR Part 164 Subpart C)", "HIPAA Privacy Rule (Subpart E)", "HITECH Act", "NIST SP 800-66"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "gdpr",
        "title": "GDPR",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "EU General Data Protection Regulation Compliance & DPO Advisory",
        "overview": "The European Union's GDPR carries severe financial penalties of up to €20 million or 4% of global annual turnover. CYBERENTITYZ offers comprehensive GDPR compliance consulting: establishing valid legal processing bases, drafting Records of Processing Activities (RoPA), instituting Data Protection Impact Assessments (DPIA), and providing Virtual Data Protection Officer (vDPO) representation.",
        "threats": ["Regulatory Penalties up to 4% of Global Annual Turnover", "Unlawful Cross-Border Data Transfers Following Schrems II", "Failure to Honor Data Subject Rights (DSAR) within 30 Days", "Inadequate 72-Hour Breach Notification to Supervisory Authorities", "Invalid Consent Mechanisms and Cookie Consent Violations"],
        "benefits": ["Unlocks Seamless Business Operations Across All 27 EU Member States", "Full Operationalization of Data Subject Rights (Right to be Forgotten)", "Compliant Cross-Border Data Transfer Frameworks (SCCs & TIAs)", "Virtual DPO (Data Protection Officer) Support Included"],
        "methodology": [
            {"phase": "Article 30 RoPA Compilation", "desc": "Document all personal data processing activities, categories of data subjects, and retention periods."},
            {"phase": "Legal Basis & Consent Mechanism Audit", "desc": "Review legitimate interests assessments (LIA), consent opt-ins, and privacy notices."},
            {"phase": "Cross-Border Transfer Impact Assessment (TIA)", "desc": "Evaluate data transfers outside the EEA and implement Standard Contractual Clauses (SCCs)."},
            {"phase": "Technical & Organizational Measures (TOMs)", "desc": "Audit pseudonymization, encryption, access controls, and data minimization practices."},
            {"phase": "Incident Response & 72-Hour Drill", "desc": "Establish formal incident triage procedures to report breaches to Data Protection Authorities within 72 hours."}
        ],
        "deliverables": ["Article 30 Record of Processing Activities (RoPA)", "Data Protection Impact Assessment (DPIA) Reports", "Standard Contractual Clauses & Vendor DPA Templates", "Official GDPR Compliance Attestation Certificate"],
        "standards": ["EU Regulation 2016/679 (GDPR)", "EDPB Guidelines", "ISO/IEC 27701"],
        "duration": "6 to 8 Weeks"
    },
    {
        "id": "dpdpa",
        "title": "DPDPA",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "India Digital Personal Data Protection Act 2023 Implementation",
        "overview": "India's Digital Personal Data Protection Act (DPDPA 2023) establishes a modern regulatory regime governing the processing of digital personal data. With penalties reaching up to ₹250 Crores per violation, our Chennai-based compliance team helps organizations implement explicit notice protocols, parental consent mechanisms for minors, Data Protection Board reporting, and Data Fiduciary obligations.",
        "threats": ["Penalties Reaching Up to ₹250 Crores per Violation by the Data Protection Board", "Processing Personal Data Without Clear, Unbundled Multilingual Notice", "Unlawful Processing of Children's Data and Targeted Behavioral Tracking", "Failure to Implement Reasonable Security Safeguards to Prevent Data Breaches", "Inability to Fulfill Grievance Redressal and Data Erasure Mandates"],
        "benefits": ["Full Compliance with India's Premier Sovereign Data Privacy Legislation", "Tailored Guidance from Chennai's Local Cybersecurity Leaders", "Notice & Consent Architecture Available in 22 Scheduled Languages", "Data Fiduciary & Significant Data Fiduciary (SDF) Preparedness"],
        "methodology": [
            {"phase": "Digital Personal Data Scoping", "desc": "Identify digital personal data collected across web portals, mobile apps, and employee systems."},
            {"phase": "Notice & Consent Architecture Overhaul", "desc": "Redesign consent flows to be itemized, unbundled, and accessible in English and 22 Indian languages."},
            {"phase": "Children's Data & Age Verification Safeguards", "desc": "Institute verifiable parental consent mechanisms and disable behavioral monitoring of minors."},
            {"phase": "Reasonable Security Safeguards Implementation", "desc": "Implement robust technical controls (encryption, VAPT, access control) mandated under Section 8(5)."},
            {"phase": "Grievance Redressal & Board Reporting", "desc": "Establish internal Data Protection Officers and mandatory breach notification procedures."}
        ],
        "deliverables": ["DPDPA 2023 Compliance Gap & Readiness Matrix", "Itemized Multilingual Notice & Consent Templates", "Grievance Redressal Mechanism Standard Operating Procedures", "Data Fiduciary Compliance Verification Certificate"],
        "standards": ["Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)", "MeitY DPDPA Rules", "CERT-In Cyber Guidelines"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "nist-csf",
        "title": "NIST CSF",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "NIST Cybersecurity Framework 2.0 (Govern, Identify, Protect, Detect, Respond, Recover)",
        "overview": "The NIST Cybersecurity Framework is the benchmark standard for designing enterprise cyber resilience. With the release of NIST CSF 2.0, governance is now elevated to an overarching core pillar. We evaluate and elevate your security maturity across all six functions: GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND, and RECOVER.",
        "threats": ["Fragmented, Siloed Cybersecurity Strategy Without Executive Governance", "Lack of Unified Visibility Across Assets, Risks & Supply Chains", "Slow Threat Detection and Uncoordinated Incident Containment", "Unpreparedness for Business Continuity and Disaster Recovery", "Inability to Benchmark Security Posture Against Industry Peers"],
        "benefits": ["Full Implementation of Newly Released NIST CSF 2.0 Architecture", "Benchmark Security Posture with Objective Tier 1 to Tier 4 Maturity Scores", "Bridge the Gap Between Technical Defense and Board Governance", "Recognized Globally by Federal, Enterprise, and Financial Entities"],
        "methodology": [
            {"phase": "Profile Current State (As-Is)", "desc": "Evaluate current controls across all 6 NIST CSF functions, categories, and subcategories."},
            {"phase": "Define Target Profile (To-Be)", "desc": "Collaborate with leadership to establish desired target maturity tiers based on risk appetite."},
            {"phase": "Gap Analysis & Priority Scoring", "desc": "Calculate gap delta between Current and Target profiles, prioritizing high-risk vulnerabilities."},
            {"phase": "Action Plan & Roadmap Execution", "desc": "Deploy governance frameworks, endpoint security controls, and response playbooks."},
            {"phase": "Executive Metrics & Continuous Review", "desc": "Deliver executive dashboard scorecards for ongoing board oversight."}
        ],
        "deliverables": ["NIST CSF 2.0 Maturity Assessment Scorecard", "Target State Implementation Strategic Roadmap", "NIST CSF Subcategory Mapping Matrix", "Executive Cybersecurity Governance Report"],
        "standards": ["NIST Cybersecurity Framework 2.0", "NIST SP 800-53 Rev. 5", "ISO/IEC 27001"],
        "duration": "4 to 8 Weeks"
    },
    {
        "id": "irdai",
        "title": "IRDAI",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Insurance Regulatory and Development Authority of India Cybersecurity Audit",
        "overview": "The Insurance Regulatory and Development Authority of India (IRDAI) mandates stringent cybersecurity frameworks for insurance companies, TPAs, brokers, and web aggregators. Our IRDAI audit covers Board Oversight, Cyber Crisis Management Plans (CCMP), perimeter defense, biometric access, SOC operations, and mandatory annual external assurance.",
        "threats": ["Regulatory Penalties & Suspension of License by IRDAI", "Policyholder Sensitive Data & Financial Record Compromise", "Unauthorized Access to Core Insurance ERP & Underwriting Systems", "Inadequate Cyber Crisis Management Planning (CCMP)", "Deficient Third-Party Vendor and Broker Risk Oversight"],
        "benefits": ["100% Guaranteed Compliance with IRDAI Cybersecurity Guidelines", "Assurance Provided by Certified Professionals (CISA/CISSP/CEH)", "Comprehensive Board-Ready Cyber Security Assurance Report", "Safeguarding of Policyholder Digital Assets & Financial Trust"],
        "methodology": [
            {"phase": "IRDAI Checklist Gap Assessment", "desc": "Evaluate IT infrastructure and operations against all clauses of IRDAI Information and Cyber Security Guidelines."},
            {"phase": "Core Insurance System VAPT", "desc": "Conduct penetration testing of underwriting portals, claims management systems, and broker APIs."},
            {"phase": "SOC & Incident Response Evaluation", "desc": "Audit 24/7 Security Operations Center monitoring, log retention policies, and escalation protocols."},
            {"phase": "Cyber Crisis Management Plan (CCMP) Review", "desc": "Assess and test the board-approved Cyber Crisis Management Plan and business continuity readiness."},
            {"phase": "Regulatory Submission Support", "desc": "Compile the formal IRDAI Cyber Security Assurance Report for regulatory submission."}
        ],
        "deliverables": ["Official IRDAI Cybersecurity Assurance Audit Report", "IRDAI Compliance Checklist Gap Matrix", "Cyber Crisis Management Plan (CCMP) Validation Dossier", "Executive Board Cyber Security Summary"],
        "standards": ["IRDAI Information and Cyber Security Guidelines", "CERT-In Guidelines", "ISO 27001:2022"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "iso-22301",
        "title": "ISO 22301 (BCP)",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Business Continuity Management System (BCMS) & Disaster Recovery",
        "overview": "Operational resilience is essential to survival when disaster strikes. ISO 22301 specifies requirements for establishing a robust Business Continuity Management System (BCMS). We conduct Business Impact Analyses (BIA), establish Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO), draft Disaster Recovery (DR) plans, and facilitate live failover simulation drills.",
        "threats": ["Extended Production Outages Following Ransomware or Power Grid Collapse", "Failure to Meet Client Service Level Agreements (SLAs)", "Unrealistic RTO and RPO Metrics That Cannot Be Met During Crisis", "Untested Disaster Recovery Sites and Backup Failures", "Loss of Mission-Critical Personnel and Supply Chain Breakdown"],
        "benefits": ["Minimize Revenue Loss and Operational Downtime During Catastrophes", "Objective Business Impact Analysis (BIA) Across All Business Units", "Validated Disaster Recovery (DR) Secondary Site Failovers", "ISO 22301 Certification Readiness Guarantee"],
        "methodology": [
            {"phase": "Business Impact Analysis (BIA)", "desc": "Identify critical business functions, quantify financial impact of downtime, and establish RTO/RPO targets."},
            {"phase": "Risk Assessment & Threat Modeling", "desc": "Assess operational risks including cyber incidents, natural disasters, telecommunications loss, and key person dependency."},
            {"phase": "Business Continuity Strategy & DR Planning", "desc": "Develop disaster recovery architecture, cloud failover triggers, and emergency workforce relocations."},
            {"phase": "Live Simulation & Tabletop Drills", "desc": "Conduct unannounced crisis drills and technical data center failovers to test recovery execution."},
            {"phase": "BCMS Internal Audit & Certification Support", "desc": "Perform pre-certification internal audit to ensure seamless ISO 22301 accreditation."}
        ],
        "deliverables": ["Enterprise Business Impact Analysis (BIA) Report", "Disaster Recovery (DR) Technical Playbook", "Crisis Management & Communications Protocol", "ISO 22301 BCMS Readiness & Audit Dossier"],
        "standards": ["ISO 22301:2019", "ISO 22313", "NIST SP 800-34 (Contingency Planning)"],
        "duration": "6 to 8 Weeks"
    },
    {
        "id": "iso-42001",
        "title": "ISO 42001 (AI)",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Artificial Intelligence Management System (AIMS) Certification",
        "overview": "ISO/IEC 42001:2023 is the world's first certifiable standard for Artificial Intelligence Management Systems (AIMS). It establishes requirements for responsible, ethical, transparent, and secure development and deployment of AI models and machine learning pipelines, ensuring compliance with upcoming global regulations including the EU AI Act.",
        "threats": ["Algorithmic Bias, Discrimination & Ethical Violations", "Uncontrolled AI Model Drift, Hallucinations & Inaccurate Decisions", "Regulatory Sanctions Under the EU AI Act and Global AI Mandates", "Intellectual Property Infringement in Training Datasets", "Lack of Human-in-the-Loop Oversight for High-Risk AI Decisions"],
        "benefits": ["World's First Certifiable AI Management System Standard", "Preparation for Mandatory Compliance with the EU AI Act", "Establishes Organizational Trust, Fairness, and Explainability in AI", "Unlocks Enterprise Adoption for Proprietary AI Solutions"],
        "methodology": [
            {"phase": "AI Context & Use-Case Categorization", "desc": "Inventory all AI systems, algorithms, and models; classify by risk tier (minimal, high, prohibited)."},
            {"phase": "AI Risk Assessment & Impact Analysis", "desc": "Evaluate data provenance, training bias, safety hazards, and explainability limitations."},
            {"phase": "AIMS Policy & Governance Formulation", "desc": "Establish formal AI governance committees, human-in-the-loop policies, and validation gates."},
            {"phase": "Technical Model Verification & Testing", "desc": "Audit models for adversarial robustness, prompt safety, data leakage, and drift detection."},
            {"phase": "ISO 42001 Internal Audit & Certification", "desc": "Conduct formal pre-assessment internal audits to prepare for accredited certification."}
        ],
        "deliverables": ["ISO 42001 AI Management System (AIMS) Manual", "AI Ethical Impact & Risk Assessment Matrix", "AI Model Governance & Monitoring Guidelines", "ISO 42001 Certification Readiness Dossier"],
        "standards": ["ISO/IEC 42001:2023", "NIST AI Risk Management Framework", "EU Artificial Intelligence Act"],
        "duration": "8 to 12 Weeks"
    },
    {
        "id": "iec-62443",
        "title": "IEC 62443 (OT)",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Security for Industrial Automation and Control Systems (IACS)",
        "overview": "IEC 62443 is the premier international cybersecurity standard series for Industrial Automation and Control Systems (IACS) across manufacturing, oil & gas, chemicals, and energy. We assist asset owners, system integrators, and product manufacturers in implementing Zones & Conduits, Security Levels (SL 1-4), and secure product lifecycles.",
        "threats": ["Industrial Cyber Sabotage Impacting Human & Environmental Safety", "Lack of Zone & Conduit Segmentation in Factory Floors", "Insecure Remote Access Protocols Used by Third-Party Machine Vendors", "Unauthenticated PLC Commands & Safety Instrumented System (SIS) Tampering", "Non-Compliance with Critical Infrastructure Procurement Mandates"],
        "benefits": ["Gold Standard Certification for Industrial Asset Owners & Product Vendors", "Purdue Model to IEC 62443 Zones and Conduits Translation", "Verification of Security Levels SL 1 through SL 4 Requirements", "Defense Against Targeted Industrial Malware (Stuxnet/Triton style)"],
        "methodology": [
            {"phase": "System Under Consideration (SuC) Scoping", "desc": "Define boundaries of factory automation, manufacturing lines, and process control systems."},
            {"phase": "High-Level Cybersecurity Risk Assessment", "desc": "Identify unmitigated risks to human life, environmental safety, and equipment damage."},
            {"phase": "Zone and Conduit Partitioning", "desc": "Segment network into logical security zones and enforce strict firewalled conduits."},
            {"phase": "Detailed Security Level (SL) Target Verification", "desc": "Evaluate controls against required Security Assurance Levels (SL-T 1 through SL-T 4)."},
            {"phase": "Policies, Procedures & Certification Support", "desc": "Deliver industrial security policies, patch management guidelines, and audit documentation."}
        ],
        "deliverables": ["IEC 62443 Industrial Cybersecurity Dossier", "Zone & Conduit Engineering Architecture Blueprints", "Security Assurance Level (SL-A) Gap Matrix", "Official IEC 62443 Compliance Attestation"],
        "standards": ["IEC 62443-2-1 / 62443-2-4 / 62443-3-2 / 62443-3-3", "ISA/IEC 62443 Series", "NIST SP 800-82"],
        "duration": "8 to 12 Weeks"
    },
    {
        "id": "iso-21434",
        "title": "ISO 21434 (Automotive)",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Road Vehicles — Cybersecurity Engineering for Automotive OEMs & Tier 1s",
        "overview": "ISO/SAE 21434 defines mandatory cybersecurity engineering requirements for the entire lifecycle of road vehicle electrical and electronic systems. It is the core prerequisite for vehicle type approval under UNECE Regulation R155. We help automotive OEMs and Tier-1 suppliers establish Cyber Security Management Systems (CSMS) and perform Threat Analysis and Risk Assessments (TARA).",
        "threats": ["Denial of Vehicle Type Approval Under UNECE R155 Regulation", "Inability to Sell Road Vehicles in the EU, Japan, and Global Markets", "Remote Vehicle Fleet Hijacking via Cellular Telematics Units", "Supply Chain Cybersecurity Deficits Across Tier 1 and Tier 2 Component Vendors", "Product Liability & Catastrophic Safety Recalls"],
        "benefits": ["Ensures Vehicle Type Approval (VTA) Compliance Under UNECE R155/R156", "Full Implementation of ISO/SAE 21434 Engineering Standards", "Methodical Threat Analysis and Risk Assessment (TARA) Workflows", "Cybersecurity Throughout the Complete Vehicle Lifecycle (Concept to Decommissioning)"],
        "methodology": [
            {"phase": "Cyber Security Management System (CSMS) Setup", "desc": "Establish organizational cybersecurity governance, roles, and supplier management processes."},
            {"phase": "Concept Phase & Item Definition", "desc": "Define item boundaries, operational environments, and cybersecurity goals."},
            {"phase": "Threat Analysis & Risk Assessment (TARA)", "desc": "Identify threat scenarios, assess attack paths using CVSS/EVITA, and calculate risk values."},
            {"phase": "Product Development & Verification", "desc": "Verify hardware/software design, secure coding, CAN bus filtering, and fuzz testing."},
            {"phase": "Audit & Vehicle Type Approval Preparation", "desc": "Compile cybersecurity case files for submission to vehicle type approval authorities."}
        ],
        "deliverables": ["Automotive Cyber Security Management System (CSMS) Manual", "Item-Level Threat Analysis & Risk Assessment (TARA) Matrix", "Cybersecurity Case File for Vehicle Type Approval", "ISO/SAE 21434 Compliance Certificate"],
        "standards": ["ISO/SAE 21434:2021", "UNECE Regulation 155 (CSMS)", "UNECE Regulation 156 (SUMS)"],
        "duration": "10 to 14 Weeks"
    },
    {
        "id": "pdpl",
        "title": "PDPL (Saudi)",
        "category": "COMPLIANCE FRAMEWORKS",
        "domain": "Governance",
        "tagline": "Kingdom of Saudi Arabia Personal Data Protection Law Compliance",
        "overview": "The Saudi Arabian Personal Data Protection Law (PDPL) enacted by the Saudi Data and AI Authority (SDAIA) governs the processing of personal data within the Kingdom. Organizations doing business in KSA must comply with strict cross-border data transfer limitations, Arabic consent requirements, and mandatory registration on the National Data Governance Platform.",
        "threats": ["Severe Fines up to SAR 5 Million and Imprisonment for Criminal Data Leaks", "Unlawful Exfiltration of Saudi Citizens' Personal Data Outside the Kingdom", "Failure to Register on the SDAIA National Data Governance Platform", "Non-Compliant Consent Documentation in Arabic Language", "Severe Commercial Exclusion from KSA Government & Enterprise Tenders"],
        "benefits": ["Unlocks Market Access for Corporate & Government Tenders in Saudi Arabia", "Full Alignment with SDAIA National Data Governance Regulations", "Compliant Cross-Border Data Transfer Approval Support", "Arabic & English Data Protection Policies and Documentation"],
        "methodology": [
            {"phase": "PDPL Applicability & Data Ingestion", "desc": "Identify all processing operations involving personal data of individuals residing in KSA."},
            {"phase": "SDAIA Regulation Gap Analysis", "desc": "Evaluate data protection controls against the Implementing Regulations of the PDPL."},
            {"phase": "Cross-Border Transfer Justification", "desc": "Review data flows leaving the Kingdom and prepare exemption requests or Standard Contractual Clauses."},
            {"phase": "Data Subject Rights & Notice Localization", "desc": "Draft localized privacy notices and consent collection interfaces in Arabic and English."},
            {"phase": "National Platform Registration Support", "desc": "Guide registration and compliance submission on the SDAIA National Data Governance Platform."}
        ],
        "deliverables": ["KSA PDPL Regulatory Compliance Gap Report", "Bilingual (Arabic/English) Privacy Notice & Consent Suite", "Cross-Border Data Transfer Justification Dossier", "Official PDPL Compliance Attestation Certificate"],
        "standards": ["Saudi Arabia PDPL (Royal Decree No. M/19)", "SDAIA Implementing Regulations", "National Data Management Office (NDMO) Standards"],
        "duration": "6 to 8 Weeks"
    }
]

all_services.extend(compliance_frameworks)

# GRC SERVICES (7 items)
grc_services = [
    {
        "id": "grc-framework",
        "title": "GRC Framework",
        "category": "GRC SERVICES",
        "domain": "Governance",
        "tagline": "Integrated Governance, Risk Management & Compliance Architecture",
        "overview": "Siloed risk management leads to blind spots and operational friction. Our GRC Framework consulting unites Governance, Risk management, and Regulatory Compliance into an integrated, automated architecture. We align corporate strategy with regulatory obligations, streamline audit preparation, and deliver unified risk reporting to board leadership.",
        "threats": ["Redundant Audits Across Multiple Overlapping Regulations", "Disconnected Risk Registers Leading to Unanticipated Breaches", "Manual Excel-Based Tracking Prone to Human Error", "Lack of Executive Visibility into Organization-Wide Risk Posture"],
        "benefits": ["Single-Pane-of-Glass Governance Architecture", "Reduces Audit Preparation Costs by up to 40%", "Automates Policy Distribution & Employee Attestation", "Unifies ISO 27001, SOC 2, and Privacy Controls"],
        "methodology": [
            {"phase": "Governance Model & Stakeholder Scoping", "desc": "Map enterprise organizational hierarchy, legal entities, and regulatory jurisdictions."},
            {"phase": "Universal Control Framework (UCF) Mapping", "desc": "Harmonize overlapping controls across ISO 27001, SOC 2, NIST, and GDPR into a unified control library."},
            {"phase": "GRC Tool Evaluation & Implementation", "desc": "Deploy and configure enterprise GRC software (ServiceNow, OneTrust, Vanta, Drata)."},
            {"phase": "Automated Risk Workflows", "desc": "Automate third-party assessments, internal audits, and policy attestation workflows."},
            {"phase": "Executive Dashboards & Board Reporting", "desc": "Establish real-time KPI/KRI risk scorecards for audit committee oversight."}
        ],
        "deliverables": ["Enterprise Unified GRC Control Framework", "Configured Automated GRC Software Platform", "Enterprise Risk Taxonomy & Governance Charter", "Board Executive Risk Scorecard"],
        "standards": ["OCEG GRC Capability Model", "ISO 31000", "COSO Enterprise Risk Management"],
        "duration": "6 to 10 Weeks"
    },
    {
        "id": "cyber-risk-assessment",
        "title": "Cyber Risk Assessment",
        "category": "GRC SERVICES",
        "domain": "Governance",
        "tagline": "Quantitative & Qualitative Enterprise Cyber Risk Quantification (FAIR Model)",
        "overview": "Stop guessing what cyber threats could cost your business. Our Cyber Risk Assessment applies both qualitative matrix analysis and advanced quantitative financial modeling (Factor Analysis of Information Risk - FAIR). We translate technical vulnerabilities into concrete dollar values and probabilistic loss distributions that board directors and CFOs understand.",
        "threats": ["Over-Spending on Low-Impact Security Tools", "Under-Investing in Catastrophic Crown-Jewel Risk Scenarios", "Inability to Communicate Cyber Risk to CFOs and Boards in Financial Terms", "Misaligned Risk Appetite Leading to High Exposure"],
        "benefits": ["Translates Cyber Threats into Financial Dollar Impact (FAIR Model)", "Enables Objective Return on Security Investment (ROSI) Decisions", "Prioritizes Security Budgets Based on Probable Loss Magnitude", "Meets SEC & Global Corporate Board Risk Disclosure Mandates"],
        "methodology": [
            {"phase": "Asset Identification & Valuation", "desc": "Catalog critical business assets and quantify business value and operational downtime costs."},
            {"phase": "Threat Actor & Vulnerability Modeling", "desc": "Analyze threat actor capability, frequency of attack attempts, and control vulnerabilities."},
            {"phase": "FAIR Quantitative Monte Carlo Simulation", "desc": "Run 10,000+ statistical simulations to model probable annualized loss expectancy (ALE)."},
            {"phase": "Cost-Benefit & ROSI Analysis", "desc": "Compare potential security control expenditures against the risk reduction dollar values."},
            {"phase": "Executive Decision Presentation", "desc": "Deliver board-ready presentations detailing risk curves and investment recommendations."}
        ],
        "deliverables": ["Quantitative Cyber Risk Assessment Report (FAIR Modeled)", "Annualized Loss Expectancy (ALE) Probabilistic Curves", "Security Budget Prioritization & ROSI Matrix", "Board of Directors Executive Summary"],
        "standards": ["FAIR (Factor Analysis of Information Risk)", "ISO 31000", "NIST SP 800-30 Rev. 1"],
        "duration": "3 to 5 Weeks"
    },
    {
        "id": "tprm",
        "title": "Third-Party Risk (TPRM)",
        "category": "GRC SERVICES",
        "domain": "Governance",
        "tagline": "Vendor Risk Management, Supply Chain Security & Continuous Monitoring",
        "overview": "Over 60% of modern data breaches originate from third-party vendors and supply chain partners. Our Third-Party Risk Management (TPRM) service provides end-to-end governance: designing vendor onboarding questionnaires, reviewing SOC 2/ISO reports, conducting technical audits of critical suppliers, and monitoring vendor risk continuously.",
        "threats": ["Data Breaches Occurring via Compromised Third-Party Vendors", "Supply Chain Attacks Injecting Malicious Code into Your Software", "Vendors Operating Without Adequate Cybersecurity Safeguards", "Lack of Visibility into Fourth-Party (Subcontractor) Risk Chains"],
        "benefits": ["Eliminates Blind Spots Across Global Supplier Networks", "Automated Vendor Tiering & Risk Scoring", "Continuous Security Rating Surveillance of Key Suppliers", "Standardized Vendor Contract Cybersecurity Clauses"],
        "methodology": [
            {"phase": "Vendor Inventory & Criticality Tiering", "desc": "Catalog all third-party suppliers and categorize into Tier 1 (High Criticality), Tier 2, and Tier 3."},
            {"phase": "Standardized Assessment Questionnaires", "desc": "Deploy customized SIG, CAIQ, or proprietary assessments aligned with ISO and SOC 2."},
            {"phase": "Independent Evidence Verification", "desc": "Evaluate vendor penetration test summaries, SOC 2 reports, and insurance coverage certificates."},
            {"phase": "Continuous Cyber Rating Monitoring", "desc": "Monitor vendor IP addresses and domains using external risk-scoring intelligence engines."},
            {"phase": "Contractual Safeguards & Remediation", "desc": "Enforce mandatory security clauses, right-to-audit terms, and track vendor remediation."}
        ],
        "deliverables": ["Enterprise Vendor Risk Management (VRM) Playbook", "Vendor Criticality & Assessment Register", "Standard Third-Party Security Contract Clauses", "Vendor Risk Scorecards & Executive Overview"],
        "standards": ["NIST SP 800-161 (Supply Chain Risk Management)", "ISO 27036", "Shared Assessments SIG"],
        "duration": "Ongoing / 4 Week Initial Program Setup"
    },
    {
        "id": "data-privacy-compliance",
        "title": "Data Privacy Compliance",
        "category": "GRC SERVICES",
        "domain": "Governance",
        "tagline": "Global Privacy Program Architecture, RoPA & Data Protection Officer Advisory",
        "overview": "Navigating the maze of conflicting global privacy mandates requires a coherent, centralized data privacy compliance program. We architect scalable privacy management programs that satisfy GDPR, DPDPA, CCPA/CPRA, and PDPL simultaneously while supporting business growth and marketing innovation.",
        "threats": ["Contradictory Privacy Requirements Across Multiple Jurisdictions", "Regulatory Fines for Failure to Implement Cross-Border Transfer Mechanisms", "Lack of Dedicated Privacy Expertise (DPO) Leading to Non-Compliance", "Customer Churn Due to Broken Privacy Trust and Opaque Practices"],
        "benefits": ["Single Scalable Privacy Program for Global Compliance", "Fractional / Virtual Data Protection Officer (vDPO) Coverage", "Automated Consent & Preference Management Systems", "Privacy Trust Badges Enhancing Customer Conversion"],
        "methodology": [
            {"phase": "Multi-Jurisdiction Privacy Scoping", "desc": "Map compliance requirements across all target markets (US, EU, India, Middle East)."},
            {"phase": "Privacy Governance & Charter", "desc": "Establish corporate privacy charters, roles, and cross-functional steering committees."},
            {"phase": "Operationalizing Privacy Controls", "desc": "Integrate privacy reviews into product feature sprints and marketing campaign launches."},
            {"phase": "Employee Privacy Training & Culture", "desc": "Deliver customized privacy training modules for HR, engineering, and sales teams."},
            {"phase": "Annual Compliance Audit & Review", "desc": "Conduct annual comprehensive reviews of privacy operations and regulatory updates."}
        ],
        "deliverables": ["Global Privacy Governance Charter & Manual", "Unified Multi-Jurisdictional Privacy Checklist", "Employee Privacy Awareness Training Courseware", "Annual Privacy Compliance Certification"],
        "standards": ["ISO/IEC 27701", "EU GDPR", "India DPDPA", "AICPA Privacy Criteria"],
        "duration": "6 to 8 Weeks"
    },
    {
        "id": "data-retention-policy",
        "title": "Data Retention Policy",
        "category": "GRC SERVICES",
        "domain": "Governance",
        "tagline": "Defensible Data Lifecycle, Archiving & Secure Destruction Schedules",
        "overview": "Keeping data forever is an immense cybersecurity liability. When breaches occur, organizations are penalized for retaining data beyond legal necessity. We design defensible data retention, archiving, and certified cryptographic destruction policies that balance statutory legal holds with data minimization mandates.",
        "threats": ["Retaining Unnecessary Legacy Customer Data Exposed in Breaches", "Non-Compliance with GDPR & DPDPA Storage Limitation Principles", "Skyrocketing Cloud Storage and Database Backup Costs", "Legal Discovery Vulnerabilities in Court Proceedings"],
        "benefits": ["Significant Reduction in Breach Liability and Blast Radius", "Substantial Cloud Database and Storage Cost Savings", "Automated Defensible Deletion and Purging Workflows", "Strict Compliance with Statutory Tax, Labor, and Health Retention Rules"],
        "methodology": [
            {"phase": "Statutory & Regulatory Legal Research", "desc": "Map legal retention minimums across tax, labor, banking, and data protection laws."},
            {"phase": "Data Taxonomy & Departmental Mapping", "desc": "Categorize corporate data into operational retention tiers across HR, finance, engineering, and sales."},
            {"phase": "Automated Lifecycle Policy Design", "desc": "Configure AWS S3 lifecycle rules, database auto-purge crons, and email retention windows."},
            {"phase": "Legal Hold Standard Operating Procedures", "desc": "Establish instantaneous freeze procedures to halt automated deletion during litigation."},
            {"phase": "Certified Destruction & Auditing", "desc": "Institute cryptographic erasure and physical shredding verification certificates."}
        ],
        "deliverables": ["Enterprise Data Retention & Disposal Schedule", "Automated Cloud Storage Lifecycle Rules Configuration", "Legal Hold & Litigation Freeze Standard Operating Procedures", "Certified Data Disposal Manifest Guidelines"],
        "standards": ["NIST SP 800-88 (Media Sanitization)", "GDPR Article 5(1)(e)", "ISO 15489 (Records Management)"],
        "duration": "3 to 4 Weeks"
    },
    {
        "id": "national-security-compliance",
        "title": "National Security Compliance",
        "category": "GRC SERVICES",
        "domain": "Governance",
        "tagline": "CERT-In 6-Hour Reporting, Critical National Infrastructure & Sovereign Security",
        "overview": "Organizations operating critical infrastructure, telecommunications, banking, or cloud services must adhere to sovereign national security regulations. In India, CERT-In cybersecurity directives enforce strict 6-hour incident reporting, NTP synchronization, and 5-year log retention mandates. We ensure full alignment with national cyber directives.",
        "threats": ["Imprisonment and Severe Fines for Failure to Report Incidents to CERT-In Within 6 Hours", "Unsynchronized System Clocks Discrediting Forensic Log Evidence", "Failure to Retain ICT System Logs for the Mandated 5-Year Window", "Exclusion from Government and Defense Contracting Pipelines"],
        "benefits": ["100% Guaranteed Compliance with Sovereign CERT-In Cyber Directives", "Automated 6-Hour Incident Notification Playbooks and Templates", "Compliant 5-Year Secure Cloud Log Retention Architecture", "Eligibility for Public Sector, Defense & Critical Infrastructure Projects"],
        "methodology": [
            {"phase": "CERT-In Directive Gap Analysis", "desc": "Evaluate current logging, NTP time synchronization, and incident notification mechanisms."},
            {"phase": "NTP Infrastructure Synchronization", "desc": "Synchronize all domain servers and network devices to National Informatics Centre (NIC) or NPL time servers."},
            {"phase": "5-Year Log Retention Architecture", "desc": "Architect secure, encrypted WORM (Write Once, Read Many) cloud storage for mandatory 5-year logs."},
            {"phase": "6-Hour Incident Reporting Drill", "desc": "Test automated incident escalation playbooks to ensure notification to incident@cert-in.org.in within 6 hours."},
            {"phase": "Executive Compliance Sign-Off", "desc": "Deliver verified audit reports satisfying national regulatory scrutiny."}
        ],
        "deliverables": ["National Security & CERT-In Compliance Dossier", "NTP Server Architecture & Log Retention Blueprint", "6-Hour Incident Reporting Playbook & Escalation Matrix", "Sovereign Security Compliance Attestation"],
        "standards": ["CERT-In Cybersecurity Directions (April 2022)", "National Cyber Security Policy", "Information Technology Act 2000 (Section 70B)"],
        "duration": "2 to 4 Weeks"
    },
    {
        "id": "cybersecurity-insurance",
        "title": "Cybersecurity Insurance",
        "category": "GRC SERVICES",
        "domain": "Governance",
        "tagline": "Cyber Insurance Readiness, Underwriting Assessment & Claims Support",
        "overview": "Cyber insurance underwriters now demand proof of advanced security controls (MFA everywhere, EDR, immutable backups, segmented networks) before issuing policies. We audit your infrastructure against underwriter questionnaires, eliminate coverage disqualifiers, negotiate premium reductions, and provide forensic support during claims.",
        "threats": ["Policy Application Rejection Due to Inadequate Security Controls", "Exorbitant Annual Insurance Premium Increases", "Claim Denials Following a Breach Due to Disputed Questionnaire Answers", "Coverage Gaps Leaving Ransomware Extortion Payments Uncovered"],
        "benefits": ["Guaranteed Eligibility for Top-Tier Cyber Insurance Policies", "Substantial Premium Discounts by Demonstrating Hardened Controls", "Elimination of Hidden Exclusions and Coverage Exceptions", "Forensic Incident Response Ready to Meet Underwriter Panel Criteria"],
        "methodology": [
            {"phase": "Insurance Questionnaire Review", "desc": "Analyze underwriter technical questionnaires across leading insurers (AIG, Chubb, Lloyd's, ICICI Lombard)."},
            {"phase": "Underwriter Prerequisite Verification", "desc": "Verify mandatory requirements: MFA on all access points, EDR on 100% of endpoints, and offline backups."},
            {"phase": "Control Gap Remediation", "desc": "Rapidly deploy missing security controls to satisfy strict underwriter mandates."},
            {"phase": "Attestation & Broker Liaison", "desc": "Provide verified engineering sign-offs and support your insurance broker during negotiations."},
            {"phase": "Post-Breach Claims Coordination", "desc": "Prepare incident documentation and forensic timelines that satisfy insurance claims adjusters."}
        ],
        "deliverables": ["Cyber Insurance Technical Readiness Assessment", "Underwriter Questionnaire Verified Response Dossier", "Gap Remediation & Premium Optimization Blueprint", "Cyber Insurance Pre-Approval Verification Certificate"],
        "standards": ["Underwriting Cybersecurity Standards", "NIST SP 800-53", "CIS Critical Security Controls"],
        "duration": "2 to 3 Weeks"
    }
]

all_services.extend(grc_services)

# GOVERNANCE LAYER (8 items)
governance_layer = [
    {
        "id": "data-governance",
        "title": "Data Governance",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "Enterprise Data Stewardship, Lineage, Quality & Access Control",
        "overview": "Data Governance establishes organizational authority, stewardship, and accountability over enterprise data assets. We design data ownership matrices, implement automated metadata catalogs, define data quality standards, and enforce data access rules across complex multi-cloud data lakes and warehouses.",
        "threats": ["Data Chaos with Unknown Lineage and Conflicting Sources of Truth", "Uncontrolled Data Duplication Increasing Storage Costs and Attack Surface", "Lack of Clear Ownership for Critical Customer Data Domains", "Non-Compliance with Enterprise Data Quality and Auditability Standards"],
        "benefits": ["Clear Organizational Ownership & Stewardship for All Data Domains", "Full Data Lineage Tracking from Ingestion to Analytics Dashboards", "Elimination of Redundant, Obsolete, and Trivial (ROT) Data", "Unifies Security, Privacy, and Business Intelligence Strategies"],
        "methodology": [
            {"phase": "Data Governance Maturity Assessment", "desc": "Benchmark current data stewardship, cataloging, and quality processes."},
            {"phase": "Data Council & Stewardship Charter", "desc": "Establish enterprise Data Governance Councils, Chief Data Officer roles, and business data stewards."},
            {"phase": "Metadata & Data Catalog Deployment", "desc": "Implement enterprise data catalogs (Alation, Collibra, Apache Atlas) to map schema definitions."},
            {"phase": "Data Lineage & Quality Rules", "desc": "Define automated data validation checks, lineage tracing, and anomaly alerts."},
            {"phase": "Continuous Governance Operations", "desc": "Establish quarterly governance reviews and metric reporting to executive leadership."}
        ],
        "deliverables": ["Enterprise Data Governance Charter & Manual", "Data Stewardship Roles & Responsibility Matrix (RACI)", "Automated Metadata & Catalog Architecture Blueprint", "Data Quality & Lineage Framework"],
        "standards": ["DAMA-DMBOK (Data Management Body of Knowledge)", "ISO 8000 (Data Quality)", "DCAM (Data Management Capability Assessment Model)"],
        "duration": "6 to 8 Weeks"
    },
    {
        "id": "security-posture-management",
        "title": "Security Posture Management",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "Continuous Posture Assessment (CSPM, SSPM, KSPM) & Attack Surface Management",
        "overview": "Point-in-time audits leave organizations vulnerable to configuration drift. Security Posture Management delivers continuous, real-time assessment across Cloud (CSPM), SaaS applications (SSPM), and Kubernetes (KSPM), correlating vulnerabilities, misconfigurations, and identity entitlements into a unified attack surface view.",
        "threats": ["Configuration Drift Silently Opening Public Firewall Rules", "SaaS Applications (Microsoft 365, Salesforce) Over-Sharing Files Externally", "Kubernetes Clusters Configured with Root Privileges", "Dormant Administrator Accounts Retaining Privileged Access"],
        "benefits": ["24/7 Automated Misconfiguration Detection Across Cloud & SaaS", "Instant Remediation Playbooks for Security Drift", "Unified Attack Surface Visibility Across Thousands of Assets", "Drastic Reduction in Mean Time to Detect (MTTD) Configuration Flaws"],
        "methodology": [
            {"phase": "Multi-Environment API Connection", "desc": "Connect agentless posture management engines to AWS, Azure, GCP, M365, and Kubernetes clusters."},
            {"phase": "Baseline Policy Configuration", "desc": "Enforce CIS Benchmarks, custom compliance guardrails, and least-privilege standards."},
            {"phase": "Risk Graph Correlation & Prioritization", "desc": "Correlate internet exposure, software vulnerabilities, and high-privilege IAM keys into attack graphs."},
            {"phase": "Automated Self-Healing Remediation", "desc": "Deploy serverless automation to close exposed ports and revoke unauthorized bucket permissions."},
            {"phase": "Executive Posture Dashboards", "desc": "Deliver real-time security scorecards tracking posture improvements over time."}
        ],
        "deliverables": ["Continuous Security Posture Architecture Blueprint", "Attack Surface Exposure Graph Report", "Automated Cloud Misconfiguration Remediation Scripts", "Executive Security Posture Scorecard"],
        "standards": ["CIS Benchmarks", "NIST SP 800-145", "Cloud Security Alliance (CSA) Guidance"],
        "duration": "Ongoing / 3 Week Setup"
    },
    {
        "id": "cybersecurity-maturity",
        "title": "Cybersecurity Maturity",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "CMMC, NIST CSF & CMMI-Aligned Cyber Maturity Assessment & Benchmarking",
        "overview": "Where does your cybersecurity program stand relative to industry peers and adversaries? Our Cybersecurity Maturity Assessment evaluates your people, processes, and technology against established maturity models (CMMC, CMMI, NIST CSF). We provide leadership with clear 1-5 maturity tier ratings and a multi-year investment roadmap.",
        "threats": ["Investing Blindly Without Clear Benchmarking Against Industry Peers", "Over-Reliance on Ad-Hoc, Hero-Dependent Security Practices", "Failure to Qualify for Defense & Federal Contracts (CMMC 2.0)", "Inability to Justify Multi-Year Cybersecurity Budgets to the Board"],
        "benefits": ["Objective Level 1 to Level 5 Maturity Scoring", "Benchmark Comparison Against Fortune 500 and Industry Peers", "Step-by-Step Strategic Multi-Year Modernization Roadmap", "Preparation for CMMC 2.0 Defense Contracting Mandates"],
        "methodology": [
            {"phase": "Maturity Framework Selection", "desc": "Select the optimal benchmark model (CMMC 2.0, NIST CSF Implementation Tiers, or DoE C2M2)."},
            {"phase": "Stakeholder Interviews & Evidence Review", "desc": "Interview technical teams, business unit leaders, and examine written operational procedures."},
            {"phase": "Process Institutionalization Scoring", "desc": "Score each domain from Ad-Hoc (Level 1) to Optimized and Continually Improving (Level 5)."},
            {"phase": "Gap Analysis & Peer Benchmarking", "desc": "Compare organizational scores against anonymized industry peer group percentiles."},
            {"phase": "Strategic Maturity Elevation Plan", "desc": "Author a phased, prioritized multi-year investment roadmap to reach target maturity."}
        ],
        "deliverables": ["Enterprise Cybersecurity Maturity Assessment Dossier", "Current vs Target Maturity Gap Radar Charts", "Multi-Year Cyber Modernization Capital Budget Plan", "Board Executive Presentation Slides"],
        "standards": ["CMMC 2.0 (Cybersecurity Maturity Model Certification)", "DoE C2M2", "NIST CSF Tiers"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "ai-maturity-assessment",
        "title": "AI Maturity Assessment",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "Responsible AI, Model Risk Management & Enterprise AI Readiness",
        "overview": "As enterprises race to adopt generative AI and machine learning, governance often lags behind innovation. Our AI Maturity Assessment evaluates your organization's AI readiness, data governance pipelines, algorithmic bias mitigations, model risk management frameworks, and intellectual property safeguards.",
        "threats": ["Shadow AI Adoption by Employees Leaking Company IP into Public LLMs", "Algorithmic Bias Creating Reputational and Legal Liabilities", "Lack of Quality Control and Validation in Machine Learning Pipelines", "Non-Compliance with the EU AI Act and Emerging Global AI Mandates"],
        "benefits": ["Establishes Safe, Scalable Guardrails for Enterprise AI Adoption", "Benchmarking Across Data, Architecture, Governance & Ethics", "Clear Safe AI Acceptable Use Policy for All Employees", "Accelerates Competitive Advantage with Responsible AI"],
        "methodology": [
            {"phase": "AI Usage Discovery & Inventory", "desc": "Identify approved and shadow AI tools (ChatGPT, Midjourney, Claude, custom models) across departments."},
            {"phase": "Data Pipeline & Provenance Audit", "desc": "Examine training datasets, data labeling quality, and IP licensing terms."},
            {"phase": "Model Risk Management Review", "desc": "Evaluate model testing, validation, drift detection, and human-in-the-loop oversight."},
            {"phase": "Responsible AI & Ethics Assessment", "desc": "Audit algorithms for fairness, bias, transparency, explainability, and safety."},
            {"phase": "AI Governance Framework Formulation", "desc": "Establish enterprise AI policies, safe tool rosters, and model approval workflows."}
        ],
        "deliverables": ["Enterprise AI Maturity Assessment Scorecard", "Responsible AI Governance Framework & Policy Suite", "Employee Safe AI Acceptable Use Guidelines", "Enterprise AI Strategic Roadmap"],
        "standards": ["NIST AI Risk Management Framework 1.0", "ISO/IEC 42001", "EU AI Act"],
        "duration": "3 to 5 Weeks"
    },
    {
        "id": "cyber-resilience",
        "title": "Cyber Resilience",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "Anticipate, Withstand, Recover & Adapt to Cyber Attacks",
        "overview": "In modern cybersecurity, assuming breach is the only defensible strategy. Cyber Resilience moves beyond perimeter defense to ensure that your organization can sustain operations during a major attack and recover rapidly. We evaluate immutable backups, out-of-band communications, alternate command structures, and systemic recovery procedures.",
        "threats": ["Complete Operational Paralysis During Ransomware Extortion", "Attackers Deliberately Encrypting and Deleting Cloud Backups", "Corporate Email & Phone Systems Compromised During Incident", "Crippling Reputational and Financial Loss from Multi-Week Downtime"],
        "benefits": ["Guaranteed Ability to Maintain Critical Business Operations Under Attack", "Immutable, Air-Gapped Backup Systems Immune to Ransomware", "Out-of-Band Crisis Communication Systems (Signal/Satellite)", "Rapid Recovery Time Measured in Hours Instead of Weeks"],
        "methodology": [
            {"phase": "Critical Service Mapping", "desc": "Identify minimal viable business operations required to sustain revenue and customer trust."},
            {"phase": "Backup Architecture & Immutability Audit", "desc": "Verify air-gapped, immutable WORM backups and attempt simulated destruction attacks."},
            {"phase": "Out-of-Band Communications Setup", "desc": "Establish hardened, separate communications channels independent of corporate Active Directory."},
            {"phase": "Alternate Processing Procedures", "desc": "Document manual and degraded-mode operational workflows for factory and banking operations."},
            {"phase": "Full Resilience Simulation", "desc": "Execute full-scale failover simulation disconnecting primary infrastructure to test continuity."}
        ],
        "deliverables": ["Enterprise Cyber Resilience Architecture Blueprint", "Immutable Backup & Air-Gap Verification Report", "Out-of-Band Crisis Communications Protocol", "Executive Cyber Resilience Attestation"],
        "standards": ["NIST SP 800-160 Vol. 2 (Developing Cyber-Resilient Systems)", "ISO 22301", "WEF Cyber Resilience Framework"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "bcp-dr-planning",
        "title": "BCP/DR Planning",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "Business Continuity & Disaster Recovery Engineering for Cloud & Hybrid IT",
        "overview": "Disaster recovery is only as good as the last successful restore. Our BCP/DR Planning service designs, documents, and rigorously tests Business Continuity Plans (BCP) and Disaster Recovery (DR) architectures for hybrid data centers, multi-cloud platforms, and remote workforces to ensure strict adherence to RTO and RPO commitments.",
        "threats": ["Catastrophic Data Loss Due to Failed or Corrupted Backups", "RTO Delays Exceeding Regulatory or Contractual SLA Windows", "Unclear Command Hierarchy During Outages Leading to Delayed Response", "Untested Disaster Recovery Failovers Failing Under Real-World Stress"],
        "benefits": ["Rock-Solid Disaster Recovery Runbooks with Step-by-Step Instructions", "Automated Cloud Failover (Multi-Region / Cross-Cloud)", "Strict Enforcement of Enterprise RTO & RPO Objectives", "Executive Peace of Mind with Verified Technical Recovery Proofs"],
        "methodology": [
            {"phase": "RTO & RPO Specification", "desc": "Establish business-aligned Recovery Time and Recovery Point Objectives for every tier of application."},
            {"phase": "DR Architecture Engineering", "desc": "Design automated database replication, cloud pilot light environments, and DNS failover triggers."},
            {"phase": "Disaster Recovery Plan (DRP) Authoring", "desc": "Write exhaustive, actionable recovery playbooks for infrastructure engineers and DBAs."},
            {"phase": "Live Technical Failover Drill", "desc": "Simulate primary data center outage, redirect live traffic to secondary site, and measure recovery latency."},
            {"phase": "After-Action Review & Optimization", "desc": "Refine scripts and configurations based on drill findings to eliminate bottlenecks."}
        ],
        "deliverables": ["Enterprise Business Continuity Plan (BCP)", "Technical Disaster Recovery Plan (DRP) Runbooks", "Live Disaster Recovery Drill After-Action Report", "RTO/RPO Compliance Verification Statement"],
        "standards": ["ISO 22301", "NIST SP 800-34", "DRII Professional Practices"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "vit-compliance",
        "title": "vIT Compliance",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "Virtual IT Compliance Officer & Continuous Audit Readiness",
        "overview": "Small to mid-sized enterprises often lack dedicated in-house compliance staff but face massive enterprise client security questionnaires. Our Virtual IT Compliance Officer (vIT Compliance) service provides ongoing, fractional compliance management: answering client security inquiries, managing audits, updating policies, and maintaining security certifications.",
        "threats": ["Sales Deals Stalled Due to Unanswered 200-Question Vendor Security Surveys", "Security Policies Falling Out of Date and Becoming Non-Compliant", "Failure of Annual ISO/SOC 2 Surveillance Audits", "Overburdened Engineering Teams Diverted from Core Product Delivery"],
        "benefits": ["Dedicated Senior Compliance Officer for a Fraction of Full-Time Hire Cost", "Rapid Turnaround on Enterprise Client Security Questionnaires (< 48 Hours)", "Continuous Compliance Monitoring and Annual Audit Management", "Frees Engineering Leadership to Focus 100% on Building Product"],
        "methodology": [
            {"phase": "Compliance Baseline & Tooling Setup", "desc": "Ingest existing policies, audit reports, and configure compliance knowledge bases."},
            {"phase": "Questionnaire Answering Desk", "desc": "Establish a dedicated ticketing desk to complete complex enterprise security questionnaires."},
            {"phase": "Continuous Policy & Control Updates", "desc": "Regularly review and update operational policies as business systems and teams evolve."},
            {"phase": "Surveillance Audit Management", "desc": "Coordinate directly with accredited auditors during annual certification renewals."},
            {"phase": "Quarterly Executive Briefings", "desc": "Provide executive leadership with quarterly compliance status reports and horizon scans."}
        ],
        "deliverables": ["Dedicated vIT Compliance Officer Retainer", "Rapid Security Questionnaire Answering Service", "Annual Compliance Maintenance & Audit Sign-Off", "Quarterly Executive Compliance Dashboard"],
        "standards": ["ISO 27001", "SOC 2", "NIST CSF", "CIS Controls"],
        "duration": "Ongoing Monthly Retainer"
    },
    {
        "id": "business-impact-analysis",
        "title": "Business Impact Analysis",
        "category": "GOVERNANCE LAYER",
        "domain": "Governance",
        "tagline": "Quantifying Operational, Financial & Reputational Impact of Disruption",
        "overview": "A Business Impact Analysis (BIA) is the foundational cornerstone of organizational resilience. We systematically interview business unit leads, evaluate inter-system dependencies, model financial downtime losses, and establish mathematically defensible RTO and RPO targets across all operational divisions.",
        "threats": ["Misallocating Resiliency Budgets to Low-Priority IT Systems", "Underestimating True Financial and Reputational Costs of Outages", "Overlooking Critical Third-Party and Cloud Service Dependencies", "Regulatory Penalties for Missing Business Continuity Impact Documentation"],
        "benefits": ["Identifies True Mission-Critical Processes Across the Entire Enterprise", "Quantifies Dollar-per-Hour Financial Losses for Every Business Unit", "Defines Defensible RTO, RPO, and Minimum Operating Level Targets", "Provides Justification for Disaster Recovery Capital Investments"],
        "methodology": [
            {"phase": "BIA Survey & Questionnaire Design", "desc": "Tailor comprehensive impact assessment surveys covering financial, legal, and operational risks."},
            {"phase": "Executive & Division Head Interviews", "desc": "Interview leadership across finance, operations, customer support, legal, and engineering."},
            {"phase": "Dependency & Downtime Loss Modeling", "desc": "Model cumulative financial impact of outages at 1 hour, 4 hours, 24 hours, and 1 week intervals."},
            {"phase": "Criticality Tiering & RTO/RPO Assignment", "desc": "Classify applications into Mission-Critical (Tier 0), Business-Critical (Tier 1), and Non-Critical."},
            {"phase": "Strategic BIA Report Presentation", "desc": "Present comprehensive findings and recommendations to executive leadership."}
        ],
        "deliverables": ["Enterprise Business Impact Analysis (BIA) Final Dossier", "Application Criticality & RTO/RPO Dependency Matrix", "Financial Outage Loss Modeling Curves", "Executive Board Summary on Operational Priorities"],
        "standards": ["ISO 22317 (Guidelines for Business Impact Analysis)", "ISO 22301", "NIST SP 800-34"],
        "duration": "3 to 4 Weeks"
    }
]

all_services.extend(governance_layer)

print(f"Total services loaded so far (Assurance + Governance): {len(all_services)}")
