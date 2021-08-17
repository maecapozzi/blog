---
path: "/issue-45"
date: "2021-08-17"
title: "😎 Polymorphic forwardRefs in React and TypeScript (#45)"
tags: [{ name: "newsletter" }]
---

Happy Tuesday!

I'll be sending out more job opportunities on Thursday! If your company is hiring (and you think it's a great company that you'd tell your friends to work at), fill out this [form](https://forms.gle/tCRpGy7PMfQGqu5B9)!

I've already connected some of you with potential employers -- let's keep it going!

--
Last week I wrote about building polymorphic components for your design system, and about the very particular challenges of building polymorphic components in TypeScript.
If you missed it, you can catch up [here](maecapozzi.com/newsletter/42/).

Ben Ilegbodu wrote one of the best blog posts about this topic. I rely on his approach heavily when I try to build polymorphic components in TypeScript.

If this is something you're struggling with, make sure to give his post ["Polymorphic React Components in TypeScript"](https://www.benmvp.com/blog/polymorphic-react-components-typescript/) a read.

The only thing missing from his type utilities is an example of how to type forwardRefs.

From the React docs:

> The `React.forwardRef` function creates a React component that forwards the ref attribute it receives to another component below in the tree.

Using React.forwardRef is recommended for component library authors so that users can access the ref of an element returned by another component. But it can be difficult to determine a ref's type at runtime when it is based on the dynamic `as` prop.

For example, if a user passes 'a' to the `as` prop, the ref's type would be `React.forwardedRef<HTMLAnchorElement>`, but if a user passes 'button' to the `as` prop, the ref's type would be `React.forwardedRef<HTMLButtonElement>`.

I reached out to Ben and asked him if/how he'd solved this problem at Stitch Fix, and he wrote a whole new [blog post](https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/) about it!

Try out his solution and let me know what you think. Does your team have a good solution to typing polymorphic components that supports React.forwardRef? Share it with me, I'd love to see how you're approaching the problem,

--
If you like this [newsletter](https://maecapozzi.com/newsletter/) it would really help me if you shared it with your friends. Tweet about it, post on LinkedIn, and share in slack channels. Building this community can lead all of us to more job opportunities, guest posts, and connections.
​

Talk soon,

Mae
​
