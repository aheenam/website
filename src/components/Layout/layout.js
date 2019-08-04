import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"
import Logo from "../Logo"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="p-4 md:p-8">
        <Link to="/">
          <Logo />
        </Link>
      </header>
      <main className="flex-grow p-4 md:p-8">{children}</main>
      <footer className="p-4 text-xs md:p-8">
        <Link className="inline-block mr-2 underline text-gray-600" to="/legal">
          Legal information
        </Link>
        <Link
          className="inline-block mr-2 underline text-gray-600"
          to="/privacy"
        >
          Privacy
        </Link>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
