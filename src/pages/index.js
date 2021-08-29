import React from "react";
import Bio from "../components/bio";
import { Page } from "../components/Page";

const Index = (props) => {
  return (
    <Page
      seoDescription="Design systems blog posts, jobs, and newsletter issues."
      seoTitle="Mae Capozzi's website"
      metaImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/Default-twitter-image.jpg"
      twitterImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/Default-twitter-image.jpg"
      twitterImageAlt="Design systems blog posts, jobs, and newsletter issues."
    >
      <Bio />
    </Page>
  );
};

export default Index;
