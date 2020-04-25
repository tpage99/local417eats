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
      <div className="pt-4 block">
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/food/burgers"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Burgers
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/food/pizza"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Pizza
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/food/sushi"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Sushi
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/food/tacos"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Tacos
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/food/cashew-chicken"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Cashew Chicken
          </Link>
        </div>
        <div className="mx-1 mb-10 inline-block">
          <Link
            to="/filter/food/pasta"
            className="bg-gray-700 hover:bg-gray-500 text-white text-2xl font-semibold py-4 px-6 border border-gray-400 rounded-full shadow-lg no-underline"
          >
            Pasta
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default FilterFoodPage
