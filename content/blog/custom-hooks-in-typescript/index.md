---
path: "/custom-hooks-in-typescript"
date: "2020-09-25"
title: "Custom hooks in TypeScript"
excerpt: "What to do when TypeScript complains about the return type of your custom hook."
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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1848e59d-725a-454b-9f83-d93a2fae22da/image.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1848e59d-725a-454b-9f83-d93a2fae22da/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200925%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200925T122832Z&X-Amz-Expires=86400&X-Amz-Signature=4091a3250a1956c84073c86d3b59c47e4ee5989b75d721b06787ac00d298b292&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22image.png%22)

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
