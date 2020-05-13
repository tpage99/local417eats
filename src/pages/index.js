import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className="mx-auto md:max-w-screen-lg">
      <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
        No Chains. No Franchises. All Local.
      </h1>
      <p className="py-2">
        Local 417 Eats is the easiest way to find restaurants in the Southwest
        Missouri area that are the definition of <em>local</em>.
      </p>
      <div
        className="mx-auto md:h-auto md:w-full bg-cover rounded overflow-hidden border border-gray-400"
        style={{ maxWidth: `600px` }}
      >
        <Image />
      </div>
      <p className="py-2">
        All restaurants promoted on this site are locally owned and operated
        without any help from major corporations or chains.
      </p>
      <p className="py-2">These are our friends and neighbors.</p>
      <h2 className="py-2 text-3xl font-bold text-center leading-tight underline">
        [ Support Local ]
      </h2>
      <div className="mx-auto my-8 text-center">
        <Link
          to="/all/"
          className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-2 px-6 border border-gray-400 rounded-full shadow no-underline  align-middle"
        >
          Show all <span>{data.allMarkdownRemark.pageInfo.itemCount}</span> Eats
        </Link>
      </div>
      <div className="mx-auto my-8 text-center">
        <Link
          to="/filter/"
          className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-2 px-6 border border-gray-400 rounded-full shadow no-underline"
        >
          Filter Results
        </Link>
      </div>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { category: { eq: "eats" } } }
    ) {
      pageInfo {
        itemCount
      }
    }
  }
`
export default IndexPage
