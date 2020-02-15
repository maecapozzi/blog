---
path: "/choosing-a-monorepo-or-a-multirepo"
date: "2020-02-15"
title: "Before You Build A Component Library: Monorepo or Multirepo?"
img: "monorepo-or-multirepo.jpg"
excerpt: "If you're going to build a component library, you need to decide how to store your components. Most teams choose between two options: you can store each component separately in its own repo, or you can store all of your components together in a monorepo."
---

_This post is part of an ongoing series about the problems you'll need to solve before you start building a component library._

- [Before You Build A Component Library: Versioning](../library-versioning)
- [Before You Build A Component Library: Monorepo Versioning](../lerna-monorepo-versioning)

If you're going to build a component library, you need to decide how to store your components. Most teams choose between two options: you can store each component separately in its own repo, or you can store all of your components together in a monorepo.

This is a somewhat controversial topic -- some people _really_ hate the monorepo approach. While I'm of the opinion that a [lerna-managed](https://github.com/lerna/lerna) monorepo is the way to go when you're building a component library, I'm not trying to convince you! I'm just trying to share the research I've done so that you can make the right decision for your team and use case.

## Multirepos

#### Multirepo Pros

- A multirepo approach will offer you the flexibility to use different libraries, tools, and development workflows. You may not want your component library to be beholden to the same workflow as your GraphQL resolvers or your SDKs.
- You may experience fewer tooling challenges since your repo only needs to know how to manage a single project, not multiple different types of projects.

#### Multirepo Cons

- If you want to standardize tooling (for example, you want all of your projects to use TypeScript) across your projects, having each project in a different repo can make this difficult
- You'll need to create a catalog of all of the repos so that people can find what they're looking for. Otherwise, library maintainers will have to constantly field questions about where components live.
- Multiple repositories add friction. Every repo you add means there's another package you have to keep in sync
- It can be annoying to `npm link` components that rely on each other across repos

## Monorepos

In this section, you can assume I'm talking about [lerna-managed](https://github.com/lerna/lerna) monorepos. Lerna provides two versioning schemes, fixed and independent. I'll note below whether any of the points refer to one or the other. If you're unfamiliar with Lerna, you can read a bit more about it.

#### Monorepo Pros

- If you introduce code that breaks another package in your mono-repo, you have to fix that code for the build to pass
- Easier to keep workflows and processes consistent across projects
- Reduces time spent pointing teammates in the direction of different repos
- Global refactoring is easier
- Versions are synced across packages on master & your code always stays in sync. A single coherent notion of version. (fixed)
- Single lint, build, test, and release process
- Easy to coordinate changes across modules
- All documentation is in the same place
- Single place to report issues
- Easier to set up a development environment
- Tests across modules are run together -- find bugs that touch multiple modules more easily
- Don't need to use yarn link when developing components that rely on each other
- You can make a single atomic commit that affects multiple packages and preserves that history and is easier to rollback (fixed)

#### Monorepo Cons

- If you introduce code that breaks another package in your mono-repo, you have to fix that code for the build to pass.
- Naturally gets larger over time which could mean a special build tool.
- IDEs might have trouble with a really large workspace
- Contributors have to have a greater scope of understanding to work in the repo

It's totally up to your team to decide which of these options works better for you. Make sure that you are taking into account what your proposed use cases are, so that you can make the best decision based on the current information that you have.
