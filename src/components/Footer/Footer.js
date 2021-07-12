import React from "react"
import { Link } from "gatsby"
import tw, { styled, css } from "twin.macro"

import Logo from "../Logo/Logo"
import { MarkGithubIcon } from "@primer/octicons-react"

const Footer = () => (
  <footer tw="container mx-auto my-6">
    <hr tw="border-gray border-solid border mb-4" />
    <div tw="flex items-center text-gray">
      <Link to="/" tw="flex items-center text-gray mr-4"><Logo size="1.5rem" /></Link>
      © Jacob Keisling {new Date().getFullYear()}
      <nav tw="ml-auto flex items-center">
        <a href="https://www.github.com/endlessreform" tw="text-gray"><MarkGithubIcon /></a>
      </nav>
    </div>
  </footer>
)

export default Footer
