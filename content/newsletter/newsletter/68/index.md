---
path: "/issue-68"
date: "2022-02-04"
title: "🧹 Organising Design Systems (#68)"
tags: [{ name: "newsletter" }]
---

Happy Friday! Today I'm sharing a guest post by Saurav Rastogi.

[Saurav Rastogi](http://saurav.design/) is a designer who loves to code and make beautiful experiences come to life. He is passionate about design systems and have been working on them for 4+ years. He is currently working as a lead system designer at [Razorpay](https://razorpay.com/), helping bridge the gap between designers & developers. You can find him on [Medium](https://medium.com/@rastogi_saurav), [Twitter](https://twitter.com/rastogi_saurav), and [Dribbble](https://dribbble.com/rastogi_saurav),

---

**Overview**

If you are a designer or engineer working on a scaling tech product, you must have found yourself blaming the other team for unclear specification, bad quality output or a general lack of understanding of how things work. If you haven't, we would like to buy you a dystopian cup of coffee. At hand-off in critical projects, this results in last-minute chaos and leaves a bad taste in everyone's mouth.

One significant aspect that design systems solve is serving as a single source of truth across products so that we can save ourselves from this mess at handoff. But what is this single source of truth and how do the teams working on it build and manage it?

_As the design systems team involves people with a diverse skillset spanning across design, engineering, management, content, accessibility, etc., it is important that everyone in the team speak the same language to be on the same page. Once the team is aligned, it is much easier to make a system that can serve as a single source of truth._

We maintain our design system on Figma, and for everyone in the team, it is the single source of truth.

### **Structuring Figma for Design System**

Let's deep dive and see how we document a particular component inside a page in Figma.

#### **INDEX**

Each component starts with its own index which has listed all the things one can read/view. There are a lot of frames on the page each depicting different types of documentation, therefore we needed some kind of index using that one can get an idea around what all is present in a particular component.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

**INTRODUCTION**

This section describes each and every part of how the component is composed along with the anatomy of it in our product ecosystem. It shows the whole blueprint of the component with labels.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

#### **CHARACTERISTICS**

This is one of the most important sections for developers. The characteristics section consists of two major things:

- **Properties** show the features (_props_ as called in JS frameworks) that a particular component offers to its consumers, it also helps in setting limitations to a particular component.
- **Token/Component Usage** table shows what all tokens and components (if any) are used inside a particular component.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

#### **VARIANTS**

As the name suggests this shows different variants available for a component. In case the component depicts any intent or gives some feedback to the users, it will also be listed here with their different variations & examples.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

#### **USAGE GUIDELINES**

This section guides the designers or developers on how to / not to use a particular component with some real examples from the product. This section is much more crucial than you think.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

#### **PLATFORM DEPENDENCY**

Different components might behave differently on different devices/platforms. This particular section focuses on the placement & behaviours of a component on a particular device or platform.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

#### **ACCESSIBILITY**

Design systems present a unique opportunity to bake accessibility into your component libraries from the get-go, both from a UI/UX design perspective and from a code repository perspective as well. There are different levels of accessibility

- **Usability** is how your users experience while navigating through your product.
- **Compatibility** is how different assistive technologies interact with the system.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

#### **COMPONENT (WITH VARIANTS)**

The last thing on the page is the component itself with all the applicable variants which adheres to all the guidelines documented in the component itself. This section also takes care of all the props defined in the constraints section. The naming conventions of the props are also defined just like it would be implemented in the code so that designers and developers understand and speak the same language.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

### **End Note**

This all comes with different challenges, see how we solved those in this detailed blog post. Here is a [free Figma template](https://www.figma.com/community/file/1042406919054488163/Organising-Design-Systems) on how to organise your design system.

[Read more >>](https://medium.com/razorpay-design/organising-design-systems-3f191c4e00c0)

--

If you like this [newsletter](https://maecapozzi.com/newsletter/) it would really help me if you shared it with your friends. Tweet about it, post on LinkedIn, and share in slack channels. Building this community can lead all of us to more job opportunities, guest posts, and connections.

Talk soon,

Mae
