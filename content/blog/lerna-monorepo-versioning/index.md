---
path: "/lerna-monorepo-versioning"
date: "2020-02-15"
title: "Before You Build A Component Library: Monorepo Versioning"
img: "lerna.png"
excerpt: "It sounds to me like people are really unclear on the capabilities of monorepos! Before we go any further. You can 💯percent version packages in a monorepo!"
---

_This post is part of an ongoing series about the problems you'll need to solve before you start building a component library._

- [Before You Build A Component Library: Monorepo or Multirepo?](../monorepo-or-multirepo)
- [Before You Build A Component Library: Monorepo Versioning](../lerna-monorepo-versioning)

I was scrolling through twitter the other day, and saw a joke [tweet](https://twitter.com/markdalgleish/status/1227104671812112385) about design systems:

It read:

> "We're introducing a design system so that when we make a change, it'll go everywhere."  
> "Cool, so we'd like to change this component."  
> "Don't do that—it'll go _everywhere!_"

![](../../assets/design-system-tweet.png)

I was thinking about the joke a bit more, since I think it taps into a real fear that a lot of developers have about design systems and component libraries. That's when a second tweet popped up that read:

> "We’re going to put it in a monorepo so you can’t even version things!"

It sounds to me like people are really unclear on the capabilities of monorepos! Before we go any further...you can 💯percent version packages in a monorepo!

If you're sitting there wondering what a monorepo is, go read this [post](../monorepo-or-multirepo).

Still with me? Great!

## Lerna

Lerna is a great open-source tool for managing projects with multiple packages. Both [Gatsby](https://github.com/gatsbyjs/gatsby) and [Babel](https://github.com/babel/babel) are open-source monorepos using Lerna behind the scenes.

_As an aside, you might feel tempted to write your own scripts to manage your monorepo. I would caution you against this impulse -- you have enough work on your plate trying to set up a component library! You don't need to reinvent the wheel here._

## Versioning

When you modify a package, you need to signal to its consumers that you've made changes. You normally do this by incrementing the version number of your package. If you're not familiar with library versioning, I'd recommend reading [this post](../library-versioning) before continuing.

## Versioning packages in a monorepo with Lerna

Lerna offers you two versioning schemes for packages in your monorepo: [fixed versioning](https://github.com/lerna/lerna#fixedlocked-mode-default) and [independent versioning](https://github.com/lerna/lerna#independent-mode).

Fixed versioning is the default. It automatically ties all your package versions together, so if you bump one package in the monorepo, all the packages get bumped. Babel is a good example of a monorepo that uses this approach.

The other option is independent versioning. It allows you to increment package versions independently. Gatsby is a good example of a monorepo that uses this approach.

If your monorepo only consists of components and they are often or always used together, fixed versioning should work nicely for your needs. On the other hand, if your monorepo contains unrelated packages, you might prefer independent versioning. You probably don't want to increment the version of your A/B testing tool just because you made changes to the `<Card />` component.
