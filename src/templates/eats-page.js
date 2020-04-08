import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark: eats } = data
  // above is same as using const resource = data.markdownRemark;
  return (
    <Fragment>
      <SEO title={eats.frontmatter.title} />
      <main>
        <Layout>
          <h1>{eats.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: eats.html }} />
        </Layout>
      </main>
    </Fragment>
  )
}

export const eatsQuery = graphql`
  query EatsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        eatsType
      }
    }
  }
`
