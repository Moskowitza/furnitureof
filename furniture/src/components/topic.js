import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
const Topic = ({ title, slug }) => (
  <div
    style={{
      background: `pink`,
      border: 'solid black 1px',
      borderRadius: '2',
      margin: 1,
      minHeight: '125',
      minWidth: '125',
    }}
  >
    <Link to={`/topic${slug}`}> {title}</Link>
  </div>
)

Topic.propTypes = {
  title: PropTypes.string,
}

export default Topic
