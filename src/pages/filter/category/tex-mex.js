import React from "react"
import { Link } from "gatsby"

import FoodLayout from "../../../components/foodLayout"
import SEO from "../../../components/seo"
import OrderOps from "../../../components/orderOps"

const FilterTexMexPage = ({ data }) => (
  <FoodLayout>
    <SEO title="Filter by Tex-Mex Eats" />
    <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
      Filtered results for "Tex-Mex"{" "}
      <span className="font-light text-3xl">
        ({data.allMarkdownRemark.pageInfo.itemCount})
      </span>
    </h1>
    <ul className="pt-4 md:flex md:flex-wrap md:justify-center">
      {data.allMarkdownRemark.edges.map(eats => (
        <li
          className="mr-4 mb-4 md:w-1/3 xl:w-1/4 rounded-lg"
          key={eats.node.id}
        >
          <Link
            to={eats.node.frontmatter.path}
            style={{ textDecoration: `none` }}
          >
            <div className="md:h-auto md:w-full flex bg-cover rounded-t-md overflow-hidden border border-gray-400">
              <img
                src={eats.node.frontmatter.image}
                alt={eats.node.frontmatter.eatsType + " food"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 bg-white rounded-b px-4 py-2 flex flex-col justify-between leading-normal">
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
                  Hours:{" "}
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
  </FoodLayout>
)

export const pageQuery = graphql`
  query FilterTexMexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { tags: { eq: "tex-mex" } } }
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

export default FilterTexMexPage
