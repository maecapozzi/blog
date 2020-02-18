import React from "react";
import styled from "styled-components";

const StyledLink = styled("a")`
  color: white;
  font-family: ${props => props.fonts.primary};
`;

const Contact = () => (
  <p>
    You can reach me by email at{" "}
    <StyledLink href="mailto:maecapozzi@gmail.com">
      maecapozzi@gmail.com
    </StyledLink>{" "}
    or via <StyledLink href="https://twitter.com/MCapoz">Twitter</StyledLink>.
  </p>
);

export default Contact;
