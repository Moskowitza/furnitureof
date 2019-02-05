import React, { Component } from 'react'
// import Layout from './layout.js'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import styled from 'styled-components'
// import TopicHeader from './topicHeader'
import BackgroundImage from 'gatsby-background-image'
const TopicWrapper = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 500px;
  width: 100%;
`
export default class topicLayout extends Component {
  render() {
    const { markdownRemark, heroImage } = this.props.data
    return (
      <>
        <TopicWrapper>
          <BackgroundImage
            style={{ height: '100%' }}
            fluid={heroImage.childImageSharp.fluid}
          >
            <h1
              style={{
                position: 'absolute',
                top: '50%',
                textAlign: 'center',
              }}
            >
              {markdownRemark.frontmatter.title}
            </h1>
          </BackgroundImage>
        </TopicWrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </>
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
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
