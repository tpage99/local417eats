import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const FilterPage = () => (
  <Layout>
    <SEO title="Filter the Eats" />
    <div className="h-screen">
      <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by...
      </h1>
      <div className="pt-4 block">
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/category/"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Category
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/food/"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Food
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/area/"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Area
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default FilterPage
