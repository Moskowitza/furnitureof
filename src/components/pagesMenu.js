import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// import Image from '../components/image'
// import SEO from '../components/seo'

const POST_QUERY = graphql`
  query ArticleListing {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___position] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
const Nav = styled.ul`
  display: flex;
  background-color: grey;
`
const NavItem = styled.li`
  text-decoration: none;
  display: block;
`

const PagesMenu = () => (
  <Nav>
    <StaticQuery
      query={POST_QUERY}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => (
          <NavItem key={node.frontmatter.slug}>
            <Link to={`/topic/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
          </NavItem>
        ))
      }
    />
  </Nav>
)

export default PagesMenu
