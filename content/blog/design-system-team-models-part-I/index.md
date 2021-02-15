---
path: "/design-system-team-models-part-I"
date: "2021-02-11"
title: "Design System Team Models: The First Engineering Hires"
tags: [{ name: "team structure" }, { name: "hiring" }]
---

Companies are buying into the promise of design systems in 2021.

But what does a design systems team look like? And how do you make strategic engineering hires for that team?

**_Believe it or not, you can start with just two engineers._**

1. A senior engineer who specializes in component building, design system architecture, and styling
2. A senior "frontend infrastructure" engineer

The first engineer will make the critical early decisions about how [flexible the system](/progressive-disclosure-of-complexity) is, the patterns the team will use to build components, and the approach to [design tokens](/design-tokens). This engineer will build the bulk of your first set of components and will drive the early adoption of your library. Adoption will be a critical part of your team's strategy in the first year, so you want to invest in it early.

The second engineer should be an expert on versioning and publishing, bundlers, and automation. This person's job is to speed up and improve the release quality of everything the first engineer does.

Versioning and publishing prevent your team from becoming responsible for the quality of everyone else's codebase. And automation allows your team to ship new components more quickly because they are not wasting time on manual steps

As the team grows, it may naturally break into two pods, each led by one of the original two engineers. One team can manage design tokens and build components, while the other would work on automation tools and metrics collection.
