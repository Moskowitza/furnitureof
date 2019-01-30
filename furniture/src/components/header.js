import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import gatsbyLogo from '../../public/icons/icon-48x48.png'
import Toggle from './ToggleRPC'
import Topics from './topics'
const Header = ({ siteTitle, image }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <img src={gatsbyLogo} alt="gatsby logo" />
        </Link>
      </h1>
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>X</button>
            {on && <Topics />}
          </div>
        )}
      </Toggle>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
