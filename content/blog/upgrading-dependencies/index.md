---
path: "/upgrading-dependencies"
date: "2020-01-12"
title: "Use your CI Pipeline to Address Security Vulnerabilities"
---

When leveraging the npm ecosystem, you inevitably add dependencies to your codebase. That's great –– we're lucky to have a robust open-source culture. Strangers have solved many problems you might run into! But there's a catch...all the libraries you depend on are bound to evolve, which means you need to keep your dependencies up to date!

There's a tendency when you're working on something to let your dependencies sit for 6 months without upgrading them, especially if your app isn't in production yet. If you don't regularly update your dependencies, you could find yourself spending hours and potentially days upgrading tens of dependencies.

**TLDR; You can quickly catch security vulnerabilities in your dependencies by adding `yarn audit` to your CI pipeline.**

## Semantic Versioning

Most JS libraries use [semantic versioning](https://semver.org/) (semver) to signal to consumers what kind of change they are introducing in a release. If you try to read the spec for semver, it can seem overwhelming, but there are only three main concepts you need to remember as a library consumer: patch, minor, and major.

We can use React to illustrate what each of these concepts mean. Let's pretend React is at version `16.0.0`.

#### 1. Patch

Library authors use a patch version to represent a bug fix that doesn't change the API of the library. This means that you can upgrade the library in your project and it might fix a bug you're experiencing, but you won't need to change any of your app code.

If you're using React version `16.0.0` and the authors introduce a patch version, they'll release version `16.0.1`.

Recently, `react-dom` was bumped from `16.10.0` to `16.10.1`. Here's an image of the [release notes](https://github.com/facebook/react/releases/tag/v16.10.1) for this change, so you can get a sense of why this is a patch version:

![Example of release notes for a patch](https://i.ibb.co/BKhfJ8c/Screen-Shot-2020-01-12-at-4-33-59-PM.png)

#### 2. Minor

Library authors use minor versions to express that they have added new backwards-compatible functionality. Nothing about the way the library is consumed will change from the consumer's perspective. You can upgrade the library in your project without needing to change any of your existing code.

If you're using React version `16.0.1`, and the authors introduce a minor version, they'll release version `16.1.1`.

`react-dom` was bumped from `16.11.0` to `16.12.0` in November 2019. Here's an image of the [release notes](https://github.com/facebook/react/releases/tag/v16.12.0) for this change:

![Example of release notes for a minor](https://i.ibb.co/Qk8tjBJ/Screen-Shot-2020-01-12-at-4-40-58-PM.png)

#### 3. Major

A minor version represents new functionality that is not backwards-compatible. This means that the way the library is consumed changes from the consumer's perspective. If you upgrade the library, you'll need to change the code that consumes it to use the new API.

If you're using React version `16.1.1`, and the authors introduce a major version, they'll release version `17.0.0`. Note that both the minor and patch versions reset to 0.

`react-dom` was bumped from `15.6.2` to `16.0.0` in 2017. Take a look at the [release notes](https://github.com/facebook/react/releases/tag/v16.0.0) for this change. You can see a list of breaking changes introduced by this major upgrade.

![Example of release notes for a major](https://i.ibb.co/9pQgQQH/Screen-Shot-2020-01-12-at-4-44-22-PM.png)

## Why you should keep up to date

Now imagine that you have 10 libraries in your project. Four have introduced patch versions, three have introduced minor versions, and three have introduced major versions. The path to upgrade the libraries that have introduced patch and minor versions will be straightforward -- you'll get bug fixes and new features without needing to change your code. On the other hand, upgrading the libraries with major versions could be time-consuming, especially if the library you're upgrading is as integral to your codebase as `react`, `react-dom`, or `gatsby`. And remember, most projects use way more than just 10 libraries -- you're probably looking at 50+.

More importantly, some of the packages you're relying on may have security vulnerabilities, which you want to handle as soon as possible. Keeping your dependencies up to date will keep your app more secure.

## How to upgrade your dependencies

You can use some handy commands to take a look at what dependencies need to be upgraded by running `npm outdated` or [`yarn outdated`](https://yarnpkg.com/lang/en/docs/cli/outdated/).

![Yarn Outdated](https://i.ibb.co/6vwRtJX/Screen-Shot-2020-01-12-at-3-59-06-PM.png)

If you do this often and keep your dependencies upgraded, you'll only see a couple of outdated dependencies. And if you have no major version upgrades, you can just run `yarn upgrade`, and everything will be updated at once. But if I were to try to run `yarn upgrade` on this project, something would inevitably break because some of the libraries I depend on released major versions.

For this example, I'll need to upgrade each dependency by hand, which will take a long time. I can pick a dependency and run: `yarn add gatsby@latest`, and it'll bump me to the latest version. (It will not include alpha or beta versions, so if you want that, you'll need to do it by hand).

## How to stay up to date

OK, so obviously we don't want to be in the situation above since it's bound to be time-consuming. You should work with your team to figure out the best way to keep your dependencies upgraded. At Harry's, I'm in the on-call rotation for [shopflamingo.com](https://www.shopflamingo.com/), and we've agreed that the on-call person has to bump the dependencies, so we try to upgrade them every week. This means we don't end up spending a couple of days every quarter upgrading our dependencies.

While it's a good idea to work with your teammates to create a culture of upgrading your dependencies, you can take a more automated approach when it comes to upgrading packages with security vulnerabilities.

The `npm audit` or `yarn audit` script will show you a list of vulnerabilities in your project:

```
yarn audit v1.19.1
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low │ Denial of Service │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=4.0.0 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ @graphql-codegen/typescript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ @graphql-codegen/typescript > │
│ │ @graphql-codegen/visitor-plugin-common > relay-compiler > │
│ │ yargs > os-locale > mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1084 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low │ Denial of Service │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=4.0.0 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ @graphql-codegen/typescript-operations │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ @graphql-codegen/typescript-operations > │
│ │ @graphql-codegen/typescript > │
│ │ @graphql-codegen/visitor-plugin-common > relay-compiler > │
│ │ yargs > os-locale > mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1084 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low │ Denial of Service │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=4.0.0 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ @graphql-codegen/typescript-operations │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ @graphql-codegen/typescript-operations > │
│ │ @graphql-codegen/visitor-plugin-common > relay-compiler > │
│ │ yargs > os-locale > mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1084 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low │ Denial of Service │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=4.0.0 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ @graphql-codegen/typescript-resolvers │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ @graphql-codegen/typescript-resolvers > │
│ │ @graphql-codegen/typescript > │
│ │ @graphql-codegen/visitor-plugin-common > relay-compiler > │
│ │ yargs > os-locale > mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1084 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low │ Denial of Service │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=4.0.0 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ @graphql-codegen/typescript-resolvers │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ @graphql-codegen/typescript-resolvers > │
│ │ @graphql-codegen/visitor-plugin-common > relay-compiler > │
│ │ yargs > os-locale > mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1084 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low │ Denial of Service │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=4.0.0 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ @graphql-codegen/typescript-react-apollo │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ @graphql-codegen/typescript-react-apollo > │
│ │ @graphql-codegen/visitor-plugin-common > relay-compiler > │
│ │ yargs > os-locale > mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1084 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ low │ Denial of Service │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=4.0.0 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ gatsby │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ gatsby > @gatsbyjs/relay-compiler > yargs > os-locale > mem │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1084 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate │ Cross-Site Scripting │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ serialize-javascript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=2.1.1 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ gatsby │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ gatsby > terser-webpack-plugin > serialize-javascript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1426 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate │ Cross-Site Scripting │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ serialize-javascript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=2.1.1 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ webpack │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ webpack > terser-webpack-plugin > serialize-javascript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1426 │
└───────────────┴──────────────────────────────────────────────────────────────┘
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ moderate │ Cross-Site Scripting │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package │ serialize-javascript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Patched in │ >=2.1.1 │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ gatsby │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path │ gatsby > webpack > terser-webpack-plugin > │
│ │ serialize-javascript │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info │ https://www.npmjs.com/advisories/1426 │
└───────────────┴──────────────────────────────────────────────────────────────┘
10 vulnerabilities found - Packages audited: 1830352
Severity: 7 Low | 3 Moderate
✨ Done in 3.28s.
```

If `yarn audit` finds packages with security vulnerabilities it exits with a non-zero exit status. You can configure your CI pipeline to run this command. If it exits with a non-zero exit code, the build will fail, preventing you and your teammates from merging your code until you address the vulnerabilities.

I use CircleCI, so all I had to do to add this functionality to my script was add this command to my `.circleci/config.yml`

```bash
- run:
  name: Checking for security vulnerabilities
  command: |
  echo "If this step fails, it means that there are security vulnerabilities in the app's dependencies. You must fix them before proceeding."
  yarn audit
```

Now, any branches with dependencies containing security vulnerabilities automatically fail.
