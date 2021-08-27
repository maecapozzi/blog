import * as React from "react";
import styled from "styled-components";
import { StyledExternalLink } from "../components/Link";
import { Text } from "../components/Text";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  justify-content: center;
`;
const SocialShareIcon = styled.li`
  display: flex;
  border-radius: 8px;
  max-width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.highlight};
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 0px;
  margin-bottom: ${(props) => props.theme.spacings["5"]};

  &:hover {
    cursor: pointer;
  }

  a {
    color: ${(props) => props.theme.colors.background};
    font-size: ${(props) => props.theme.fontSizes["5"]};
    &:hover {
      color: ${(props) => props.theme.colors.gray1};
    }
  }
`;

const StyledDiv = styled.div`
  margin-bottom: ${(props) => props.theme.spacings["4"]};
`;

const share = (e, name, size) => {
  window.open(e.currentTarget.href, name, size);
  e.preventDefault();
};

export const SocialShare = (props) => {
  const { post } = props;

  const [twitterLink, setTwitterLink] = React.useState();
  const [hackerNewsLink, setHackerNewsLink] = React.useState();
  const [redditLink, setRedditLink] = React.useState();

  React.useEffect(() => {
    if (
      post.frontmatter.tags &&
      post.frontmatter.tags[0] &&
      post.frontmatter.tags[0].name === "newsletter"
    ) {
      const title = post.frontmatter.title.replace(/[0-9-()#]/g, "");

      setTwitterLink(
        `https://twitter.com/share?text=${title} @MCapoz&url=${process.env.GATSBY_SITE_URL}/newsletter${post.frontmatter.path}/`
      );

      setHackerNewsLink(
        `https://news.ycombinator.com/submitlink?t=${title}&u=${process.env.GATSBY_SITE_URL}/newsletter${post.frontmatter.path}/`
      );

      setRedditLink(
        `http://www.reddit.com/submit?title=${title}&url=${process.env.GATSBY_SITE_URL}/newsletter${post.frontmatter.path}/`
      );
    } else {
      setTwitterLink(
        `https://twitter.com/share?text=${post.frontmatter.title} @MCapoz&url=${process.env.GATSBY_SITE_URL}${post.frontmatter.path}/`
      );

      setHackerNewsLink(
        `https://news.ycombinator.com/submitlink?t=${post.frontmatter.title}&u=${process.env.GATSBY_SITE_URL}${post.frontmatter.path}/`
      );

      setRedditLink(
        `http://www.reddit.com/submit?title=${post.frontmatter.title}&url=${process.env.GATSBY_SITE_URL}${post.frontmatter.path}/`
      );
    }
  }, [post]);

  return (
    <div>
      {/* <hr />
      <StyledDiv>
        <Text>If you liked this post, please consider sharing it!</Text>
      </StyledDiv>
      <StyledUl>
        <SocialShareIcon>
          <StyledExternalLink
            href={twitterLink}
            onClick={(e) => share(e, "twitter-share", "width=550,height=235")}
          >
            Share on Twitter
          </StyledExternalLink>
        </SocialShareIcon>
        <SocialShareIcon>
          <StyledExternalLink
            href={hackerNewsLink}
            onClick={(e) => share(e, "hn-share", "width=550,height=350")}
          >
            Share on Hacker News
          </StyledExternalLink>
        </SocialShareIcon>
        <SocialShareIcon>
          <StyledExternalLink
            href={redditLink}
            onClick={(e) => share(e, "reddit-share", "width=950,height=660")}
          >
            Share on Reddit
          </StyledExternalLink>
        </SocialShareIcon>
      </StyledUl> */}
    </div>
  );
};
