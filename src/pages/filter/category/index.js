import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterCategoryPage = () => (
  <Layout>
    <SEO title="Filter by Category" />
    <div className="h-full mb-20">
      <h1 className="my-4 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by category
      </h1>
      <ul className="mx-auto text-center md:max-w-screen-sm">
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/american"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            American
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/bbq"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            BBQ
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/breakfast"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Breakfast
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/chinese"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-64 no-underline"
          >
            Chinese
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/italian"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Italian
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/mexican"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Mexican
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/thai"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Thai
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default FilterCategoryPage
