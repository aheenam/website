import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"
import Logo from "../Logo"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header>
        <Logo />
      </header>
      <main className="flex-grow">{children}</main>
      <footer>
        <Link to="/legal">Legal information</Link>
        <Link to="/privacy">Privacy</Link>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
