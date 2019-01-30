import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import gatsbyLogo from '../../public/icons/icon-48x48.png'
import { Icon, Toggle } from '../utilities'
import Topics from './topics'

const Header = ({ siteTitle, image }) => (
  <div
    style={{
      boxSizing: 'border-box',
      background: `grey`,
      marginBottom: `1.45rem`,
      position: 'relative',
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
          <>
            <div
              style={{
                position: 'absolute',
                top: 100,
                right: 100,
                margin: 0,
                zIndex: 1000,
              }}
              onClick={toggle}
            >
              <Icon color="red" name="menu" />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 110,
                right: 110,
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
                zIndex: 1000,
              }}
            >
              {on && <Topics />}
            </div>
          </>
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
