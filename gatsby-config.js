require("dotenv").config({
  path: `.env`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Local 417 Eats`,
    description: `The one stop to find and support your favorite locally owned and operated restaurants in the 417 area. No chains. All local.`,
    author: `@local417eats`,
    image: `https://res.cloudinary.com/tpage99/image/upload/v1588521409/local417eats/local417eats-logo.png`,
    siteUrl: `https://www.local417eats.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/eats`,
        name: "eats",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appID: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    // },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Local 417 Eats`,
        short_name: `Local 417 Eats`,
        description: `The one stop shop to find all the local restaurants in the Springfield, MO area. No chains. All local.`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#2d3748`,
        theme_color: `#ffe169`,
        display: `standalone`,
        icon: `src/images/local417eats-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
