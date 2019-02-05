import React, { Component } from 'react'
// import Layout from './layout.js'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class topicLayout extends Component {
  render() {
    const { markdownRemark, heroImage } = this.props.data
    return (
      <div>
        <Img fluid={heroImage.childImageSharp.fluid} />
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </div>
    )
  }
}
// Use a PAGE query, staticQuery can't use context

export const query = graphql`
  query TOPIC_QUERY($slug: String!, $heroImage: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        position
      }
      html
    }
    heroImage: file(relativePath: { eq: $heroImage }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
