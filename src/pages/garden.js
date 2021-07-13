import React from "react"
import tw, { styled, css } from "twin.macro"
import { graphql, Link } from "gatsby"
import { ArrowRightIcon, ClockIcon, CalendarIcon } from "@primer/octicons-react"

import Layout from "../components/Layout/layout"

const Card = ({ article }) => (
  <div tw="border-green border-2 border-solid rounded-lg p-6 w-64">
    <Link to={`/garden/${article.slug}`} tw="no-underline">
      <h2 tw="font-medium text-green py-4">
        { article.frontmatter.title ? article.frontmatter.title : "Untitled" }
      </h2>
    </Link>
    <hr tw="border-gray border-solid border mb-3" />
    <p tw="text-black mb-2">{article.excerpt}</p>
    <div tw="text-blue flex items-center mb-3">
      <ArrowRightIcon size={16} tw="mr-1" />
      <Link to={`/garden/${article.slug}`} tw="no-underline hover:underline text-blue">Read</Link>
    </div>
    <hr tw="border-white-dark border-solid border mb-3" />
    <div tw="flex items-center">
      <div tw="text-gray flex items-center mr-4">
        <CalendarIcon size={16} tw="mr-2" />
        <p tw="font-mono">{ article.frontmatter.created ? article.frontmatter.created : "?" }</p>
      </div>
      <div tw="text-gray flex items-center mr-4">
        <ClockIcon size={16} tw="mr-2" />
        <p tw="font-mono">{ article.wordCount.words } wds</p>
      </div>
    </div>
  </div>
)

export default function Garden ({ data }) {
  return(
    <Layout>
      <div tw="container mx-auto">
        <h1 tw="font-medium text-green text-5xl py-6">🌿 Digital Garden</h1>
        <p tw="text-gray">This is a digital garden</p>
        <h1 tw="font-medium text-green pt-12 pb-4">New Entries</h1>
        <hr tw="border-white-dark border-solid border mb-4" />
        <div tw="flex flex-wrap gap-x-12 gap-y-8 mb-16">
          { data.allMdx.nodes.map(node => (
              <Card key={node.slug} article={node} />
            )) 
          }
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GardenPosts {
    allMdx(limit: 3, sort: {fields: frontmatter___created, order: DESC}) {
      nodes {
        frontmatter {
          title
          created
        }
        slug
        excerpt
        wordCount {
          words
        }
      }
    }
  }
`