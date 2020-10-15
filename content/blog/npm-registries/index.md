---
path: "/npm-registries"
date: "2020-08-10"
title: "How to switch npm registries"
tags: [{ name: "pro tips" }]
---

### What is a registry?

I like to think of a registry like a brick-and-mortar library. When you go to the library, you can check out books that you'd like to take home. Some libraries are public while others are private. If you'd like to check out a book from a private library, you need special permission. It's the same way with registries. While anyone can check out public packages from a public registry, developers need special privileges to check out a package from a private registry.

### Switching between registries

If you've used npm before, your machine probably points at npm's public registry: https://registry.npmjs.org/. You can check by running the command: `npm config get registry` in your terminal.

If you want to change your registry to a private one, you can run npm config set registry <name-of-registry>.

### Authenticate against a private registry

You can manually switch between registries, but it's kind of a pain! If you want to automate it, you can add a .npmrc file in your project. (It's very common for configuration files to have a "." at the beginning and end in "rc". Other examples include .prettierrc and .babelrc.).

Let's imagine that we work at a company that sells wine, called "Ruby Red Grapes." It's got a component library called "grapevine." And it refers in general to its engineering organization as "ruby-red-grapes-tech". The developers set up a private registry on JFrog. The URL representing the registry looks like this:
`https://ruby-red-grapes.jfrog.io/ruby-red-grapes/api/npm/npm-ruby-red-grapes-tech/`

The component library is scoped under @grapevine. To authenticate with the registry, and auto-generate a new `.npmrc`, a developer could run the following command:

```
npm adduser --always-auth --scope @grapevine --registry <https://ruby-red-grapes.jfrog.io/ruby-red-grapes/api/npm/npm-ruby-red-grapes-tech/>
```

If the developer has permission to access the registry, a `.npmrc` file will generated with the following contents.

```
always-auth=true
@grapevine:registry=https://ruby-red-grapes.jfrog.io/ruby-red-grapes/api/npm/npm-ruby-red-grapes-tech/
//ruby-red-grapes.jfrog.io/ruby-red-grapes/api/npm/npm-ruby-red-grapes-tech/:_authToken=123871938721983729187391873

```

Notice how at the end of the file there's a long, random-looking number. That's your authentication token, and it's a secret! You'll want to save that number as an environment variable! Let's say you name it JFROG_TOKEN.

```
always-auth=true
@grapevine:registry=https://ruby-red-grapes.jfrog.io/ruby-red-grapes/api/npm/npm-ruby-red-grapes-tech/
//ruby-red-grapes.jfrog.io/ruby-red-grapes/api/npm/npm-ruby-red-grapes-tech/:_authToken=${JFROG_TOKEN}

```

Now, when you run `npm install` or `yarn install`, your `.npmrc` tells your computer to download open-source libraries from the public npm registry and `@grapevine` packages on your private registry.

## Hungry for more?

- [Before you build a component library: monorepo versioning](https://maecapozzi.com/lerna-monorepo-versioning)
- [Should you version components separately or as a unified system?](https://maecapozzi.com/version-bundling)
- [4 tools to help you version your component library](https://maecapozzi.com/4-tools-to-help-you-version-your-component-library)
- [Before you build a component library: versioning](https://maecapozzi.com/library-versioning)
- [What is Lerna?](https://maecapozzi.com/what-is-lerna)
