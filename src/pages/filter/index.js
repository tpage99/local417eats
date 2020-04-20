import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const FilterPage = () => (
  <Layout>
    <SEO title="Filter the Eats" />
    <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
      Filter results by...
    </h1>
    <div className="pt-4 flex flex-wrap text-center">
      <Link
        to="/filter/category/"
        className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
      >
        Category
      </Link>
      <Link
        to="/filter/food/"
        className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
      >
        Food
      </Link>
      <Link
        to="/filter/area/"
        className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
      >
        Area
      </Link>
    </div>
  </Layout>
)

export default FilterPage
