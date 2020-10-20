---
path: "/where-to-start-with-design-tokens"
date: "2020-10-20"
title: "Where to start with design tokens"
tags: [{ name: "design systems" }, { name: "component libraries" }]
---

If you've been researching design systems, you've probably come across the term "design tokens." (If you haven't, no worries! You can read about them [here](/design-tokens).) Even if you've heard the term, you might not really understand what they are or where to start.

**Design tokens are an approach to storing style attributes like color, typography, and spacing in a pre-determined structure. They are an alternative to directly hard-coding style data that allow designers and developers to build consistent, pleasing layouts, quickly accomplish redesigns, and add a theming layer to their applications.**

In my opinion, design tokens are a great way to dip your toes into the world of design systems. I like to think of a design system as a having [5 layers to it](/layers-of-abstraction-in-design-systems). The smallest building block of that system (or the first layer) is design tokens.

Usually when designers and developers start work on an app, they don't create a centralized and structured way to organize style data like colors and fonts. This is totally fine for few years, but eventually the team runs into one of the following issues:

- Marketing wants to redesign the site, but hard-coded colors across design files and codebase are too difficult to keep track of or change
  <br />
- The team wants to add a feature like dark mode, but realizes it's really difficult without centralized style data
  <br />
- The team wants to start supporting multiple applications without building each one entirely from scratch

So once you find yourself in this situation, what do you do?

## 1. Decide to invest in design tokens

The first step is recognizing that design tokens are a great tool for addressing the three situations listed above. At this point, you'll need to encourage your team to invest in researching and implementing design tokens.

## 2. Educate and socialize

It's more than likely that some of your teammates will never have heard of design tokens. You'll need to begin to educate them on the value of the tool, and encourage them to do their own research. You can use [Theme UI's demo](https://theme-ui.com/demo) to help make your case, or you can create your own proof-of-concept.

## 3. Choose how you'll implement your tokens

You have a couple of options for how to implement your tokens. A lot of teams choose to implement their own structure and naming scheme. This approach prevents your team from having to depend on an external library. The key is to make sure that your tokens are named really generically! Take a look at examples from companies like Salesforce to get ideas for how to structure your tokens. I write about this topic in more depth [here](/design-tokens) if you are interested.

You also have the option to use a third-party library like [Theme UI](https://theme-ui.com/home). Theme UI lets you implement your tokens according to their [Theme Specification](https://theme-ui.com/theme-spec) and offers you some helpful syntactic sugar like their `sx` prop and `variants` key to make using your tokens easier. Even if the library isn't for you, you can use the Theme Specification as inspiration.

## 4. Implement the tokens

At this point, you'll work with designers on the team to agree on naming and structure for the tokens, and you'll create an object with that contains your structured style data. The final step is to configure the components in your application to read from the tokens instead of from hardcoded values.

So if your tokens look like this:

```js
const theme = {
  colors: {
    primary: "pink",
  },
};
```

Your components would no longer look like this:

```jsx
const Nav = styled("nav")`
  color: pink;
`;
```

They would instead read from the theme object:

```jsx
const Nav = styled("nav")`
  color: ${(props) => props.theme.colors.primary};
`;
```

Now, if you change the values of your tokens:

```js
const theme = {
  colors: {
    primary: "green",
  },
};
```

You no longer need to update the styles in your component.

---

Are you researching design tokens for something you're building? What are you stuck on? I'd love to hear from you. You can reach me on [Twitter](https://twitter.com/MCapoz) or by responding to any of my newsletter messages. (Seriously, I really want to hear from you.)
