import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Search from "../components/search"

import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">
        <div className="bg-gray-800">
          <div className="px-4 md:max-w-screen-sm m-auto">
            <Logo />
          </div>
        </div>
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
