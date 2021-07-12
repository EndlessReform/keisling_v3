import React from "react"
import tw, { styled, css } from "twin.macro"

import Logo from "../Logo/Logo"
import { Link } from "gatsby"

const Container = styled.div([tw`container mx-auto`])
const NavbarLink = (props) => (
  <Link {...props} tw="text-gray ml-6 no-underline hover:underline" />
)

function Header () {
  return(
    <header tw="py-6 flex container mx-auto items-center">
      <Link to="/" tw="text-blue">
        <Logo />
      </Link>
      <nav tw="ml-auto">
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/garden">Digital Garden</NavbarLink>
        <NavbarLink to="/substack">Substack</NavbarLink>
        <NavbarLink to="/links">Links</NavbarLink>
      </nav>
    </header>
  )
}

export default Header