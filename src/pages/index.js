import React from "react";
import Bio from "../components/bio";
import { Page } from "../components/Page";

const Index = (props) => {
  return (
    <Page
      seoDescription="Design systems blog posts, jobs, and newsletter issues."
      seoTitle="Mae Capozzi's website"
      metaImage="s3://maecapozzi.com/twitter-images/maecapozzi.com-twitter.jpg"
      twitterImage="s3://maecapozzi.com/twitter-images/maecapozzi.com-twitter.jpg"
      twitterImageAlt="Design systems blog posts, jobs, and newsletter issues."
    >
      <Bio />
    </Page>
  );
};

export default Index;
