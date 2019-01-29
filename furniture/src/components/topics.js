import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Topic from './topic'
const Topics = ({ children }) => (
  <StaticQuery
    query={graphql`
      query markDowns {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
                date
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
            <Topic title={edge.node.frontmatter.slug} />
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
