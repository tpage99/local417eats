import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterAreaPage = () => (
  <Layout>
    <SEO title="Filter by Area" />
    <div className="h-full mb-20">
      <h1 className="my-4 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by area
      </h1>
      <ul className="mx-auto text-center md:max-w-screen-sm">
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/ash-grove"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Ash Grove
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/bolivar"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Bolivar
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/fair-grove"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Fair Grove
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/marshfield"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Marshfield
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/nixa"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Nixa
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/ozark"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Ozark
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/republic"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Republic
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/springfield"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Springfield
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/strafford"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Strafford
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/willard"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-64 no-underline"
          >
            Willard
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default FilterAreaPage
