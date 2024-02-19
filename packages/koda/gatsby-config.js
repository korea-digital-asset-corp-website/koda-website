// eslint-disable-next-line @typescript-eslint/no-var-requires
const siteMetadata = require("./metadata");

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "ko",
        useLangKeyLayout: false,
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        icon: siteMetadata.logo,
        display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          staging: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
        resolveEnv: () => process.env.GATSBY_ENV,
      },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-remove-serviceworker`,
  ],
};
