---
path: "/custom-hooks-in-typescript"
date: "2020-09-25"
title: "Custom hooks in TypeScript"
excerpt: "What to do when TypeScript complains about the return type of your custom hook."
tags: [{ name: "typescript" }, { name: "react" }]
---

I learned a cool TypeScript tip while I was trying to write a hook to manage the state of a `RadioList` component.

My hook was pretty straightforward. It looked something like this:

```tsx
export function useRadioList(defaultValue: string) {
  const [selectedValue, setSelectedValue] = React.useState<string>(
    defaultValue
  );

  const updateSelectedValue = (value: string) => setSelectedValue(value);

  return [selectedValue, updateSelectedValue];
}
```

I tried to use the hook, and I got a typescript error:

```tsx
const [selectedValue, updateSelectedValue] = useRadioList("first-option");
```

```tsx
This expression is not callable.
  Not all constituents of type 'string | ((value: string) => void)' are callable.
    Type 'string' has no call signatures. ts(2349)
```

The main part of the TypeScript error that we need to focus on is this: `Not all constituents of type 'string | ((value: string) => void)' are callable.`

Because we are returning a tuple from the `useRadioList` hook, and not explicitly typing the return type of the hook, TypeScript infers that it's an array, which can contain an infinite number of elements.

TypeScript can't tell if `updateSelectedValue` is a string or a function.

There are two ways to fix this problem:

1. I can be explicit about the return type of the `useRadioList` hook

```tsx
export function useRadioList(
  defaultValue: string
): [string, (value: string) => void] {
  const [selectedValue, setSelectedValue] = React.useState<string>(
    defaultValue
  );

  const updateSelectedValue = (value: string) => setSelectedValue(value);

  return [selectedValue, updateSelectedValue];
}
```

2. I can pair a type assertion with the `const` keyword

```tsx
export function useRadioList(defaultValue: string) {
  const [selectedValue, setSelectedValue] = React.useState<string>(
    defaultValue
  );

  const updateSelectedValue = (value: string) => setSelectedValue(value);

  return [selectedValue, updateSelectedValue] as const;
}
```

Either way, TypeScript now knows that useRadioList returns an array with two elements in it. The first one is always a string, and the second one is always a function.
