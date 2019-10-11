---
path: "/passing-data-in-react-with-prop-drilling"
date: "2018-08-14"
title: "Passing Data in React with Prop Drilling"
img: "drill.png"
---

The React ecosystem offers multiple ways to pass data and manage state in a client-side application. A developer might choose between prop drilling, redux, MobX, and the new Context API introduced in React 16 depending on the size and complexity of the application they are developing.

A developer can use prop drilling (or threading) to pass data from a component higher up in the component hierarchy to a child component further down. It allows developers to access state at different levels of the component hierarchy in small applications that aren't large or complex enough to warrant a third-party state management solution or Context.

---

Dan Abramov recommends that developers separate stateful and stateless components to maintain a separation of concerns. He suggests that we create top-level container components that contain many presentational components. The container components manage the application's state and pass it to the presentational component to render it.

Let's start by looking at how props are passed from a Parent to a Child component in React.

#### Basic prop drilling

```jsx
// <Mother /> is a container component that holds the
// application's state.
// In this case, <Mother /> holds the family's lastName.

class Mother extends React.Component {
  state = {
    lastName: 'Sanchez'
  }

  render () {
    // Mother passes the lastName down one
    // level to the <Child />
    <Child lastName={this.state.lastName} />
  }
}


// <Child /> is a presentational component that
// displays the lastName.
const Child = ({ lastName }) => <p>{lastName}>/p>
```

In this example, `<Mother />` is the container component that holds the application's state. `<Mother />` passes the lastName as a prop to `<Child />`. `<Child />` then displays the lastName.This pattern gets much more complicated when the application grows in size and complexity.

#### More complex prop drilling

```jsx
const App = () => <Grandmother />;

class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez"
  };

  render() {
    return <Mother lastName={this.state.lastName} />;
  }
}

const Mother = ({ lastName }) => {
  return <Child lastName={lastName} />;
};

const Child = ({ lastName }) => {
  return <p>{lastName}</p>;
};
```

In the above example, the Grandmother component manages the application's state. It holds the lastName attribute on its state. The Child component displays the lastName. In this case, the Child only knows about the lastName because the prop has been passed down (drilled) through the component tree from Grandmother to Mother to Child. It's like a game of telephone.

![Family](https://thepracticaldev.s3.amazonaws.com/i/ztx3uqe9w44q12c7oytz.jpg)

The major benefit of prop drilling is that even as state changes, it updates all of its children with that new state. For example, what if the Grandmother immigrated to the United States, and the immigration officers changed her last name to Smith, from Sanchez.

####Prop Drilling with a State Change

```jsx
class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez"
  };

  // When this function is called, the
  // Grandmother's last name is updated
  immigrateTo = (country, newLastName) => {
    this.setState({ lastName: newLastName });
  };

  componentDidMount() {
    this.immigrateTo("US", "Smith");
  }

  render() {
    // Even though the Grandmother's last name
    // was Sanchez, once her name is changed,
    // the Mother inherits the name "Smith."
    <Mother lastName={this.state.lastName} />;
  }
}
```

As your application continues to grow, you may notice that you start changing the names of your props as you pass them down in the hierarchy. It will become harder to determine where data is coming from, and debugging will become more difficult. You'll also find that you're passing data through components that have no reason to know about that information!

When you can't easily determine the origin of your data, you should consider introducing an alternative state management solution to your application. If you're using React 15, you can implement something like redux or MobX. In React 16, you can also consider using Context.
