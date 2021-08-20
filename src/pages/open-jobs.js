import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { LayoutGrid, GridColumn } from "../components/Grid";
import { Header } from "../components/Header";
import SEO from "../components/seo";
import { Date } from "../components/Date";

const JobPosting = styled.div`
  margin-bottom: 200px;
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

  const dataToLog = React.useRef([]);
  const [amplitudeInstance, setAmplitudeInstance] = React.useState({
    logEvent: (...args) => {
      dataToLog.current.push(args);
    },
  });

  React.useEffect(() => {
    const load = async () => {
      const amplitude = await import("amplitude-js");
      const instance = amplitude.getInstance();

      if (process.env.GATSBY_AMPLITUDE_API_KEY) {
        instance.init(process.env.GATSBY_AMPLITUDE_API_KEY);
      } else {
        throw `amplitude api key is undefined`;
      }

      dataToLog.current.forEach((args) => {
        instance.logEvent(...args);
      });
      dataToLog.current = [];
      setAmplitudeInstance(instance);
    };
    load();
  }, []);
  return (
    <LayoutGrid>
      <SEO
        title="Open Jobs"
        keywords={[
          `design systems`,
          `design systems jobs`,
          `jobs`,
          `design tokens`,
          `component libraries`,
          `semantic versioning`,
          `lerna`,
          `react`,
        ]}
      />

      <GridColumn columnStart={["3", "5", "10"]} columnEnd={["24", "22", "20"]}>
        <Header>{frontmatter.title}</Header>
        <Date>Last updated {frontmatter.date}</Date>
        <JobPosting
          onMouseOver={() =>
            amplitudeInstance.logEvent(`interact with open jobs`)
          }
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </GridColumn>
    </LayoutGrid>
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
