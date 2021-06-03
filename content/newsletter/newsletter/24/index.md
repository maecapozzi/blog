---
path: "/issue-24"
date: "2021-04-06"
title: "🎂 The 5 layers of a design system (#24)"
---

Picture a fully-fledged design system. You can bootstrap a new project, pull a bunch of components from the system, and have a page in minutes instead of days. When you're first starting to build your own, it seems too good to be true. You might be asking yourself, "how do I get from _nothing_ to a system that supports multiple teams and hundreds of happy engineers?"

There's a lot to consider, but in this post we're going to talk about design system architecture, or the five layers in a design system's **component hierarchy**.

We can use the metaphor of a wedding cake to understand this a little better. When you see a wedding cake, your brain first thinks, "oh look, a cake." As you look closer, you start to see that it consists of multiple layers and elements.

![A wedding cake](../../assets/wedding-cake.jpg)

Design systems are the same way. At first glance, a design system might seem like a single, monolithic library. In reality, a good design system is a series of layers that build on each other, ideally using [progressive disclosure of complexity](/progressive-disclosure-of-complexity) as a guiding principle.

### The 5 layers

When a design system reaches maturity, it should have five layers, with the first three living in the design files and component library, and the last two living in the application code.

You may have heard of Brad Frost's [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). He refers to the 5 levels in the component hierarchy in the following way:

_Note: The gray bar represents where the component library and design files end, and the application code begins._

1. Atoms
2. Molecules
3. Organisms

---

4. Templates
5. Pages

Brad Frost's language is really good, and very commonly used across teams. It's not quite as specific as I'd like to really nail down the communication between designers and developers on my team, so I've decided to adopt [Radius](https://radius-ds.netlify.app/?path=/docs/guides-creating-components--page)' language and diagram:

![An image representing the component hierarchy](../../assets/component-hierarchy.svg)

<p align="center"><em>This diagram is from the <a href="https://radius-ds.netlify.app/?path=/docs/guides-creating-components--page">Radius</a> storybook.</em></p>

1. Design tokens
2. Elements
3. Patterns

---

4. Features
5. Layouts

### Design Tokens

Design tokens are the most abstract layer of the system. They are an approach to storing style attributes like color, typography, and spacing in a pre-determined structure. While not particularly useful on their own, they are a critical part of a design system. They allow designers and developers to quickly ship redesigns, add theming to their applications, and build consistent layouts.

Ideally, your design tokens will follow a specific structure so that when you want to add a new theme––like dark mode––or you want other sites to be able to apply their own theme, it's easy to do. You should agree with your designers on how to name and structure your tokens so that you can start to build a shared language between designers and developers on your team.

You might represent your design tokens in your application like this:

```ts
const theme = {
  colors: {
    primary1: "#07005B",
    primary2: "#1D35AF",
    secondary1: "#E34F30",
    secondary2: "#3CA6E0",
    secondary3: "#C17259",
    secondary4: "#0E78B2",
    secondary5: "#00875E",
  },
};
```

#### Elements

Now that we've covered design tokens, let's move up a level to elements. In my experience, this is what people usually think about when they imagine a design system. They're certainly a foundational part!

The elements in the design system should know how to read your design tokens. As you're building out your elements, you'll want to think carefully about what parts of your elements can be overridden by a change to the design tokens, and which are hardcoded.

The most common example of an element is a Button component. It seems simple, but there's a lot to consider!

Let's use a `RadioButton` for our example. If we're writing React code, our `RadioButton` might look something like this (although in real life it'll have some props):

```tsx
<RadioButton />
```

Some other examples include:

- Link
- RadioButton
- Tab
- Checkbox
- Input
- Grid
- Box

#### Patterns

Patterns consist of two or more elements. They are more opinionated than elements. As design system maintainers, we make decisions about how elements are combined to create patterns. If consumers don’t like they way we have created a pattern, they are welcome to drop down a layer of abstraction and combine elements in a new way.

Let's use the `RadioList` to illustrate this point. A `RadioList` is a group of multiple `RadioButton` elements. I'd implement that component like this:

```tsx
const radioList = [
  {
    label: 'Specialized Diverge',
    value: 'diverge'
  },
  {
    label: 'Specialized Roubaix',
    value: 'roubaix'
  },
  {
    label: 'Specialized Allex',
    value: 'allez'
  }
]

<RadioList data={radioList}/>
```

Under the hood, the `RadioList` would render three `RadioButton`s with the correct labels and values.

Some other examples include:

- TabsList
- Form
- NavBar

#### Features

Features consist of two or more patterns. They are more opinionated and specific than patterns. As usual, consumers can drop down into the level of abstraction that’s right for their needs. Normally, features will live in application code, not in the design system.
We can use a `SurveyQuestion` as an example! A `SurveyQuestion` might combine a `RadioList` with a `Text` component.

```tsx
const SurveyQuestion = () => (
  <>
    <Text>What is the answer to this question</Text>
    <RadioList data={radioList} />
    <Button>Submit</Button>
  </>
);
```

Some other examples include:

- ShippingAddressForm
- CrossSellModule

#### Layouts

Layouts consist of two or more features. These are the most opinionated layer of the system, and are usually so custom that it wouldn't make sense for them to live in the design system.

Some examples include:

- Survey
- CheckoutPage
- HomePage

Let’s reiterate a bit. By the time we’ve reached the Layout level, we have an entire, customized <Survey /> that’s living on a site somewhere. But that <Survey /> is composed from many different levels (some of which live in application code, and others of which live in the design system).
The <Survey /> is made up of multiple <SurveyQuestion /> features. Each <SurveyQuestion /> is made up of multiple <RadioList /> patterns. <RadioList /> patterns are made from multiple <RadioButton /> elements. And RadioButtons know how to read the design tokens.
