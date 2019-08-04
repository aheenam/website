import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className="flex flex-col justify-center">
    <SEO title="Home" />
    <h1 className="font-serif font-bold text-5xl leading-none">
      We craft web and mobile apps.{" "}
      <a href="mailto:rathes@aheenam.com">Say hi!</a>
    </h1>
  </Layout>
)

export default IndexPage
