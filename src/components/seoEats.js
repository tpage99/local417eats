import React from "react"
import { Helmet } from "react-helmet"

const SEOEats = ({ title, description }) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/tpage99/image/upload/v1588521409/local417eats/local417eats-logo.png"
      />
      <meta property="og:url" content="https://www.local417eats.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/tpage99/image/upload/v1588521409/local417eats/local417eats-logo.png"
      />
      <meta
        name="twitter:image:alt"
        content="local 417 eats logo with text and a project of pages media underneath"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@local417eats" />
      <meta property="og:site_name" content="Local 417 Eats" />
    </Helmet>
  )
}

export default SEOEats
