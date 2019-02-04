import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import TopicCard from './topicCard'
const TopicsPopUp = ({ children }) => (
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
            <TopicCard
              slug={edge.node.frontmatter.slug}
              title={edge.node.frontmatter.title}
            />
          ))}
        </div>
      </>
    )}
  />
)

TopicsPopUp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TopicsPopUp
