import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Date } from "../components/Date";

export const CardWrapper = styled(`div`)`
  margin: ${(props) => props.theme.spacings["6"]} 0;
  border-radius: 5px;
  box-shadow: 0 10px 15px 3px rgba(0, 0, 0, 0.1),
    0 4px 6px 1px rgba(0, 0, 0, 0.05);
  background: ${(props) => props.theme.colors.background};
`;

const StyledImage = styled(Img)`
  border-radius: 5px 5px 0px 0px;
  margin-top: ${(props) => props.theme.spacings["6"]};
`;

const TitleWrapper = styled.div`
  padding: ${(props) => props.theme.spacings["5"]}
    ${(props) => props.theme.spacings["5"]} 0
    ${(props) => props.theme.spacings["5"]};
`;

const Title = styled(`h2`)`
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes["8"]};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

const Content = styled(`p`)`
  padding: 0 ${(props) => props.theme.spacings["5"]}
    ${(props) => props.theme.spacings["5"]}
    ${(props) => props.theme.spacings["5"]};
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.primary};
`;

const StyledLink = styled(Link)`
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
    </CardWrapper>
  );
};
