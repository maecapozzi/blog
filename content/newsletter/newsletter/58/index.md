---
path: "/issue-58"
date: "2021-09-13"
title: "🧁 vanilla-extract: what's all the fuss about? (#58)"
tags: [{ name: "newsletter" }]
---

Happy Monday!

I hope you all had a great weekend! I know I did -- I love a crisp September morning!

---

Have you experimented with [vanilla-extract](https://vanilla-extract.style/) yet? It's a relatively new library from Seek (they also have an open-source design system called [Braid](https://github.com/seek-oss/braid-design-system) that I'm a huge fan of).

At work, we've been using the library for about a month now, and I have to be honest, it's totally living up to the hype.

It dovetails nicely with the way I model [design tokens](/newsletter/52) conceptually in my mind, and its opinionated approach can lower the barrier to entry for early design systems teams.

## How does it solve common design tokens challenges?

### 1. Better performance

vanilla-extract styles are generated at build time instead of runtime. This allows design systems engineers to avoid the performance problems they might normally see if they used a JavaScript object to manage tokens.

### 2. Prevents breakage when tokens are edited or deleted

I've seen teams accidentally delete or rename a design token and cause breaking changes in consuming applications.

vanilla-extract provides type-safety via [CSSType](https://github.com/frenic/csstype). If someone accidentally deletes, renames, or misspells a token, it will trigger a TypeScript error describing exactly what went wrong.

### 3. Opinionated approach to theming

One of my favorite aspects of vanilla-extract is its opinionated approach to theming. Tokens and theming can be complicated to implement the first time around, and there are many potential approaches.

Early-stage design systems teams push forward more confidently by leveraging the experience of the design systems team over at Seek.

**Have you used vanilla-extract? What did you think? Reply to this email and let me know.**

---

If you like this [newsletter](https://maecapozzi.com/newsletter/) it would really help me if you shared it with your friends. Tweet about it, post on LinkedIn, and share in slack channels. Building this community can lead all of us to more job opportunities, guest posts, and connections.

Talk soon,

Mae
