---
path: "/hooked-on-hooks"
date: "2019-02-15"
title: "useBreakpoints: a hook"
---

![](https://media.giphy.com/media/27IUxvAIYL4SHcSGxy/giphy.gif)

I built my first hook a few months ago, and figured I should get it up on the blog. It's a replacement for a Higher Order Component that exists in a codebase I'm working on. That HoC passes a breakpoint to a component that dictates how the component renders across different breakpoints.

If you want to play around with the component, [you can find it on Code Sandbox](https://codesandbox.io/s/20m9wn47p). I'll also briefly walk you through how it works.

```jsx
import { useState, useEffect } from "react";
import { debounce } from "./debounce";

const setBreakpoints = width => {
  if (width < 768) {
    return "isMobile";
  } else if (width >= 768 && width <= 1024) {
    return "isTabletAndUp";
  } else {
    return "isDesktopAndUp";
  }
};

function useBreakpoints() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      debounce(setWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return setBreakpoints(width);
}

export default useBreakpoints;
```

The first thing `useBreakpoints` does is set set the state. `useState` lets you use React local state even when you're not in a class. To use it, you destructure an array, in which the first argument is whatever you want to call it, and the second lets you update the state (much like `this.setState`).

In this hook, when a user resizes the screen, I set a new width on state with the `setWidth` function inside of `useEffect`. `useEffect` lets you use something like lifecycle methods when you're not in a class. In other words,I reset the state with a new width. Then, I pass that new width to my `setBreakpoints` function, which returns the correct breakpoint based on the size of the browser window.
