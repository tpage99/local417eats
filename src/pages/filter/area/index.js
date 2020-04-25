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
      <div className="pt-4 block">
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/area/springfield"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Springfield
          </Link>
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
            to="/filter/area/ozark"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Ozark
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
      </div>
    </div>
  </Layout>
)

export default FilterAreaPage
