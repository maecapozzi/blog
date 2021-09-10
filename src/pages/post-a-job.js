import * as React from "react";
import { Button as ReakitButton } from "reakit/Button";
import styled from "styled-components";
import { seoKeywords } from "../components/Page";
import { Text } from "../components/Text";
import { LayoutGrid, GridColumn } from "../components/Grid";
import SEO from "../components/seo";
import { SubtleStyledGatsbyLink, StyledGatsbyLink } from "../components/Link";
import mediaQueries from "../utils/mediaQueries";

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
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const ParagraphWrapper = styled.div`
  margin: ${(props) => `${props.theme.spacings["6"]} 0`};
`;

const PitchHeader = styled.h1`
  color: ${(props) => props.theme.colors.background};
  margin-top: ${(props) => props.theme.spacings["4"]};
  text-align: center;
`;

const Emphasis = styled.span`
  color: ${(props) => props.theme.colors.highlight};
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: ${(props) => `${props.theme.spacings["8"]} 0`};
  justify-content: center;
`;

const Jumbo = styled.div`
  background-color: ${(props) => props.theme.colors.muted};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    `${props.theme.spacings["4"]} ${props.theme.spacings["4"]}`};

  ${mediaQueries.DESKTOP`
     padding: ${(props) =>
       `${props.theme.spacings["10"]} ${props.theme.spacings["13"]}`};
  `}
`;

const PitchWrapper = styled.div`
  padding: 0 16px;
  margin-bottom: 200px;

  ${mediaQueries.TABLET_PORTRAIT`
    padding: 0 25%;
  `}
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.spacings["4"]};
  min-width: 300px;
  max-width: 600px;
  height: 300px;

  border-top: ${(props) =>
    props.highlight && `5px solid ${props.theme.colors.highlight}`};

  padding: ${(props) => props.theme.spacings["6"]};

  && {
    h2 {
      font-size: ${(props) => props.theme.fontSizes["6"]};
      text-align: center;
    }
    ul {
      margin-left: 0px;
    }
  }

  ${mediaQueries.DESKTOP`
    max-width: ${(props) => {
      if (props.size === "sm") {
        return `400px`;
      }
      return `450px`;
    }};

    height: ${(props) => {
      if (props.size === "sm") {
        return `300px`;
      }
      return `350px`;
    }};

  `}
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.DESKTOP`
    flex-direction: row;
    align-items: center;
  `}
`;

const LandingPage = ({ children }) => (
  <LayoutGrid>
    <SEO
      description="Find frontend engineers, UX designers, and product managers with design systems experience."
      keywords={seoKeywords}
      metaImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/DS-Job-Twitter.jpg"
      title="Design Systems Jobs"
      twitterImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/DS-Job-Twitter.jpg"
      twitterImageAlt="Design systems jobs"
    />

    <GridColumn columnStart={["1", "1", "1"]} columnEnd={["26", "26", "26"]}>
      {children}
    </GridColumn>
  </LayoutGrid>
);

export default function Template() {
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
    <LandingPage>
      <Jumbo>
        <PitchHeader>
          Reach hundreds of designers, engineers, and product managers with{" "}
          <Emphasis>design systems experience.</Emphasis>
        </PitchHeader>
        <ButtonWrapper>
          <ButtonLink
            onClick={() =>
              amplitudeInstance.logEvent(
                `click post a job button on /post-a-job`
              )
            }
            as="a"
            href="https://forms.gle/2XRp4K8kcC6wGvvh9"
          >
            Post a job
          </ButtonLink>
        </ButtonWrapper>
        <CardWrapper>
          <Card size="sm">
            <h2>Basic ($39)</h2>
            <ul>
              <li>Shown on the job board for 30 days</li>
              <li>Promoted on Twitter</li>
            </ul>
          </Card>
          <Card size="md" highlight>
            <h2>Most Popular ($89)</h2>
            <ul>
              <li>Shown on the job board for 30 days</li>
              <li>
                Shared with 300+ design systems experts in the{" "}
                <SubtleStyledGatsbyLink to="/newsletter">
                  Design Systems Newsletter
                </SubtleStyledGatsbyLink>{" "}
                1x
              </li>
              <li>Promoted on Twitter</li>
            </ul>
          </Card>
          <Card size="sm">
            <h2>Enterprise ($199)</h2>
            <ul>
              <li>Shown on the job board for 30 days</li>
              <li>
                Shared with 300 + design systems experts in the{" "}
                <SubtleStyledGatsbyLink to="/newsletter">
                  Design Systems Newsletter
                </SubtleStyledGatsbyLink>{" "}
                4x
              </li>
              <li>Promoted on Twitter</li>
            </ul>
          </Card>
        </CardWrapper>
      </Jumbo>
      <PitchWrapper>
        <ParagraphWrapper>
          <Text>
            You're spending way too much time, energy, and money interviewing
            candidates without design systems experience.
          </Text>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Text>
            Design systems have become a meaningful aspect of product
            development across the tech industry -- but it can be nearly
            impossible to find designers, engineers, and product managers with
            design systems experience
          </Text>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Text>
            It feels like everyone is already in a full-time role, or they have
            a full client list.
          </Text>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Text>
            But what if you could get your job description in front of
            experienced candidates,{" "}
            <Emphasis>right away and affordably.</Emphasis>
          </Text>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Text>
            You could start interviewing candidates next week who have{" "}
            <em>already</em> been through major rebrands, configured design
            tokens, and built component libraries and documentation sites.
          </Text>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Text>
            Design systems is still pretty niche — it's hard to find people with
            experience if you don't know where to look.
          </Text>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Text>
            Get your job in front of industry leaders today via the{" "}
            <SubtleStyledGatsbyLink to="/open-jobs">
              Design Systems Job Board.
            </SubtleStyledGatsbyLink>
          </Text>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Text>
            Stop wasting time and money by posting on random job sites.{" "}
            <Emphasis>Sit back, and let great candidates come to you.</Emphasis>
          </Text>
        </ParagraphWrapper>
        <ButtonWrapper>
          <ButtonLink
            onClick={() =>
              amplitudeInstance.logEvent(
                `click post a job button on /post-a-job`
              )
            }
            as="a"
            href="https://forms.gle/2XRp4K8kcC6wGvvh9"
          >
            Post a job now
          </ButtonLink>
        </ButtonWrapper>
      </PitchWrapper>
    </LandingPage>
  );
}