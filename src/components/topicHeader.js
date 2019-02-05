import React from 'react'
import Img from 'gatsby-image'
const TopicHeader = props => (
  <header style={{ height: '100px' }}>
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={props.sizes}
    />
  </header>
)
export default TopicHeader
