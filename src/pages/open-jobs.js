import * as React from "react";
import { Button as ReakitButton } from "reakit/Button";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Page } from "../components/Page";
import { Header } from "../components/Header";
import { Date } from "../components/Date";
import mediaQueries from "../utils/mediaQueries";
import { SubtleStyledGatsbyLink } from "../components/Link";

const JobPosting = styled.div`
  margin-bottom: ${(props) => props.theme.spacings["4"]};
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
      color: ${(props) => props.theme.colors.text};
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.fontSizes["6"]};
      margin-bottom: 0px;
    }

    p {
      color: ${(props) => props.theme.colors.text};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.fontSizes["4"]};
    }
  }
`;

const ButtonLink = styled(ReakitButton)`
  background-color: ${(props) => props.theme.colors.highlight};
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  padding: ${(props) => props.theme.spacings["4"]};
  width: 100%;
  text-decoration: none;

  ${mediaQueries.TABLET_PORTRAIT`
    width: ${(props) => props.theme.spacings["10"]};
  `}

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Stack = styled.div`
  padding: ${(props) => props.theme.spacings["4"]};
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
        console.log(`amplitude api key is undefined`);
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
    <Page
      seoDescription="A collection of design systems jobs for developers, designers, and product managers"
      seoTitle="Design Systems Jobs"
      metaImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/DS-Job-Twitter.jpg"
      twitterImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/DS-Job-Twitter.jpg"
      twitterImageAlt="Design Systems Jobs, a collection of design systems jobs for developers, designers, and product managers."
    >
      <Header>{frontmatter.title}</Header>
      <Date>Last updated {frontmatter.date}</Date>
      <Stack />
      <ButtonLink
        onClick={() =>
          amplitudeInstance.logEvent(`click post a job button on /open-jobs`)
        }
        as="a"
        href="https://forms.gle/2XRp4K8kcC6wGvvh9"
      >
        Post a job!
      </ButtonLink>
      <Stack />
      <SubtleStyledGatsbyLink to="/post-a-job">
        Hiring? Post a job on the job board
      </SubtleStyledGatsbyLink>
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
