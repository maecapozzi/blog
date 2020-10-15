---
path: "/from-callbacks-to-async-await"
date: "2017-12-09"
title: "From Callbacks to Async Await"
tags: [{ name: "javascript" }]
---

I built the same program 4 different ways. I started with callbacks, moved on to Promises, used generators, and finished up with async/await.

The program:

1.  Makes a request to Github’s users endpoint

2.  Pulls back my Github profile

3.  Logs the response

Here’s what I came up with.

### Callbacks

I struggled to make an HTTP request using callbacks. I’ve mostly used Promises to write asynchronous JavaScript. I generally use [axios](https://github.com/axios/axios) or [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in my applications, which are both Promise-based.

I ended up having to turn to [XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) for this version of the application, which I’ve never used before!

```js
const makeHTTPRequest = (url, methodType, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(methodType, url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
};

const getLogin = (response) => {
  console.log(JSON.parse(response));
};

const url = "https://api.github.com/users/maecapozzi";
makeHTTPRequest(url, "GET", getLogin);
```

I’ll walk you through what this code does:

1. I define a function called `makeHTTPRequest`. It’s designed to actually make the request to Github.

2. I pass three methods to `makeHTTPRequest`, `url`, `methodType`, and `callback`. `url` is the endpoint I want to hit. `methodType` is the HTTP method I want to use. And `callback` is the function I want to call when I actually get a response back from Github.

3. I define a function called `getLogin` and pass it response as an argument. The function takes the response I receive from Github, and parses it to JSON. Then, it logs the parsed response.

4. I pass `getLogin` into `makeHTTPRequest` as callback. That means `getLogin` will take the response from Github has it’s argument.

### Promises

After achieving my goals with callbacks, I attempted with promises. This felt straightforward, since I’ve done it many times before.

```js
const makeHTTPRequest = (username) => {
  const url = "https://api.github.com/users/" + username;
  fetch(url)
    .then((response) => response.json())
    .then((response) => console.log(response));
};

makeHTTPRequest("maecapozzi");
```

1. I defined a function called `makeHTTPRequest` and passed it a `username`.

2. I used `fetch` to make a request to Github.

3. I use `.then()` to wait for the request to Github to complete, and then convert the response to JSON.

4. I log the response

### Generators

This was my first foray into generators. The syntax and concept were totally foreign to me upon approaching this challenge.

```js
function* getUser(username) {
  const uri = "https://api.github.com/users/" + username;
  const response = yield fetch(uri);
  const parsedResponse = yield response.json();
  console.log(parsedResponse);
}

getUser("maecapozzi");
```

1. I define `getUser` and say that it’s a generator by using the `*` syntax. I pass in username as an argument.

2. I create a variable called `response` and set it equal to response I receive from Github after making an HTTP request using `fetch`. The important piece of line 3 is that I use the keyword `yield`. `yield` is telling my program that I do want to set response equal to the response I get back from Github, but only after the request is completed.

3. I follow the same pattern again when I set `parsedResponse` equal to `response.json(`). I have to wait for the Promise to resolve before I can set my variable. If I don’t use `yield`, when I try to log `parsedResponse`, I get: `Promise {<pending>}` back.

### Async/Await

Finally, I wrote the application once more using ES7 async/await. Since I did this after building the same application with generators, it became really obvious how async/await is built on top of generators.

```js
const getUser = async (username) => {
  const uri = "https://api.github.com/users/" + username;
  const response = await fetch(uri);
  const parsedResponse = await response.json();
  console.log(parsedResponse);
};

getUser("maecapozzi");
```

1. I define an async function called getUser that takes username as an argument.

2. I created a variable called `response`and set it equal to the response I receive from Github after making a request to the `/users/:id` endpoint. The key is that I use the `await` keyword to tell my program to wait for the request to resolve itself before setting response equal to the response I get back.

3. I use the same pattern again on line 4.

4. Then I log the parsed response.

### Takeaways

This was a worthy endeavor for a few reasons. First of all, I hadn’t used callbacks much, so I didn’t really know how big of a deal Promises were. I also had been taking fetch and axios for granted, since they made making HTTP requests so much more straightforward.

I also had never used generators or async/await. Although I found async/await much easier to use than generators, it was helpful to see how async/await was built on top of generators. It was also fun to get my hands dirty with some ES7 syntax.
