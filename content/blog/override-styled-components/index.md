---
path: "/override-styled-components"
date: "2020-05-13"
title: "Build overrideable styled components"
---

If you're anything like me, there are few things as frustrating as when you need to customize a third-party component's styles and _you just cant_. Now that I'm actually working on building a component library myself, I want to share with you how you can build components that can be overridden and how to override them.

This blog post is for people who use [styled-components](https://styled-components.com/). I'm sure other CSS-in-JS solutions have this functionality too, but this post won't delve into that!

Let's take a look at a `Tabs` component for an example:

### Implementation

```typescript
import React from "react";
import { css } from "styled-components";

const baseTabsStyles = css`
  border: 1px solid blue;
  background: red;
`;

const StyledTabs = styled.section`
  ${baseTabsStyles};
`;

export default function Tabs({
  selectedTab,
  onChange,
  tabs,
  className,
}: Props) {
  return (
    <StyledTabs className={classnames("tabs", className)}>
      // implementation details
    </StyledTabs>
  );
}
```

When you implement the component, the library author needs to make sure to pass `className` as a prop to the `Tabs` component.

The [`classnames`](https://www.npmjs.com/package/classnames) library allows you to pass multiple `className`s to a React component. You can use it to add your own `className` to it, as well as pass any `className`s that are passed into the `Tabs` component. **You must remember to add a `className` prop to the `Tabs` component and pass it to the styled component.** If you forget this step, you won't be able to override the the styles the library author has applied.

### Usage

Now, consumers of this component can override the `baseTabStyles` in the following way:

```tsx
import styled from "styled-components";
import { Tabs } from "<component-library-that-uses-styled-components>";

const StyledTabs = styled(Tabs)`
  && {
    border: 1px solid red;
    background: red;
  }
`;
```

Using `&& {}` allows you to increase the specificity of the styles and allows them to override the base styles the library author applied.
