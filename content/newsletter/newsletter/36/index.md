---
path: "/issue-36"
date: "2021-06-22"
title: "🛠️ Do you need to version your component library? (#36)"
tags: [{ name: "newsletter" }]
---

I’ve heard a lot of horror stories about teams that don’t version their component library. I’ve only heard one success story. Not great odds for team no versioning.

Sometimes teams don’t version their library because they want to automatically propagate newly-available changes across all subscribing applications. It would be great if teams that own individual repos didn’t have to upgrade their codebases to work with new components?

Sadly, this dream is too risky for most teams.

Other teams don’t configure versioning because they want to ship components right away. They don’t want to “waste time” with infrastructure and automation. I think we especially notice this with component libraries because design systems teams have to prove their value every quarter to stay funded. It’s easier to sell the value of a design systems team with a lot of pretty buttons than by running commands in your terminal.

I’m a big believer in [YAGNI](https://martinfowler.com/bliki/Yagni.html). I don’t like writing code for “nice-to-haves” or features we “might need” when we haven’t even built the core product yet. But if you’re building a component library, versioning is part of the core product.

To answer the question: you almost always need to version your component library. Ideally, you’ll use [semantic versioning](https://maecapozzi.com/short-explanation-of-semver/), but even just bumping the version incrementally is better than nothing.

I can only think of one case where you don’t need versioning. If you work on a component library where all of the subscribing applications have >80% test coverage, you’re using TypeScript, and you have great QA testers, then go ahead. For everyone else, you’re setting yourself and your teammates up to fail. If a bug caused by your component library results in a page at 3am, good luck getting your teammates to adopt it.

Are you struggling with your release strategy, or trying to figure out how to configure versioning and publishing in your own library? I offer 1:1 consulting sessions –– maybe I can help! Reply to this email and let me know what you're dealing with.

Talk soon,

Mae
