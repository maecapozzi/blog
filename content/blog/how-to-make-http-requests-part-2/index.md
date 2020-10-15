---
path: "/how-to-make-http-requests-in-react-part-2"
date: "2017-12-09"
title: "How to Make HTTP Requests in React, Part 2"
img: "http-part-2.png"
tags: [{ name: "react" }]
---

_If you haven’t completed [part 1](https://medium.com/@MCapoz/tutorial-how-to-make-http-requests-in-react-part-1-f7afa3cd0cc8) of this tutorial, do so before starting part 2._

Now that we’ve set up our project using create-react-app, we can start writing some code. Open your project into your editor of choice, and let’s start removing some of the boilerplate that create-react-app adds for you, since we won’t need it.

### **Step 1: Remove create-react-app boilerplate**

When you go into your App.js file, it will look something like this:

![](https://cdn-images-1.medium.com/max/2856/1*cSz2ZtGLG8KceFGPhSqdsg.png)

Go ahead and delete all of the code from App.js and App.cssand replace it with the code below:

```jsx
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="button__container">
        <button className="button">Click Me</button>
      </div>
    );
  }
}

export default App;
```

You can also add this code to your App.css file.

```css
.button__container {
  margin-top: 200px;
  text-align: center;
}

.button {
  background-color: green;
  border: none;
  color: white;
  font-size: 16px;
  height: 40px;
  width: 200px;
}
```

You can also delete the logo.svg file, since we won’t be using it. Now, when you run npm start in your terminal, you should see this in your browser:

![](https://cdn-images-1.medium.com/max/2000/1*GBYgJkuhgT7XwR8jALBDag.png)

### **Step 2: Wire up the handleClick function**

Our next step will be set up a function that is triggered when a user clicks the button. We’ll start by adding an onClick event to our button, like this:

```jsx
<button className="button" onClick={this.handleClick}>
  Click Me
</button>
```

When the button is clicked, we will call a function called handleClick that is bound to this. Let’s go ahead and bind handleClick to this . First, we’ll need to create a constructor function in our component. Then, we’ll bind handleClick to this inside of it.

```jsx
constructor () {
  super()

  this.handleClick = this.handleClick.bind(this)
}
```

Now, our file should look like this:

```jsx
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
```

Finally, we’ll need to define our handleClick function. Let’s start by making sure that everything is wired up correctly, by having the button console.log ‘Success!’ when the button is clicked.

```js
handleClick () {
  console.log('Success!')
}
```

Here’s what your code should look like now:

```jsx
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Success!");
  }

  render() {
    return (
      <div className="button__container">
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
```

You should see this in your browser after clicking the button:

![](https://cdn-images-1.medium.com/max/2778/1*S_ycyo3iWdouOrxXdhUbgw.png)

Make sure that when you click the button, you see ‘Success!’ appear in your console. If you do, it means that you’ve correctly wired up your handleChange function to the button, and you’re all set to move on to [part 3](https://maecapozzi.com/how-to-make-http-requests-part-3/) of this tutorial.
