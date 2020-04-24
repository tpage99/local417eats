import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterCategoryPage = () => (
  <Layout>
    <SEO title="Filter by Category" />
    <div className="h-screen">
      <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by category
      </h1>
      <div className="pt-4 flex flex-wrap">
        <Link
          to="/filter/category/american/"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          American
        </Link>
        <Link
          to="/filter/category/italian/"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Italian
        </Link>
        <Link
          to="/filter/category/chinese/"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Chinese
        </Link>
        <Link
          to="/filter/category/mexican/"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Mexican
        </Link>
      </div>
    </div>
  </Layout>
)

export default FilterCategoryPage
