---
path: "/what-is-a-design-system"
date: "2020-09-30"
title: "What is a design system?"
excerpt: "A design system is a set of rules, documentation, processes, and encoded decisions that guide the creation of one or more web applications."
tags: [{ name: "design systems" }]
---

Design systems are exploding in popularity across the industry. [IBM](https://www.carbondesignsystem.com/), [Google](https://material.io/design/), [Uber](https://baseweb.design/), [Shopify](https://polaris.shopify.com/), and [Atlassian](https://atlaskit.atlassian.com/) all have them. Smaller, pre-IPO companies are beginning to wonder whether they need to get in on the action. But let's talk about what a component library actually _is_ before we decide whether or not your company should invest in one.

**A design system is a set of rules, documentation, processes, and encoded decisions that guide the creation of one or more web applications.**

If a company has a website, it **already has a design system.** Unfortunately, if no one has actively cultivated that it, it's probably a _really, really_ ineffective design system.

A good design system improves collaboration between designers and developers and speeds up development while improving quality in the long-term. At a bare minimum, it requires three key components to achieve these goals:

1. A set of design specifications that are broken down into small, composable pieces. These are usually built in a tool like [Sketch](https://www.sketch.com/) or [Figma](https://www.figma.com/).
2. A process by which these design specifications are coded. At the end of the process, the code must be considered the source of truth.
3. Documentation about how to use the code components to build production applications.

As a design system scales, each of these components can increase in scope and complexity. For example, if a company only has one web application, it's OK for the code to live inside of that application. But once the system needs to support two or more web applications, it's better to extract the code into a separate library where it can be shared.
