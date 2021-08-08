import React from "react";
import SEO from "../components/seo";
import { Text } from "../components/Text";
import { LayoutGrid, GridColumn } from "../components/Grid";

const Index = (props) => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          `design systems`,
          `design tokens`,
          `component libraries`,
          `semantic versioning`,
          `lerna`,
          `react`,
        ]}
      />
      <LayoutGrid>
        <GridColumn
          columnStart={["3", "5", "10"]}
          columnEnd={["24", "22", "20"]}
        >
          <Text>
            I'll share your email with companies you're interested in shortly!
          </Text>
        </GridColumn>
      </LayoutGrid>
    </>
  );
};

export default Index;
