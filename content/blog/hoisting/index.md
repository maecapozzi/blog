---
path: "/hoisting"
date: "2017-10-24"
title: "Simplified JavaScript: Hoisting"
---

![#hoisting](https://cdn-images-1.medium.com/max/2560/1*JlnA-Po7xSnbldZyH60Mgw.jpeg)

Hoisting remains one of the quirkier aspects of JavaScript. When a developer declares a variable in JavaScript, that variable *behaves *as if it’s been lifted to the top of it’s available scope. This article isn’t going to concern itself with what actually happens behind the scenes to cause this behavior. Instead, I hope to provide a simple explanation of hoisting that will make sense to new users of JavaScript.

## Hoisting in ES5

I went about 1.5 years without really understanding hoisting. I just stuck to a general rule — I always declared and assigned all of my variables at the top of the file. Before ES6 came out, that looked something like the code below:

```js
var a = 1;
var b = 2;
var c = 3;

var adder = function(a, b, c) {
  return a + b + c;
};

adder(a, b, c); // Returns 6
```

The above code executes correctly and returns the number 6 when I run it. I declare and assign my variables at the top, then I define a function expression, and then I call my function, passing in the variables I’ve assigned earlier on.

But I get the same return value when I declare my variables at the top without assigning them, like this:

```js
var a;
var b;
var c;

var adder = function(a, b, c) {
  console.log(a + b + c);
};

a = 1;
b = 2;
c = 3;

adder(a, b, c); // Returns 6
```

Or I can call my function before I declare it, and I’ll still get 6 back:

```js
var a = 1;
var b = 2;
var c = 3;

adder(a, b, c); // Returns 6

function adder(a, b, c) {
  console.log(a + b + c);
}
```

Here’s a challenge. Before you keep reading, consider the code below and try to determine what it will evaluate to.

```js
function hoist() {
  a = 1;
  var b = 2;
}

hoist();

console.log(a);

console.log(b);
```

Got it? OK, I’ll share the answer with you.

`console.log(a)` will return 1. On the other hand, `console.log(b)` will come back with `ReferenceError: b is not defined`. Both a and b are hoisted to the top of their scope, but because b was declared inside of the hoist() function, it’s not available to the global scope.

## Hoisting in ES6

`let` and `const` introduce a different way of handling hoisting.

### Let

We’ll start with `let`. In the example below, I’m trying to log the hoist variable, and then declaring and assigning it:

```js
console.log(hoist); // ReferenceError: hoist is not defined
let hoist = "hoisted";
```

In this case, I got a ReferenceError. This is different from what I would have gotten had I written `var hoist = 'hoisted';`. In that case, I would have ended up with `undefined`.

`var` and `let` throw different errors because JavaScript initializes them differently. When `var` is declared, JavaScript sets it to `undefined`. `let`, on the other hand, remains uninitialized. That way, it throws a helpful error rather than just returning `undefined`.

### Const

Let’s try this with `const`:

```js
console.log(hoist); // ReferenceError: hoist is not defined
const hoist = "hoisted";
```

Like let, we get an explicit error telling us that hoist was not defined before it was called.

## Functions

JavaScript will hoist function declarations, but not function expressions. I’ll provide some examples:

### Function Declaration

If a function is declared but isn’t assigned to a variable, it will be hoisted to the top of it’s scope.

```js
hoister(); // hoists

function hoister() {
  console.log("hoists");
}
```

### Function Expression

A function expression, on the other hand, will not be hoisted, so the below code returns a `TypeError`.

```js
hoister(); // TypeError: hoister is not a function

var hoister = function() {
  console.log("hoists");
};
```

Hopefully this post has helped you to make a bit more sense of hoisting. Of course, there’s always more to learn.

## Keep Reading

- [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
