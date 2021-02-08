---
path: "/how-to-ignore-files-when-using-lerna"
date: "2021-02-08"
title: "How to ignore changed files when publishing with Lerna"
tags: [{ name: "lerna" }]
---

Before tagging a new version, lerna scans your codebase for changed files. If it finds a changed file, it'll recommend a new version. This is really useful most of the time, but you only want to bump to a new version when some library functionality changes. You certainly don't want to introduce a new version just because you changed the README.md file.

There are two ways that you can tell lerna to ignore specific changed files.

## The --ignore-changes flag

You can use the `--ignore-changes` flag to prevent lerna from publishing new versions when it finds changes in specific file types.

```bash
lerna version --ignore-changes '**/*.md'
```

## In the lerna.json file

If you'd prefer, you can add an `ignore` key in the `lerna.json` file.

```json
// lerna.json

"commands": {
  "version": {
    "ignore": ["**/*.md"]
  }
}
```

## Hungry for more?

- [Before you build a component library: monorepo versioning](./lerna-monorepo-versioning)
- [Should you version components separately or as a unified system?](./version-bundling)
- [4 tools to help you version your component library](./4-tools-to-help-you-version-your-component-library)
- [Before you build a component library: versioning](./library-versioning)
- [What is Lerna?](./what-is-lerna)
