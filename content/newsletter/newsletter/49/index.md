---
path: "/issue-49"
date: "2021-08-24"
title: "🖌️ How to decide if your design system should support style overrides. (#49)"
tags: [{ name: "newsletter" }]
---

Happy Tuesday!

Yesterday, I wrote to you about whether your design system should allow style overrides. Like most questions in design systems, the answer is "it depends."

Today, I want to talk about how to decide whether your library should support style overrides or not.

## How to decide whether to allow style overrides on design system components

There are benefits and pitfalls to both approaches. It's critical to understand the business case for the library before making a call.

There are at least two different goals of design systems:

1. To support design consistency across multiple codebases

2. To support design inconsistency, but improve code quality and speed to launch across multiple codebases

## Support design consistency across multiple codebases

A great example of this style component library is [Braid](https://seek-oss.github.io/braid-design-system/).

If your team's design system supports multiple codebases that need to look like they are all owned by the same company, it's probably best to restrict style overrides.

This type of system works best if design inconsistency is frequently revealed and resolved. By making components difficult to override, you encourage a feedback loop between developers, designers, and the design system team.

INSERT DIAGRAM

1. Product developers realize that they cannot implement a product designer's one-off design with existing components.

2. The developer raises the inconsistency to the designer.

3. The product designer has one of two choices - (1) to redesign the experience in alignment with DS constraints, or (2) to discuss adding a new variant to the DS.

4. If the product designer wants to discuss adding a new variant, they can have a conversation with the DS maintainers. As a team, they decide whether to (1) add a new variant to the DS, or (2) re-implement the experience in alignment with DS constraints.

## Support design inconsistency, but improve code quality and speed to launch across multiple codebases

A great example of this type of design system is [Radix](https://www.radix-ui.com/).

When building multi-brand systems where design consistency is less critical, but a layer of accessible reusable components is important, it's reasonable to allow style overrides.

In this case, you must allow style overrides. Ideally, your components have little to no style opinion.

You'll likely introduce multiple layers of abstraction, with the base layer being a library of unstyled, unopinionated, behavior-driven components.

On top of that you might have multiple opinionated libraries that restrict style overrides.

I've written about this topic in more depth here
