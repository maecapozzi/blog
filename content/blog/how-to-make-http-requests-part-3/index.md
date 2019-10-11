---
path: "/how-to-make-http-requests-in-react-part-3"
date: "2017-12-09"
title: "How to Make HTTP Requests in React, Part 3"
img: "http-part-3.png"
---

_If you haven’t completed [part 1](https://medium.com/@MCapoz/tutorial-how-to-make-http-requests-in-react-part-1-f7afa3cd0cc8) and [part 2](https://medium.com/@MCapoz/tutorial-how-to-make-http-requests-in-react-part-2-4cfdba3ec65) of this tutorial, please do so before starting part 3._

Now we’re getting to the good part! So far, we’ve set up a new React application using `create-react-app`, and we’ve wired up our component to log ‘Success!’ when we click the button. Now, we need to make the actual HTTP request.

When I was first learning React, I wasn’t sure whether there was a built-in way to make HTTP requests. There isn’t. We’ll have to rely on third-party services to make our requests. I prefer axios, but there are other options, like Superagent or fetch. We’ll be using axios in this tutorial.

## Step 1: Install axios

We’ll install `axios` using npm:

    npm install axios -S

Once we’ve installed it, we can take a look at the [docs](https://github.com/axios/axios) and begin writing our first HTTP request. **Sidenote: **Axios uses Promises. If you aren’t familiar with Promises, you might want to [read a bit more about them](https://developers.google.com/web/fundamentals/primers/promises) and then come back.

As a quick reminder, our goal is to get back a user’s name from the `/users/:username` endpoint.

## **Step 2: Write a get request**

First, let’s add state to our component. We’ll add a `username` attribute to it and set it as an empty string. Once we add state, our constructor will look like this:

```jsx
constructor () {
  super()
  this.state = {
    username: ''
  }

  this.handleClick = this.handleClick.bind(this)
}
```

Next, in our `handleClick` function, we’ll make a call to Github to get back the users.

First, we need to import `axios` into the file, so that we can use it. Put this line at the top of your file, underneath where you’ve imported `./App.css`.

    import axios from 'axios'

Then, we can begin to construct our request inside of the `handleClick` function.

```js
handleClick () {
  axios.get('https://api.github.com/users/maecapozzi')
    .then(response => console.log(response))
}
```

Let’s dissect what I’ve written above a bit. I’m following the syntax set out by `axios` and making a `get` request to Github’s `/users` endpoint. That endpoint looks like this:

    /users/:username

`:username`, above, represents any username you’d like. I replaced `:username` with `maecapozzi`, which is my username. You can replace it with your own, and get your own data back.

I use `.then` to tell my program to wait for the data to come back from Github, and then, I log the response.

If you copy the code above, you’ll see that you’ve gotten back an object that represents all of a user’s data in the console. It will look like this:

![](https://cdn-images-1.medium.com/max/2802/1*e2fttmE03zeBOmllDoCiEQ.png)

Now, I need to display this data in a way that is meaningful to my user. I want to get back the user’s name from the request. To do so, I need to parse that data, set the username attribute on my state, and then display it.

My `handleClick` function will look like this:

```js
handleClick () {
  axios.get('https://api.github.com/users/maecapozzi')
    .then(response => this.setState({username: response.data.name}))
}
```

My `render` function will look like this:

```jsx
render () {
  return (
    <div className='button__container'>
      <button className='button' onClick={this.handleClick}>
        Click Me
      </button>
      <p>{this.state.username}</p>
    </div>
  )
}
```

Let me run through how this application works.

1. User clicks a button. Button has an `onClick` event on it.

2. `onClick` event triggers the `handleClick` function.

3. `handleClick` function makes a request to the Github API, asking for user data for the username sent to it. In this example, it gets back data for the username “maecapozzi.”

4. `handleClick` waits for data to come back from Github using a `Promise`.

5. `handleClick` updates the username attribute on state with the name returned from the Github API.

6. `<p>` tag displays whatever `this.state.username` is. When the button has not been clicked, it will return an empty string, but once the button has been clicked and the request has been completed, it will show the user’s name.

And there you have it! You’ve made your first HTTP request in React! I’m including a gist of the entire component below. You can also find this code [here](https://github.com/maecapozzi/tutorial-http-requests-in-react), in case you’d like to clone it.
