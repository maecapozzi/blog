---
path: "/npm-scripts"
date: "2020-07-26"
title: "NPM scripts and how to use them"
tags: [{ name: "pro tips" }]
---

Early on in my career, I found myself at a total loss about the command to start a new project's development server. At my first job, we used the script `npm develop` to run the app. I tried to run `npm develop` on this new project, but it just wouldn't work. I felt embarrassed that I couldn't figure out how to run the app! (It turned out the command was `npm dev`).

What I needed was a list of commands. The good news is, this list exists in every JavaScript and TypeScript codebase! Let's dig in! ⛏️

### **What are npm scripts?**

A **script** executes a series of actions when called.

You can replace manual, time-consuming processes with a script that executes repeatable steps. It's easier to remember and run a single command than to run commands in sequence.

You can find these a list commands in your app's `package.json` file under "scripts."

```json
{
  "name": "@constellation-components/button",
  "author": "maecapozzi <maecapozzi@gmail.com>",
  "version": "1.0.3-alpha.0",
  "description": "A button component",
  "main": "./dist/button.js",
  "types": "./dist/button.d.ts",
  "scripts": {
    "build": "tsc -p ./tsconfig.json"
  },
  "files": ["dist"],
  "homepage": "<https://github.com/maecapozzi/constellation#readme>",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/maecapozzi/constellation.git"
  },
  "dependencies": {
    "reakit": "^1.1.2"
  },
  "peerDependencies": {
    "react": "^16.13.1"
  },
  "gitHead": "d7bedb310ef88ee4e6a43c8fee5a59b77398ab85"
}
```

That file includes a scripts key, which in my case above has a single script called build inside it. Npm scripts are the scripts available inside of the scripts key in a project's package.json.

When you start working on a new project, you can peek at the package.json. There you'll see the npm scripts that are available to you. Common scripts you might run into include the following (and variations of them):

- `build`
- `develop`
- `test`
- `lint`
- `typecheck` (in TypeScript projects)

A trick you can use is that if you forget exactly where the scripts live, you can always search the whole project for these types of names. That'll probably help you stumble on these scripts.

### **How to run npm scripts**

If you went to your terminal and typed build, you'd get an error:

```bash
command not found: build

```

That's because you need to use your package manager's command to actually run the script. If you use npm, you can run the build script like this:

```bash
npm build

```

If you use yarn, you can run the build script like this:

```bash
yarn build

```

One of the benefits of leveraging npm scripts is that you can run them in your CI pipeline.

### **Write your own**

You're also welcome to add your own npm scripts to your projects. Let's say that you're configuring jest for a project, and you've been running yarn jest to run your tests. Let's imagine that you want to rename the command to test so that it's easier to remember. You can add a key to scripts called test:

```json
// package.json

{
  "scripts": {
    "test": "yarn jest"
  }
}
```

Now, if you run yarn test, behind the scenes you'll run yarn jest, and your tests will run as they did before.

You want jest to watch for changes to your tests. You don't want to keep rerunning yarn test every time you make a change.

```json
// package.json

{
  "scripts": {
    "test": "yarn jest",
    "test:watch": "yarn jest --watch"
  }
}
```

Now, we've added a second script called test:watch, which runs Jest with a --watch flag.

### **In Review**

- NPM scripts are the scripts defined in the scripts section of an app's package.json file
- Always check out the package.json to find the scripts available to you
- Prepend npm or yarn in front of the script to run it
- Use NPM scripts in your CI pipeline to automate common tasks
- Write your own NPM scripts to automate tasks with many steps that you perform often

### **Hungry for more?**

- [Before you build a component library: monorepo versioning](https://maecapozzi.com/lerna-monorepo-versioning)
- [Should you version components separately or as a unified system?](https://maecapozzi.com/version-bundling)
- [4 tools to help you version your component library](https://maecapozzi.com/4-tools-to-help-you-version-your-component-library)
- [Before you build a component library: versioning](https://maecapozzi.com/library-versioning)
- [What is Lerna?](https://maecapozzi.com/what-is-lerna)
