import React, { Component } from 'react'
import Layout from './layout.js'
import { graphql } from 'gatsby'

export default class topicLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <div>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}
// Use a PAGE query, staticQuery can't use context

export const query = graphql`
  query TOPIC_QUERY($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        position
      }
      html
    }
  }
`
