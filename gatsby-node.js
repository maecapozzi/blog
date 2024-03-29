const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const newsletterIssue = path.resolve(`./src/templates/newsletterIssue.js`);
  const openJobs = path.resolve(`./src/pages/open-jobs.js`);
  const christmas2021 = path.resolve(`./src/pages/christmas2021.js`);

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
      if (post.node.fields.slug === "/open-jobs") {
        createPage({
          path: post.node.fields.slug,
          component: openJobs,
          context: {
            slug: post.node.fields.slug,
            tags: post.node.frontmatter.tags,
          },
        });
      } else if (post.node.fields.slug.includes(`newsletter/`)) {
        createPage({
          path: post.node.fields.slug,
          component: newsletterIssue,
          context: {
            slug: post.node.fields.slug,
            tags: post.node.frontmatter.tags,
            img: post.node.frontmatter.img,
            previous,
            next,
          },
        });
      } else if (post.node.fields.slug.includes(`christmas-2021/`)) {
        createPage({
          path: post.node.fields.slug,
          component: christmas2021,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        });
      } else {
        createPage({
          path: post.node.fields.slug,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            tags: post.node.frontmatter.tags,
            img: post.node.frontmatter.img,
            previous,
            next,
          },
        });
      }
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
