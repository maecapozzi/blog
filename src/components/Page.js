import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import { Card } from "../components/Card";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { LayoutGrid, GridColumn } from "../components/Grid";

export const loopThroughPosts = (posts, images) => {
  return posts.map(({ node }) => {
    let headerImage;
    images.forEach((image) => {
      if (image.node.fluid.originalName === node.frontmatter.img) {
        headerImage = image;
      }
    });

    const title = node.frontmatter.title || node.fields.slug;
    return (
      <Card
        img={headerImage && headerImage.node.fluid}
        title={title}
        content={node.frontmatter.excerpt || node.excerpt}
        slug={node.fields.slug}
        date={node.frontmatter.date}
        tags={node.frontmatter.tags}
      ></Card>
    );
  });
};

const Wrapper = styled.div`
  margin-bottom: 200px;
`;

export const Page = (props) => {
  const {
    children,
    seoTitle,
    seoKeywords = [
      `design systems`,
      `design systems jobs`,
      `jobs`,
      `design tokens`,
      `component libraries`,
      `semantic versioning`,
      `lerna`,
      `react`,
    ],
  } = props;

  return (
    <Wrapper>
      <LayoutGrid>
        <SEO title={seoTitle} keywords={seoKeywords} />

        <GridColumn
          columnStart={["3", "5", "10"]}
          columnEnd={["24", "22", "20"]}
        >
          {children}
          <NewsletterSignup slug={props.path} />
        </GridColumn>
      </LayoutGrid>
    </Wrapper>
  );
};
