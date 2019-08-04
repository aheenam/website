import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import cx from "classnames"

import "./layout.css"
import Logo from "../Logo"

const Layout = ({ children, className }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen font-sans">
      <header className="p-8 lg:pl-32 lg:pt-16">
        <Link to="/">
          <Logo />
        </Link>
      </header>
      <main className={cx("flex-grow px-8 lg:pl-32", className)}>
        {children}
      </main>
      <footer className="p-8 text-xs lg:pl-32 lg:pb-16">
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
