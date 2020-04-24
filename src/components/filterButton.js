import React from "react"
import { Link } from "gatsby"

const filterButton = () => (
  <Link
    to="/filter/"
    className="bg-gray-800 hover:bg-gray-600 text-white text-2xl font-semibold py-2 px-6 border border-gray-400 rounded-full shadow"
    style={{ position: `fixed`, bottom: `1rem`, right: `1rem` }}
  >
    Filter
  </Link>
)

export default filterButton
