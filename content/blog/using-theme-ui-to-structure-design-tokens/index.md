---
path: "/using-theme-ui-to-structure-design-tokens"
date: "2020-11-21"
title: "Using Theme UI to structure design tokens"
excerpt: "Theme UI is a library that helps you to manage your design tokens in an opinionated way. It's based on a Theme Specification that is specifically designed to allow you to theme different applications. While it can be used inside of an application, it's also possible to use it as part of a component library."
tags: [{ name: "design systems" }, { name: "component libraries" }]
---

_If you're not familiar with the concept of design tokens, you'll want to learn about that before reading this post. Check out my other posts on design tokens: [Design Tokens](https://maecapozzi.com/design-tokens/) and [Where to Start with Design Tokens](https://maecapozzi.com/where-to-start-with-design-tokens/) first!_

Theme UI is a library that helps you to manage your design tokens in an opinionated way. It's based on a [theme specification](https://theme-ui.com/theme-spec) that is specifically designed to allow you to theme different applications. While it can be used inside of an application, it's also possible to use it as part of a component library.

Let's go over some of the benefits that using ThemeUI in your component library can offer.

## A thoughtful token specification

I'm going to be honest with you. Theme UI's [Theme Specification](https://theme-ui.com/theme-spec) is _much, much_ better than anything I could've invented. [Brent Jackson](https://jxnblk.com/) has been thinking about design tokens for years. I'm pretty sure a huge part of his job is working on Theme UI. Adopting this specification, which is designed for interoperability, just makes sense.

Even if you don't want to include Theme UI as a dependency, I'd recommend adopting the specification in your own implementation. At the very least, I'd suggest reading through the specification for inspiration and guidance.

## The `sx` prop

Theme UI's creators understand that sometimes you need an escape hatch. That's where the theme-aware `sx` prop comes in.

When you build a component for your library, you make a lot of decisions. It's almost impossible to know every single use case your component needs to fill. Sometimes, your consumers are going to need to tweak the component you give them. Providing a safe way for them to override your styles is much better than forcing them to abandon your component.

By adding the `jsx` pragma provided by Theme UI, your consumers can override the styles of a component by passing an object into the `sx` prop that references the theme (for example, they can pass a color as `'primary'`, which will reference the primary key in the theme). Or, they can pass raw CSS values.

Here's a code snippet from the [docs](https://theme-ui.com/sx-prop) describing this concept:

```jsx
/** @jsx jsx */
import { jsx } from "theme-ui";

export default (props) => (
  <div
    {...props}
    sx={{
      // values referencing scales defined in a theme
      color: "primary",
      bg: "lightgray",
      fontFamily: "body",
      // raw CSS value
      boxShadow: "0 0 1px 3px rgba(0, 0, 0, .125)",
    }}
  />
);
```

## Responsive array syntax

Another feature of Theme UI is built-in responsive array syntax. Take a look at the following code snippet to understand how change the text color of a component across different breakpoints:

```jsx
/** @jsx jsx */
import { jsx } from "theme-ui";

export default (props) => (
  <div
    {...props}
    sx={{
      // pass different colors based on the breakpoint
      color: ["primary", "secondary", "tertiary"],
    }}
  />
);
```

Sure, you can build this yourself, but don't you have other work to do?

## Merging themes

Another feature of Theme UI that I love is the `merge` function. It allows you to deeply merge themes, which means you can merge tokens that are being passed into your component library's `ThemeProvider` with a set of `base` design tokens in your component library. I just think that providing this is a really thoughtful touch from the library's creators.

## Try it out

There are many other great features in Theme UI that you should explore if this blog post has piqued your interest: MDX support, a `useThemeUI` hook, and a whole component library! Even if you don't end up using the library, I think anyone would draw inspiration for their own design token implementation from this project.

## Hungry for more?

- [Design Tokens](/design-tokens)
- [Where to start with design tokens](/where-to-start-with-design-tokens)
- [Getting Started with Design Systems Checklist](/getting-started-with-design-systems-checklist)
- [What is Lerna?](/what-is-lerna)
