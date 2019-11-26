import React from "react";
import Layout from "./src/components/layout";

// custom typefaces
import "typeface-inconsolata";
import "typeface-montserrat";
import "typeface-roboto";
import "typeface-major-mono-display";
import "typeface-quicksand";

require("prismjs/themes/prism-tomorrow.css");

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
