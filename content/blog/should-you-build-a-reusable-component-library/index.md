---
path: "/should-you-build-a-reusable-component-library"
date: "2018-06-12"
title: "Should You Build a Reusable Component Library?"
---

Modular frontends are all the rage these days, especially with the rise of React.js. Large companies have begun open-sourcing their frameworks,. Google has Material UI, Shopify has Polaris, and Palantir has Blueprint. You, (or your boss), might be thinking that it’s time for your company to get in on the action.

It’s all very exciting, but you need to remember that a reusable component library is not a magic bullet. It takes a lot of effort to get one up and running, especially if you’re expecting other teams to use it. You’ll want to carefully consider the tradeoffs before investing time, energy, and money into the project.

## Why You Shouldn’t Build a Reusable Component Library

Your team might not be ready for a large-scale effort like this. That’s OK! It’s better to know that it’s not the right time before you’ve sunk a quarter into building a library that no one ever uses.

There are a couple of major warning signs that it’s not the right time for you to build a reusable component library.

### Your team has a low tolerance for risk

Investing a large chunk of time and effort into any project is risky. You’ll need to evaluate your team’s appetite for risk. If you have tight deadlines imposed on you by external stakeholders with very little wiggle room, you might consider holding off on the project until you’re in a more stable position.

If you’re a small team who hasn’t shipped any revenue-producing code, you may want to wait until your team is larger, or you can devote a whole team to the project.

You might also want to reconsider if you haven’t shipped a minimum viable product yet. You should have an idea of at least some of the modules users will want to interact with on your site. Don’t spend time building components you’re just going to scrap later or that will never be reused.

### Your team is new to reusability

Have members of your team built npm modules before? Have they worked on an open source project? Have they ever thought through what it takes to build tools for other developers?

If not, you might encourage them to start small. You could start with a lunch-and-learn where you work together to build a simple reusable component.

The team should understand the challenges inherent in building reusable components before they commit to building hundreds of them.

### Your team doesn’t have the bandwidth to maintain it

Be honest with yourself about this. If you’re a team of three, you probably won’t be able to maintain the library when other people start using it. Are you willing to hire other engineers to support this project? Can you afford to? What if an employee leaves? Have you documented everything they know, or do you have enough redundancy on your team that its not a problem?

### You can’t sell it to product and business folks

A library on its own doesn’t directly impact the bottom line. You will eventually see improvements in how quickly you can ship code, but it could take months or years. Can you convince non-engineers of the value of the library? Don’t let a project like this fail because you don’t have stakeholder buy-in.

## Why You Should Build a Reusable Component Library

### You want to speed up

Once you have a library, you’ll start to ship more quickly. Consider how many buttons you have on your site. How much time have your developers spent building the same button over and over again.

Then, think about the many ways to build a button. You can use a `<button />` tag, or style an `<a />` tag. Buttons can also manage different states, like hover and loading. You don’t want your developers wasting time making these tiny decisions every time you need to use a button.

When you free your developers up to focus on more challenging ideas, they can spend less time bikeshedding and more time focusing on the tricky features.

### You want to enforce consistency

You have tons of developers working on your application, but you want the end user to have a consistent experience. Encouraging all of your engineers to reuse components will make the site more enjoyable for its users.

### You want to boost performance

When you build the same component over and over again with slight tweaks, that JavaScript needs to be compiled every time. You’ll end up bloating your JavaScript bundle. Or worse, developers who don’t want to spend time re-inventing the wheel will import a new library, increasing the number of dependencies you need to manage.

### You want to maintain less code

When you reuse components, you reduce the size and complexity of your codebase. This leaves bugs with fewer places to hide, and less code to wrangle. That’s always good!

### You want to have an easier time replacing your frontend later

In 5 years, you’re probably going to want to rip out your frontend and replace it with the hot new framework. This will be a lot easier when you can replace your application component-by-component, rather than all at once.

It’s tempting to do what other teams or companies are doing, no matter the cost, but take a moment to consider whether your team is ready to sink time, money, and effort into a component library.
