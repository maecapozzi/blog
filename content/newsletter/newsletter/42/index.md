---
path: "/issue-42"
date: "2021-08-09"
title: "📦 Building polymorphic components (#42)"
tags: [{ name: "newsletter" }]
---

Happy Monday!

Almost every single component library I've worked on (and many I haven't) include at least one polymorphic component. The word polymorphic stems from Greek, in which "poly" means many, and "morph" means forms. In design systems land, we use the term "polymorphic" to describe a single component that can render 2 or more HTML elements under the hood.

Ok, I get it. You didn't come here for a linguistics lesson. Let's dive into why you might consider building a polymorphic component.

Have you ever been working on a design or coding a layout and you need some way to help the user navigate to a new page, but using a link doesn't quite stand out enough, or doesn't match your vision for the designs?

Sometimes, instead of putting in the extra effort to style an `<a />` tag to look like a button, people will try to use a `button` tag instead.

```tsx
const Example = () => {
  return (
    <button
      onClick={() => {
        window.location.href = "www.google.com";
      }}
    >
      Click me to navigate
    </button>
  );
};
```

Spoiler alert: **Do not do this!** Using semantically-appropriate HTML tags is critical for building accessible web pages, and `button` tags are not intended to navigate to new pages.

If someone is using assistive technology on your website, you'll want to make sure that that you're providing clear markers about what each element is intended to do. It could be very confusing for a user that cannot see if a `button` navigates them to a new page.

One way that design systems teams try to solve for this is by creating a polymorphic `Button` component, that always looks like a `Button`, but that can either render a `button` tag or an `<a />` under the hood.

In this first example, our polymorphic Button component renders a `<button />` tag behind the scenes because we passed the string "button" to an `as` prop .

```tsx
const Example = () => {
  return (
    <div>
      {/* renders a `<button />` tag */}
      <Button as="button" type="submit">
        Click me to submit a form
      </Button>;
    </div>
  );
};
```

In the next example, our polymorphic Button component renders an `<a />` tag behind the scenes because we passed the string "a" to an `as` prop .

```tsx
const Example = () => {
  return (
    <div>
      {/* renders an `<a />` tag */}
      <Button as="a" href="www.google.com">
        Click me to navigate
      </Button>;
    </div>
  );
};
```

This is one way that design systems teams try to reduce the amount of time product teams need to spend on accessibility and design consistency so that those teams can focus on challenges that impact the business more directly.

If your company is hiring (and you think it's a great company that you'd tell your friends to work at), fill out this [form](https://forms.gle/tCRpGy7PMfQGqu5B9)!

And if you like this newsletter...**[tell your friends](https://maecapozzi.com/newsletter/)**! Building this community can lead all of us to more job opportunities, guest posts, and connections.

Talk soon,

Mae
​
