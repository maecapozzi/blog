const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const generateSocialImage = ({
  title,
  cloudName,
  imagePublicID,
  cloudinaryUrlBase = "https://res.cloudinary.com",
  version = null,
  titleFont = "roboto",
  titleExtraConfig = "",
  imageWidth = 1280,
  imageHeight = 669,
  textAreaWidth = 760,
  textLeftOffset = 480,
  titleBottomOffset = 315,
  textColor = "000000",
  titleFontSize = 64,
}) => {
  // configure social media image dimensions, quality, and format
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    "c_fill",
    "q_auto",
    "f_auto",
  ].join(",");

  // configure the title text
  const titleConfig = [
    `w_${textAreaWidth}`,
    "c_fit",
    `co_rgb:${textColor}`,
    "g_south_west",
    `x_${textLeftOffset}`,
    `y_${titleBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}_bold${titleExtraConfig}:${encodeURIComponent(
      title
    )}`,
  ].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    cloudinaryUrlBase,
    cloudName,
    "image",
    "upload",
    imageConfig,
    titleConfig,
    version,
    imagePublicID,
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);
  // join all the parts into a valid URL to the generated image

  return validParts.join("/");
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              html
              fields {
                slug
              }
              frontmatter {
                title
                img
                excerpt
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const socialImage = generateSocialImage({
        title: post.node.frontmatter.title,
        cloudName: "maecapozzi",
        imagePublicID: "@maecapozzi/sharing-card",
      });

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          img: post.node.frontmatter.img,
          tags: post.node.frontmatter.tags,
          previous,
          next,
          socialImage,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
