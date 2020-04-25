import React, { Fragment } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import OrderOps from "../components/orderOps"
import FooterContact from "../components/footerContact"
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
            <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
              {eats.frontmatter.title}
            </h1>
            <div className="text-center pb-3">
              <a
                href={"tel:" + eats.frontmatter.phone}
                className="bg-green-500 hover:bg-green-700 text-white text-base font-bold py-2 px-20 rounded-full no-underline"
              >
                Call: {formatPhoneNumber(eats.frontmatter.phone)}
              </a>
            </div>
            <div>
              <p className="mt-0 py-2 text-sm text-gray-700">
                {eats.frontmatter.address}
              </p>
            </div>
            <div className="text-sm">
              <div className="inline-block pb-2">
                <p className="text-gray-700 inline">Ordering Options: </p>
                <OrderOps orderops={eats.frontmatter.orderops} />
              </div>
              <p className="text-gray-700 leading-tight">
                Hours:{" "}
                <span className="text-black">{eats.frontmatter.hours}</span>
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: eats.html }}
              className="text-xs italic pt-1 pb-2"
            />
            <div className="py-2">
              <a
                href={eats.frontmatter.website}
                className="mr-1 bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-1 px-2 rounded-full no-underline"
              >
                Visit Website
              </a>
              <a
                href={eats.frontmatter.facebook}
                className="mr-1 bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-1 px-2 rounded-full no-underline"
              >
                Visit Facebook Page
              </a>
            </div>
            <div className="my-4 py-3 w-full h-48">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  process.env.GATSBY_GOOGLE_MAPS
                }&q=${updateSpace(eats.frontmatter.address)}`}
                width="100%"
                height="100%"
                title={eats.frontmatter.title + " on Google Maps"}
              />
            </div>
          </div>
          <FooterContact />
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
        orderops
        hours
      }
    }
  }
`
