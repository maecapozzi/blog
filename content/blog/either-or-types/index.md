---
path: "/either-or-types"
date: "2020-09-25"
title: "Either/Or types in TypeScript"
excerpt: "How to enforce that a function expects 'one property or the other' in TypeScript."
---

TypeScript lets us communicate to other users of a function what can be passed to it. Sometimes, it's straightforward to apply types to the parameter of a function.

```ts
const add = (num1: number, num2: number) => {
  return num1 + num2;
};
```

Other times, it can be a bit more difficult. One of those cases is when you have what I like to call an "either, or" type. This is when you want to express that users can only pass an object that contains **either** "this key", **or** "that key". If a user passes a parameter with both keys, unexpected behavior could happen.

We want to write a type that expresses the following rules:

```ts
// Properties can include `one`, or `theOther`. But it cannot include both:

const properties = { one: "hi", theOther: "bye" }; // Invalid
const properties = { one: "hi" }; // Valid
const properties = { theOther: "bye" }; // Valid
```

## When we don't enforce the "either/or" type

We'll start by writing out an example that doesn't prevent consumers from passing a parameter that includes both `one` and `theOther`.

In this case, if we don't enforce that consumers should only pass a parameter with either `one` or `theOther` we run into a less-than-ideal scenario. If both `one` and `theOther` are passed, `one` will always be returned, and `theOther` will never be returned.

```ts
interface OneOrTheOther {
  one?: string;
  theOther?: string;
}

const oneOrTheOther = ({ one, theOther }: OneOrTheOther) => {
  if (one) {
    return one;
  } else {
    return theOther;
  }
};
```

In our initial example, if we try to call `oneOrTheOther` with a parameter that includes `one` and `theOther`, we don't get an error:

```ts
oneOrTheOther({ one: "hi", theOther: "bye" }); // No TypeScript error, `one` is returned
```

## When we enforce the "either/or" type

We can use a combination of TypeScript's `never` and `union` types to enforce that a parameter can _either include `one`, or `theOther`, and never both._

```ts
// We use the `never` type to express that you may NEVER pass `theOther` if you have passed `one`.
interface OnlyOne {
  one: string;
  theOther?: never;
}

// We use the `never` type to express that you may NEVER pass `one` if you have passed `theOther`.
interface OnlyTheOther {
  one?: never;
  theOther: string;
}

// You can only pass a parameter that meets the requirements of `OnlyOne`
// OR
// you can only pass a parameter that meets the requirements of `OnlyTheOther`
type OneOrTheOther = OnlyOne | OnlyTheOther;

const oneOrTheOther = ({ one, theOther }: OneOrTheOther) => {
  if (one) {
    return one;
  } else {
    return theOther;
  }
};
```

Let's take a look at what this looks like when someone tries to pass a parameter with both `one` and `theOther` to the `oneOrTheOther` function! If we call `oneOrTheOther` with an invalid parameter:

```ts
oneOrTheOther({ one: "hi", theOther: "bye" });
```

we get the following error:

```ts
Argument of type '{ one: string; theOther: string; }' is not assignable to parameter of type 'OneOrTheOther'.
  Type '{ one: string; theOther: string; }' is not assignable to type 'OnlyTheOther'.
    Types of property 'one' are incompatible.
      Type 'string' is not assignable to type 'undefined'.ts(2345)
```
