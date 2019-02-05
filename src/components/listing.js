import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// import Image from '../components/image'
// import SEO from '../components/seo'

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 7
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/topics/" } }
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
const Topic = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: 0.83;
  }
  h2 {
    margin-bottom: 0;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: underline;
    font-size: 0.8rem;
    color: purple;
  }
`

const Listing = () => (
  <div>
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <Topic key={node.frontmatter.slug}>
            <Link to={`/topic/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
            <Link class="read-more" to={`/topic/${node.frontmatter.slug}`}>
              Read More
            </Link>
          </Topic>
        ))
      }
    />
  </div>
)

export default Listing
