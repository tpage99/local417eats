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
      <div className="pt-4 block">
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/category/american"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            American
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/category/italian"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Italian
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/category/chinese"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Chinese
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/category/mexican"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Mexican
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default FilterCategoryPage
