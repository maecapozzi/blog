---
path: "/do-you-need-to-version-your-component-library"
date: "2020-12-27"
title: "Do you need to version your component library?"
excerpt: "Why you should almost always version your component library."
tags: [{ name: "component library" }]
---

I've heard a lot of horror stories about teams that skip versioning their component library. And I've only heard one success story. Not great odds for team no versioning.

One reason I see teams choose not to version their library is because it seems like a good idea to automatically propagate changes across all subscribing applications as soon as they’re available. How great would it be if the teams that own individual repos didn't have to spend time upgrading their codebases to work with new components? Unfortunately, this dream ends up being too risky.

The other reason teams skip the versioning step is because they want to ship components right away –– they don’t want to “waste time” with infrastructure and automation. I think we especially notice this with component libraries because design systems teams constantly have to prove their value every quarter to stay funded.

I'm a big believer in [YAGNI](https://martinfowler.com/bliki/Yagni.html). I don't like writing code for "nice-to-haves" or features we "might need" when we haven't even built the core product yet. But if you're building a component library, versioning is part of the core product.

To answer the question: you _almost always_ need to version your component library. Ideally, you’ll use [semantic versioning](<[https://maecapozzi.com/short-explanation-of-semver/](https://maecapozzi.com/short-explanation-of-semver/)>), but even just bumping the version incrementally is better than nothing.

I can only think of one case where you don’t need versioning. If you work on a component library where all of the subscribing applications have >80% test coverage, you’re using TypeScript, and you have great QA testers, then go ahead. For everyone else, you’re setting yourself and your teammates up to fail. If a bug caused by your component library results in a page at 3am, good luck getting your teammates to adopt it.
