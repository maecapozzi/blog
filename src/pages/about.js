import React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";
import SEO from "../components/seo";

const AboutPage = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div>
        <section />
        <section
          style={{
            padding: "20px",
            margin: "10px"
          }}
        >
          <h2
            style={{
              fontFamily: "Inconsolata, monospace"
            }}
          >
            Software Engineer
          </h2>
          <p>
            <a
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
              href="https://github.com/maecapozzi"
            >
              Github
            </a>
          </p>
          <p>
            <a
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
              href="https://twitter.com/MCapoz"
            >
              Twitter
            </a>
          </p>
        </section>
        <div>
          <div>
            <section
              style={{
                padding: "20px",
                margin: "10px"
              }}
            >
              <p
                style={{
                  color: "pink",
                  fontFamily: "Inconsolata, monospace"
                }}
              >
                Previously: 501 Auctions, Thrive Global, InRhythm
              </p>
              <p
                style={{
                  color: "pink",
                  fontFamily: "Inconsolata, monospace"
                }}
              >
                Currently: Harry's
              </p>
            </section>
          </div>
        </div>
        <div>
          <section
            style={{
              padding: "20px",
              margin: "10px"
            }}
          >
            <h2
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              Technologies
            </h2>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              ES6
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              React.js
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              Node.js
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              CSS
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              Sass
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              styled-components
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              css-modules
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              webpack
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              git
            </p>
            <p
              style={{
                color: "pink",
                fontFamily: "Inconsolata, monospace"
              }}
            >
              Github
            </p>
          </section>
        </div>
      </div>
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
