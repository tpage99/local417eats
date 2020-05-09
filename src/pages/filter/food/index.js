import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const FilterFoodPage = () => (
  <Layout>
    <SEO title="Filter by Food" />
    <div className="h-full mb-20">
      <h1 className="my-4 py-2 text-4xl font-bold text-center leading-tight">
        Filter results by food
      </h1>
      <ul className="mx-auto text-center md:max-w-screen-sm">
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/beer"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-64 no-underline"
          >
            Beer
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/burgers"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-64 no-underline"
          >
            Burgers
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/cashew-chicken"
            className="text-white text-2xl font-semibold py-4 px-16 md:px-48 no-underline"
          >
            Cashew Chicken
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/coffee"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Coffee
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/donuts"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Donuts
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/ice-cream"
            className="text-white text-2xl font-semibold py-4 px-24 md:px-56 no-underline"
          >
            Ice Cream
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/pasta"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Pasta
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/pizza"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Pizza
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/sushi"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Sushi
          </Link>
        </li>
        <li className="mx-1 my-4 bg-gray-700 hover:bg-gray-500 rounded-full py-4 border border-gray-400 shadow-lg">
          <Link
            to="/filter/food/tacos"
            className="text-white text-2xl font-semibold py-4 px-32 md:px-64 no-underline"
          >
            Tacos
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default FilterFoodPage
