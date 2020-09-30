---
path: "/how-to-use-react-lazy"
date: "2018-10-29"
title: "How to use React.Lazy"
---

React 16.6.0 introduced `React.lazy`, which allows you to code-split using the new Suspense API.

[Siddharth Kshetrapal](https://medium.com/@siddharthkp) came out with a great video showing how this works in 60 seconds. I’d recommend watching it –– it’s really well-done.

I’ve built a Github clone based off of Siddharth’s example. Hopefully this will help people who prefer reading to watching videos, or who to be walked through it step by step!

### Why would I use React.lazy?

React.lazy allows developers to block UI from rendering until a pre-determined condition is met. For example, maybe you don’t want your component to render until you get a response back from an endpoint.

Before React.lazy, you had to load all of the files that were ever going to be visible in that view, even if some of them were hidden.

For example, imagine you built an e-commerce site like I’m working on at [Harry's](https://medium.com/harrys-engineering):
![](https://cdn-images-1.medium.com/max/1000/1*Tmy9DytUDKkEcrGEKN8hQw.png)

In the upper-right hand corner, we have a cart icon. When you click it, a `PanelOverlay` component slides out from the right-hand side.
![](https://cdn-images-1.medium.com/max/1000/1*-Dtyig29vbcL6-LItjX_3w.png)

Right now, we load the `PanelOverlay` component when we load `/`. But with `React.lazy`, we could dynamically import that component so that it’s only being loaded after it has been clicked! That should allow us to load the homepage even more quickly.

You might be wondering how lazy() is different from react-loadable, for example. Sean T. Larkin explains it well in this tweet:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Well lazy() let&#39;s you not need a separate library to have easy code splitting. It&#39;s now out of the box through React.lazy. what loadable-component and react-universal-component do in addition handle some SSR stuff. They should also just use the lazy() API instead internally.</p>&mdash; Sean Thomas Larkin (肖恩) (@TheLarkInn) <a href="https://twitter.com/TheLarkInn/status/1055577625106644992?ref_src=twsrc%5Etfw">October 25, 2018</a></blockquote>

`lazy()` lets you code-split without adding another dependency to your codebase. It makes a best practice (code-splitting) easier, which will encourage developer to use it, and will make writing performant React apps more seamless.

### Let’s Take a Look at an Example

I built a demo of code-splitting with `React.lazy` using Github’s API to show you exactly how to implement it in your own application.

Below is a .gif of how code-splitting would look on a low-end mobile device. I slowed down so it’s easy to see every distinct step of the process.

![](https://cdn-images-1.medium.com/max/1000/1*eZ3AzlpsOjW__gJ9r73tZA.gif)

Let’s walk through what’s happening here:

1. I load the name of the application and a search bar.
2. I search for a Github username.
3. My application fetches data from Github’s API and renders the username.
4. The application dynamically imports the Repos component.
5. While the application waits for the Repos component to load, it displays a blurred out “fallback” UI.
6. The Repos component loads.

Let’s also take a look at the network tab so you can see the code-splitting in action.

When we don’t code-split, two chunks are loaded immediately.

![](https://cdn-images-1.medium.com/max/800/1*-YSG7ayZUYwG05r3o9-KsA.png)

On the other hand, when we implement code-splitting, we load two chunks initially, and then a third once we actually search for a Github username.

![](https://cdn-images-1.medium.com/max/800/1*tpckBg5s-MFIFGJNAgmcSQ.png)

![](https://cdn-images-1.medium.com/max/800/1*69anCVxxnu2f3DOgROkDlw.png)

### How Does It Work?

The best part about this React feature is how easy it is to implement.

Let’s start with a simple implementation example. @ggrgur provided an awesome example on twitter:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🔥🔥Asynchronously | Dynamically | Lazy 🔥🔥 loading component with <a href="https://twitter.com/hashtag/React?src=hash&amp;ref_src=twsrc%5Etfw">#React</a> Suspense and <a href="https://twitter.com/webpack?ref_src=twsrc%5Etfw">@webpack</a> with proper code splitting <br><br>This is *the* reason to upgrade to ⭐️<a href="https://twitter.com/reactjs?ref_src=twsrc%5Etfw">@reactjs</a> 16.6⭐️ <a href="https://t.co/qN3WkmoTPL">pic.twitter.com/qN3WkmoTPL</a></p>&mdash; Grgur Grisogono (@ggrgur) <a href="https://twitter.com/ggrgur/status/1055412110895841280?ref_src=twsrc%5Etfw">October 25, 2018</a></blockquote>

There are three important pieces to code-splitting in React:

1. Importing Suspense and lazy from React.

```jsx
import React, { Suspense, lazy } from "React";
```

2. Dynamically importing the file you want to defer loading

```jsx
const Deferred = lazy(() => import("./Deferred"));
```

3. Wrapping that component in Suspense and setting a fallback UI.

```jsx
<Suspense fallback={<div>Fallback Component</div>}>
  <Deferred {...props} />
</Suspense>
```

And now I’ll share an entire example:

```jsx
// Import Suspense and lazy from React
import React, { Component, Suspense, lazy } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

import { SearchBar } from "./components/SearchBar";
import { SearchInput } from "./components/SearchInput";

// Dynamically import the file
// you don't want to load until later
const Repos = lazy(() => import("./Repos"));

class App extends Component {
  // Some lifecycle and class methods here

  render() {
    const { value } = this.state;
    return (
      <Container>
        <div className="App">
          // Search Bar Code
          {this.state.loading ? (
            <Row>// Fetching data message</Row>
          ) : (
            <Row>
              <Col sm={12} md={2}>
                {this.state.profile ? (
                  <h1>{this.state.profile.login}</h1>
                ) : null}
              </Col>
              <Col sm={12} md={10}>
                // Here is where we actually use React.lazy // We check to make
                sure the data came back from the API // Then we wrap the
                component that's being dynamically // imported in `<Suspense />`
                and provide a fallback // component
                {this.state.repos.length > 0 ? (
                  <Suspense fallback={<Blurred />}>
                    <Repos repos={this.state.repos} />
                  </Suspense>
                ) : null}
              </Col>
            </Row>
          )}
        </div>
      </Container>
    );
  }
}

export default App;
```
