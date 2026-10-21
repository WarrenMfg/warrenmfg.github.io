---
title: When AI Augments Work, and When It Only Looks Like It
date: 2026-10-21 10:00:00 -0400
image: /assets/images/when-ai-augments-work.webp
image_alt: A professional examines financial graphs on a laptop, indicating market trends.
description: Six conditions showing whether AI truly augments work, and how innovation and product leaders can use them to evaluate AI workflows.
---

> **About the reference article**
>
> **Title:** When Does AI Augment Work? A Workflow-Level Framework for Human-Agent Collaboration
>
> **Link:** [https://arxiv.org/pdf/2609.12482](https://arxiv.org/pdf/2609.12482)
>
> **Brief summary:** This whitepaper from the CIVIC-AI 2026 workshop argues that the value of AI at work should be judged at the level of whole workflows, not isolated tasks, and defines genuine augmentation through six conditions: **durable net value, meaningful human control, clear accountability and recovery, deepening learning, career pathways, and job purpose** (Wu et al., 2026, p. 1). It closes with a proposal for shared workflow records that organizations, researchers, and public authorities can use to test augmentation claims over time (Wu et al., 2026, pp. 6-7).

## Summary

- Add workflow-level measures (who decides, who reviews, what breaks, how much verification costs) to your AI scorecard next to usage and productivity numbers.
- Require a workflow record for every AI deployment, and use it to decide whether to expand, revise, or discontinue the deployment.
- Count verification, exception handling, and rework in every business case before claiming a productivity gain.
- Test whether reviewers can actually catch failures, and fund the competence, time, information, and authority they need.
- Name an accountable human for every decision an agent touches, and rehearse the fallback for outages and rare cases.
- Keep entry-level work that builds judgment, even where AI can do it faster, and let juniors draft before they review.
- Delegate to agents where outputs are easy to inspect, errors are reversible, and stakes are bounded; keep humans in charge of goals, validity, and interpretation.
- Measure learning, progression, and job satisfaction on a schedule, because a workflow that passes at launch can fail later.
- Design AI products so that reviewers can see how an output was produced, not only the output.

## Adoption numbers miss what AI changes

Most AI scorecards report usage, investment, productivity, and headcount. Those figures show how far adoption has spread, but they say little about how the work itself has changed (Wu et al., 2026, p. 2). The whitepaper's authors argue that AI changes work through task allocation, hand-offs, and decision rights, which makes the workflow the missing unit of analysis (Wu et al., 2026, p. 2). Measuring a workflow means recording what agents may generate, recommend, decide, or execute; where humans review, authorize, override, or intervene; and how unfamiliar cases and failures are handled (Wu et al., 2026, p. 2).

Innovation managers will recognize the trap. A pilot can look fast while its cost moves elsewhere, because AI may shorten the time to a first output while increasing the effort for verification, exception handling, or recovery (Wu et al., 2026, p. 3). The upside is real, too: humans and machines can work as partners, and companies can reimagine business processes around collaborative teams (Daugherty & Wilson, 2024, p. 33). The hard part is telling real augmentation from a redesign that only claims the label.

## The six conditions at a glance

The whitepaper answers with six conditions in two layers. Three snapshot conditions cover workflow integrity and are assessed at design, deployment, and periodic review, while three longitudinal conditions cover human development and job quality (Wu et al., 2026, pp. 3-4).

> The layers matter because a workflow can satisfy the first at deployment and still stop being augmentative if it erodes the second over time (Wu et al., 2026, p. 4).

The table summarizes each condition and the failure mode it guards against (Wu et al., 2026, p. 3).

| Layer              | Condition                         | Standard                                                                                            | Failure mode                                      |
| ------------------ | --------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Workflow integrity | Durable net value                 | Gains survive full accounting of review, exceptions, rework, recovery, and shifted cognitive burden | Productivity reflects work moved elsewhere        |
| Workflow integrity | Meaningful human control          | People keep the competence, time, information, and authority to catch and override errors           | Approval becomes ceremonial                       |
| Workflow integrity | Clear accountability and recovery | Decision authority, provenance, escalation, and fallback are assigned to humans                     | Errors lack owners; outages disrupt work          |
| Human development  | Deepening learning                | Redesign preserves chances to build expertise, AI literacy, and judgment                            | Workers lose learning and grow dependent          |
| Human development  | Career pathways                   | Entry points and upward progression are preserved or expanded                                       | Junior roles vanish; mobility blocks              |
| Human development  | Job purpose                       | Redesign builds motivation, agency, and meaning                                                     | AI takes the desirable tasks; humans get the rest |

## Durable net value

The first condition asks that total multi-stakeholder gain arise from human-AI complementarity and survive full accounting of quality, review, exception handling, rework, recovery, and the cognitive burden shifted to workers (Wu et al., 2026, p. 3). Put simply, output gains lose value when verification consumes the time saved (Wu et al., 2026, p. 4).

Leaders can act on this in two ways. First, budget for verification. Verifying every AI answer can be computationally expensive, and periodic sampling-based auditing, modeled on manufacturing quality control, is currently the most effective answer to over-trust (Bala et al., 2026, p. 152). Second, set a "good enough" quality threshold early, so teams stay focused on business value instead of marginal model gains (Runtasewee & González Sánchez, 2026, p. 252). A business case that skips both will overstate the gain.

## Meaningful human control

The second condition holds that people need the competence, time, information, and authority to detect errors, challenge assumptions, constrain agent actions, override decisions, and continue the work when the system is unavailable (Wu et al., 2026, p. 3).

> Human approval offers weak protection when reviewers cannot identify failure (Wu et al., 2026, p. 4).

One reason is automation bias, the tendency to over-rely on automated decision aids as a substitute for active information seeking and critical thinking (Urbach & Feulner, 2026, p. 256). Continuous reliance on AI can weaken users' critical thinking, and the remedies include transparency, training, and the habit of independently verifying recommendations (Urbach & Feulner, 2026, p. 257).

Control is a practice, not a policy. In a hospital study of diagnostic radiologists, professionals consistently incorporated AI into their judgments in only one of three departments, through "interrogation practices" that related their own knowledge to the AI's (Bala et al., 2026, p. 151). Human-in-the-loop mechanisms improve accuracy and accountability in complex or high-risk scenarios (Runtasewee & González Sánchez, 2026, p. 252).

> Treat review as skilled work that needs time and training, not a sign-off box.

## Clear accountability and recovery

The third condition requires that decision authority, provenance, escalation, and fallback procedures be explicitly assigned to human operators (Wu et al., 2026, p. 3). Accountability is incomplete when responsibility is assigned without the information needed to reconstruct a decision (Wu et al., 2026, p. 4).

> Explainability supports this directly, because showing how and why a system reached a decision makes it easier to trace errors and to decide who is responsible, from the developers to the organizations that deploy it (Urbach & Feulner, 2026, p. 301).

The people who design, deploy, and operate an AI system should be accountable for how it works and for the decisions it affects (Carmona, 2020, p. 148). The case is trickier for systems that support decisions than for systems that automate them, and continuous monitoring is central to accountability (Carmona, 2020, p. 148).

> In practice, that means a named owner, a decision log, an escalation path, and a fallback the team has actually rehearsed.

## Deepening learning

The fourth condition asks that redesign preserve opportunities to build domain expertise, AI literacy, judgment, and responsibility (Wu et al., 2026, p. 3). The hidden risk sits in what gets delegated first. The tasks most suited to delegation are high-volume, procedural, and verifiable, which are the tasks through which junior workers develop the tacit judgment needed to evaluate outputs (Wu et al., 2026, p. 4). Tacit knowledge comes from experience and observation and may never be formally articulated (Bessant, 2003, p. 183). Once the practice disappears, a manual is unlikely to rebuild it.

Aviation shows the risk. Removing humans from the control loop meant pilots gained less quality experience, and in the Air France Flight 447 crash an inexperienced pilot handled the crisis poorly (Agrawal et al., 2022, p. 216). Experience is a scarce resource, and some of it must be allocated to humans to avoid deskilling (Agrawal et al., 2022, p. 217).

Innovation management offers a useful lens. Capability to manage innovation grows through trial and error followed by reflection and revision (Bessant & Tidd, 2015, p. 487). For complex and creative tasks, learning goals outperform performance goals (Goller & Bessant, 2017, p. 118).

> Teams working with AI should therefore carry learning goals as well as output goals.

## Career pathways

The fifth condition asks that job entry points and upward progression be preserved or expanded (Wu et al., 2026, p. 3). The authors warn that eliminating junior roles blocks job mobility, and they argue that preserving learning and career pathways is a prerequisite for keeping human control meaningful (Wu et al., 2026, pp. 3-4).

> That makes entry-level design a risk-management issue, not only a fairness issue.

The pressure is real. AI deployments can reduce demand for some skills, and law firms may hire fewer paralegals and associates for case research that AI can support (Bala et al., 2026, p. 137). The survey example below shows an alternative: researchers do the initial protocol design and coding themselves, which gives junior researchers chances to exercise fine-grained judgment on the way to strategic decisions (Wu et al., 2026, p. 5).

## Job purpose

The sixth condition asks that redesign build motivation and agency, and its failure mode is AI doing the desirable tasks while humans are left with the undesirable ones (Wu et al., 2026, p. 3).

- Autonomy, mastery, and purpose are three pillars of motivation (Benraouane & Harrington, 2021, p. 143).
- Purpose gives work meaning and drives engagement (Benraouane & Harrington, 2021, p. 144).
- Where challenge and involvement are low, people become apathetic and feel alienation and indifference (Isaksen & Tidd, 2006, p. 330).

A simple check follows. If agents take the interesting problems and people inherit the cleanup, the redesign fails this condition no matter how good the productivity numbers look.

## The framework: three questions that set the human-agent boundary

For the first layer, the whitepaper offers three task properties that shape where the boundary between humans and agents belongs: verifiability, reversibility, and stakes (Wu et al., 2026, p. 4). The table turns them into screening questions (Wu et al., 2026, p. 4).

| Property      | Question                                                            | Effect on delegation                       |
| ------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| Verifiability | Can a qualified person inspect the output and identify failure?     | Easier inspection supports more delegation |
| Reversibility | Can an error be corrected before serious harm occurs?               | Recoverable errors support more delegation |
| Stakes        | What follows if the decision is wrong, delayed, or hard to contest? | Bounded stakes support more delegation     |

- Delegation can increase when outputs are easy to inspect, errors are recoverable, and stakes are bounded (Wu et al., 2026, p. 4).
- Human authority should remain stronger where a task sets goals, interprets ambiguous evidence, establishes validity, or shapes consequential use (Wu et al., 2026, p. 4).

> The authors summarize the result as a design rule:
>
> - Assign agents work where gains scale, actions are reversible, and errors are inspectable (Wu et al., 2026, pp. 5-6).
> - Retain human authority over goals, validity, interpretation, and consequential use (Wu et al., 2026, pp. 5-6).
> - Measure longitudinal effects on human efficacy (Wu et al., 2026, pp. 5-6).

Product teams can stage this boundary over time. Microsoft's Crawl-Walk-Run approach begins with mandatory human involvement and raises automation as quality improves (Huyen, 2025, p. 31).

## A worked example: AI-mediated surveys

The authors apply the rule to social surveys. Human researchers keep strategic control of purpose, seed questions, weighting, interpretation, and final coding, while an AI interviewer revises wording, asks follow-up questions, and does an initial pass over responses (Wu et al., 2026, p. 4).

Two details stand out for product and innovation leaders. First, researchers should do the initial protocol design and coding themselves because of anchoring bias and the potential for vacuous verification of AI output (Wu et al., 2026, p. 5). Second, because the AI interviewer becomes part of the measurement instrument, researchers should keep records of the interview paths to see how questions differed from the approved instrument (Wu et al., 2026, p. 5). The authors suggest a pilot that compares a fixed-form survey, a human interviewer, and an adaptive AI interviewer, plus a longitudinal evaluation of researchers' mastery, junior talent creation, senior talent development, and job satisfaction (Wu et al., 2026, p. 5).

## Using the framework: workflow records and decisions

The framework becomes practical through a shared workflow record.

> Each record documents the baseline process, agent tasks and authority, human review and escalation points, exception and recovery procedures, significant errors, total effort including verification, and effects on human capability and satisfaction (Wu et al., 2026, p. 6).

Records should be complemented by employee-level evidence, because formal adoption data may miss unofficial AI use (Wu et al., 2026, p. 6).

Organizations could use these workflow modules in pilots to decide whether to expand, revise, or discontinue a deployment (Wu et al., 2026, p. 7). Sector-specific thresholds still apply, because clinical processes, research workflows, public surveys, and client onboarding differ in quality, privacy, contestability, and risk requirements (Wu et al., 2026, p. 7). The table shows how each audience can use the record (Wu et al., 2026, p. 7).

| Audience           | Use of the framework                                                                 |
| ------------------ | ------------------------------------------------------------------------------------ |
| Organizations      | Decide whether to expand, revise, or discontinue a deployment                        |
| Researchers        | Compare workload, capability, and career-stage effects over time                     |
| Public authorities | Connect workflow measures with surveys, graduate outcomes, hiring, and training data |

## What AI product teams should build

Product teams can make good oversight possible by shipping the evidence with the output. Companies will need fully traceable processes, so that AI assets can be tied to a particular user instance, and the model itself also needs to be explainable so that each decision can be understood (Carmona, 2020, p. 147). Transparency and clear explanations help users evaluate outputs critically (Urbach & Feulner, 2026, p. 257).

Warnings and error rates help, but they are not enough.

> Decision-support systems should state their error rates, limitations, and context, yet clear communication alone does not prevent people from losing attention or skill when supported by automation (Carmona, 2020, p. 148).

The retained interview paths in the survey example show a stronger pattern: reviewers can see how the output was produced and judge whether it should stand.

## What the evidence can and cannot show

The whitepaper uses Singapore as an application context, and it treats the evidence as cautiously optimistic but incomplete. In that data, 28.5% of firms reported adopting AI, and 70.7% of adopters reported better worker productivity (Wu et al., 2026, p. 6). Firms more often reported role redesign (18.9%) than reduced headcount (6.2%) (Wu et al., 2026, p. 6). Existing statistics do not capture verification, exception handling, rework, recovery, or unofficial AI use, so they cannot establish durable net value (Wu et al., 2026, p. 6).

The worker-centered conditions are thinner still. Entry-level professional job openings rose slightly from 32,500 to 32,800 between December 2025 and March 2026, which does not show broad deterioration but also does not show long-term effects on development (Wu et al., 2026, p. 6). Control also depends on skills that are unevenly distributed: among young workers in Singapore, 38% of those with secondary qualifications used new technology at work versus 74% of degree holders (Wu et al., 2026, p. 6).

Readers should also note that the authors present the framing and recommendations as their own responsibility, not an official position of any participating organization (Wu et al., 2026, p. 7).

> Treat the framework as a structured way to ask questions, then test it in your own context.

## What to do next

- Start with one live deployment and complete a workflow record for it this quarter (Wu et al., 2026, p. 6).
- Add a periodic sampling audit of AI outputs to confirm reviewers still catch failures (Bala et al., 2026, p. 152).
- Then hold post-project reviews that aim to capture lessons, not assign blame (Bessant & Tidd, 2015, p. 487).

In those reviews, ask how each result was reached, not only what was produced. The test of any AI rollout is simple: are the people doing the work more capable, more accountable, and more in control a year from now than they are today?

## Bibliography

Agrawal, A., Gans, J., & Goldfarb, A. (2022). _Prediction machines: The simple economics of artificial intelligence_ (Updated and expanded ed.). Harvard Business Review Press.

Bala, R., Balasubramanian, N., & Joshi, A. (2026). _The AI-centered enterprise: Reshaping organizations with context aware AI_. CRC Press.

Benraouane, S. A., & Harrington, H. J. (2021). _Using the ISO 56002 innovation management system: A practical guide for implementation and building a culture of innovation_. Routledge.

Bessant, J. (2003). _High-involvement innovation: Building and sustaining competitive advantage through continuous change_. Wiley.

Bessant, J., & Tidd, J. (2015). _Innovation and entrepreneurship_ (3rd ed.). Wiley.

Carmona, D. (2020). _The AI organization: Learn from real companies and Microsoft's journey how to redefine your organization with AI_. O'Reilly Media.

Daugherty, P. R., & Wilson, H. J. (2024). _Human + machine: Reimagining work in the age of AI_ (Updated and expanded ed.). Harvard Business Review Press. (Page numbers refer to PDF pages, because the book has no printed page numbers.)

Goller, I., & Bessant, J. (2017). _Creativity for innovation management: Tools and techniques for creative thinking in practice_. Routledge.

Huyen, C. (2025). _AI engineering: Building applications with foundation models_. O'Reilly Media.

Isaksen, S., & Tidd, J. (2006). _Meeting the innovation challenge: Leadership for transformation and growth_. Wiley.

Runtasewee, M. J., & González Sánchez, A. (2026). _Managing AI projects: Drive innovation and successfully navigate the full AI project lifecycle_. O'Reilly Media.

Urbach, N., & Feulner, D. (Eds.). (2026). _Managing artificial intelligence: How organizations succeed with AI_. Springer.

Wu, J., Ziems, C., Chan, R., Chen, N. F., Chua, C., Chung, G., Hahn, J., Lee, W. S., Liu, Z., Ng, J., Ong, D. C., Ong, J., Soon, D. R., Song, T., Tan, Z.-X., Tao, S., Yang, E., Yang, Y., Yin, S. X., . . . Yang, D. (2026). _When does AI augment work? A workflow-level framework for human-agent collaboration_. arXiv. https://arxiv.org/pdf/2609.12482 (Page numbers refer to PDF pages.)
