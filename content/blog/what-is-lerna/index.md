---
path: "/what-is-lerna"
date: "2020-07-10"
title: "What is Lerna?"
tags: [{ name: "component libraries" }, { name: "lerna" }]
---

Imagine that you've been doing a bunch of research, and you've decided to structure your team's component library as a monorepo. You're probably feeling excited -- you've finally made a decision! And then it hits you -- now you have to make another decision:

- Do you write custom scripts to manage linking packages, versioning, and publish? or,
- Do you find an open source solution?

**You should choose option #2.**

You're probably an awesome developer. You could definitely write these scripts yourself. It might even be a great learning experience for you to try. But when you're done you still won't be any closer to accomplishing your _actual_ goal: 🚢 shipping a component library.

The **opportunity cost** –– the work you're not doing so that you can write custom scripts –– is far too high. All of the time you spend writing custom scripts is time you're not spending on the core feature-set of your project –– the actual components!

### Enter Lerna.

Lerna is an open source project that handles two core workflows in library development:

- linking packages that live in a monorepo together, and
- versioning/publishing those packages.

I promise, using Lerna will save you tons of time. You'll be able to automate common workflows (like publishing to a registry) almost immediately. It has a lot of commands, but there are two core commands that will provide you with 80% of the library's value.

#### lerna bootstrap

[`lerna bootstrap`](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme) installs all of your packages dependencies across the project, and links your packages. This allows library developers to work on multiple packages that rely on each other simultaneously in development without having to manually `npm link` packages together across multiple repositories.

#### lerna version

[`lerna version`](https://github.com/lerna/lerna/tree/master/commands/version#readme) allows you to assign a new version number to an updated package.

1. Looks for packages that have changed since the last time a library was published.
2. Prompts the user for a new version (this step can be automated using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))
3. Updates important metadata (like the version number in the package.json file) and [lifecycle scripts](https://github.com/lerna/lerna/tree/master/commands/version#lifecycle-scripts)
4. Commits the changes and tags the commit.
5. Pushes to the git remote.

#### lerna publish

When you run [`lerna publish`](https://github.com/lerna/lerna/tree/master/commands/publish#readme), Lerna will publish new versions of your packages to your registry, where consumers will be able to install and use them.

### Now what?

This is where we start to get into the murky world of "it depends." Different teams have slightly different workflows based on their tool preferences and specific business needs.

Remember, Lerna is just a collection of scripts. It works well with other tools, and running the scripts can be automated during your build step. I'd recommend versioning and publishing your packages manually for a few weeks to get the hang of the process. You'll start to discover that you run the same commands in the same order.

You'll also recognize steps you need to supplement or steps that you can further simplify with automation. For example, you might want to publish a build to your registry without releasing a new semantic version, otherwise known as a "canary build." Or you might not want to manually set a semantic version, and you'd prefer to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

### How we do it at Harry's.

I'd like to share an example of how we structure this workflow in the component library that I currently work on at Harry's, called the Forge. It's a monorepo that contains a `/packages` directory. Inside of `/packages` we have multiple libraries. Some are individual components, like `button`, while others are CLIs, GraphQL resolvers, and other types of packages.

We use CircleCI for our `CI/CD` pipeline, so that's where we run our commands to version and publish our packages to JFrog Artifactory (this is just where our private registry lives). The (simplified) workflow looks like this:

1. Authenticate with our private registry
2. `yarn install`
3. Build all of the packages
4. Lint, test
5. Publish
   - a new release - `lerna publish` (triggered by merging to master), or
   - a canary build -`lerna publish --canary` (triggered by opening a PR with a branch prefixed with `/feature`)

### Lerna is awesome.

You'll probably end up with something different from what we have at Harry's, but hopefully this example helps you to see how these steps might fit together, and where Lerna can fit into your build process.

You can use it to link all of your dependencies so that it's easier to develop across packages, and you can use it along with Conventional Commits to version and publish your libraries to a private or a public registry.

Are you researching monorepos and Lerna for something you're building? What are you stuck on? I'd love to hear from you. You can reach me on [Twitter](https://twitter.com/MCapoz) or by responding to any of my newsletter messages. (Seriously, I really want to hear from you.)

### Hungry for more?

- [Parallel builds in lerna](/parallel-builds-in-lerna)
- [4 tools to help you version your component library](/4-tools-to-help-you-version-your-component-library)
- [Before you build a component library: versioning](/library-versioning)
- [Before you build a component library: monorepo versioning](/lerna-monorepo-versioning)
- [Should you version components separately or as a unified system?](/version-bundling)
