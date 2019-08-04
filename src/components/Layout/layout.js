import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"
import Logo from "../Logo"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>{children}</main>
      <footer>
        <Link to="/legal">Legal information</Link>
        <Link to="/privacy">Privacy</Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
