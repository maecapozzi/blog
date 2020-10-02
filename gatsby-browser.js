const React = require("react");
const Layout = require("./src/components/layout").default;

// custom typefaces
require("./src/styles/prism.css");
require("typeface-inter");

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
