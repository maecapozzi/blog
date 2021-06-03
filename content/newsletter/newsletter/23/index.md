---
path: "/issue-23"
date: "2021-03-16"
title: "📦 How to build better components for your design system (#23)"
---

Have you ever been reading proposals for a new component and seen this conversation play out?

> Reviewer: Nice proposal, but I think we’re missing a potential use case. Can this Button component support an icon?

> Proposer: Oh, I forgot about that. Shouldn’t be a major change. We can add an icon prop and people can pass an Icon component to it. Something like this:

```tsx
const Icon = () => <svg />;
<Button icon={Icon} />;
```

Reviewer: Hm, I’m not sure I’d do it like that. I think this approach would be better:

```tsx
<Button>
  <Icon />
  Click me
</Button>
```

End scene. Good thing I took up coding instead of screenwriting.

Design systems teams need to agree on the API they will offer to their consumers, and they generally have two choices: configuration or composition.

## Configuration

In the example I shared, the proposer is recommending configuration over composition. In their example, the consumer should be able to pass data to the component, and the component should know exactly how to render itself based on that data. This approach has a lot of benefits!

### Pros

- The DS team can control exactly what the component looks like
- The DS team has a lot of control over accessibility
- The DS team can enforce adherence to tokens or other standards
- Consumers can easily plop the component on a page without having to know much about building frontends

### Cons

- Consumers can find these components difficult to override if what they need to build is even slightly different from the default
- DS team has to maintain more complicated APIs (potentially 10s of props)
- Consumers may have to opt-out of the system entirely (build their own version of something) if the component is too opinionated

## Composition

The reviewer, on the other hand, is recommending composition over configuration. In their response to the proposal, they are suggesting that consumers should be able to take small building blocks and combine them together in whatever order they’d like. This is a very powerful model that a lot of design systems prefer.

### Pros

- Consumers can easily invent new UIs without totally opting-out of the system
- Easier for DS teams to maintain, since they can offer fewer components
- Enables strong frontend engineers to move much more quickly and innovate
- Makes a component library much more resistant to change

### Cons

- Consumers take on the burden of building accessible components, or components that adhere to tokens or other standards
- Reduces adherence to a strict system
- Might be more difficult for less experience frontend engineers to understand exactly how to build a robust UI

Like most questions in design systems, the approach you choose depends on a few different factors. You should ask yourself the following questions to help determine which approach to take:

- How comfortable are your consumers with frontend engineering?
- How flexible does your system need to be? (a single brand system might choose configuration where a multi-brand system might choose composition)
- What is the vision for how design systems will scale over the next 1 to 5 years at your company?

My only recommendation is to get this conversation out of the way early, and to make sure the whole team is aligned on the how and the why of your chosen approach.
