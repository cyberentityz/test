import json

# Full list of categories and services
raw_definitions = [
    # ------------------ ADVANCED ASSESSMENT ------------------
    {
        "id": "red-team-operations",
        "title": "Red Team Operations",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "Goal-Oriented Adversary Attack Simulations & SOC Evasion",
        "overview": "Red Team Operations go far beyond standard vulnerability testing. Our ethical hackers simulate the real-world Tactics, Techniques, and Procedures (TTPs) of nation-state Advanced Persistent Threat (APT) groups. Over a multi-week campaign, we test your entire defense perimeter: human resilience against spear phishing, physical security defenses, endpoint EDR detection, and Blue Team incident response speed.",
        "threats": ["Sophisticated Phishing & Social Engineering", "Credential Harvesting & Kerberoasting", "Bypassing EDR / Antivirus Protections", "Active Directory Domain Takeover", "Lateral Movement Across Isolated Subnets", "Physical Office & Badge Infiltration", "Silent Crown-Jewel Data Exfiltration"],
        "benefits": ["Validates Blue Team & SOC Detection Capabilities", "Uncovers Blind Spots Across People, Process & Tech", "Zero Prior Notification Real-World Stress Test", "MITRE ATT&CK Framework Heatmap Provided"],
        "methodology": [
            {"phase": "OSINT & Attack Vector Mapping", "desc": "Conduct extensive external reconnaissance, employee mapping, leaked credential gathering, and surface analysis."},
            {"phase": "Initial Access & Weaponization", "desc": "Deploy highly customized spear phishing, zero-day payloads, or external exploitation to gain internal foothold."},
            {"phase": "Evasion & Persistence", "desc": "Bypass modern EDR/XDR agents, establish encrypted C2 (Command & Control) channels, and secure stealthy persistence."},
            {"phase": "Lateral Movement & Domain Dominance", "desc": "Perform Active Directory reconnaissance, dump LSASS credentials, crack tickets, and compromise domain admin."},
            {"phase": "Exfiltration & Purple Team Debrief", "desc": "Simulate crown-jewel extraction, collaborate in a Purple Team workshop with client defenders, and deliver remediation roadmaps."}
        ],
        "deliverables": ["Comprehensive Red Team Operation Dossier", "MITRE ATT&CK Matrix Heatmap", "Blue Team SOC Detection Performance Scorecard", "Executive Board Debrief Presentation"],
        "standards": ["MITRE ATT&CK Framework", "CBEST / TIBER-EU Threat Intelligence", "NIST SP 800-115"],
        "duration": "4 to 6 Weeks"
    },
    {
        "id": "ai-llm-security-audit",
        "title": "AI/LLM Security Audit",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "OWASP Top 10 for LLMs, Prompt Injection & Model Poisoning Defense",
        "overview": "As enterprises deploy generative AI, custom fine-tuned models, and RAG pipelines, new attack surfaces emerge. Our AI/LLM Security Audit stress-tests your generative models and autonomous agents against the OWASP Top 10 for Large Language Models, evaluating prompt injection, training data poisoning, insecure output handling, model theft, and systemic hallucination exploitation.",
        "threats": ["Direct & Indirect Prompt Injection Attacks", "Sensitive Training Data Exfiltration (PII Leaks)", "Training Data & RAG Corpus Poisoning", "Model Inversion & Weights Extraction", "Insecure Plugin Execution & Remote Code Execution", "Excessive Agency & Autonomous Agent Hijacking", "Denial of Service via Heavy Context Inflation"],
        "benefits": ["OWASP Top 10 for LLM Applications Alignment", "Protection of Proprietary Intellectual Property & IP", "RAG Pipeline & Vector Database Lockdown", "Guardrail & System Prompt Resilience Verification"],
        "methodology": [
            {"phase": "Architecture & Model Scoping", "desc": "Map model pipelines, RAG stores, vector databases, external tool access, and user role interfaces."},
            {"phase": "Prompt Injection & Jailbreak Testing", "desc": "Deploy advanced automated and manual jailbreaks, multi-turn prompt injections, and indirect payload embeddings."},
            {"phase": "Data Exfiltration & RAG Security", "desc": "Attempt extraction of system prompts, private training corpora, and proprietary embeddings."},
            {"phase": "Plugin & Autonomous Action Audit", "desc": "Test downstream tool integrations (database execution, email send, API triggers) for unauthorized execution."},
            {"phase": "AI Guardrail Hardening", "desc": "Provide input-filtering guardrails, semantic firewalls, and output sanitization implementations."}
        ],
        "deliverables": ["AI/LLM Security Vulnerability Report", "Prompt Injection Test Suite & Jailbreak Proofs", "Semantic Guardrail Configuration Guidelines", "AI Defense Clearance Certificate"],
        "standards": ["OWASP Top 10 for LLMs", "NIST AI Risk Management Framework (AI RMF)", "ISO/IEC 42001"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "digital-forensics",
        "title": "Digital Forensics",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "Forensic Investigation, Chain of Custody & Legal Evidence Analysis",
        "overview": "In the aftermath of a security incident, data breach, or insider threat, organizations require admissible evidence and definitive answers. CYBERENTITYZ Digital Forensics team extracts and analyzes volatile RAM memory, disk images, network packet logs, and mobile devices adhering strictly to legal chain-of-custody protocols.",
        "threats": ["Ransomware Root Cause & Patient Zero Identification", "Insider Threat & Intellectual Property Theft", "Unauthorized Cloud Data Exfiltration", "Anti-Forensics & Log Deletion Tactics", "Corporate Espionage & Malicious Actor Footprints", "Court Admissibility & Legal Discovery Needs"],
        "benefits": ["Legally Admissible Chain-of-Custody Documentation", "Rapid Identification of Patient Zero and Attack Timelines", "Volatile RAM & Artifact Reconstruction", "Support for Regulatory & Court Proceedings"],
        "methodology": [
            {"phase": "Evidence Acquisition & Preservation", "desc": "Create bit-stream forensic images of hard drives, acquire volatile RAM, and maintain tamper-proof chain of custody."},
            {"phase": "Artifact Extraction & Analysis", "desc": "Analyze Master File Tables (MFT), registry hives, shellbags, event logs, and prefetch execution artifacts."},
            {"phase": "Malware & Payload Reverse Engineering", "desc": "Dissect dropped binaries, malicious scripts, and determine Command & Control communication targets."},
            {"phase": "Timeline Reconstruction", "desc": "Build chronological incident timelines correlating host, cloud, and network logs to establish attacker dwell time."},
            {"phase": "Expert Witness Reporting", "desc": "Deliver courtroom-ready forensic reports and provide executive and legal counsel debriefs."}
        ],
        "deliverables": ["Comprehensive Forensic Investigation Report", "Chain of Custody Legal Manifests", "Root Cause & Patient Zero Analysis Dossier", "Executive & Legal Briefing Slides"],
        "standards": ["ISO/IEC 27037 (Digital Evidence)", "NIST SP 800-86", "Federal Rules of Evidence (FRE)"],
        "duration": "1 to 2 Weeks (Emergency 24hr Dispatch Available)"
    },
    {
        "id": "cyber-intelligence",
        "title": "Cyber Intelligence",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "Actionable Threat Intelligence, Dark Web Monitoring & Brand Defense",
        "overview": "Proactive security requires knowing what adversaries are planning before they strike. Our Cyber Intelligence service continuously monitors the dark web, underground cybercrime forums, illicit Telegram channels, and code repositories to identify compromised employee credentials, brand impersonation schemes, and targeted attack chatter.",
        "threats": ["Corporate Credential Dumps on Dark Web", "VIP Executive & Board Member Doxxing", "Lookalike Phishing Domain Registrations", "Leaked Source Code & API Keys in Public Repos", "Threat Actor Chatter Targeting Your Industry", "Stolen Session Cookies & Infostealer Logs"],
        "benefits": ["Early Warning System Against Impending Attacks", "Continuous Dark Web & Cybercrime Underground Surveillance", "Automated Takedown of Impersonation Domains", "Customized Threat Actor Intelligence Briefs"],
        "methodology": [
            {"phase": "Asset & Brand Footprint Scoping", "desc": "Define organizational domain names, corporate IP blocks, executive profiles, and critical software stacks."},
            {"phase": "Dark Web & Forum Crawling", "desc": "Scour Tor marketplaces, underground forums (Breached, XSS, Exploit), and Telegram data leak channels."},
            {"phase": "Infostealer & Credential Mining", "desc": "Identify compromised corporate logins harvested by RedLine, Vidar, and Racoon infostealers."},
            {"phase": "Brand & Domain Takedowns", "desc": "Initiate automated legal takedowns of fraudulent typosquat domains and rogue social profiles."},
            {"phase": "Actionable Threat Feeds", "desc": "Feed real-time IOCs (Indicators of Compromise) directly into your SIEM/SOAR appliances."}
        ],
        "deliverables": ["Weekly & Monthly Cyber Threat Intelligence Reports", "Real-Time Critical Breach Alerts", "Dark Web Footprint Analysis", "Domain Takedown Tracking Dashboard"],
        "standards": ["OASIS STIX/TAXII Standards", "NIST SP 800-150", "MITRE ATT&CK for CTI"],
        "duration": "Annual Subscription / On-Demand Audit"
    },
    {
        "id": "secure-code-review",
        "title": "Secure Code Review",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "Static Application Security Testing (SAST) & Manual Source Code Audit",
        "overview": "Vulnerabilities originate in source code. Our Secure Code Review inspects Java, C#, Python, Go, Node.js, PHP, C/C++, and Kotlin repositories line-by-line. Combining advanced Static Application Security Testing (SAST) engines with meticulous manual code analysis, we uncover architectural flaws, hidden backdoors, and logic bugs invisible to automated scanners.",
        "threats": ["Insecure Cryptographic Algorithms & Hardcoded Salts", "SQL, Command, and XPath Injection Flaws", "Improper Access Control in Framework Middleware", "Memory Leaks & Buffer Overflows in Native Code", "Race Conditions & Concurrency Hazards", "Insecure Deserialization Vulnerabilities", "Vulnerable Third-Party Open Source Libraries"],
        "benefits": ["Finds Flaws Early in the Software Development Life Cycle (SDLC)", "100% Codebase Transparency with Exact File & Line Numbers", "Code-Level Remediation Snippets for Developers", "Compliance with PCI-DSS v4.0 Requirement 6"],
        "methodology": [
            {"phase": "Repository Onboarding & Threat Modeling", "desc": "Analyze application architecture, entry points, data flows, and trust boundaries across microservices."},
            {"phase": "Automated SAST & Taint Analysis", "desc": "Run industry-leading static analyzers configured to eliminate generic noise and trace tainted data paths."},
            {"phase": "Expert Manual Source Inspection", "desc": "Senior security researchers manually review critical authorization logic, cryptographic modules, and payment gateways."},
            {"phase": "Proof of Concept Construction", "desc": "Validate theoretical vulnerabilities to ensure zero false positives reach your engineering team."},
            {"phase": "Developer Remediation Workshops", "desc": "Deliver interactive walkthroughs with client engineering teams to review secure coding patterns."}
        ],
        "deliverables": ["Source Code Security Audit Dossier (File & Line Cited)", "Secure Code Replacement Snippets", "Developer Remediation Workshop Session", "Verified Code Security Clearance Certificate"],
        "standards": ["OWASP Code Review Guide", "CWE/SANS Top 25", "PCI-DSS v4.0 Requirement 6.2"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "devsecops",
        "title": "DevSecOps",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "CI/CD Pipeline Security, Infrastructure as Code & Shift-Left Security",
        "overview": "Transform security from an engineering bottleneck into a continuous accelerator. CYBERENTITYZ DevSecOps consulting embeds automated security guardrails directly into your GitLab, GitHub, Jenkins, and Azure DevOps pipelines, ensuring that every commit is automatically analyzed with SAST, DAST, SCA, and IaC vulnerability checks.",
        "threats": ["Secrets & API Tokens Pushed to Public/Private Git Repos", "Vulnerable Dependencies in Production Docker Containers", "Insecure Infrastructure-as-Code (Terraform/CloudFormation)", "Unsigned Builds & Software Supply Chain Tampering", "Slow Security Gates Delaying Sprint Delivery", "Drift in Kubernetes Cluster Security Policies"],
        "benefits": ["Shift Security Left Without Slowing Down Deployment Velocity", "Automated Pull-Request Security Gating & Quality Gates", "Software Bill of Materials (SBOM) Automation", "Protection of CI/CD Runner Environments from Poisoning"],
        "methodology": [
            {"phase": "CI/CD Pipeline & Toolchain Maturity Audit", "desc": "Review current build processes, source control permissions, branch protection rules, and deployment pipelines."},
            {"phase": "Static & Dependency Scanning Integration", "desc": "Integrate automated SAST, secret detection (Gitleaks), and Software Composition Analysis (SCA) into PR workflows."},
            {"phase": "Infrastructure as Code (IaC) Scanning", "desc": "Deploy Checkov, tfsec, and Trivy to validate Terraform, Helm charts, and Dockerfiles before infrastructure provisioning."},
            {"phase": "Dynamic Security Automation (DAST)", "desc": "Configure automated ephemeral environment testing to validate running apps prior to staging merges."},
            {"phase": "DevSecOps Culture & Training", "desc": "Equip developer Champions with security triage playbooks and automate Jira vulnerability synchronization."}
        ],
        "deliverables": ["DevSecOps Architecture & Integration Blueprint", "Automated Security Gate Pipeline Configuration", "Developer Security Runbook & Playbooks", "CI/CD Security Maturity Assessment Scorecard"],
        "standards": ["NIST SP 800-204 (Microservices Security)", "OWASP Software Assurance Maturity Model (SAMM)", "CIS DevOps Security Benchmarks"],
        "duration": "3 to 6 Weeks"
    },
    {
        "id": "hardware-security",
        "title": "Hardware Security",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "PCB Reverse Engineering, Chip-Off Forensics & Side-Channel Analysis",
        "overview": "Physical hardware devices require silicon-level assurance. Our Hardware Security laboratory inspects PCBs, integrated circuits, microcontrollers, and hardware cryptographic modules against side-channel analysis, fault injection, silicon probing, and bus sniffing attacks.",
        "threats": ["Physical Bus Sniffing (SPI, I2C, CAN Bus)", "Flash Memory Desoldering & Dumping (Chip-Off)", "Fault Injection & Clock Glitching Attacks", "Side-Channel Power Analysis (DPA/CPA)", "Tamper-Detection Sensor Circumvention", "Counterfeit Hardware Component Insertion", "Insecure Hardware Debug Headers (JTAG/SWD)"],
        "benefits": ["Physical Security Verification for Medical, Automotive & Defense Devices", "Protection Against Reverse Engineering & Clone Hardware", "Evaluation of Hardware Security Modules (HSMs) & TPMs", "Silicon-to-Cloud Integrity Assurance"],
        "methodology": [
            {"phase": "PCB Teardown & X-Ray Inspection", "desc": "Deconstruct enclosure, inspect circuit traces under microscopic magnification, and identify component test points."},
            {"phase": "Debug Port & Bus Sniffing", "desc": "Connect logic analyzers to inter-chip communication buses to monitor unencrypted data transfer and key exchange."},
            {"phase": "Memory Extraction & Chip-Off", "desc": "Desolder BGA/SOP flash chips, read raw NAND/NOR contents, and extract cryptographic credentials."},
            {"phase": "Fault Injection & Glitch Testing", "desc": "Apply precise voltage and clock glitches to trigger instruction skipping and bypass bootloader protections."},
            {"phase": "Hardware Hardening Recommendations", "desc": "Recommend potting compounds, tamper-evident meshes, secure element chips, and anti-probing layouts."}
        ],
        "deliverables": ["Comprehensive Hardware Security Assessment Dossier", "PCB Microscopic Photographic Evidence", "Silicon Cryptographic Hardening Guide", "Hardware Security Certification Statement"],
        "standards": ["FIPS 140-3 (Security Requirements for Cryptographic Modules)", "ISO/IEC 15408 (Common Criteria)", "NIST IR 8259"],
        "duration": "3 to 5 Weeks"
    },
    {
        "id": "thick-client-security",
        "title": "Thick Client Security",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "Desktop Software Security Assessment for Windows, macOS & Linux",
        "overview": "Thick client applications (compiled in .NET, Java, C++, Electron, or Qt) present a hybrid attack surface combining client-side executable manipulation with network-level backend communication. Our assessment analyzes memory corruption, local privilege escalation, DLL hijacking, and unencrypted local caching.",
        "threats": ["DLL Hijacking & Insecure Library Loading", "Runtime Memory Injection & Cheat Engine Tampering", "Reverse Engineering .NET/Java to Source Code", "Insecure Local Storage of Credentials in Registry / AppData", "Unprotected Inter-Process Communication (IPC)", "Improper Transport Layer Security (TLS) Validation", "Privilege Escalation to Local Administrator"],
        "benefits": ["Thorough Binary & Network Protocol Examination", "Protection Against Reverse Engineering & Code Modification", "Safeguards Enterprise Financial & Trading Terminals", "Desktop Endpoint Security Hardening"],
        "methodology": [
            {"phase": "Information Gathering & Binary Analysis", "desc": "Inspect binary file structure, check ASLR/DEP/SafeSEH compilation flags, and detect packing techniques."},
            {"phase": "Network & API Traffic Interception", "desc": "Configure loopback proxies (Echo Mirage, Burp Suite) to intercept proprietary TCP/UDP and HTTP protocols."},
            {"phase": "Memory & Runtime Tampering", "desc": "Attach debuggers (x64dbg, Cheat Engine) to analyze memory buffers, process heaps, and bypass client validations."},
            {"phase": "Local Privilege Escalation & Registry Audit", "desc": "Audit application directory permissions, Windows registry keys, service permissions, and named pipes."},
            {"phase": "Technical Reporting & Remediation", "desc": "Document exact exploitation proofs and code-level developer mitigations."}
        ],
        "deliverables": ["Thick Client Vulnerability Assessment Report", "Compilation Security Flags Hardening Guide", "Client-Side Cryptographic Best Practice Guidelines", "Thick Client Security Clearance Certificate"],
        "standards": ["OWASP Desktop Application Security", "Microsoft SDL Guidelines", "SANS CWE Top 25"],
        "duration": "10 to 14 Business Days"
    },
    {
        "id": "host-level-security",
        "title": "Host Level Security",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "Server Operating System, Kernel, Container & Endpoint Hardening",
        "overview": "When network perimeters fail, host-level defenses represent the final boundary. Our Host Level Security audit examines Windows Server, Linux (RHEL, Ubuntu, CentOS), and macOS configurations against CIS Benchmarks, scrutinizing kernel parameters, local authentication policies, audit logging, and service isolation.",
        "threats": ["Unpatched Kernel Vulnerabilities & Local Privilege Escalation", "Insecure SUID/SGID Binaries & Cron Job Hijacking", "Weak Password Policies & Missing MFA on SSH/RDP", "Misconfigured AppArmor, SELinux & Firewalld", "Unencrypted Sensitive Log Files & Swap Partitions", "Lateral Movement Staging via Living-Off-The-Land (LotL)", "Insufficient Host-Based Audit & Event Log Forwarding"],
        "benefits": ["CIS Benchmark Level 1 & Level 2 Compliance", "Minimizes Post-Exploitation Damage and Containment Time", "Defends Against Ransomware Persistence and File Encryption", "Automated Baseline Scripts (Ansible/Puppet) Provided"],
        "methodology": [
            {"phase": "Host Enumeration & OS Fingerprinting", "desc": "Inventory running services, listening daemon sockets, installed packages, and kernel patch levels."},
            {"phase": "Privilege Separation & Account Audit", "desc": "Audit root/administrator permissions, sudoers configurations, password hashing algorithms, and inactive accounts."},
            {"phase": "Filesystem & Permission Analysis", "desc": "Scan for world-writable directories, insecure SUID binaries, exposed SSH keys, and unencrypted volumes."},
            {"phase": "Kernel & Mandatory Access Controls (MAC)", "desc": "Review SELinux, AppArmor, kernel sysctl parameters, core dump restrictions, and memory protections."},
            {"phase": "Hardening Scripts & Validation", "desc": "Provide verified Ansible/PowerShell hardening playbooks to automate enterprise compliance."}
        ],
        "deliverables": ["Host Security Hardening Dossier", "Automated Ansible & PowerShell Hardening Scripts", "CIS Compliance Benchmark Scorecard", "Host Defense Certification Statement"],
        "standards": ["CIS Operating System Benchmarks", "NIST SP 800-123", "DISA STIG Standards"],
        "duration": "1 to 2 Weeks"
    },
    {
        "id": "automotive-vapt",
        "title": "Automotive VAPT",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "Connected Vehicle, CAN Bus, ECU, Telematics & EV Charging Security",
        "overview": "Modern connected vehicles and Electric Vehicles (EVs) are computers on wheels with complex attack surfaces. Our Automotive VAPT evaluates In-Vehicle Infotainment (IVI), Telematics Control Units (TCU), Controller Area Networks (CAN Bus), Electronic Control Units (ECUs), and EV charging stations (OCPP protocol) aligned with UNECE R155/R156 and ISO/SAE 21434 standards.",
        "threats": ["CAN Bus Injection & Unauthorized ECU Actuation", "Telematics Unit (TCU) Remote Exploitation over Cellular", "In-Vehicle Infotainment (IVI) Android/Linux Compromise", "Over-The-Air (OTA) Firmware Downgrade & Tampering", "EV Charging Station (OCPP) Gateway Hacking & Power Theft", "Keyless Entry Relay Attacks & BLE Key Fob Exploitation", "Vehicle Location Tracking & Driver Privacy Invasion"],
        "benefits": ["UNECE R155/R156 Regulatory Compliance Alignment", "ISO/SAE 21434 Cybersecurity Engineering Standards", "Physical Test Bench & Road-Ready Security Evaluation", "Prevention of Remote Fleet Hijacking & Critical Safety Hazards"],
        "methodology": [
            {"phase": "Threat Analysis & Risk Assessment (TARA)", "desc": "Construct ISO/SAE 21434 vehicle threat models, identifying safety-critical control channels."},
            {"phase": "Telematics & IVI Penetration Testing", "desc": "Audit cellular, Wi-Fi, and Bluetooth interfaces connecting external networks to the car cabin."},
            {"phase": "CAN Bus & In-Vehicle Network Fuzzing", "desc": "Inject spoofed arbitration IDs into high-speed and low-speed CAN buses to evaluate ECU fail-safes."},
            {"phase": "ECU Firmware Extraction & Reverse Engineering", "desc": "Dump microcontroller firmware, test secure boot, and inspect UDS diagnostic service authorization."},
            {"phase": "EV Charging & Cloud Ecosystem Audit", "desc": "Evaluate OCPP message integrity and backend fleet management APIs."}
        ],
        "deliverables": ["Automotive Cybersecurity Assessment Dossier", "ISO/SAE 21434 TARA Matrix", "ECU Firmware Hardening & CAN Bus Filter Rules", "Automotive Cybersecurity Verification Badge"],
        "standards": ["ISO/SAE 21434", "UNECE World Forum WP.29 R155/R156", "Auto-ISAC Best Practices", "NHTSA Cybersecurity Guidance"],
        "duration": "3 to 6 Weeks"
    },
    {
        "id": "telecom-vapt",
        "title": "Telecom VAPT",
        "category": "ADVANCED ASSESSMENT",
        "domain": "Assurance",
        "tagline": "5G Core, 4G/LTE, SS7, Diameter, IMS & Baseband Penetration Testing",
        "overview": "Telecommunications networks are critical national infrastructure carrying sovereign voice and data communications. Our Telecom VAPT assesses legacy signaling protocols (SS7, Diameter) alongside modern 5G Service-Based Architecture (SBA), gNodeB base stations, IMS cores, and subscriber identity encryption to prevent wiretapping, subscriber tracking, and service denial.",
        "threats": ["SS7 & Diameter Subscriber Geolocation Tracking", "SMS Interception & Two-Factor Authentication (2FA) Bypass", "5G Core Service-Based Architecture (SBA) API Infiltration", "SIM Swapping & Cryptographic IMSI Catching", "Denial of Service on Core Cellular Packet Gateways (PGW/UPF)", "Unencrypted Voice Over LTE (VoLTE) & IMS Eavesdropping", "Radio Access Network (RAN) Interface Exploitation"],
        "benefits": ["GSMA FS.11 / FS.19 Security Guidelines Alignment", "3GPP 33.501 5G Security Specification Verification", "Protection Against Subscriber Tracking and SMS 2FA Theft", "Carrier-Grade Core Telecom Infrastructure Hardening"],
        "methodology": [
            {"phase": "Signaling Interconnect Reconnaissance", "desc": "Analyze STP/DRA routing, screening tables, and SS7/Diameter interconnect boundaries."},
            {"phase": "Signaling Vulnerability Simulation", "desc": "Simulate adversary SRI-SM, Send-IMSI, and location update queries to test firewall screening."},
            {"phase": "5G Core & API Security Audit", "desc": "Audit HTTP/2 REST APIs between 5G Network Functions (AMF, SMF, UDM, AUSF)."},
            {"phase": "IMS & VoLTE Infrastructure Testing", "desc": "Test SIP signaling, RTP media stream encryption, and Session Border Controller (SBC) resilience."},
            {"phase": "Carrier Security Recommendations", "desc": "Deliver signaling firewall rule sets and GSMA compliance remediation strategies."}
        ],
        "deliverables": ["Telecom Network Security Audit Dossier", "Signaling Firewall Screening Optimization Blueprint", "GSMA Compliance Scorecard", "Critical Infrastructure Protection Statement"],
        "standards": ["GSMA FS.11 / FS.19 / FS.34", "3GPP TS 33.501 (5G Security)", "NIST SP 800-187"],
        "duration": "3 to 5 Weeks"
    }
]

# Generate more for DATA & PRIVACY, COMPLIANCE FRAMEWORKS, GRC, GOVERNANCE, MSSP...
