import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Support Local!</h1>
    <p>
      The heart and intent of this site is to continue supporting our local
      restaurants and businesses throughout the COVID-19 crisis. Socializing and
      spending time breaking bread together, in person, has temporarily become
      unsafe. This won't be forever, so we have to continue supporting our local
      restaurants and business owners through this time.
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
