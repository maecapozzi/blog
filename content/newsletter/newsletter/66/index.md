---
path: "/issue-66"
date: "2021-11-05"
title: "❓ So you want to build a design system? (#66)"
tags: [{ name: "newsletter" }]
---

Happy Friday!

Today I'm sharing a guest post by [Derek Torsani](https://derektorsani.com/). Derek is a designer with 5+ years of experience in design systems. He is currently working as a systems designer at [Gusto](https://gusto.com/), building tools to help designers and engineers work better together.

---

by Derek Torsani

So you want to build a design system?

> Better late than never, but never late is better.
> -- Drake

Wouldn't it be nice to go back and remake all of the design system decisions that are much more difficult to make now that you're deep in the process. I've found through working on multiple design systems, there are foundational questions I should've asked myself that would have been much easier to implement in the beginning of a new system.

It's never too late to incorporate these 10 decisions into your design system. For those of you just starting out building a new system, hopefully these tips can help you move forward with much more confidence.

## 1. Principles

Defining values and principles is a very important first step of creating a design system. These definitions will help resolve conflict and disagreement during crucial design decisions. How do we weigh accessibility against visual aesthetic? Can we find balance between clarity and minimalism? [Shopify explains why defining principles are important](https://www.shopify.com/partners/blog/design-principles)

## 2. Native vs Brand

When building for native mobile, consider when to align with the operating systems design guidelines (Material, Apple HIG) and when to create unique components and experiences. Is it more important to create something different and unusual across platforms, or to build in familiarity by aligning to existing OS guidelines and apps users are already using on their phones? [More on designing for different native devices](https://medium.muz.li/differences-between-designing-native-ios-apps-and-native-android-apps-e71256dfa1ca)

## 3. Layouts

Create a few reusable page layout templates that most pages can be created from. This will help create consistency and cohesion through your product and begin to build experiential trust with your users. Where should the primary action on the page go, and in what scenarios? [Check out how Hewlett Packard designs various page layouts](https://design-system.hpe.design/templates/page-layouts)

## 4. Responsiveness

In conjunction with layouts, think through how each page should respond to the changing of browser widths from a very large desktop monitor to the phone my mom hasn't upgraded from yet. What's the largest width certain components can be? The smallest width? How does spacing between items change for different device types? Much of this can be determined by determining max content widths. [Read about optimal text length from Smashing Magazine](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/#the-ideal-measure-45-to-75-characters)

## 5. Library Structure

When it comes to organizing design asset files, code repositories, and how these are affected by different products or teams, figuring out how your library structure should work is helpful, especially as the system grows with the company. Should everything live in one library? Or split based on device or product? [Check out how Lyft builds user-centered resources](https://design.lyft.com/user-centered-design-system-resources-fe721cd6432b)

## 6. Update Communication

A system is always going to grow. It is a living, breathing ecosystem of ever-evolving tools and resources. As it shapeshifts due to organizational changes, bug fixes, or additions of new elements, consider how you want to track and communicate these updates. [Read about versioning a design system](https://rojcyk.com/blog/how-we-version-our-design-system-with-figma-take-two)

## 7. Typography

Choose a typeface, or multiple, and define how/when each is used, in what scale, and when to limit certain typeface usage. Is one typeface used only for marketing purposes, and only finds it way into the app when upselling or promoting a new feature? [Learn how to choose a typeface](https://www.designsystems.com/typography-guides/)

## 8. Colors

Build a color palette with these questions in mind. Which colors signify which type of component, element, or interaction? What is the status palette (success, warning, error/danger/urgent)? How many shades of grey do I really need? If you don't design your color palette with accessibility in mind from the beginning, you'll regret it later. [Learn more about accessible colors from Stark](https://www.getstark.co/library/colors)

## 9. Tokens

Now that you've thought through colors, typography, and spacing, determine how to build a dynamic and flexible token naming system. How should your tokens translate across elements? How can you incorporate styles, weights, sizes, etc. into the nomenclature? [Understand the ins and outs of token naming](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)

## 10. Metrics

Understand how your design system is being used. This will help you know how to properly make improvements, which elements are making the most impact, and provide value of your system to stakeholders. [Learn how to measure impact of your design system](https://askplaybook.com/measure-the-impact-of-a-design-system/answers)

No matter where you are in building your design system, remember that the most important thing you can do to help navigate changes, updates, and make improvements is to build and maintain relationships with your consumers. Pair with them, learn from them, ask them how they use the design system and what could be different.

Never late is better. But hey, better late than never!

--

If you like this [newsletter](https://maecapozzi.com/newsletter/) it would really help me if you shared it with your friends. Tweet about it, post on LinkedIn, and share in slack channels. Building this community can lead all of us to more job opportunities, guest posts, and connections.

Talk soon,

Mae
