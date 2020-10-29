import React from "react";
import Bio from "../components/bio";
import SEO from "../components/seo";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { LayoutGrid, GridColumn } from "../components/Grid";

const Index = () => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
      />
      <Bio />
      <LayoutGrid>
        <GridColumn
          columnStart={["3", "5", "8"]}
          columnEnd={["24", "22", "19"]}
        >
          <NewsletterSignup />
        </GridColumn>
      </LayoutGrid>
    </>
  );
};

export default Index;
