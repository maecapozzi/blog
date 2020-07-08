# generateMediaQueries

A function to generate an object of template functions for applying css media queries in styled-components. These shorthands speed up development while standardizing media queries in a project.

It takes a mobile-first approach where all media queries are hardcoded to use `min-width` unless a range is specified. It also provides a `HOVER` template function as a shorthand for defining hover state behavior for hoverable devices (see example below).

## Usage

```javascript
import generateMediaQueries from '@harrysforge/generate-media-queries';
```

## Example

1. Setup a singleton mediaQueries object using `generateMediaQueries`

```javascript
// utils/mediaQueries.ts

import generateMediaQueries from '@harrysforge/generate-media-queries';

export default generateMediaQueries({
  MOBILE: 500,
  TABLET_PORTRAIT: 768,
  TABLET_LANDSCAPE: 1024,
  DESKTOP: 1336,
  PORTRAIT_RANGE: [768, 1023],
});
```
2. Import the mediaQueries object and use its functions when defining a media query in a styled component.

```javascript
// components/Label.tsx

import React from 'react';
import styled from 'styled-components';
import mediaQueries  from 'utils/mediaQueries';

const Span = styled.span`
  font-size: 12px;

  ${mediaQueries.PORTRAIT_RANGE`
    font-size: 24px;
  `}

  ${mediaQueries.DESKTOP`
    font-size: 30px;
  `}

  ${mediaQueries.HOVER`
    color: ${props => props.theme.colors('pink')}
  `}
`;

export const Label = ({ text }: { text: string }) => <Span>{text}</Span>;
```

The above styled component is equivalent to:

```javascript
const Span = styled.span`
  font-size: 12px;

  @media screen only and (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }

  @media screen only and (min-width: 1336px) {
    font-size: 30px;
  }

  @media screen only and (hover: hover) {
    &:hover {
      color: ${props => props.theme.colors('pink')};
    }
  }
`
```
