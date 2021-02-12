---
path: "/what-are-conventional-commits"
date: "2021-02-06"
title: "What are Conventional Commits?"
excerpt: "Conventional commits are a powerful specification that makes it possible to automate some of the more annoying parts of your versioning and publishing workflow."
tags:
  [
    { name: "component libraries" },
    { name: "design systems" },
    { name: "lerna" },
  ]
---

If you've looked through any open-source repositories recently, you've likely seen commits that look like this:

![github commits](../../assets/conventional-commits.png)

The commit messages are prefixed with a "tag" like `fix` or `feat` . This commit message specification is called [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), and it's a powerful way to write commit messages that are human and machine-readable.

Conventional commits are a powerful specification that makes it possible to automate some of the more annoying parts of your versioning and publishing workflow. For example, you can use conventional commits to auto-version new releases of your library.

Because conventional commits are machine-readable, plenty of open source tools leverage them. For example, lerna has a `--conventional-commits` flag that checks your commit messages and recommends a semantic version for you.

I'd recommend this tool for library authors and maintainers who want to automate their versioning and publishing flow using tools like CI or Github Actions. A common workflow might look like this:

1. Open a PR on a feature branch

2. Get approvals on the PR

3. Squash all commits and write a commit message that fits the Conventional Commits specification

4. Merge PR to main branch

5. Build kicks off, reads the commit message, and calls a versioning script

6. New package version is set and build calls a publish script, which publishes a new release to the registry

7. Build completes, and code is merged to the main branch
