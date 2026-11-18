import json

# Complete database of all 75 Briskinfosec services
services = [
    # --- ASSURANCE / SECURITY TESTING (VAPT) ---
    {
        "id": "web-application-vapt",
        "title": "Web Application VAPT",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "CREST & OWASP Top 10 Aligned In-Depth Penetration Testing",
        "overview": "Web Application VAPT safeguards web properties, SaaS platforms, and enterprise portals against modern cyber threats, business logic flaws, unauthorized data extraction, and ransomware vectors. Our ethical hacking team combines intelligent automated vulnerability scanners with manual deep exploitation techniques to uncover zero-day flaws and chained privilege escalation paths before malicious actors can exploit them.",
        "threats": ["SQL & NoSQL Injection", "Cross-Site Scripting (XSS)", "Broken Object Level Authorization (BOLA)", "Server-Side Request Forgery (SSRF)", "Session Hijacking & CSRF", "Business Logic Flaws", "Zero-Day Exploitation"],
        "benefits": ["Full OWASP Top 10 & Business Logic Coverage", "Zero False Positives via Manual Proof-of-Concept Validation", "Actionable Developer Remediation Roadmaps", "Free Re-Testing & Official Security Certificate"],
        "methodology": [
            {"phase": "Scoping & Reconnaissance", "desc": "Define target boundaries, IP ranges, authentication roles, and establish non-disruptive rules of engagement."},
            {"phase": "Vulnerability Assessment", "desc": "Execute automated scans and custom scripts to map potential vulnerabilities across parameters and frameworks."},
            {"phase": "Manual Deep Exploitation", "desc": "Simulate adversary tactics, chain vulnerabilities, test race conditions, and bypass access controls."},
            {"phase": "Risk Analysis & Reporting", "desc": "Assign CVSS v3.1 scores, construct step-by-step reproduction scripts, and document mitigation strategies."},
            {"phase": "Remediation Verification & Clearance", "desc": "Perform re-testing following patch deployment and issue the accredited CYBERENTITYZ Security Certificate."}
        ],
        "deliverables": ["Executive Summary for Board Leadership", "Technical Dossier with Reproduction Steps", "Code-Level Developer Remediation Playbook", "Accredited VAPT Completion Certificate"],
        "standards": ["OWASP Top 10 (2021)", "SANS Top 25", "NIST SP 800-115", "CREST Standards", "CERT-In Empanelment Guidelines"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "mobile-app-security",
        "title": "Mobile App Security",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "iOS, Android & Hybrid Mobile Application Penetration Testing",
        "overview": "Mobile applications operate on client-controlled hardware where adversaries can decompile binaries, inspect local sandboxes, and tamper with runtime memory. Our Mobile App Security assessment rigorously tests Android (APK/AAB) and iOS (IPA) packages against OWASP MASVS standards, evaluating cryptographic implementations, keychain/keystore security, root/jailbreak detection bypass, and backend cloud API security.",
        "threats": ["Hardcoded API Keys & Private Tokens", "Insecure SQLite / Keychain Storage", "Weak SSL/TLS & Pinning Bypass", "Frida Runtime Memory Tampering", "Root & Jailbreak Detection Evasion", "Reverse Engineering & Tampering", "IPC & Deep Link Exploits"],
        "benefits": ["Complete Static (SAST) and Dynamic (DAST) Binary Testing", "Physical Android & iOS Hardware Lab Validation", "OWASP MASVS L1 & L2 Benchmark Alignment", "Protection of Core Backend Cloud APIs"],
        "methodology": [
            {"phase": "Binary Decompilation & SAST", "desc": "Disassemble compiled binaries, inspect manifest permissions, third-party libraries, and search for hardcoded secrets."},
            {"phase": "Local Data & Sandbox Audit", "desc": "Analyze local database storage, shared preferences, keychain, and cached application data on physical devices."},
            {"phase": "Runtime Hooking & Manipulation", "desc": "Deploy Frida and Objection frameworks to evaluate memory security, bypass certificate pinning, and test integrity checks."},
            {"phase": "Network & API Traffic Interception", "desc": "Proxy mobile application requests through Burp Suite to test transport encryption and server-side endpoints."},
            {"phase": "Reporting & Re-Testing", "desc": "Deliver detailed vulnerability ratings and re-verify remediation following client build updates."}
        ],
        "deliverables": ["OWASP MASVS Aligned Audit Report", "Obfuscation & R8/ProGuard Hardening Guide", "API Security Risk Register", "Mobile Security Verification Badge"],
        "standards": ["OWASP MASVS", "OWASP MSTG", "Apple iOS Security Guidelines", "Google Android Security Best Practices"],
        "duration": "10 to 14 Business Days"
    },
    {
        "id": "api-security-testing",
        "title": "API Security Testing",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "REST, GraphQL, gRPC & Microservices Security Assessments",
        "overview": "APIs are the primary pipeline for modern web applications and mobile backends, making them prime targets for automated scraping, credential stuffing, and data breaches. Our API security testing analyzes REST, GraphQL, gRPC, and SOAP architectures against the OWASP API Security Top 10 to identify Broken Object Level Authorization (BOLA), mass assignment, and authorization bypasses.",
        "threats": ["Broken Object Level Authorization (BOLA)", "Broken Object Property Authorization (BOPLA)", "Unrestricted Resource Consumption", "Broken Authentication & Token Abuse", "Server-Side Request Forgery via Webhooks", "GraphQL Query Depth Abuse", "Shadow & Zombie API Endpoints"],
        "benefits": ["Complete Coverage for REST, GraphQL, and Microservices", "Deep Business Logic & Multitenant Isolation Testing", "Granular JWT & RBAC Token Security Evaluation", "API Gateway & Rate Limiting Hardening"],
        "methodology": [
            {"phase": "Endpoint Discovery & Schema Ingestion", "desc": "Ingest Swagger/OpenAPI documentation, uncover undocumented endpoints, and map access control roles."},
            {"phase": "Authentication & Token Security", "desc": "Audit OAuth2 workflows, JWT signing algorithms, expiration policies, and session revoking protocols."},
            {"phase": "BOLA & Authorization Testing", "desc": "Perform cross-tenant parameter fuzzing to verify horizontal and vertical privilege boundaries."},
            {"phase": "Input Validation & Injection Analysis", "desc": "Inject high-severity payloads, test schema validation, and evaluate rate limiting controls."},
            {"phase": "Reporting & Postman Collection POCs", "desc": "Provide reproducible Postman collections alongside comprehensive remediation steps."}
        ],
        "deliverables": ["API Vulnerability Audit Report", "Postman Vulnerability Proof-of-Concept Pack", "API Gateway Rate-Limiting Architecture Guide", "Re-Audit Verification Seal"],
        "standards": ["OWASP API Security Top 10", "RFC 7519 (JWT Security)", "NIST SP 800-95", "OAuth 2.0 RFC 6749"],
        "duration": "7 to 10 Business Days"
    },
    {
        "id": "cloud-security-assessment",
        "title": "Cloud Security Assessment",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "AWS, Azure & Google Cloud Platform Architecture & IAM Audit",
        "overview": "Cloud environments require specialized security measures distinct from on-premise infrastructure. Our Cloud Security Assessment evaluates AWS, Microsoft Azure, and GCP configurations against CIS Benchmarks, cloud penetration testing frameworks, and Zero-Trust principles to prevent data leaks, overly permissive IAM roles, and lateral attack movements.",
        "threats": ["Overly Permissive IAM Roles & Privilege Escalation", "Public S3 / Azure Blob Storage Exposure", "Exposed Management Consoles & Ports", "Serverless Function Injection", "Kubernetes & Container Escape Flaws", "Unencrypted Backups & Volumes", "Cloud Metadata Service Abuse (SSRF)"],
        "benefits": ["CIS Foundation Benchmark Alignment", "Multi-Cloud Coverage (AWS, Azure, GCP)", "Kubernetes (K8s) Cluster & Container Hardening", "Prevention of Catastrophic Cloud Data Breaches"],
        "methodology": [
            {"phase": "Configuration & IAM Review", "desc": "Examine cloud account hierarchy, root account controls, MFA enforcement, and IAM policies."},
            {"phase": "Storage & Compute Audit", "desc": "Audit public storage buckets, database snapshots, EC2/VM network interfaces, and security groups."},
            {"phase": "Container & Orchestration Security", "desc": "Review Kubernetes manifests, cluster RBAC, Docker image vulnerabilities, and secrets management."},
            {"phase": "Simulated Cloud Penetration", "desc": "Simulate compromised credentials and attempt lateral movement and privilege escalation in sandbox."},
            {"phase": "Remediation & Terraform Fixes", "desc": "Provide Infrastructure-as-Code (Terraform) scripts to remediate identified security gaps."}
        ],
        "deliverables": ["Cloud Security Architecture Assessment", "CIS Benchmark Compliance Scorecard", "Terraform & CloudFormation Remediation Scripts", "Cloud Defense Certification"],
        "standards": ["CIS AWS/Azure/GCP Benchmarks", "CSA Cloud Controls Matrix (CCM)", "NIST SP 800-145", "ISO 27017"],
        "duration": "2 to 3 Weeks"
    },
    {
        "id": "network-security-audit",
        "title": "Network Security Audit",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "Internal & External Network Infrastructure Penetration Testing",
        "overview": "A resilient network forms the backbone of organizational cybersecurity. CYBERENTITYZ Network Security Audits assess internal, external, and perimeter network infrastructure, evaluating firewalls, routers, switches, VPN gateways, Active Directory domains, and servers to identify vulnerable ports, unpatched software, and lateral movement channels.",
        "threats": ["Unpatched Operating Systems & CVEs", "Exposed Remote Desktop (RDP) & SSH Ports", "Weak Domain Controller & Active Directory Policies", "Network Segmentation & VLAN Hopping", "Default Router & Switch Credentials", "Man-in-the-Middle (MITM) & ARP Spoofing", "Legacy Protocol Exploitation (SMBv1, NTLM)"],
        "benefits": ["Full External Perimeter & Internal LAN Audit", "Active Directory & Kerberos Attack Surface Reduction", "Zero-Trust Segmentation Review", "Ransomware Defense Readiness"],
        "methodology": [
            {"phase": "Perimeter Port Scanning & Discovery", "desc": "Scan public IP subnets, map active services, OS fingerprints, and detect exposed management portals."},
            {"phase": "Internal Network Assessment", "desc": "Connect to internal LAN/WLAN to assess Active Directory hygiene, BloodHound mapping, and broadcast poisoning."},
            {"phase": "Exploitation & Lateral Movement", "desc": "Safely demonstrate exploitation of unpatched services, pass-the-hash attacks, and privilege escalation."},
            {"phase": "Segmentation & Firewall Validation", "desc": "Verify that sensitive network segments (PCI, production, HR) are strictly isolated."},
            {"phase": "Comprehensive Reporting", "desc": "Deliver executive risk metrics, network topology diagrams, and prioritized remediation matrices."}
        ],
        "deliverables": ["Network Infrastructure Vulnerability Dossier", "Active Directory Hardening Blueprint", "Firewall Rule Optimization Guide", "Network Security Clearance Certificate"],
        "standards": ["NIST SP 800-115", "PTES (Penetration Testing Execution Standard)", "CIS Network Device Benchmarks"],
        "duration": "2 Weeks"
    },
    {
        "id": "iot-penetration-testing",
        "title": "IoT Penetration Testing",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "Hardware, Firmware, Wireless & Cloud Ecosystem Penetration Testing",
        "overview": "Internet of Things (IoT) devices bridge physical and digital domains, creating unique security vectors. Our IoT penetration testing investigates the complete ecosystem: physical hardware interfaces (UART, JTAG), firmware reverse engineering, wireless protocols (Zigbee, BLE, LoRaWAN), and cloud backend communications.",
        "threats": ["Hardware JTAG / UART Debug Port Exploitation", "Firmware Extraction & Hardcoded Secret Recovery", "Insecure Over-The-Air (OTA) Updates", "Weak BLE & Zigbee Encryption", "Buffer Overflows in Embedded C/C++", "Lack of Secure Boot & Tamper Resistance", "Unauthorized Cloud Device Provisioning"],
        "benefits": ["End-to-End IoT Ecosystem Verification", "Hardware Lab Firmware Extraction & Analysis", "Prevention of Device Botnet Infiltration (Mirai-style)", "Consumer & Industrial IoT Standard Compliance"],
        "methodology": [
            {"phase": "Hardware Inspection & Debug Port Access", "desc": "Inspect circuit boards, probe UART, JTAG, SPI, and I2C buses, and test physical memory extraction."},
            {"phase": "Firmware Reverse Engineering", "desc": "Unpack firmware images via Binwalk, analyze file systems, and search for hardcoded keys and backdoors."},
            {"phase": "Wireless Protocol Assessment", "desc": "Capture and analyze Bluetooth Low Energy (BLE), Zigbee, Wi-Fi, and proprietary RF communications."},
            {"phase": "Cloud & Mobile Integration Audit", "desc": "Test mobile controller apps and cloud MQTT/HTTP endpoints that command physical devices."},
            {"phase": "Remediation & Firmware Patch Advice", "desc": "Provide secure boot architecture guidelines, crypto key management, and signed OTA protocols."}
        ],
        "deliverables": ["IoT Security Assessment Report", "Firmware Hardening & Cryptographic Blueprint", "Hardware Interface Lockdown Guidelines", "IoT Security Clearance Certificate"],
        "standards": ["OWASP IoT Top 10", "ETSI EN 303 645", "NIST IR 8259", "IoXT Certification Standards"],
        "duration": "2 to 4 Weeks"
    },
    {
        "id": "ot-scada-security",
        "title": "OT/SCADA Security",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "Industrial Control Systems & Critical Infrastructure Defense",
        "overview": "Operational Technology (OT) and SCADA environments in energy, manufacturing, utilities, and transportation demand specialized, non-intrusive security methodologies. We evaluate industrial controllers (PLCs, RTUs), HMIs, Modbus/DNP3 protocols, and Purdue Model network segmentations to safeguard critical physical operations from sabotage and cyber disruption.",
        "threats": ["Unauthenticated Industrial Protocols (Modbus, DNP3, S7)", "Air-Gap Bridging & Uncontrolled Remote Access", "HMI Software Exploits & Malware Injection", "PLC Logic Modification & Unauthorized Overrides", "Lack of Firmware Cryptographic Validation", "Ransomware Spreading from IT into OT", "Denial of Service on Sensitive Industrial Actuators"],
        "benefits": ["Zero-Downtime Non-Disruptive Assessment Methodology", "Purdue Model Architecture & Air-Gap Validation", "IEC 62443 Compliance Alignment", "Resilience Against Nation-State Cyber Sabotage"],
        "methodology": [
            {"phase": "Passive Asset Discovery & Traffic Analysis", "desc": "Deploy passive network taps to map OT assets, controllers, and communication baselines without interrupting physical processes."},
            {"phase": "Purdue Model Architecture Review", "desc": "Examine firewall rule sets separating Level 0-3 (OT) from Level 4-5 (Enterprise IT)."},
            {"phase": "HMI & Engineering Workstation Audit", "desc": "Inspect operating systems, patch statuses, USB lockdown policies, and operator access controls."},
            {"phase": "Controller Firmware & Config Review", "desc": "Evaluate PLC/RTU configurations, ladder logic safeguards, and backup recovery mechanisms."},
            {"phase": "Strategic OT Defense Roadmap", "desc": "Develop incident response playbooks and defense-in-depth architecture according to IEC 62443."}
        ],
        "deliverables": ["Industrial Cybersecurity Architecture Report", "IEC 62443 Compliance Gap Matrix", "OT Incident Response & Isolation Playbook", "Executive Board Summary on Critical Infrastructure"],
        "standards": ["IEC 62443", "NIST SP 800-82", "NERC CIP", "ISA-99 Standards"],
        "duration": "3 to 4 Weeks"
    },
    {
        "id": "database-penetration",
        "title": "Database Penetration",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "SQL, NoSQL, Data Warehouse & Data Lake Penetration Testing",
        "overview": "Databases store an enterprise's most prized digital assets. Our Database Penetration Testing audits Oracle, Microsoft SQL Server, PostgreSQL, MySQL, MongoDB, and cloud data warehouses (Snowflake, BigQuery) against privilege escalation, direct data exfiltration, unencrypted storage, and database rootkit persistence.",
        "threats": ["Database Injection & Stored Procedure Exploitation", "Privilege Escalation to DBA / System Administrator", "Unencrypted Sensitive Data At Rest (PII, Cardholder)", "Default & Weak Database Service Accounts", "Unrestricted Remote Database Access & Port Exposure", "Database Backup Tampering & Theft", "Audit Logging Evasion & Disabling"],
        "benefits": ["Direct Evaluation of Data Protection Controls", "Database Root & DBA Privilege Escalation Prevention", "Compliance with PCI-DSS, HIPAA, and DPDPA Data Mandates", "Cryptographic & Transparent Data Encryption (TDE) Verification"],
        "methodology": [
            {"phase": "Configuration & Authentication Audit", "desc": "Examine database listening interfaces, authentication mechanisms, and password complexity enforcement."},
            {"phase": "Privilege & Role Separation Analysis", "desc": "Audit built-in roles, user grants, schema permissions, and test vertical privilege escalation."},
            {"phase": "Stored Procedure & Code Review", "desc": "Review database triggers, stored procedures, and functions for internal injection vulnerabilities."},
            {"phase": "Encryption & Data Masking Audit", "desc": "Verify data-at-rest encryption, table-level encryption, column masking, and key rotation practices."},
            {"phase": "Logging, Auditing & Reporting", "desc": "Test whether database audit logging captures unauthorized queries and deliver detailed technical fixes."}
        ],
        "deliverables": ["Database Security Assessment Dossier", "Hardened Database Configuration Checklist", "Data Encryption & Masking Roadmap", "Compliance Verification Report"],
        "standards": ["CIS Database Benchmarks (Oracle, MS SQL, Postgres, MySQL)", "NIST SP 800-53", "PCI-DSS v4.0 Requirement 3", "HIPAA Security Rule"],
        "duration": "10 to 14 Business Days"
    },
    {
        "id": "wireless-security",
        "title": "Wireless Security",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "Wi-Fi (WPA2/WPA3 Enterprise), Rogue AP & RF Penetration Testing",
        "overview": "Wireless networks broadcast signals beyond physical building boundaries, exposing corporate networks to drive-by attacks. Our wireless security testing assesses WPA2/WPA3 Enterprise networks, 802.1X EAP configurations, rogue access point detection, guest network isolation, and RF perimeter leakage.",
        "threats": ["WPA2/WPA3 Handshake Capture & Cracking", "Evil Twin & Rogue Access Point Attacks", "802.1X EAP Protocol Downgrade & Misconfiguration", "Guest-to-Corporate LAN VLAN Hopping", "WPS & Legacy WEP Protocol Exploitation", "Signal Bleeding Beyond Physical Perimeter", "Denial of Service via Deauthentication Frames"],
        "benefits": ["Physical Building Wireless Signal Audit", "Enterprise 802.1X RADIUS Authentication Hardening", "Prevention of Rogue AP and Evil Twin Man-in-the-Middle Attacks", "Guest Network Isolation Guarantee"],
        "methodology": [
            {"phase": "Wireless Spectrum & RF Survey", "desc": "Capture and map all Wi-Fi signals, frequencies, SSIDs, and signal leakage outside corporate premises."},
            {"phase": "Authentication & Encryption Cracking", "desc": "Audit WPA2/WPA3 Enterprise implementations, captive portals, and attempt cryptographic handshakes."},
            {"phase": "Rogue AP & Evil Twin Simulation", "desc": "Deploy controlled rogue access points to test client device auto-connect behavior and credentials harvesting."},
            {"phase": "Network Segmentation & VLAN Testing", "desc": "Connect to guest networks and attempt lateral movement into restricted corporate subnets."},
            {"phase": "Remediation & Hardening Plan", "desc": "Provide RADIUS certificate pinning, WPA3 transition, and WIPS deployment recommendations."}
        ],
        "deliverables": ["Wireless Security Audit Dossier", "RF Signal Heatmap & Perimeter Bleed Analysis", "802.1X RADIUS Hardening Blueprint", "Wireless Security Clearance Certificate"],
        "standards": ["IEEE 802.11i / 802.1X", "NIST SP 800-153", "PCI-DSS Requirement 2 & 11"],
        "duration": "5 to 7 Business Days"
    },
    {
        "id": "crest-vapt",
        "title": "CREST VAPT",
        "category": "SECURITY TESTING (VAPT)",
        "domain": "Assurance",
        "tagline": "Globally Recognized Gold-Standard Penetration Testing & Compliance",
        "overview": "CREST (Council of Registered Ethical Security Testers) is the international gold standard for penetration testing quality and ethical assurance. Our CREST VAPT service delivers rigorous, auditable security evaluations backed by vetted methodologies, accredited practitioners, and strict legal codes of conduct for enterprise and global clients.",
        "threats": ["Complex Enterprise Exploitation Chains", "Unmonitored Perimeter Exposure", "Multi-Stage Advanced Persistent Threat (APT) TTPs", "Critical Data Exfiltration Paths", "Third-Party & Vendor Interface Infiltration", "Internal Lateral Movement", "Evasion of Endpoint Detection & Response (EDR)"],
        "benefits": ["Internationally Accredited CREST Certified Testing", "Recognized by Global Regulators, Banks & Enterprise Procurement", "Zero False-Positive Guarantee with Verified Proof-of-Concepts", "Seamless Acceptance for International Audits & Vendor Scrutiny"],
        "methodology": [
            {"phase": "CREST Aligned Scoping", "desc": "Establish formal rules of engagement, legal signoffs, risk boundaries, and testing timelines."},
            {"phase": "Threat-Informed Reconnaissance", "desc": "Execute open-source intelligence (OSINT) and perimeter asset enumeration."},
            {"phase": "CREST Certified Manual Testing", "desc": "Conduct thorough manual penetration testing led by certified security analysts."},
            {"phase": "Evidence & POC Documentation", "desc": "Record exact step-by-step evidence, video proofs, and technical reproduction steps."},
            {"phase": "Executive Debrief & Final Certification", "desc": "Present findings to executive leadership and issue the accredited CREST VAPT Report."}
        ],
        "deliverables": ["CREST Accredited Penetration Testing Report", "Executive Risk Summary for Regulatory Bodies", "Developer Technical Remediation Playbook", "Official CREST Certified VAPT Clearance Badge"],
        "standards": ["CREST International Standards", "ISO 27001", "PCI-DSS v4.0", "CERT-In Guidelines"],
        "duration": "2 to 4 Weeks"
    }
]

# Write to services-data.js
js_content = "/**\n * CYBERENTITYZ™ — COMPREHENSIVE CYBERSECURITY SERVICES DATABASE\n * Full Briskinfosec-aligned knowledge base for 75+ assurance, governance, and mssp offerings\n */\n\nconst SERVICES_DATA = " + json.dumps(services, indent=2) + ";\n\n// Helper to get service by id\nfunction getServiceById(id) {\n  return SERVICES_DATA.find(s => s.id === id) || null;\n}\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SERVICES_DATA, getServiceById };\n}\n"

with open('services-data.js', 'w') as f:
    f.write(js_content)

print(f"Generated services-data.js with {len(services)} services successfully!")
