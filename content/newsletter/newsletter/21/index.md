---
path: "/issue-21"
date: "2021-03-02"
title: "✅ Interview a 'frontend-of-the-frontend' engineer (#21)"
---

Last week, we talked about how to strategically hire engineers to work on your design system. If you want to refresh your memory, or you’re new to the newsletter, you can read essay #1 on my blog.

As a quick refresher, your first two hires should be the senior “frontend-of-the-frontend” engineer and the senior “frontend infrastructure” engineer.

But how can you evaluate the skill level of the engineers you need to hire?

​
I’m sharing a list of five questions (in no particular order) that you should know the answer to at the end of the interview process.

## 1. How good is this person at working with designers?​

Ask about a time when the engineer worked closely with designers in the past.

> “What happened?”

> “How did it go?”

> “Did you run into any difficulty? How did you work through it?”

This should give you plenty of information about the engineer’s respect for other disciplines, ability to explain engineering concepts to designers, and understanding/empathy of the challenges designers face when working on design systems.

A big part of design systems is closing the gap between designers and developers. Your first hire should be invested in improving communication between these disciplines.

​

## 2. How willing is this person to perform “customer service” type of work for Slack/office hours/email?

​

Walk them through a scenario! I would use something like this:

“Imagine that the team decided to rename the Button’s `onClick` prop to `handleClick`.

You ship the change and let all of your consumers know that they can upgrade your library.

Over the course of the next few days, you get a lot of DMs on Slack asking why the Button is broken. What do you do?”

This question allows you to gauge how the interviewee will work with the library’s consumers when they inevitably have questions. As a bonus, it can also lead to a discussion about breaking changes.

​

## 3. How does this person think about component API design?

To answer this question, I’d give the engineer a take-home exercise where I ask them to write a brief proposal of how they’d implement a complicated component like a TabList. Then, I’d ask them to go through it with me.

I'd be looking for writing skills, communication skills, and thoughtfulness around how they’ve designed the component’s interface.

A major part of their role will be thinking about component interfaces, so they need to have this skill to be successful.

## 4. Does this person know about accessibility?

It is critical that this engineer is either a) already knowledgeable about accessibility, or b) willing to learn.

Accessibility is not optional. You want the person building the bulk of your early components to know what they’re doing.

Ask them: “How would you go about ensuring that a component is accessible?”

Look for responses that include details about automated and manual testing, WCAG compliance, and usage patterns (like keyboard-handling vs. screen readers vs mouses). You’ll be able to tell who knows what they’re talking about.

​

## 5. Does this person know about design tokens?

I’m 99% your design system is going to have design tokens.

Ask them: “Can you tell me about a time that you’ve worked with design tokens? How were they structured? Would you change anything about the approach?” These are good questions because they allow the engineer to talk through tradeoffs and potential approaches.

If they don’t know what design tokens are, it’s a good sign that they haven’t worked on a design system before, and you might not want them leading your team. (Of course, they might be a great fit! Just not as the first hire).
