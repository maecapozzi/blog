---
path: "/short-explanation-of-semver"
date: "2020-08-10"
title: "A short explanation of semantic versioning"
---

Semantic versioning is a way for library authors to communicate to consumers that you’ve released a new version and information about the kind of version you’ve published. I’ve written about this in more depth before, but here’s the gist:

- If you start at version 1.0.0 and you just published a small change like a bugfix or edited the docs, you want to bump the third number and end up with 1.0.1. That’s referred to as a PATCH.
- If you start at version 1.0.0 and you added a feature that doesn’t break the ability of existing library consumers to interact with the library, that’s a MINOR change. You’ll bump the second number, and end up with 1.1.0.
- If you start at version 1.0.0 and change your library’s API so that your consumers need to rewrite their code to continue using your library, that’s a MAJOR change. You’ll need to bump the first number, and you’ll end up with 2.0.0.

When you're installing open-source packages, check the version number. The authors of the component library are trying to communicate details about the package's stability to you.

## Hungry for more?

- [Parallel builds in lerna](/parallel-builds-in-lerna)
- [4 tools to help you version your component library](/4-tools-to-help-you-version-your-component-library)
- [Before you build a component library: versioning](/library-versioning)
- [Before you build a component library: monorepo versioning](/lerna-monorepo-versioning)
- [What is Lerna?](/what-is-lerna)
