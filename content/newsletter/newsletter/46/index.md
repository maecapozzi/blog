---
path: "/issue-46"
date: "2021-08-18"
title: "🎨 The different types of design systems (#46)"
tags: [{ name: "newsletter" }]
---

Happy Wednesday!

Today you're in for a treat -- we have this newsletter's first ever guest post, written by Dmitry Belyaev. Dmitry is a front-end engineer with 10+ years of experience in design systems. He is a creator of [arcade.design](https://arcade.design/) and is currently working at [Booking.com](https://www.booking.com/), leading their design system and tooling development.

---

by Dmitry Belyaev

When we talk about design systems in the industry, there are a couple of topics we repeatedly discuss. We know we must define design tokens, build and structure components, and write documentation. We want our systems to be themable, to support dark mode, to be accessible, and to work with translations and support RTL.

The list of tasks a design systems team could complete feels endless. And even the most advanced, well-funded design systems teams in the area spend a lot of time researching the discipline and trying to figure out the best standards

What happens to the teams of one or two people trying to bootstrap a design system while also completing their product work? How can they prioritize which areas to focus in when building a design system? And how do design systems scale over time?

## One product, Small team

1-20 developers and designers

A small team with one product is the typical early setup for most startups. This team usually focuses on defining the foundations for the system. Their main goal is to improve the quality of the code and the design assets and increase the speed at which product designers and engineers can build new experiences.

There are some common patterns across design systems built by a small team to support a single product:

- The code and design assets will usually stay within the product to avoid unnecessary complexity
- Design and code libraries are heavily constrained by the product's specific needs
- Developers often adopt a 3rd party library as a foundation for your system to save time
- If the components are custom, their flexibility is limited by the current product development cycle and their development focuses on general principles like accessibility and code/design quality.
- All UI tooling is coming from 3rd parties and is used primarily for the development process of the system. For example, documentation might live in Storybook and would be limited to a list of component examples mostly used as a testing environment.
- Product developers and designers contribute to the system when new requirements appear in product development.

**Priorities:**

Define and implement design tokens and the most common components. Not all of the product's UI should be a part of the system. Instead, try to frequently use these small pieces of the system in the product.

## Multiple products, Small team

1-20 developers and designers

It changes a little when there are multiple products in development. This would usually mean there are multiple design files and multiple repositories that depend on the same design system assets. That's where we start extracting your system into standalone libraries.

Storing a design system separately naturally helps to separate concerns. Because your company supports multiple products, you can't be sure that all of the products are always using the latest version of the system. Therefore you start to spend additional time preparing releases and testing them only in an isolated environment before making them available for general use.

Depending on the team's size, it's a good idea to have 1-2 people responsible for the design system implementation, even if that's not their full-time responsibility. That will help the team keep the components' implementation detached from specific product features and avoid [future system complexity](https://youtu.be/fHQ1WSx41CA?t=983).

**Priorities:**

Stable release process and quality testing. You likely can't test the system changes in all projects before releasing them, so it's even better if you automate at least some parts of this process.

## Medium to Large team

20-50 designers and developers

Growing your product development and design team introduces a new challenge. The more you grow – the harder it is to get everyone in the same room and just share the updates or ask for a favor. This is where communication becomes crucial. You're either building multiple projects or your project is big enough that it gets harder to be aware of all of the changes.

At this point, the design system team needs to become its own standalone entity. This is exactly the moment at which most of the companies start struggling with getting leadership buy-in. There are challenges on the table, there is a willingness to solve them and they have to be translated into business value to meet the budgeting requirements.

**Priorities:**

- Define the value gained by investing more resources into an organization-specific design system. If some benefits are craft-oriented, make sure to translate them into business value.
- Once there is a small team working full-time on the topic, start building a separate communication channel for better product teams support.
- Work together with product teams on auditing the product and defining which parts should be extracted into the system and which parts should stay in the product. Stay real here. If you have a team of 2 people, don't expect them to implement all of the product UI.

## Community

50+ designers and developers

Now's when the real system scaling starts. As the number of product teams grows, the more a design system will look like an open-source project with its own community, even if everything you do is not public. This is where most of the larger scale companies are. At this stage, a design system starts to differ based on a company's design and development culture.

At this stage, people expect that the design system already covers the priorities from the previous sections. If it doesn't, the team will feel overwhelmed by the missing parts. Resolve them as soon as possible.

What differentiates a larger design system is how organized the processes should be in order to move forward. Most likely the team's not changing the design or code of your components every day. If a component must be modified, it must be done in an incredibly stable and safe way.

Since the design system team operates as a service team at this stage, it needs longer-term planning. Product teams need to know when the next important release is coming and when the team plans to release a breaking change to which they will have to spend some time migrating.

**Priorities:**

- Processes, processes, processes. The system becomes more complex. Adding people to the team or rotating team members is not an easy feat anymore. It's difficult to explain to others how the team works and what to expect.
- Getting the system and its changes adopted becomes more difficult. There are more gray areas in the company where people might be missing out on the updates, suborgs are experimenting with new approaches in a silo, etc. Make sure that the team has an adoption strategy, there are no adoption blockers and teams have ways to collaborate with the design system team and provide their input to the system.
- The design systems team might start building specific UI tooling to help solve its problems. If the team exposes these tools to product teams, make sure they don't create confusion, and that new and old tooling can work together.

Further scaling of the system is where most of the high-end design system teams are right now. There is no clear path to go from here and we all rely more on trying out new approaches and knowledge sharing. A lot of work turns into longer research and exploration of the principles that are yet to become standards in the future.

Let's remember that all design systems started from the very first phase one day and it's always a tough path to get to the last never-ending phase. Our UI development requirements have grown a lot in the past decade and it's no longer a quick thing to create if you are truly aiming to build a product that your customers enjoy using.

---

If you like this newsletter it would really help me if you shared the link [https://maecapozzi.com/newsletter/](https://maecapozzi.com/newsletter/) with your friends. Tweet about it, post on LinkedIn, and share in slack channels. Building this community can lead all of us to more job opportunities, guest posts, and connections.
​

Talk soon,

Mae
​
