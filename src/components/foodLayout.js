import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"

import Header from "./header"
import Footer from "./footer"
import FooterContact from "./footerContact"
import FilterButton from "./filterButton"

const PageContainer = tw.div`
    text-xl w-11/12 mx-auto
`

const FoodLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FoodSiteTitleQuery {
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
      <FooterContact />
      <FilterButton />
      <Footer />
    </>
  )
}

FoodLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FoodLayout
