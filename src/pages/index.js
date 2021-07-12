import * as React from "react"
import tw, { styled, css } from "twin.macro"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div tw="container mx-auto">
      <Seo title="Home" />
      <h1 tw="text-blue text-5xl font-medium py-6">Hi! 👋 <br />I'm Jacob Keisling.</h1>
      <hr tw="border-white-dark border-solid bg-white-dark my-4" />
      <p tw="text-base text-gray">Welcome to your new Gatsby site.</p>
      <p tw="text-base text-gray">Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
