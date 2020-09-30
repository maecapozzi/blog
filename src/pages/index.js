import React from "react";
import Bio from "../components/bio";
import SEO from "../components/seo";
import { Main } from "../components/Main";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Grid } from "../components/Grid";

const Index = () => {
  return (
    <Grid>
      <Main>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
        />
        <Bio />
        <NewsletterSignup />
      </Main>
    </Grid>
  );
};

export default Index;
