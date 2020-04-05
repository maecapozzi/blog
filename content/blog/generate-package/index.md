---
path: "/generate-packages-script"
date: "2020-04-05"
title: "Reduce Friction with Automated Package Generation"
---

When you're working on a component library for your organization, you want your teammates to contribute. If your teammates aren't contributing to your efforts, it could mean a couple of different things.

1. They don't believe in the initiative or don't understand the value of component libraries
2. It's too difficult to get started
3. The organization is prioritizing short-term wins over long-term wins, and PMS / engineering managers are not supporting developers' efforts to contribute

As an individual contributor, you might not be able to solve problems #1 and #3, but by making it easier to contribute to your library, you can reduce the friction of contributing. It can make your teammates more likely to at least dip their toe into contributing, and reduce the likelihood that they'll give up because the barrier to entry is too high.

As a maintainer of the library, you can improve their developer experience but providing them with tools to get up and running more quickly. Start looking for tasks that people repeat often.

One task is package creation. Every single person needs to create a new package when they're adding a component to your library.

Imagine that you're using TypeScript. To create a new package, a contributor needs to set up their `package.json`, `tsconfig.json`, and a `README.md` that matches the conventions you have in your project. Not only is this something that you can easily automate, configuring a new TypeScript package (if you're unfamiliar with TypeScript), can take a while and be discouraging for new contributors.

You should start by creating an example package that can serve as a guide for people new to the repo. It'll probably have a `package.json` with some commonly used scripts, and a `tsconfig.json` file with common defaults set.

You can take a look at what an example package might look like [here](https://github.com/maecapozzi/example-package).

Once you have an example package, you can write a script to allow developers to generate a new package from the command line.

I wrote a [script](https://gist.github.com/maecapozzi/346c0f1b7ce2c1ccbe90021b1e6685e9) like this that almost every contributor to my organization's component library has used. You can use this script as an example to write one that works with your library's filesystem.

`gist:maecapozzi/10f261931193411e8b7feee4cf325dfd#generatePackage.js`

When the script is run, the output looks something like this:

```bash
$ yarn generate-package new-package

  yarn run v1.19.1

$ babel-node scripts/generatePackage.js new-package
  new-package has been successfully created
  ? What should the package.json description be? New package description
  ? What should the package.json version be? 1.0.0
✨  Done in 13.32s.
```
