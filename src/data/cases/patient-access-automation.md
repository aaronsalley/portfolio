---
title: 'ENVR AI Automation'
feature_image: '/MSK_patient_access.png'
feature_image_alt:
feature_image_caption:
featured: true
visibility: public
published_at: 2025
excerpt: 'In high-reliability environments, speed without judgment creates risk. This case explores how AI automation was introduced to reduce manual load and operational strain—without compromising safety, trust, or human oversight.'
reading_time:
category: ['Healthcare', AI]
tags: []
client_name: 'MSK'
client_logo: '/svgs/brand--MSK.svg'
---

Every new patient at MSK arrives with a history.
Before care can begin, that history has to be gathered, reviewed, and made usable—often from fragmented, external sources like fax and email. For Patient Access Services (PAS), this meant processing thousands of pages of medical records each week, under time pressure, with direct impact on how quickly a patient could be seen.
The work wasn’t optional.
It was foundational.
But it was also almost entirely manual.

Incoming records arrived as large, unstructured document packets—often 50 to 100+ pages—containing a mix of reports, scans, cover sheets, and duplicates.

Access Assistants were responsible for:

- Monitoring multiple inboxes
- Downloading and organizing files
- Splitting documents manually
- Identifying patient context
- Classifying document types
- Preparing subsets for Epic

The surface issue looked like inefficiency.
The deeper issue was cognitive overload at scale.
Each case required sustained attention, pattern recognition, and judgment—applied to repetitive, low-leverage tasks. Processing times stretched into hours per case, introducing delays that directly impacted patient scheduling and readiness for care.
This wasn’t just an operational problem.
It was a time-to-care problem.

At MSK, delays in intake aren’t abstract—they affect when a patient is seen, how quickly a diagnosis is confirmed, and how confidently care teams can act.
At the same time, the process carried real risk:

- Inconsistent document quality entering Epic
- PHI exposure through fragmented handling workflows
- Rising overtime costs to keep pace with volume
- Limited scalability without adding staff

The goal wasn’t full automation.
It was to remove the work that didn’t require human judgment.

The most important decision was where to start.
Initial stakeholder instinct focused on automating Epic upload. But deeper workflow analysis revealed a different constraint:

# Document separation—not system entry—was the true bottleneck.

If records couldn’t be reliably split, classified, and contextualized, downstream automation would only propagate errors faster.
So V1 focused upstream.
The system was designed to:

- Ingest records from shared inboxes automatically
- Separate and classify documents using intelligent processing
- Extract patient context with conservative confidence thresholds
- Present outputs in a structured QA interface for human validation

This introduced a human-in-the-loop model:
automation handled repetition; humans retained judgment.

Equally important was sequencing.
Rather than waiting on Epic governance and integration dependencies, the solution was intentionally scoped to deliver value before system-of-record automation. This allowed the team to prove impact early, build trust with PAS users, and iterate safely within a regulated environment.
The product wasn’t positioned as a bot.
It was positioned as a new intake workflow.

The first production release delivered immediate and measurable impact:

- ~80% reduction in Access Assistant processing time (4 hours → ~55 minutes)
- ~88% reduction in time to Care Advisor handoff (80 hours → ~9.75 hours)
- 1,200+ documents processed in the initial production window
- ~50% of documents were immediately “ready for upload” without rework

Just as important as the metrics was adoption.
Users didn’t treat the system as a temporary tool.
They chose to stay in it—even after rotation.

That signal mattered.
It indicated the system wasn’t just faster.
It was less cognitively taxing and more trustworthy.

The system did more than improve throughput.

It:

- Reduced reliance on overtime to meet demand
- Lowered PHI risk by eliminating local document handling
- Standardized document quality entering Epic
- Created a foundation for future automation (Epic, OnBase, summarization)

What began as a workflow fix became a platform for intake intelligence.

Automation doesn’t create value by replacing people.
It creates value by removing the work that prevents people from thinking.
