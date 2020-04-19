import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Search from "../components/search"

import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          <div className="bg-gray-800">
            <div className="px-4">
              <Logo />
            </div>
          </div>
        </Link>
      </h1>
    </div>
    {/* <Search collapse indices={searchIndices} /> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
