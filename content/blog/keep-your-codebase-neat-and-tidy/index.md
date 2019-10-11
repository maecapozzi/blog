---
path: "/keep-your-code-base-neat-and-tidy"
date: "2018-02-10"
title: "Keep Your Codebase Neat and Tidy with prettier-standard, lint-staged, and husky"
img: "libary.png"
---

Developers tend to have opinions on style. If you’ve been in the industry for more than 15 minutes, you’ve at least heard about the arguments over spaces or tabs. And don’t even get me started on whether JavaScript needs semi-colons or not.

That’s where automatic code formatting comes in. Sure, when you’re working alone on a side project it doesn’t matter whether your formatting is consistent. But try working on a codebase with more developers! Everyone has different opinions, and a lot of times these opinions come to a head in a code review, resulting in returned PRs, wasted time, and maybe even missed deadlines.

[Prettier](https://prettier.io/) and [standard](https://github.com/standard/standard) strive to solve this problem by creating rules around formatting and linting. Both projects then automatically apply these rules to a codebase. That way, developers can focus on shipping features, fixing bugs, and writing clean code, not arguing over semi-colon placement.

The folks working on [prettier-standard](https://github.com/sheerun/prettier-standard) have pulled together the best of these two projects to help you keep your code readable and your code reviews manageable.

The easiest way to get started is by adding a script to your package.json file that will format your entire codebase at once.

Start by installing prettier-standard:

    npm install --save-dev prettier-standard

Then, you can set up a script that will run prettier-standard for you in your package.json file like this:

```json
"scripts": {
  "format": "prettier-standard 'src/**/*.js'"
}
```

Once you have this set up, you can run npm run format from the command line and prettier-standard will format your whole codebase for you.

That’s all well and good if you’re introducing these changes into a new, small, personal project. But what if you’re working in a massive codebase, and you don’t want to introduce a bunch of merge conflicts over some formatting, while still forcing other developers to adhere to agreed-upon standards?

That’s where git hooks come in: you can easily set them up using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

First, let’s install all three packages into our project. (If you’ve already installed prettier-standard, you don’t need to install it again).

    npm install lint-staged husky prettier-standard --save-dev

Next, let’s make sure we have a precommit script that runs lint-staged set up in the "scripts" section of our package.json file.

```json
"scripts": {
    "precommit": "lint-staged"
}
```

Finally, we’ll set up what we want to run when we call the precommit script.

```json
"lint-staged": {
  "*.js": [
    "prettier-standard",
    "git add"
  ]
}
```

The above code tells our project to run prettier-standard on all staged JavaScript files when we commit our changes.

Now, we just need to go ahead and make sure we’ve set this up successfully.

Go ahead and git add your changes. Then git commit them. If you’ve done this right, you should see the feedback below in your terminal.

```bash
husky > npm run -s precommit (node v7.7.4)

↓ Running tasks for *.js [skipped]
    → No staged files match *.js
```

Adding prettier-standard to your codebase isn’t going to immediately improve your code’s performance or make a difference in how your app functions. It’s unlikely to directly impact the bottom line, and forget about explaining the benefits of setting up git hooks for linting and formatting to non-technical stakeholders.

However, you might struggle to argue against the long-term benefits of implementing a formatter and linter at any stage in your codebase’s lifecycle. Your codebase will grow in complexity. You will add new developers, each with their own opinions and experience levels. Protect your codebase by setting up a standard that all code must adhere to. Spend 10 minutes now, to save hours later.
