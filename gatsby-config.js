module.exports = {
  siteMetadata: {
    title: `Mae Capozzi's Blog`,
    author: `Mae Capozzi`,
    description: `Read Mae Capozzi writes about React, building component libraries, the JAMStack, and what it's like to be a software engineer.`,
    siteUrl: `https://maecapozzi.com`,
    canonicalUrl: `https://maecapozzi.com`,
    social: {
      twitter: `@MCapoz`,
      github: `maecapozzi`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-sitemap`,
      exclide: [
        `/dev-404-page/`,
        `/404/`,
        `/offline-plugin-app-shell-fallback/`,
      ],
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              username: "maecapozzi",

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-transformer-rehype`,
            options: {
              // 2. - Ensure these only apply to type
              filter: (node) =>
                node.internal.type === `GhostPost` ||
                node.internal.type === `GhostPage`,
              plugins: [
                {
                  // 3. - Add syntax highlight for code block.
                  resolve: `gatsby-rehype-prismjs`,
                },
                {
                  resolve: `gatsby-rehype-ghost-links`,
                },
              ],
            },
          },
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    {
      resolve: `jamify-source-ghost`,
      options: {
        ghostConfig: {
          apiUrl: `https://maecapozzi.ghost.io`,
          contentApiKey: `5f7ea6b609d395b34f0dfb92e9`,
          version: `v3`,
        },
        // Use cache (optional, default: true)
        cacheResponse: true,
        // Show info messages (optional, default: true)
        verbose: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://maecapozzi.us18.list-manage.com/subscribe/post?u=caeffe8eb28719ac766187ed1&amp;id=ac0242dc64",
      },
    },
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        // An array of node types and image fields per node
        // Image fields must contain a valid absolute path to the image to be downloaded
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostPage`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [`cover_image`],
          },
        ],
        // Additional condition to exclude nodes
        // Takes precedence over lookup
        exclude: (node) => node.ghostId === undefined,
        // Additional information messages useful for debugging
        verbose: true,
        // Option to disable the module (default: false)
        disable: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-110148418-1`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
