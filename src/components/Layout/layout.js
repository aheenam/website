import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Logo from "../Logo"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
