import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Date } from "../components/Date";

export const CardWrapper = styled(`div`)`
  margin: ${(props) =>
    `${props.theme.spacings["4"]} 0 ${props.theme.spacings["6"]} 0`};
  background: ${(props) => props.theme.colors.background};
  padding-bottom: ${(props) => props.theme.spacings["6"]};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray2};
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

export const Title = styled(`h1`)`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes["7"]};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

const Content = styled(`p`)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  margin-top: ${(props) => props.theme.spacings["4"]};
  margin-bottom: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ReadMoreLink = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  color: ${(props) => props.theme.colors.highlight};
  text-decoration: none;
`;

export const Badge = styled("span")`
  background: ${(props) => props.theme.colors.highlight};
  margin-right: ${(props) => props.theme.spacings["3"]};
  padding: ${(props) => props.theme.spacings["1"]}
    ${(props) => props.theme.spacings["3"]};
  border-radius: ${(props) => props.theme.spacings["1"]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes["3"]};
  color: ${(props) => props.theme.colors.secondary};
`;

export const Card = ({ img, title, content, slug, date, tags, emoji }) => {
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
      {tags && tags.map((tag) => <Badge>{tag.name}</Badge>)}
      <Content>{content}</Content>
    </CardWrapper>
  );
};
