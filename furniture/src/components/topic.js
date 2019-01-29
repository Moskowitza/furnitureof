import PropTypes from 'prop-types'
import React from 'react'

const Topic = ({ title }) => (
  <div
    style={{
      background: `pink`,
      border: 'solid black 1px',
      minHeight: '125',
      minWidth: '125',
    }}
  >
    {title}
  </div>
)

Topic.propTypes = {
  title: PropTypes.string,
}

export default Topic
