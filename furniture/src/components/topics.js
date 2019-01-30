import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Topic from './topic'
const Topics = ({ children }) => (
  <StaticQuery
    query={graphql`
      query topics {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___position] }
          filter: { fileAbsolutePath: { regex: "/topics/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                position
                slug
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '100px 100px',
          }}
        >
          {allMarkdownRemark.edges.map(edge => (
            <Topic
              slug={edge.node.frontmatter.slug}
              title={edge.node.frontmatter.title}
            />
          ))}
        </div>
      </>
    )}
  />
)

Topics.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Topics
