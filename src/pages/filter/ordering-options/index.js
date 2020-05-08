import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterOrderOpsPage = () => (
  <Layout>
    <SEO title="Filter by Ordering Options" />
    <div className="h-full mb-20">
      <h1 className="my-4 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by ordering options
      </h1>
      <ul className="mx-auto text-center md:max-w-screen-sm">
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/dine-in"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Dine-in
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/catering"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Catering
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/curbside"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Curbside
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/delivery"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Delivery
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/drive-thru"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Drive-Thru
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/order-online"
            className="text-white text-2xl font-semibold py-4 px-16 md:px-56 no-underline"
          >
            Order Online
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/ordering-options/takeout"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-64 no-underline"
          >
            Takeout
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default FilterOrderOpsPage
