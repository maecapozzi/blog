import React from "react";
import Bio from "../components/bio";
import SEO from "../components/seo";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { LayoutGrid, GridColumn } from "../components/Grid";

const Index = (props) => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
      />
      <Bio />
      <LayoutGrid>
        <GridColumn
          columnStart={["3", "5", "10"]}
          columnEnd={["24", "22", "20"]}
        >
          <NewsletterSignup slug={props.path} />
        </GridColumn>
      </LayoutGrid>
    </>
  );
};

export default Index;
