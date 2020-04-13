import React, { Fragment } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import OrderingOptions from "../components/orderingOptions"
import { formatPhoneNumber, updateSpace } from "../helpers"

export default function Template({ data }) {
  const { markdownRemark: eats } = data
  // above is same as using const eats = data.markdownRemark;
  return (
    <Fragment>
      <SEO title={eats.frontmatter.title} />
      <main>
        <Layout>
          <div className="px-2">
            <h1 className="mb-0 pb-0 text-4xl font-bold text-center">
              {eats.frontmatter.title}
            </h1>
            <div className="text-center pb-3">
              <button className="bg-green-500 hover:bg-green-700 text-white text-base font-bold py-1 px-20 rounded-full">
                <a href={"tel:" + eats.frontmatter.phone}>
                  Call: {formatPhoneNumber(eats.frontmatter.phone)}
                </a>
              </button>
            </div>
            <div>
              <p className="mt-0 pt-0 text-sm text-gray-600">
                {eats.frontmatter.address}
              </p>
            </div>
            <div className="inline-block text-sm">
              <p className="text-gray-600 inline">Ordering Options: </p>
              <OrderingOptions
                curbside={eats.frontmatter.curbside}
                delivery={eats.frontmatter.delivery}
                drivethru={eats.frontmatter.drivethru}
                pickup={eats.frontmatter.pickup}
              />
            </div>
            <div className="py-2">
              <button className="mr-1 bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-1 px-2 rounded-full">
                <a href={eats.frontmatter.website}>Visit Website</a>
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-1 px-2 rounded-full">
                <a href={eats.frontmatter.facebook}>Visit Facebook Page</a>
              </button>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: eats.html }}
              className="text-xs"
            />
            <div className="my-4 p-3 w-full h-48">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  process.env.GATSBY_GOOGLE_MAPS
                }&q=${updateSpace(eats.frontmatter.address)}`}
                width="100%"
                height="100%"
              />
            </div>
          </div>
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
        website
        facebook
        phone
        address
        curbside
        delivery
        drivethru
        pickup
      }
    }
  }
`
