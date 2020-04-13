import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import OrderingOptions from "../components/orderingOptions"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="m-6 text-4xl">#SupportLocal</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(eats => (
        <li
          className="w-full pb-2 lg:max-w-full lg:flex bg-gray-100 rounded-lg"
          key={eats.node.id}
        >
          <Link
            to={eats.node.frontmatter.path}
            style={{ textDecoration: `none` }}
          >
            <div className="p-4 lg:h-auto lg:w-48 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-gray-800">
              <img
                src={eats.node.frontmatter.image}
                alt={eats.node.frontmatter.title + " logo"}
                className="object-cover"
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-1">
                <div className="mb-0 text-gray-900 font-bold text-xl">
                  {eats.node.frontmatter.title}
                </div>
                <p className="mt-0 mb-2 text-sm text-gray-600 flex items-center">
                  {eats.node.frontmatter.eatsType}
                </p>
              </div>
              <div className="text-sm">
                <div className="inline-block">
                  <p className="text-gray-600 inline">Ordering Options: </p>
                  <OrderingOptions
                    curbside={eats.node.frontmatter.curbside}
                    delivery={eats.node.frontmatter.delivery}
                    drivethru={eats.node.frontmatter.drivethru}
                    pickup={eats.node.frontmatter.pickup}
                  />
                </div>
                <p className="text-gray-600">
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
            image
            hours
            curbside
            delivery
            drivethru
            pickup
          }
        }
      }
    }
  }
`

export default IndexPage
