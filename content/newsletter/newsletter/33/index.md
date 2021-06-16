---
path: "/issue-33"
date: "2021-06-16"
title: "📄 Should you require proposals for design systems contributions? (#33)"
tags: [{ name: "newsletter" }]
---

Happy Wednesday!

I ran into a great question on the design systems slack channel this morning. Chris Murray was asking whether contributors should be required to submit a proposal before contributing to the design system.

> Got a question that might fall a bit on the process side, but is specific to contributions so thought this is the better venue to start with…Like some other open-source design systems, with Atlantis we require that contributors put forth a proposal prior to a pull request.

> The intent here is that our maintaining systems team reviews the proposal with a more system-focused lens to ensure that we’re adding re-usable value to the system as opposed to an individual use case, and prevents re-writes of code for contributors. Essentially, describe what you want to add before you build it so we can discuss the idea before the implementation.

> What I’m wondering is, does anyone have a similar contribution model where a proposal/up-front-alignment isn’t required, and if so what has the contributor/maintainer relationship been like? We’re considering dropping that requirement, but some of our team members are worried that teams who write the code before we’ve talked about what they’re building will have a bad experience if we end up asking for significant changes at the end of the process.

I really liked Chris's question. In my opinion, both design systems and maintainers and contributors should always be required to submit proposals before contributing net new components to the design system or making changes to the public API.

I like proposals because they encourage contributors to slow down and really think about the impact of their proposed change on the system as a whole. Additionally, it gives design system maintainers context about why the change needs to happen before the code gets to the pull request stage.

I wanted to take the opportunity to share a basic proposal template that has worked well for me in the past. You can remix this for your team's specific needs.

---

## [Title of Proposal]

### Background

_Why is this change necessary or desired?_

### Link to design (if applicable)

_Link to the designs._

### Proposed Implementation/Changes

_Describe what you plan to add or change. If you're introducing a new component, define the interface of the component and how it should be used._

### What are all of the variants that this component will support?

_Describe all of the variants that this component will support, and when/why each variant should be used._

### Will this be a breaking change?

_Y/N. If Y, why is it a breaking change?_

### Will this deprecate anything else?

_Y/N. If Y, what will it deprecate?_

### Will this depend on anything else?

_Y/N. If Y, what will it depend on?_

### Accessibility Requirements

_Describe how you will ensure that this component meets accessibility requirements._

---

Your team will probably want to change this to meet your team's specific needs, but I think that this covers the basics pretty well.

**Do you agree that design systems teams should require proposals prior to contributions? Reply to this email and let me know what you think.**

Talk soon,

Mae
