import React from "react";
import styled from "styled-components";
import { NewsletterSignup } from "../components/NewsletterSignup";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const NewsletterWrapper = styled.div`
  max-width: 800px;
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
