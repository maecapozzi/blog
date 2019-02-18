---
path: "/parallel-builds-in-lerna"
date: "2019-02-15"
title: "Why you should avoid the --parallel flag in lerna build scripts"
---

When you're configuring a monorepo with lerna, you might consider writing your build scripts like this:

```json
"scripts": {
  "build": "lerna exec --parallel 'yarn run build'"
}
```

It makes sense, initially! You're probably thinking, why wouldn't I want to build all my scripts concurrently, rather than running each build one-by-one?

The above build script actually works wonderfully, until you build a package that relies on another package in your monorepo. Then, if you're anything like me, your linter might warn you:

```bash
Unable to resolve path to module <name-of-module>  import/no-unresolved
```

You'll have _no_ idea why, because you probably have the packages already built locally. This'll only be caught in CI, if you have CI. Or it will be caught when one of your teammates pulls down master, and sees this error for themselves! Or worse, when a consumer of your library can't consume it!

You need to make sure that your packages are built according to their dependency graph. For example, if package1 imports package2, you need to build package2 first, otherwise package1 won't be able to find package2.

All you have to do is be a little less fancy:

```json
"scripts": {
  "build": "lerna exec -- yarn run build",
}
```
