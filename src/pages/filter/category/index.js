import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterCategoryPage = () => (
  <Layout>
    <SEO title="Filter by Category" />
    <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
      Filter results by category
    </h1>
    <ul className="pt-4">
      <li className="mb-4max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
        <Link
          to="/filter/category/american/"
          className="px-6 py-4 font-bold text-xl mb-2"
        >
          American
        </Link>
      </li>
      <li className="mb-4max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
        <Link to="/" className="px-6 py-4 font-bold text-xl mb-2">
          Italian
        </Link>
      </li>
      <li className="mb-4max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
        <Link to="/" className="px-6 py-4 font-bold text-xl mb-2">
          Chinese
        </Link>
      </li>
      <li className="mb-4max-w-sm rounded overflow-hidden shadow-lg border border-gray-400">
        <Link to="/" className="px-6 py-4 font-bold text-xl mb-2">
          Mexican
        </Link>
      </li>
    </ul>
  </Layout>
)

export default FilterCategoryPage
