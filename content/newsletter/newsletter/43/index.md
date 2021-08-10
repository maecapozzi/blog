---
path: "/issue-43"
date: "2021-08-10"
title: "📦 Building polymorphic components in TypeScript (#43)"
tags: [{ name: "newsletter" }]
---

Happy Tuesday!

Yesterday, I wrote to you about building polymorphic components. For those of you who missed it, the term "polymorphic" describes a single component that can render 2 or more HTML elements under the hood.

Building components in TypeScript provides significant value: having a type-safe component API can improve the developer ergonomics of your component library because it prevents your users from passing incorrect data by warning them at compile-time.

It does add an additional layer of challenge to building polymorphic components, because it's not sufficient to only define the properties available on a single element (like a `<button />`). Instead, you must define the properties available on any element the component can render under the hood.

In other words, a polymorphic `Button` component must allow an `href` prop when the as="a", but it can't allow that same prop when as="button".

In this first example, there should be no TypeScript warning:

```tsx
<Button as="a" href="www.google.com" /> // no TypeScript warning
```

In this second example, there should be a TypeScript warning:

```tsx
<Button as="button" href="www.google.com" /> // TypeScript warning
```

The best way to accomplish building this type of component is using TypeScript generics. If you're unfamiliar or uncomfortable with generics, read this post first.

And if you'd like to try your hand at building polymorphic components in TypeScript, give this fantastic post by Ben Ilegbodu a read.

If your company is hiring (and you think it's a great company that you'd tell your friends to work at), fill out this [form](https://forms.gle/tCRpGy7PMfQGqu5B9)!

And if you like this newsletter...**[tell your friends](https://maecapozzi.com/newsletter/)**! Building this community can lead all of us to more job opportunities, guest posts, and connections.
​

Talk soon,

Mae
​
