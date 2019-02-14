---
path: "/how-to-make-http-requests-in-react-part-1"
date: "2017-12-09"
title: "How to Make HTTP Requests in React, Part 1 "
---

![](https://cdn-images-1.medium.com/max/2400/1*y6C4nSvy2Woe0m7bWEn4BA.png)

You can find part 2 [here](https://medium.com/@MCapoz/tutorial-how-to-make-http-requests-in-react-part-2-4cfdba3ec65), and part 3 [here](https://medium.com/@MCapoz/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be).

This series will walk you through how to make HTTP requests to the [Github REST API](https://developer.github.com/v3/) in [React.js](https://reactjs.org/). I’ve chosen the Github API because it is well-organized and doesn’t require us to do any sort of authentication. Part 1 will focus on setting up a React application using create-react-app.

At the end of this tutorial, you’ll be able to click a button, feed Github your username, and get your name back.

Let’s begin.

## **Step 1: Set up a new application**

First, we need to set up our project. We will begin by navigating to the [create-react-app](https://github.com/facebookincubator/create-react-app) repository on Github.

We can use create-react-app to set up a React project without having to worry about build configuration. In other words, we can get right to the good parts of coding without having to set up third-party services like [webpack](https://webpack.js.org/), which can be notoriously challenging for developers unfamiliar with it. (If you want to learn more about how to set up webpack, you can read my post [How to Set Up D3.js with Webpack and Babel](https://code.likeagirl.io/how-to-set-up-d3-js-with-webpack-and-babel-7bd3f5e20df7)).

To create a new project using create-react-app, head over to your terminal. cd into your root directory. By typing npm install -g create-react-app, you will install create-react-app globally on your computer. You can use the create-react-app command to create a new application, like so:

    create-react-app github-requester

In the command above, github-requester is the name I’ve chosen to give my application. You’re welcome to name your application anything you’d like.

## Step 2: Start your server

Next, cd into your application, and type npm start. This will start your server, so that you can view your application locally in your browser at [http://localhost:3000/](http://localhost:3000/).

This works, because create-react-app sets your start script to react-scripts start. If we hadn’t used create-react-app we would have had to set this, and things like it, ourselves.

When you open the page at [http://localhost:3000/](http://localhost:3000/), you should see a page that looks like this:

![](https://cdn-images-1.medium.com/max/2878/1*WD68a43ZF_CtJYyagPmsEg.png)

Thanks for following this tutorial so far! If you see the screen above, you’ve correctly set up the project, and you’re ready to move on to [Part 2](https://medium.com/@MCapoz/tutorial-how-to-make-http-requests-in-react-part-2-4cfdba3ec65) of this tutorial.
