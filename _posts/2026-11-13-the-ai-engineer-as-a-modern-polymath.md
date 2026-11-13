---
title: The AI Engineer as a Modern Polymath
date: 2026-11-13 11:00:00 -0500
image: /assets/images/ai-engineer-polymath.webp
image_alt: Top view of a cluttered desk with camera equipment, laptops, and workspace accessories.
description: Foundation models are turning AI engineers into product-minded polymaths. Learn how to design roles and build teams that lead.
---

## Summary

- Put the product in front of users before you invest in proprietary data or model work, and let your AI engineers own that loop.
- Define AI engineer roles around the whole product: interface, evaluation, prompts, data, and user feedback, not model training alone.
- Fund evaluation as a first-class discipline, with a named owner and success criteria set before launch.
- Do not design "unicorn" roles that must master every layer; pair broad engineers with shared tooling and a small set of deep specialists.
- Hire and promote for range: look for people who work at the boundaries between systems and who have worked across domains.
- Organize AI work in empowered, cross-functional product teams that are assigned problems, not feature lists.
- Budget for the last mile: plan months, not a weekend, between a strong demo and a dependable product.

## The model is shared, the product is not

For most of the past decade, an organization that wanted to differentiate with machine learning trained its own models. Model quality was the competitive edge. Foundation models changed that. When many teams use the same model, differentiation must be gained through the application development process (Huyen, 2025, p. 44). The advantage has moved from the lab to the product.

> The model is shared. The product is where you compete.

That shift reorders the work itself. Traditional ML engineering usually starts with gathering data and training a model, and building the product comes last (Huyen, 2025, p. 47). With capable models readily available, it is now possible to build the product first and invest in data and models only once the product shows promise (Huyen, 2025, p. 47). For a leader, this is a change in how risk is managed: you learn what users value before you commit to expensive data and model work.

It also changes who is in the room. In traditional ML engineering, model development and product development are often disjointed, and ML engineers are rarely involved in product decisions at many organizations (Huyen, 2025, p. 47). With foundation models, AI engineers tend to be much more involved in building the product (Huyen, 2025, p. 47). The person who tunes the system and the person who decides what it should do increasingly sit in the same seat.

There is a trap in this speed. A good demo does not promise a good end product: it might take a weekend to build a demo but months, and even years, to build a product (Huyen, 2025, p. 33). LinkedIn reported that it took one month to reach 80 percent of the experience it wanted (Huyen, 2025, p. 33). It then spent a lot of time on product kinks and hallucinations, and the slow speed of each subsequent 1 percent gain was discouraging (Huyen, 2025, p. 34). Executives who see a dazzling prototype in week one should plan for the last mile before they promise a date.

> A weekend demo is a hypothesis. The product is the months of work that follow.

## AI engineering moves toward full-stack development

The center of gravity has moved up the stack. The increased emphasis on application development, especially on interfaces, brings AI engineering closer to full-stack development (Huyen, 2025, p. 46). Tooling has followed: the rising importance of interfaces has shifted the design of AI tooling to attract more frontend engineers (Huyen, 2025, p. 46). Interfaces gaining popularity for AI applications include standalone web, desktop, and mobile apps and browser extensions (Huyen, 2025, p. 46).

The people doing the work are changing too. More AI engineers are coming from web development or full-stack backgrounds, and their advantage over traditional ML engineers is the ability to quickly turn ideas into demos, get feedback, and iterate (Huyen, 2025, p. 47). That is a different temperament from the one that rewards months of careful offline modeling. It prizes the engineer who ships a rough version, watches what users do, and adjusts.

> The new workflow rewards whoever can iterate fastest, not whoever trains the biggest model.

This is why the label "AI engineer" can mislead. It sounds like a narrower version of a machine learning researcher. In practice it describes someone who is closer to a product builder who happens to work with models.

## A blend of skills, from data to user needs

Building an ML application requires a broad set of skills in diverse domains such as statistics, software engineering, and product management (Ameisen, 2020, p. 228). Only a small subset of the systems needed to build an ML product aim to train models; the majority of the work is data and engineering work (Ameisen, 2020, p. 228). The glamorous part of the job is the smallest part.

With foundation models, the application development layer consists of evaluation, prompt engineering, and AI interface (Huyen, 2025, p. 44). Each of those is its own craft. Prompt engineering is about getting a model to express desirable behavior without changing its weights, and one example shows the stakes: a different prompting technique moved Gemini Ultra's MMLU score from 83.7 percent to 90.04 percent (Huyen, 2025, p. 45). Method matters as much as model.

Evaluation deserves the most executive attention. It is more important with foundation models than with traditional ML, largely because of their open-ended nature and expanded capabilities (Huyen, 2025, p. 44). In close-ended tasks like fraud detection, there is usually an expected ground truth to compare against, but for a chatbot there are so many possible responses that it is impossible to curate an exhaustive list (Huyen, 2025, p. 44). Many teams find that the biggest hurdle to bringing AI applications to reality is evaluation, and for some applications it can take up the majority of the development effort (Huyen, 2025, p. 113). One practitioner goes further and believes evaluation is the biggest bottleneck to AI adoption (Huyen, 2025, p. 161).

> If you cannot say how you will measure good, you are not ready to build.

Then there are the users. Understanding user requirements is essential for integrating AI applications, and it involves iterative testing and feedback loops that incorporate user insights (Urbach & Feulner, 2026, p. 196). User feedback plays an even more significant role in AI applications than in other software, because it is proprietary data and data is a competitive advantage (Huyen, 2025, p. 474). Interaction design carries weight as well. Designing the interaction as a feedback loop that lets users correct and adjust results, rather than simply presenting an algorithm's output, avoids frustration and yields labeled data (Ameisen, 2020, p. 215).

Feedback also needs care. User feedback is incomplete, and if used indiscriminately it can perpetuate biases and destroy a product (Huyen, 2025, p. 491; Huyen, 2025, p. 492). Someone on the team has to understand statistics, interface design, and the business well enough to know which signals to trust.

Put these together and the AI engineer's job spans data, software, interfaces, evaluation, and user needs. No single traditional role covered all of that.

## Why range pays off when the path is unclear

The old specialist model is not wrong. It is right for a particular kind of problem. In kind environments, where the goal is to re-create prior performance with little deviation, teams of specialists work superbly (Epstein, 2019, p. 188). But when the path is unclear, those same routines no longer suffice (Epstein, 2019, p. 188).

Building products on top of foundation models is largely the second kind of work. The capabilities are open-ended, the evaluation targets are fuzzy, and the user behavior is unknown until you watch it. Facing uncertain environments and wicked problems, breadth of experience is invaluable, while kind problems can be handled efficiently by narrow specialization (Epstein, 2019, p. 190). Expecting a hyperspecialist to extend skill to wicked problems can have disastrous results (Epstein, 2019, p. 190).

> Specialists excel when the rules hold still. Foundation-model products rarely hold still.

The evidence for range comes from innovation research. In a study of 3M inventors, polymaths had depth in a core area but also worked across dozens of technology classes, and they were the most likely to succeed in the company (Epstein, 2019, p. 182). Note the pairing: depth in one area, breadth around it. In a study of comic creators, years of experience had no impact on quality, while the number of genres a creator had worked in did (Epstein, 2019, p. 187). An individual creator who had worked in four or more genres was more innovative than a team whose members had collective experience across the same number of genres (Epstein, 2019, p. 187).

> The profile of people who innovate repeatedly is familiar to anyone who has hired a good AI engineer. Serial innovators show a high tolerance for ambiguity, are systems thinkers, and bring technical knowledge from peripheral domains (Epstein, 2019, p. 189).

Psychologist Robert Root-Bernstein makes a similar point about polymaths: they contributed to disciplines because of, not in spite of, their broad interests (Ahmed, 2018, p. 207).

## The unicorn trap

None of this is a case for demanding that every engineer know everything. That path has a name. When data scientists own the entire process, they become "grumpy unicorns," expected to know everything and possibly writing more boilerplate code than data science (Huyen, 2022, p. 336).

The alternative is not obviously better. When a separate team productionizes models, the drawbacks include communication and coordination overhead, debugging challenges, finger-pointing, and narrow context (Huyen, 2022, p. 336). Leaders are choosing between two flawed structures, and the way out is tooling rather than heroics.

Huyen came to see it as unreasonable to expect data scientists to know low-level infrastructure, because the more time spent on one skill set, the less on the other (Huyen, 2022, p. 338). The success of a full-stack data scientist at Stitch Fix and Netflix relies on tools that abstract away complexities such as containerization and distributed processing (Huyen, 2022, p. 338). In Netflix's model, specialists first create tools that automate their parts, and data scientists then use those tools to own projects end to end (Huyen, 2022, p. 338).

> Polymath does not mean unicorn. Breadth is sustainable when the platform absorbs the complexity.

That model fits what the innovation research found. The 3M polymaths were not shallow; they kept depth in a core area (Epstein, 2019, p. 182). A modern AI polymath is the same: broad across the product, deep in one or two spines, and supported by specialists who build the platforms that make breadth possible.

## How to build and lead the team

Role design follows from how a team is chartered. Empowered product teams are cross-functional, assigned problems to solve rather than features to build, and held accountable to results (Cagan & Jones, 2021, p. 27). Feature teams look similar but are all about implementing features and projects, and are not held accountable to results (Cagan & Jones, 2021, p. 26). A team of polymaths handed a feature list will behave like a feature team. The breadth only pays off when the team is allowed to decide what to build.

> Assign problems, not features. Breadth is wasted on a team that only takes orders.

Collaboration is the working method. A solution has to be valuable, usable, feasible, and viable, and finding one requires intense collaboration between product management, product design, and engineering (Cagan & Jones, 2021, p. 111). AI work adds another layer: AI projects involve multidisciplinary teams, and the AI project manager must be fluent in technical and nontechnical communication (Runtasewee & González Sánchez, 2026, p. 78). Core tech product roles should be core competencies; outsourcing them risks creating teams of mercenaries (Cagan & Jones, 2021, p. 165). If AI products are central to your strategy, the people who build them should not be rented.

Composition needs a deliberate balance. Functional diversity extends the range of knowledge available and increases the number of options considered, but can reduce group cohesiveness and decision-making efficiency (Tidd & Bessant, 2018, p. 797). Tushman and O'Reilly suggest senior teams with diverse competencies, balancing homogeneity by tenure with diversity in backgrounds and perspectives (Tidd & Bessant, 2018, p. 731). Range lives in individuals and in teams, and leaders should cultivate both.

Hiring is where many organizations undercut themselves. Serial innovators repeatedly claimed that they themselves would be screened out under their company's current hiring practices (Epstein, 2019, p. 190). Griffin's team advises looking for wide-ranging interests, and for candidates who focus on the boundaries and interfaces with other systems (Epstein, 2019, p. 190). A rubric built for narrow slots will reject the very people the work now needs.

> A hiring rubric built for narrow slots will screen out your best AI engineers.

Finally, set the tempo. Agile software development and lean start-up build on high-frequency learning cycles, seeking the capability for fast learning rather than a master plan (Bessant & Tidd, 2015, p. 488). Experiments provide insight and uncover hidden value, and a study of the computer industry found that multiple design iterations, extensive testing, and a multifunctional team accelerate product development (Davila et al., 2006, p. 137). That is the operating rhythm of an AI product team.

## What to do next

Start with the charter. Give AI engineers authority over the product loop, and assign them outcomes rather than feature lists. Write role profiles around range plus one deep spine, so the job is attractive to people who move across layers without pretending anyone masters all of them. Invest in shared platforms so breadth does not turn into burnout. Name an owner for evaluation, and give that person the standing to say a product is not ready. Then revisit the hiring screens that filter out broad candidates.

The AI engineer of the next decade will look less like a model specialist and more like a product builder with unusual range. Leaders who design roles, teams, and platforms for that person will build better products than those who keep hiring for narrow slots.

## Bibliography

Ahmed, W. (2018). _The Polymath: Unlocking the Power of Human Versatility_. Wiley. Page numbers cited for Ahmed (2018) refer to PDF pages.

Ameisen, E. (2020). _Building machine learning powered applications: Going from idea to product_. O'Reilly Media.

Bessant, J., & Tidd, J. (2015). _Innovation and entrepreneurship_ (3rd ed.). Wiley.

Cagan, M., & Jones, C. (2021). _Empowered: Ordinary people, extraordinary products_. Wiley. Page numbers cited for Cagan and Jones (2021) refer to PDF pages.

Davila, T., Epstein, M. J., & Shelton, R. (2006). _Making innovation work: How to manage it, measure it, and profit from it_. Wharton School Publishing. Page numbers cited for Davila et al. (2006) refer to PDF pages.

Epstein, D. (2019). _Range: Why Generalists Triumph in a Specialized World Why Generalists Triumph in a Specialized World_. Penguin Random House. Page numbers cited for Epstein (2019) refer to PDF pages.

Huyen, C. (2022). _Designing machine learning systems: An iterative process for production-ready applications_. O'Reilly Media.

Huyen, C. (2025). _AI engineering: Building applications with foundation models_. O'Reilly Media.

Runtasewee, M. J., & González Sánchez, A. (2026). _Managing AI projects: Drive innovation and successfully navigate the full AI project lifecycle_. O'Reilly Media.

Tidd, J., & Bessant, J. (2018). _Managing innovation: Integrating technological, market and organizational change_ (6th ed.). Wiley.

Urbach, N., & Feulner, D. (Eds.). (2026). _Managing artificial intelligence: How organizations succeed with AI_. Springer.
