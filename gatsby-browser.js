import React from "react";
import Layout from "./src/components/layout";
import "./src/styles/global.css";

// custom typefaces
import "typeface-inconsolata";
import "typeface-nunito";
import "typeface-montserrat";
import "typeface-roboto";
import "typeface-major-mono-display";
import "typeface-quicksand";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
