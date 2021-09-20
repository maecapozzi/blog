import * as React from "react";
import { Button as ReakitButton } from "reakit/Button";
import styled from "styled-components";
import { seoKeywords } from "../components/Page";
import { Text } from "../components/Text";
import { LayoutGrid, GridColumn } from "../components/Grid";
import SEO from "../components/seo";
import {
  SubtleStyledGatsbyLink,
  SubtleStyledExternalLink,
} from "../components/Link";
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

  ${mediaQueries.DESKTOP`
    padding: 0 25%;
  `}
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.spacings["2"]};
  min-width: 250px;
  max-width: 500px;
  height: 350px;

  border-left: ${(props) =>
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
    p {
      font-family: "Inter";
      font-size: 14px;
    }
  }

  ${mediaQueries.DESKTOP`
    width: 400px;
    border-left: none;
    border-top: ${(props) =>
      props.highlight && `5px solid ${props.theme.colors.highlight}`};

    height: ${(props) => {
      if (props.size === "sm") {
        return `350px`;
      }
      return `400px`;
    }};

  `}
`;

const TestimonialCard = styled(Card)`
  && {
    h2 {
      text-align: left;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.DESKTOP`
    flex-direction: row;
    align-items: center;
  `}
`;

const TestimonialCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.spacings["6"]};

  ${mediaQueries.DESKTOP`
    flex-direction: row;
    align-items: center;
  `};
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
          Reach 300+ designers, engineers, and product managers with{" "}
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
              <li>
                Job description posted on the{" "}
                <SubtleStyledGatsbyLink to="/open-jobs">
                  Design Systems Job Board
                </SubtleStyledGatsbyLink>{" "}
                for 30 days
              </li>
              <li>
                Job description shared on{" "}
                <SubtleStyledGatsbyLink to="https://twitter.com/DSJobBoard">
                  Twitter
                </SubtleStyledGatsbyLink>{" "}
              </li>
            </ul>
          </Card>
          <Card size="md" highlight>
            <h2>Most Popular ($89)</h2>
            <ul>
              <li>
                Job description posted on the{" "}
                <SubtleStyledGatsbyLink to="/open-jobs">
                  Design Systems Job Board
                </SubtleStyledGatsbyLink>{" "}
                for 30 days
              </li>
              <li>
                Shared with 300+ design systems experts in the{" "}
                <SubtleStyledGatsbyLink to="/newsletter">
                  Design Systems Newsletter
                </SubtleStyledGatsbyLink>{" "}
              </li>
              <li>
                Job description shared on{" "}
                <SubtleStyledGatsbyLink to="https://twitter.com/DSJobBoard">
                  Twitter
                </SubtleStyledGatsbyLink>{" "}
              </li>
            </ul>
          </Card>
          <Card size="sm">
            <h2>Enterprise ($199)</h2>
            <ul>
              <li>
                Job description posted on the{" "}
                <SubtleStyledGatsbyLink to="/open-jobs">
                  Design Systems Job Board
                </SubtleStyledGatsbyLink>{" "}
                for 30 days
              </li>
              <li>
                Job description{" "}
                <Emphasis>
                  <b>featured at the top</b>
                </Emphasis>{" "}
                of the{" "}
                <SubtleStyledGatsbyLink to="/open-jobs">
                  Design Systems Job Board
                </SubtleStyledGatsbyLink>{" "}
              </li>
              <li>
                Shared with 300+ design systems experts in the{" "}
                <SubtleStyledGatsbyLink to="/newsletter">
                  Design Systems Newsletter
                </SubtleStyledGatsbyLink>{" "}
                <Emphasis>
                  <b>once a week until the job is filled</b>
                </Emphasis>
              </li>
              <li>
                Job description shared on{" "}
                <SubtleStyledGatsbyLink to="https://twitter.com/DSJobBoard">
                  Twitter
                </SubtleStyledGatsbyLink>{" "}
              </li>
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
      <Jumbo>
        <PitchHeader>Testimonials from happy users</PitchHeader>
        <TestimonialCardWrapper>
          <TestimonialCard size="sm">
            <h2>
              Derek Torsani,{" "}
              <SubtleStyledExternalLink to="https://gusto.com/">
                Gusto
              </SubtleStyledExternalLink>
            </h2>
            <p>
              "The Design Systems Job Board has been so great for our design
              systems team at Gusto. Since posting our jobs, we've had a variety
              of great candidates apply and enter the interview process. Will
              definitely be using this as our go to design systems job board."
            </p>
          </TestimonialCard>
          <TestimonialCard size="sm">
            <h2>
              Dmitry Belyaev,{" "}
              <SubtleStyledExternalLink to="https://booking.com/">
                Booking.com
              </SubtleStyledExternalLink>
            </h2>
            <p>
              "That was lucky for us to find Mae's design system-oriented job
              board the moment we've opened an engineering manager position in
              our team. Having the candidates coming from her design system
              newsletter plays a great role in getting people that are already
              experienced in the topic."
            </p>
          </TestimonialCard>
        </TestimonialCardWrapper>
      </Jumbo>
    </LandingPage>
  );
}
