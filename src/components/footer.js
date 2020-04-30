import React from "react"
import { Link } from "gatsby"

const footer = () => (
  <footer className="overflow-hidden shadow-lg bg-white">
    <hr />
    <div className="text-center px-2 py-2">
      <Link
        to="/"
        className="mx-1 px-2 py-1 text-white text-center font-bold rounded bg-gray-700 rounded-full no-underline"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="mx-1 px-2 py-1 text-white text-center font-bold rounded bg-gray-700 rounded-full no-underline"
      >
        About
      </Link>
      <Link
        to="/developer"
        className="mx-1 px-2 py-1 text-white text-center font-bold rounded bg-gray-700 rounded-full no-underline"
      >
        Developer
      </Link>
    </div>
    <div className="px-2 py-3 text-center">
      <p className="text-gray-900 text-base">
        Local 417 Eats is a project of{" "}
        <a href="https://www.thepagesmedia.com">The Pages Media</a>.
      </p>
    </div>
  </footer>
)

export default footer
