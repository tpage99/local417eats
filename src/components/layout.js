import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"

import Header from "./header"
import Footer from "./footer"

const PageContainer = tw.div`
    text-xl w-11/12 mx-auto h-full
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
