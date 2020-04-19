import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterContact from "../components/footerContact"
import OrderOps from "../components/orderOps"
import FilterButton from "../components/filterButton"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
      All the Eats{" "}
      <span className="font-light text-3xl">
        ({data.allMarkdownRemark.pageInfo.itemCount})
      </span>
    </h1>
    <ul className="pt-4">
      {data.allMarkdownRemark.edges.map(eats => (
        <li
          className="w-full pb-2 lg:max-w-full lg:flex rounded-lg"
          key={eats.node.id}
        >
          <Link
            to={eats.node.frontmatter.path}
            style={{ textDecoration: `none` }}
          >
            <div className="lg:h-auto lg:w-48 flex bg-cover rounded-t-md lg:rounded-t-none lg:rounded-l overflow-hidden border border-gray-400">
              <img
                src={eats.node.frontmatter.image}
                alt={eats.node.frontmatter.eatsType + " food"}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r px-4 py-2 flex flex-col justify-between leading-normal">
              <div className="mb-1">
                <div className="mb-0 text-gray-900 font-bold text-xl leading-tight">
                  {eats.node.frontmatter.title}
                </div>
                <p className="mt-0 mb-2 text-sm text-gray-600 flex items-center">
                  {eats.node.frontmatter.eatsType}
                </p>
              </div>
              <div className="text-sm">
                <div className="inline-block pb-2">
                  <p className="text-gray-700 inline">Ordering Options: </p>
                  <OrderOps orderops={eats.node.frontmatter.orderops} />
                </div>
                <p className="text-gray-700 leading-tight">
                  Store Hours:{" "}
                  <span className="text-black">
                    {eats.node.frontmatter.hours}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    <FooterContact />
    <FilterButton />
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
            image
            hours
            orderops
          }
        }
      }
      pageInfo {
        itemCount
      }
    }
  }
`

export default IndexPage
