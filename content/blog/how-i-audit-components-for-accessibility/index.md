---
path: "/how-i-audit-components-for-accessibility"
date: "2021-02-01"
title: "How I audit components for accessibility"
tags: [{ name: "react" }, { name: "accessibility" }]
---

Over the past few years working on design systems, I've picked up some tips and tricks that can help me ensure a higher level of accessibility in the components I build. This blog post is for you if you want to build more accessible components, and you're not sure where to start.

The first step is to make sure that I conform to the general guidelines outlined in the [WCAG 2.1](https://www.w3.org/TR/WCAG21/) specification. (By the way, the [WCAG 3.0](https://www.w3.org/TR/wcag-3.0/) draft was just released if you want to check it out).

WCAG stands for web content accessibility guidelines. The spec outlines four major concerns, which are often shortened to P.O.U.R.

P.O.U.R. stands for “[Perceivable](https://www.w3.org/TR/WCAG20/#perceivable)”, “[Operable](https://www.w3.org/TR/WCAG20/#operable)”, “[Understandable](https://www.w3.org/TR/WCAG20/#understandable)”, and “[Robust](https://www.w3.org/TR/WCAG20/#robust)”.

Additionally, I look up the component I'm trying to build on [www.w3.org](http://www.w3.org/) to find accessibility guidelines for specific UX patterns. For example, you can look up the guidelines for building a [tab panel](https://www.w3.org/TR/wai-aria-practices/#tabpanel). Doing this allows me to write clear acceptance criteria for my Jira ticket and improves my ability to QA my component later.

Once I finish a first draft of the component, I run automated tests against my component to catch the low-hanging accessibility errors. You can use tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse), [WAVE](https://wave.webaim.org/), and [a11y](https://addyosmani.com/a11y/).

Finally, once I've fixed all the low-hanging fruit, I manually run through the following steps:

- Test for different visual deficiencies using [Storybook](https://storybook.js.org/)
- Run through component using keyboard according to wai-aria practices
- Turn off my screen and navigate component using [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html)

Following these guidelines does not catch 100% of accessibility issues, but it is a massive improvement over just clicking around and saying I'm done.
