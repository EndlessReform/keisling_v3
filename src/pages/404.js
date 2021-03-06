import * as React from "react"
import tw, { styled, css } from "twin.macro"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div tw="container mx-auto">
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
