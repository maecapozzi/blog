---
path: "/using-node-fetch-with-apollo-link-http"
date: "2019-05-23"
title: "Using node-fetch with apollo-link-http"
---

I'm building a [Gatsby](https://www.gatsbyjs.org/) app that consumes data from a GraphQL service with the help of apollo-client and TypeScript. Because Gatsby creates static assets at build time, I needed a data-fetching tool that would work on the client-side and the server-side. apollo-client recommends using [node-fetch](https://github.com/bitinn/node-fetch) for the task.

When I installed `node-fetch` and tried it out, I got this TypeScript error:

```bash
error TS7016: Could not find a declaration file for module 'node-fetch'. '/Users/mae.capozzi/Desktop/Codes/project/packages/client/node_modules/node-fetch/lib/index.js' implicitly has an 'any' type.
  Try `npm install @types/node-fetch` if it exists or add a new declaration (.d.ts) file containing `declare module 'node-fetch';`

8 import fetch from 'node-fetch';
```

Naturally, I installed `@types/node-fetch`. Rather than solving my problem, it led me to another one:

```bash
error TS2345: Argument of type '{ uri: string | undefined; credentials: string; fetch: typeof fetch; }' is not assignable to parameter of type 'Options'.
  Types of property 'fetch' are incompatible.
    Type 'typeof fetch' is not assignable to type '{ (input: RequestInfo, init?: RequestInit | undefined): Promise<Response>; (input: RequestInfo, init?: RequestInit | undefined): Promise<Response>; }'.
      Types of parameters 'url' and 'input' are incompatible.
        Type 'RequestInfo' is not assignable to type 'import("/Users/mae.capozzi/Desktop/Codes/project/node_modules/@types/node-fetch/index").RequestInfo'.
          Type 'Request' is not assignable to type 'RequestInfo'.
            Type 'Request' is missing the following properties from type 'Request': context, compress, counter, follow, and 6 more.

 21     new HttpLink({
                     ~
 22       uri: process.env.GRAPHQL_SERVER_ENDPOINT,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
...
 24       fetch,
    ~~~~~~~~~~~~
 25     }),
```

This error is basically saying that I have two different type declarations for fetch, and they are incompatible. In other words, apollo-client's type declaration for fetch doesn't match node-fetch's.

Thanks to a few hours of combing through Github issues, I found a solution hidden deep in the [comments](https://github.com/apollographql/apollo-link/issues/513#issuecomment-435014147). In any `d.ts` file in your project, add:

```js
// real node-fetch types clash with apollo-link-http, so manually define it as globalfetch here.
declare module 'node-fetch' {
  const fetch: GlobalFetch['fetch'];
  export default fetch;
}
```

I've opened an issue on the repo to add this information to the docs. You can find it [here](https://github.com/apollographql/apollo-client/issues/4857).
