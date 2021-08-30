---
path: "/issue-52"
date: "2021-08-30"
title: "🕹️ How to implement design tokens (#52)"
tags: [{ name: "newsletter" }]
---

Happy Monday!

Design tokens, a term originally coined by [@jina](https://twitter.com/jina), describes a common artifact of design systems thinking. It's such an important concept that there is a [W3C Community Group](https://www.designtokens.org/) working to design a common specification around how to implement design tokens.

There are also some startups in the space like [Knapsack](https://www.knapsack.cloud/) and [Arcade](https://usearcade.com/) working on solutions to help design systems teams interact with, manage, and store their design tokens.

But, like many design systems artifacts, every team seems to be solving the design tokens problem differently.

Today, I'm going to share how I implement design tokens. This is not the only way to do it (and may not even be the best way). We've got some design systems heavy hitters subscribed to this newsletter -- if you have a different approach, **please reply to this email and let me know!** I would love to share your approach with everyone else.

## An approach to design tokens

### Descriptive Tokens

I like to implement three layers of abstraction when it comes to design tokens. I start with a set of variables pointing to hex codes or spacing values like pixels. These are descriptive names, because they describe exactly what color/shade a hex code represents. They _do not_ describe when or how a token should be used.

[View gist](https://gist.github.com/maecapozzi/f45f092209a9b378d5dba69183422125)

```ts
// colors.ts

const blue100 = "#18253f";
const blue200 = "#1d3158";
const blue300 = "#224177";

const gray100 = "#000000";
const gray200 = "#1e2024";

const red100 = "#7f1218";

// and so on
```

By the way, if you're interested in a deep-dive on how to pick descriptive names for these types of tokens, and how to select accessible colors, check out this deep dive from [@JackMcCloy](https://twitter.com/JackMcCloy) called [How We’re Building Accessibility Into Amplitude’s Color System](https://amplitude.engineering/how-were-building-accessibility-into-amplitude-s-color-system-bb960de25aa5).

### Global tokens

Descriptive tokens are never directly accessed by components. Instead, it's a good idea to introduce an additional layer of abstraction that maps semantic names (names describing how/when a color should be used) to descriptive names. I call these **global tokens** (but you can call them whatever makes sense to your brain).

[View gist](https://gist.github.com/maecapozzi/31fd3a036449a9bd6d178e9df7f8f380)

```ts
import colors from './colors.ts';

const baseTheme = {
  colors: {
    // primary is a semantic name.
    primary: colors.blue100,
    secondary: colors.gray:100,
  }
}



const brandATheme = {
  ...baseTheme
}


// A brand theme can extend other themes
// and then override some aspects when needed
const brandBTheme = {
  ...baseTheme,
  colors: {
    primary: colors.blue200,
    secondary: colors.gray:200,
  }
}
```

At this point, our tokens are providing a lot of value. When the brand colors inevitably change, we don't need to go hunting for hex codes, and we don't need to find every instance of `colors.blue100` to change it to `colors.purple100`. We can just change `baseTheme.colors.primary` to `colors.purple100` and the changes will cascade.

### Component tokens

But we're still not quite done. I've found it is still useful to add one more layer of abstraction, which I call **component tokens**. These are almost like mini-themes that are applied to a token and can describe different potential variants.

[View gist](https://gist.github.com/maecapozzi/b47951c1325f3f1ae602d7f8981d1154)

```ts
import { baseTheme } from './theme.ts'

export const buttonTokens = {
  primary: {
    backgroundColor: theme.colors.primary;
    color: theme.colors.secondary;
  }
}
```

This final layer of abstraction is useful because it can describe which css properties point to which global tokens. Once these are defined, they almost never need to be changed, unless you need to modify an existing, or add a new variant.

--

If you like this [newsletter](https://maecapozzi.com/newsletter/) it would really help me if you shared it with your friends. [Tweet about it](https://twitter.com/intent/tweet?text=%F0%9F%95%B9%EF%B8%8F%20How%20to%20implement%20design%20tokens%20%20%40MCapoz&url=https%3A%2F%2Fmaecapozzi.com%2Fnewsletter%2Fissue-52%2F), post on LinkedIn, and share in slack channels. Building this community can lead all of us to more job opportunities, guest posts, and connections.

Talk soon,

Mae
​
