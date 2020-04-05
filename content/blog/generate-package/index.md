---
path: "/generate-packages-script"
date: "2020-04-05"
title: "Reduce Friction with Automated Package Generation"
---

When you're working on a component library for your organization, you want your teammates to contribute. If your teammates aren't contributing to your efforts, it could mean a couple of different things.

1. They don't believe in the initiative or don't understand the value of component libraries
2. It's too difficult to get started
3. The organization is prioritizing short-term wins over long-term wins, and PMS / engineering managers are not supporting developers' efforts to contribute

As an individual contributor, you might not be able to solve problems #1 and #3, but you can make it easier to contribute to your library by providing developers with tools to get up and running more quickly. By simplifying the process, you're also positively impacting problems #1 and #3 indirectly.

An example is package creation. Every single person who adds a component to your library needs to create a new package.

When using TypeScript, a contributor needs to set up a `package.json`, `tsconfig.json`, and a `README.md` that matches the conventions you have in your project. This can be time-consuming, depending on how familiar the contributor is with the library. It's also something that you can automate in an afternoon. It's a high-value, low-effort win.

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
