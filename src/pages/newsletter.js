import React from "react";
import styled from "styled-components";
import { NewsletterSignup } from "../components/NewsletterSignup";

const StyledPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 48px;

  @media screen and (min-width: 900px) {
    height: 100vh;
  }
`;

const NewsletterWrapper = styled.div`
  width: 800px;
  padding: 16px;
`;

const Newsletter = () => {
  return (
    <StyledPage>
      <NewsletterWrapper>
        <NewsletterSignup />
      </NewsletterWrapper>
    </StyledPage>
  );
};

export default Newsletter;
