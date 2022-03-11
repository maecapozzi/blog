---
path: "/issue-69"
date: "2022-03-11"
title: "⚡ A git pro tip for design systems adoption (#69)"
tags: [{ name: "newsletter" }]
---

Happy Friday!

Are you working on a design system and wondering why colleagues are still using deprecated components?

For example, let's say that you're replacing a legacy button with a new one, and the legacy button is imported like this:

`import { Button } from '@ds/Button'`

You can use the following git command to find every commit that used the legacy button:

`git log -S@ds/Button`

You'll get a list of commits that used the legacy button, which you can use to find the commits in Github and better understand why your teammates can't upgrade to the newest version of the component.

The intent behind using this command isn't to shame your colleagues for not using your new components! It's to better understand use cases that the new component doesn't support yet so that you can improve your library for its users.

--

Talk soon,

Mae
