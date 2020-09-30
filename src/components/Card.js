import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Date } from "../components/Date";

export const CardWrapper = styled(`div`)`
  margin: ${(props) =>
    `${props.theme.spacings["4"]} 0 ${props.theme.spacings["2"]} 0`};
  background: ${(props) => props.theme.colors.background};
`;

const StyledImage = styled(Img)`
  border-radius: 5px 5px 0px 0px;
  height: 500px;
  margin-top: ${(props) => props.theme.spacings["6"]};
  margin-bottom: ${(props) => props.theme.spacings["6"]};
`;

const TitleWrapper = styled.div`
  padding: ${(props) => `${props.theme.spacings["6"]} 0 0 0`};
`;

export const Title = styled(`h2`)`
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes["7"]};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

const Content = styled(`p`)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["3"]};
  margin-top: ${(props) => props.theme.spacings["4"]};
  margin-bottom: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ReadMoreLink = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["3"]};
  color: ${(props) => props.theme.colors.highlight};
  text-decoration: none;
`;

export const Card = ({ img, title, content, slug, date }) => {
  return (
    <CardWrapper>
      {img && (
        <Link to={slug}>
          <StyledImage fluid={img} fadeIn={false} />
        </Link>
      )}
      <TitleWrapper>
        <StyledLink to={slug}>
          <Title>{title}</Title>
        </StyledLink>
        <Date>{date}</Date>
      </TitleWrapper>
      <Content>{content}</Content>
      <ReadMoreLink to={slug}>Read more</ReadMoreLink>
    </CardWrapper>
  );
};
