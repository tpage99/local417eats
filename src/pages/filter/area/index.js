import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterAreaPage = () => (
  <Layout>
    <SEO title="Filter by Area" />
    <div className="h-screen">
      <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by area
      </h1>
      <ul className="mx-auto text-center">
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/bolivar"
            className="text-white text-2xl font-semibold py-4 px-32 no-underline"
          >
            Bolivar
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/nixa"
            className="text-white text-2xl font-semibold py-4 px-32 no-underline"
          >
            Nixa
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/ozark"
            className="text-white text-2xl font-semibold py-4 px-32 no-underline"
          >
            Ozark
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/republic"
            className="text-white text-2xl font-semibold py-4 px-24 no-underline"
          >
            Republic
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/area/springfield"
            className="text-white text-2xl font-semibold py-4 px-24 no-underline"
          >
            Springfield
          </Link>
        </li>
      </ul>
      {/* <div className="pt-4 block">
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/area/bolivar"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Bolivar
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/area/nixa"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Nixa
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/area/ozark"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Ozark
          </Link>
        </div>
      </div>
      <div className="mx-1 mb-10 inline-block">
        <Link
          to="/filter/area/republic"
          className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
        >
          Republic
        </Link>
      </div>
      <div className="mx-1 mb-10 inline-block">
        <Link
          to="/filter/area/springfield"
          className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
        >
          Springfield
        </Link>
      </div> */}
    </div>
  </Layout>
)

export default FilterAreaPage
