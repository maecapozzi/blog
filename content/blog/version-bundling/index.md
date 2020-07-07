---
path: "/using-node-fetch-with-apollo-link-http"
date: "2020-06-27"
title: "Should you version components separately or as a unified system?"
---

Are you struggling to make sense of whether you should version your components as a unified system, like [Babel](https://github.com/babel/babel) or to version them separately, like [Gatsby](https://github.com/gatsbyjs/gatsby)? Well, you're certainly not alone. It can seem like there really is no right answer, and you might even start wondering why you need to version your components at all, especially if you're building an internal library.

There are a few questions you can ask yourself to determine which approach to take.

1. Do you expect users to often use all of the components together?
2. Do all of your packages rely on each other closely?
3. Do you expect users to only use one or two components from the system?
4. Do you expect users to use single components in combination with others in unexpected and specific ways that you can't predict?

If your answer to questions #1 and #2 are yes, it'd be reasonable to version everything together.

If you answered yes to questions #3 and #4, it's probably better to version components as separate packages. This can help you provide more flexibility to your consumers. It'll also make contributing to the library easier, since people unfamiliar with the system will only need to know about individual packages rather than understanding how their changes will affect the versions of multiple libraries. And it allows your consumers to only have to deal with one breaking change at a time.

Additionally, you always have the option of bundling up your separately-versioned components into a library with it's own version. For example,
you might have a `button` and a `link` package. You can version each one individually, and have a third package called `base-components` that contains `button@1.0.0` and `link@2.0.0`.

There's really only one wrong answer to this question in my opinion, and its to not version your packages at all. It's important to communicate to your stakeholders how stable your packages are and whether or not upgrading them is going to mean a breaking change. You also want to make sure it's easy for them to downgrade if your new version isn't working for them. If you don't version them and you introduce a breaking change or a bug they can't downgrade out of you might be negatively affecting a team's ability to ship. That's the exact opposite of what a library should strive to do.
