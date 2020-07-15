---
path: "/choosing-a-monorepo-or-a-multirepo"
date: "2020-07-15"
title: "Before You Build A Component Library: Monorepo or Multirepo?"
img: "monorepo-or-multirepo.jpg"
excerpt: "If you're going to build a component library, you need to decide how to store your components. Most teams choose between two options: you can store each component separately in its own repo, or you can store all of your components together in a monorepo."
---

_This post is part of an ongoing series about the problems you'll need to solve before you start building a component library._

- [Before You Build A Component Library: Versioning](../library-versioning)
- [Before You Build A Component Library: Monorepo Versioning](../lerna-monorepo-versioning)

Have you ever sat down to write a blog post, essay, email, or feature, and suddenly your mind goes blank? You watch the cursor bounce, taunting you, until you can't take it anymore. You have to grab an ice-cold LaCroix from the well-stocked fridge of the trendy startup you work at. Ahem...sorry I just started fantasizing about pre-quarantine life.

If you're anything like me, you probably feel this way trying to make the initial decisions about a component library. How can you possibly make a decision about the repository structure of your library when you don't even have any components yet?

One of the reasons writers experience blank page syndrome is because they could literally write about _anything_. Luckily, in this case you really only have two options.

1. You can store each component separately in its own repo
2. You can store all of your components together in a monorepo.

If you're unsure whether to choose option #1 or option #2, and you don't have a lot of time, and for some reason you really trust a stranger on the internet with your decisions, I can solve that for you right now.

**Use a [lerna-managed](https://github.com/lerna/lerna) monorepo**.

Now...even if you totally buy what I'm saying, you can't just go back to your team and say that some stranger on the internet told you what to do. (I mean you could, but you might not be put in charge of making any other decisions.)

I don't want you to have to go off and do a ton of research to justify building a monorepo. To save you some of that time and stress, I compiled a pros/cons list for both approaches.

## Multirepos

#### Multirepo Pros

- A multirepo approach will offer you the flexibility to use different libraries, tools, and development workflows. You may not want your component library to be beholden to the same workflow as your GraphQL resolvers or your SDKs. (This doesn't mean you can't have different types of libraries in a monorepo. At Harry's, we have components, CLI tools, and GraphQL resolvers all in one place.)
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

#### What's next?

If you've decided to go with the monorepo approach, you'll need a way to manage your packages. Enter [Lerna](https://github.com/lerna/lerna).

If you haven't heard of Lerna yet, don't worry about it! I can definitely help you out! Just start [here](/what-is-lerna).

Are you researching monorepos and Lerna for something you're building? What are you stuck on? I'd love to hear from you. You can reach me on [Twitter](https://twitter.com/MCapoz) or by responding to any of my newsletter messages. (Seriously, I really want to hear from you.)
