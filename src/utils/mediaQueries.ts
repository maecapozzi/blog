import generateMediaQueries from "../utils/generateMediaQueries";

const mediaQueries = generateMediaQueries({
  MOBILE: 500,
  TABLET_PORTRAIT: 768,
  DESKTOP: 1336,
  LARGE_DESKTOP: 3000,
});

export default mediaQueries;
