import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Bio from "../components/bio";
import SEO from "../components/seo";
import { StyledGatsbyLink } from "../components/Link";

const socials = [
  { name: "Github", url: "https://github.com/maecapozzi" },
  { name: "Twitter", url: "https://twitter.com/MCapoz" },
  { name: "Email", url: "mailto:maecapozzi@gmail.com" }
];

const posts = [
  {
    name: "The Forge: Harry’s approach to the multi-brand component library",
    url:
      "https://www.designsystems.com/the-forge-harrys-approach-to-multi-brand-design-systems/"
  },
  {
    name: "How We Used Gatsby.js to Build a Blazing Fast E-Commerce Site",
    url:
      "https://medium.com/harrys-engineering/how-we-used-gatsby-js-to-build-a-blazing-fast-e-commerce-site-a9818145c67b"
  }
];

const Page = styled("div")`
  height: 100vh;
  margin: 0 auto;
  padding: 2em;
`;

const buildList = links =>
  links.map(link => {
    const { url, name } = link;
    return (
      <li key={url}>
        <StyledGatsbyLink href={url}>{name}</StyledGatsbyLink>
      </li>
    );
  });

const AboutPage = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Page>
        <SEO
          title="About me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <section>
          <h3>Find me on the internet</h3>
          {buildList(socials)}
          <h3>Writing</h3>
          {buildList(posts)}
        </section>
      </Page>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
