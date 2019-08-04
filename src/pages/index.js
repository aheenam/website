import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className="flex flex-col justify-center">
    <SEO title="Home" />
    <h1>We craft web and mobile apps. Say hi!</h1>
  </Layout>
)

export default IndexPage
