import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 7
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            position
            slug
          }
        }
      }
    }
  }
`

const Listing = () => (
  <div>
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.frontmatter.slug}>
            <Link to={`/topic${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
            <Link to={`/topic${node.frontmatter.slug}`}>read</Link>
          </article>
        ))
      }
    />
  </div>
)

export default Listing
