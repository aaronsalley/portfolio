---
title: 'ENVR AI Automation'
feature_image: '/MSKDirect.jpg'
feature_image_alt:
feature_image_caption:
featured: true
visibility:
published_at:
excerpt: ''
reading_time:
category: 'Healthcare'
tags: []
client_name: 'MSK'
client_logo: '/svgs/brand--MSK.svg'
---

Rewiring Patient Access: How MSK Is Automating the Front Door to Cancer Care
By Aaron Salley, Director-level Product Leader at MSK

🧭 Introduction
At Memorial Sloan Kettering Cancer Center (MSK), the journey to care begins with a record—and a number. The Medical Record Number (MRN) is the key that unlocks everything: scheduling, documentation, orders, and access to MSK Exchange. But for years, MRNs were assigned manually, often days or weeks after a patient first reached out. This delay created bottlenecks across the intake process, from record indexing to appointment scheduling.

Meanwhile, staff were drowning in manual tasks. Access Assistants renamed and routed thousands of documents daily. Nurses spent hours reviewing yesterday’s scheduling accuracy. And patients waited—sometimes too long.

We knew we had to change that. And we did.

🔧 The Vision: Automation with Empathy
This wasn’t just a tech upgrade—it was a reimagining of how patients enter care. Our goal was to build a platform that could ingest, sort, and route external patient records with speed and precision, while preserving the human judgment essential to care.

We focused on four pillars:

Record Intake Automation
MRN Automation
Criteria Matching Tool (CMT) Automation
Intelligent Scheduling
Each was designed to reduce friction, improve equity, and enable growth.

📄 Record Intake Automation: From Fax to Epic in Minutes
Record intake is one of the most manual and high-volume components of patient onboarding. Our goal was to automate as much of this process as possible to improve speed and security.

We deployed robotic process automation (RPA) using UiPath to ingest records from email, eFax, and Epic. But we didn’t stop there. We layered in AI-based document classification, enabling the system to sort and index records based on patient identifiers, diagnosis, and document type1.

Once indexed, records are routed to the correct Care Advisor using Epic audit trails. Secure chat notifications alert the advisor, who reviews the records in Epic’s Media Manager and schedules the patient.

If a record doesn’t meet automation criteria—say, it’s incomplete or mismatched—it’s flagged for manual QA. This human-in-the-loop design ensures accuracy without sacrificing speed.

📊 Impact
Eliminated thousands of hours of manual renaming and routing
Accelerated intake-to-scheduling timelines
Improved provider readiness with earlier access to documentation
Reduced abandonment rates and patient anxiety
🔢 MRN Automation: Creating the Number That Starts It All
Previously, assigning an MRN required manual registration in RMS based on Department Access Reports. Office Coordinators often created “MRN Request” appointments manually, triggering a cascade of manual work.

We replaced this with an RPA solution that runs hourly, seven days a week. It processes thousands of transactions monthly, assigning MRNs within an hour of patient contact. This accelerated access to MSK Exchange, enabling earlier documentation and order creation.

📊 Impact
91% success rate across 4,500+ transactions
Over 3,500 hours saved annually
Faster access to MSK Exchange
Reduced wait times for first appointments2
🧠 CMT Automation: Automating the Brain of Scheduling
CMT is MSK’s homegrown logic engine for matching patients to the right provider, service line, and location. But it was manual, tribal, and exhausting.

We automated CMT using rule ingestion, Epic integration, and transparent decision logic. The new system replicates oncology subspecialty routing, flags priority cases based on diagnosis and stage, and reduces nurse QA burden.

We’re now exploring Salesforce Einstein AI and Agent Force to enhance CMT’s capabilities—using predictive analytics to recommend optimal provider matches and flag edge cases for human review3.

📊 Impact
36 nurses freed from daily QA sweeps
Improved scheduling accuracy
Faster priority scheduling for complex cases
Reduced cognitive load and burnout
📅 Intelligent Scheduling: From Intake to Appointment in One Flow
Scheduling used to be a relay race. Records were collected, indexed, reviewed, and then—finally—appointments were made. Each handoff introduced delay.

Now, with MRNs assigned early and CMT logic applied automatically, we can schedule patients in real time. Our bots read Epic Clarity reports to identify “green” patients, check for duplicates using Epic APIs, create MRN Request appointments in Epic Cadence, and notify Care Advisors when records are ready.

We’re also piloting AI-based wait time forecasting, using historical practice trends to predict delays and improve patient communication4.

📊 Impact
Same-day MRN Requests for 300+ patients/month
Shortened time to treatment
Improved provider readiness
Reduced abandonment rate
🤖 AI in Action: Beyond Automation
MSK’s enterprise AI strategy is grounded in responsible innovation. Through the Enterprise-AI-Portal and AI Portal Use Case Guide, teams across the organization are using AI for:

Summarizing clinical notes and patient histories
Drafting insurance appeals and patient letters
Analyzing patient monitoring data
Generating dynamic surveys for symptom tracking5
In Patient Access, we’re exploring:

Natural Language Processing (NLP) to extract metadata from unstructured records
LLM-powered intake assistants to guide patients through onboarding
AI-driven segmentation for international patient outreach and campaign targeting6
All AI tools are vetted through MSK’s AIGC and comply with the MSK's-Approach-to-Responsible-AI policy78.

👥 Designed for Real People
This wasn’t just a technical exercise—it was a human one. We built around five core personas:

Access Assistants, who needed relief from manual overload
Care Advisors, who required timely, accurate documentation
Patients, who deserved seamless entry into care
Providers, who relied on complete records to deliver treatment
Privacy Officers, who ensured compliance with HIPAA and GDPR
Each persona shaped the product’s features—from secure chat notifications to manual QA queues to encryption protocols.

📈 Success Metrics That Matter
We tracked impact across three dimensions:

🧑‍⚕️ User-Centric
Time saved per record
% of patients scheduled with complete documentation
Care Advisor response time to new uploads
💼 Business
68% reduction in Access Assistant overtime
Accelerated NVR-to-NTP timelines
Lower error rates in document classification
🧪 Technical
Automation fallback frequency
Dashboard alerts for ingestion latency
🧭 What’s Next
This platform is built to scale. Future phases will introduce:

Intelligent Document Processing with NLP
Agentic Scheduling using Salesforce AI
Salesforce Integration for provider assignment
Epic API orchestration via VDI deployment
AI-assisted triage for international patients
Each step brings us closer to a system that’s not just efficient—but empathetic.

📝 Conclusion: Product Thinking Meets Patient Care
This case study isn’t just about automation—it’s about impact. It’s about designing systems that honor the urgency of cancer care, the complexity of medical records, and the humanity of the people behind them.

At MSK, we’re not just building software. We’re building trust.
