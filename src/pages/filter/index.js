import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const FilterPage = () => (
  <Layout>
    <SEO title="Filter the Eats" />
    <div className="mb-40 md:mb-64">
      <h1 className="my-4 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by...
      </h1>
      <ul className="mx-auto text-center md:max-w-screen-sm">
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Area
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/category/"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Category
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Food
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/"
            className="text-white text-2xl font-semibold py-4 px-16 md:px-48 no-underline"
          >
            Ordering Options
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default FilterPage
