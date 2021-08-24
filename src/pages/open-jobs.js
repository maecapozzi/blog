import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Page } from "../components/Page";
import { Header } from "../components/Header";
import { Date } from "../components/Date";

const JobPosting = styled.div`
  && {
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }

    h2 {
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.fontSizes["8"]};
      margin-bottom: ${(props) => props.theme.spacings["6"]};
      margin-top: ${(props) => props.theme.spacings["8"]};
    }

    h3 {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.fontSizes["6"]};
      margin-bottom: ${(props) => props.theme.spacings["2"]};
    }

    p {
      color: ${(props) => props.theme.colors.text};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.fontSizes["4"]};
    }
  }
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Page seoTitle="Design systems jobs">
      <Header>{frontmatter.title}</Header>
      <Date>Last updated {frontmatter.date}</Date>
      <JobPosting dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
}
export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/open-jobs" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
