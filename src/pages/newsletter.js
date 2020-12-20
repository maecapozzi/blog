import React from "react";
import { LayoutGrid, GridColumn } from "../components/Grid";
import { NewsletterSignup } from "../components/NewsletterSignup";

const Newsletter = () => {
  return (
    <LayoutGrid>
      <GridColumn columnStart={["3", "5", "10"]} columnEnd={["24", "22", "20"]}>
        <NewsletterSignup />
      </GridColumn>
    </LayoutGrid>
  );
};

export default Newsletter;
