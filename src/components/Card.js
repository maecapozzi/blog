import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { theme } from "../styles/theme";

export const CardWrapper = styled(`div`)`
  margin: ${theme.spacings["6"]} 0;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background: #ffffff;
`;

const StyledImage = styled(Img)`
  border-radius: 6px;
  margin-top: ${theme.spacings["6"]};
`;

const TitleWrapper = styled.div`
  padding: ${theme.spacings["5"]} ${theme.spacings["5"]} 0
    ${theme.spacings["5"]};
`;

const Title = styled(`h2`)`
  font-weight: ${theme.fontWeights.heavy};
  margin: 0;
  font-size: ${theme.fontSizes["8"]};
  color: ${theme.colors.tertiary};
  font-family: ${theme.fonts.primary};
`;

const Content = styled(`p`)`
  padding: 0 ${theme.spacings["5"]} ${theme.spacings["5"]}
    ${theme.spacings["5"]};
  font-weight: ${theme.fontWeights.light};
  font-family: ${theme.fonts.primary};
`;

const Date = styled(`p`)`
  font-weight: ${theme.fontWeights.extraLight};
  font-style: italic;
  font-size: ${theme.fontSizes["4"]};
  padding-top: ${theme.spacings["1"]};
  font-family: ${theme.fonts.secondary};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Card = ({ img, title, content, slug, date }) => {
  return (
    <CardWrapper>
      {img && (
        <Link to={slug}>
          <StyledImage fluid={img} />
        </Link>
      )}
      <TitleWrapper>
        <StyledLink to={slug}>
          <Title>{title}</Title>
        </StyledLink>
        <Date>{date}</Date>
      </TitleWrapper>
      <Content>{content}</Content>
    </CardWrapper>
  );
};
