---
path: "/4-tools-to-help-you-version-your-component-library"
date: "2020-07-07"
title: "4 tools to help you version your component library"
excerpt: "As I've been wandering around the internet during quarantine, I've noticed a lot of people asking about how to version a component library. It seems like devs who are starting to work on component libraries understand that they should version their libraries, but they're not sure where to start."
tags: [{ name: "component libraries" }]
---

If you're on my blog, you've probably overheard (or been part of or started) a version of this conversation.

#### Milo

> We're building a component library! It's going to be so great. Your team will be able to use all of the components we build!

#### Nadia

> OK...that sounds great. But how can I be sure your changes won't break my app?

#### Milo

> Um, well we...um...let me get back to you. ** types furiously into Google **

Milo can jump right into googling, but it's not going to be easy for him to find what he's looking for. Googling "how to make sure my changes don't break someone else's app" isn't going to help him out too much, and he'll have to do a lot of auxiliary research to even find out what terms he should be looking for.

There's a lot of jargon out there that can be difficult to sift through, and it's hard for even an experienced dev to know what questions to ask. I compiled this list of tools for you to look into to get you started as you research how to go about versioning your component library so you don't have to do what I did!

### 1. Semantic versioning

[Semantic versioning](https://semver.org/) is a way for you to communicate to your library's consumers that you've released a new version and information about the kind of version you've published. I've written about this in more depth [before](https://maecapozzi.com/library-versioning/), but here's the gist:

If you start at version `1.0.0` and you just published a small change like a bugfix or edited the docs, you want to bump the third number and end up with `1.0.1`. That's referred to as a `PATCH`.

If you start at version `1.0.0` and you added a feature that doesn't break the ability of existing library consumers to interact with the library, that's a `MINOR` change. You'll bump the second number, and end up with `1.1.0`.

If you start at version `1.0.0` and change your library's API so that your consumers need to rewrite their code to continue using your library, that's a `MAJOR` change. You'll need to bump the first number, and you'll end up with `2.0.0`.

### 2. Conventional Commits

[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification that will help you to automate the versioning process. It's a way to make semantic versioning a bit more human-readable and easier to work with. For example, if you include the words `BREAKING CHANGE:` in your commit message, your package will be automatically bumped a `MAJOR` version, or you'll go from `1.0.0` to `2.0.0`.

### 3. Lerna

[Lerna](https://github.com/lerna/lerna) is a set of scripts that make it easier to version and publish your libraries that live in monorepos. It contains commands like `lerna boostrap`, which will link all of the dependencies in your monorepo for you, and `lerna publish` which will publish your packages to a registry. If it didn't exist, you'd have to write these scripts from scratch, so it's a great timesaver.

Lerna has a flag that will automatically configure conventional commits for you. It'll also auto-generate Changelogs for you

### 4. @changesets/cli

[@changesets/cli](https://www.npmjs.com/package/@changesets/cli) is the only tool on the list that I haven't used, but I've heard it mentioned enough times that I think it's worth adding to the list. It's a tool that can help you manage versioning and changelogs in monorepos.

### Hungry for more?

- [Before you build a component library: monorepo versioning](/lerna-monorepo-versioning)
- [Should you version components separately or as a unified system?](/version-bundling)
- [Parallel builds in lerna](/parallel-builds-in-lerna)
- [Before you build a component library: versioning](/library-versioning)
- [What is Lerna?](/what-is-lerna)
