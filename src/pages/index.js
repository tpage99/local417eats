import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="m-6 text-4xl">#SupportLocal</h1>
    <ul style={{ listStyle: `none`, borderBottom: `1px solid #e2e2e6` }}>
      {data.allMarkdownRemark.edges.map(eats => (
        <li
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={eats.node.id}
        >
          <Link
            to={eats.node.frontmatter.path}
            style={{ textDecoration: `none` }}
          >
            <button className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">
                {eats.node.frontmatter.title}
              </h3>
            </button>
            <p className="px-6 py-4">{eats.node.frontmatter.eatsType}</p>
          </Link>
        </li>
      ))}
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query EatsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "eats" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            eatsType
          }
        }
      }
    }
  }
`

export default IndexPage
