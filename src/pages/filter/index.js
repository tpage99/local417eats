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
    <ul className="pt-4">
      <li className="mb-4 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
        <Link
          to="/filter/category/"
          className="px-6 py-4 font-bold text-xl mb-2"
        >
          Category
        </Link>
      </li>
      <li className="mb-4 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
        <Link to="/filter/food/" className="px-6 py-4 font-bold text-xl mb-2">
          Food
        </Link>
      </li>
      <li className="mb-4max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
        <Link to="/filter/area/" className="px-6 py-4 font-bold text-xl mb-2">
          Area
        </Link>
      </li>
    </ul>
  </Layout>
)

export default FilterPage
