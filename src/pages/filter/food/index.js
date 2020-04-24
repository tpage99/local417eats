import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterFoodPage = () => (
  <Layout>
    <SEO title="Filter by Food" />
    <div className="h-screen">
      <h1 className="mb-0 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by food
      </h1>
      <div className="pt-4 flex flex-wrap text-center">
        <Link
          to="/filter/food/burgers"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Burgers
        </Link>
        <Link
          to="/filter/food/pizza"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Pizza
        </Link>
        <Link
          to="/filter/food/sushi"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Sushi
        </Link>
        <Link
          to="/filter/food/tacos"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Tacos
        </Link>
        <Link
          to="/filter/food/cashew-chicken"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Cashew Chicken
        </Link>
        <Link
          to="/filter/food/pasta"
          className="m-2 max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 px-6 py-4 font-bold text-xl"
        >
          Pasta
        </Link>
      </div>
    </div>
  </Layout>
)

export default FilterFoodPage
