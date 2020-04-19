import React from "react"
import { Link } from "gatsby"

const filterButton = () => (
  <div className="sticky bottom-0 right-0 pb-4">
    <Link
      to="/filter/"
      className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      Filter
    </Link>
  </div>
)

export default filterButton
