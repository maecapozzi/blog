---
path: "/issue-65"
date: "2021-10-06"
title: "🔨 How to ensure quality in un-versioned component libraries (#65)"
tags: [{ name: "newsletter" }]
---

Happy Wednesday!

A while back, I wrote about why I think that a component library [should be versioned](/do-you-need-to-version-your-component-library). And I'm not alone in this thinking.

[SuperFriendly](https://superfriendlydesign.systems/) defines a design system as "A package-managed, **version-controlled**, software product that contains the smallest set of components and guidelines an organization needs to make digital products consistently, efficiently, and happily."

---

SPONSORED BY ZEROHEIGHT

Before we get into it, the team at [zeroheight](https://zeroheight.com/) is putting together a big report on the state of design system documentation in 2021. To make this happen, they’re asking folks to spend 15-20 minutes filling in a survey all about you and your design system. Would you mind taking some time out of your day to help them out by filling out [this survey](https://zeroheight.com/blog/how-we-document-the-design-system-documentation-survey/?utm_source=mae-capozzi&utm_medium=email&utm_campaign=hwd-newsletterad)?

---

I do still think that the safest way to avoid breaking application code is to implement versioning and publishing.

Doing so allows teammates with domain knowledge to upgrade the parts of the application that they work on regularly. The more products a design system supports, the more important it becomes that product engineers can update components without the help of the design systems team.

Disclaimers aside, I've noticed that a lot of internal component libraries _don't have versioning._ I chalk this up to the fact that configuring versioning and publishing flows can be complicated. And in the early days, a design systems team (if there is even a formal team) probably doesn't have the organizational capital to invest in that much infrastructure work right away.

Additionally, more companies have been starting out by storing their code in monorepos. This makes it easy to import component library components into application code without needing to publish them on npm.

But if you're in this situation, **how can you ensure that changes to your design system won't break your application code?**

## Leverage TypeScript

If your application code and your component library use TypeScript, you can have a _higher_ degree of confidence that changes to your component library won't break production. It won't catch everything. But if you change the interface of one of your component's, you'll have a map to every single instance that component is used, and you won't be able to merge your code until you've resolved every single issue.

## Use linters effectively. Lint errors should break the build in CI

Lint errors can be another useful way to detect small discrepancies or issues caused by changes to your component library. Your application code likely has accessibility requirements for example -- a linter can catch low-hanging accessibility errors for you.

## Happy path end-to-end tests

You might consider adding 1-3 end-to-end tests. These should test the most critical parts of your application.

For example, if you're working on an e-commerce product, you might want to ensure that users can browse a list of products, add one to a cart and check out. Making sure that the critical path is functional can reduce the risk that component library changes negatively impact a company's revenue.

## Make it the responsibility of the design systems team to apply updates

If the design systems team can't provide version numbers, guidance on upgrade paths, and a changelog, how can they ask product engineers to make component updates? It has to be the responsibility of the design systems team to update all of the instances of components in the application code when a component library component is changed.

## Pull request review from colleagues with domain knowledge

It's a good idea to get at least one review from a colleague who works on the part of the application that you're updating. A sanity check can't hurt!

**If your component library doesn't have versioning, how do you avoid breaking application code? Reply to this email and let me know.**

Talk soon,

Mae
