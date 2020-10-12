const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allGhostPost(sort: { order: DESC, fields: published_at }) {
        edges {
          node {
            id
            slug
            title
            childHtmlRehype {
              html
            }
            published_at_pretty: published_at(formatString: "MMMM DD, YYYY")
            feature_image
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  if (!result.data.allGhostPost) {
    return;
  }

  const posts = result.data.allGhostPost.edges;
  const postTemplate = path.resolve(`./src/templates/blog-post.js`);

  // Create post pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
};
