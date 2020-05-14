---
path: "/override-styled-components"
date: "2020-05-13"
title: "Build easily overrideable styled components"
---

When working with a component library, one of the most annoying situations is when you really need to customize a component's styles and _you just cant_. On the component library I work on at Harry's, we use styled-components, and I'm a big fan of our solution for building tokens that can be easily overridden.

Here's a simple `Tabs` example:

```tsx
import React from "react";
import { css } from "styled-components";

const baseTabsStyles = css`
  // base styles
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

Now, consumers of this component can override the `baseTabStyles` in the following way:

```tsx
import styled from "styled-components";
import { Tabs } from "<component-library-that-uses-styled-components>";

const StyledTabs = styled(Tabs)`
  && {
    border: 1px solid red !important;
    background: red;
  }
`;
```

Using `&& {}` allows you to increase the specificity of the styles and allows them to override the base styles the library author applied.
