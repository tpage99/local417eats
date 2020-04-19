// removed this from config import for the moment due to not working and trying to hard-code variables

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/pages/" },
      frontmatter: {purpose: {eq: "page"}}
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          path
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const eatsQuery = `{
  eats: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/eats/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          path
          eatsType
          tags
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: eatsQuery,
    transformer: ({ data }) => flatten(data.eats.edges),
    indexName: `Eats`,
    settings,
  },
]

module.exports = queries
