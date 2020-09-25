import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { Text } from "../components/Text";
import { Header } from "../components/Header";
import styled from "styled-components";

const Centered = styled.div`
  margin-top: 40vh;
  margin-bottom: 40vh;
  text-align: center;
`;

class NotFoundPage extends React.Component {
  render() {
    return (
      <Centered>
        <SEO title="404: Not Found" />
        <Header>Oops! Not Found</Header>
        <Text>Something went wrong. Sorry about that!</Text>
      </Centered>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
