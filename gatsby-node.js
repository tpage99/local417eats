const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const eatsTemplate = path.resolve(`src/templates/eats-page.js`)

  return graphql(`
    query loadPagesQuery {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "eats" } } }) {
        edges {
          node {
            html
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: eatsTemplate,
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: "empty",
  }
}
