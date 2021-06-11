---
path: "/issue-31"
date: "2021-06-11"
title: "🧪 Three ways to test your npm packages (#31)"
tags: [{ name: "newsletter" }]
---

Happy Friday! I hope you've had a great week.

I'm going to switch gears to write a bit about a frontend infrastructure topic: how do you test your components locally before publishing them to npm?

If you're working on an npm package, you need to test it locally before you publish it to the registry. I've used all three of these approaches:

1. `npm link`
2. `npm pack`
3. [yalc](https://github.com/whitecolor/yalc)

## npm link

When you run `npm link` you create a symbolic link, or symlink, between your local package and a local application. When it works, it's a great way to test local changes to your package.

Unfortunately, running `npm link` doesn't always work. As Carl Vitullo points out in his [blog post](https://blog.vcarl.com/testing-packages-before-publishing/), there are three problems with symbolic links:

1. Some build tools don’t understand symlinks
2. Symlinking doesn’t verify that you’ve packaged it correctly.
3. Module resolution doesn’t work with 2 file trees.

I've found that when I try to use `npm link` I spend more time debugging symlinking than actually testing my local changes. I'd suggest just avoiding this approach in general.

_If you'd like to read more about the problems with symlinking, check out this [issue](https://github.com/yarnpkg/yarn/issues/1761#issuecomment-259706202) from [@sebmck](https://github.com/sebmck)._

## npm pack

You can use `npm pack` as an alternative to symlinks. This command creates a `.tgz` file which you can install in a local application. This is a great approach to testing local components because it mimics the actual process of publishing to npm. When I'm testing a one-off component, or just need to quickly test something, I still often use the `pack` command.

Carl's [blog post](https://blog.vcarl.com/testing-packages-before-publishing/) has a great example of what a workflow using `npm pack` might look like, so I'd take a look at that.

## yalc

There's a third approach that I prefer to both `npm link` and `npm pack`: [yalc](https://github.com/whitecolor/yalc). According to the yalc documentation, "yalc acts as very simple local repository for your locally developed packages that you want to share across your local environment." Designed to emulate `npm pack`, I find that it provides a nicer developer experience and makes testing local components more enjoyable than both `npm link` and `npm pack`. It works really well when your component library is a monorepo.

Let's walk through what a common workflow might look like using yalc to locally test your changes.

Imagine that I have a library called `my-package`. First, I need to install yalc globally.

```jsx
npm install yalc -g
```

Once I install `yalc`, I will `cd` into the `my-package` directory:

```bash
cd my-package
```

I'll make some changes to `my-package` that I want to change locally. Once I'm ready to test those changes, I'll run `yalc publish`.

Next, I'll `cd` into the project I want to test my component in. Let's call that project `my-project`.

```bash
cd ../my-project
```

Inside of `my-project` I'll run `yalc add my-package` which will install the local version of `my-package` inside of `my-project`. And that's it! Now I can run `my-project` knowing that I have the most recent local changes to `my-package` installed.

**Please send me some questions! I'd love the opportunity to answer them next week.**

Talk soon,
Mae
