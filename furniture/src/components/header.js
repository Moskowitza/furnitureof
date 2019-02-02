import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import hexLogo from '../../public/icons/hex.png'
import { Icon, Toggle } from '../utilities'
import Topics from './topics'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  background: grey;
  margin-bottom: 1.45rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderLogo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 0px;
  margin: 50px;
`
const HeaderTitle = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const HeaderTitleMargin = styled.h1`
  margin: 0;
`
const HeaderLink = styled(Link)`
  color: lightgrey;
  text-decoration: none;
`
const PositionedMenuIcon = styled.div`
  position: relative;
  margin: 0;
  z-index: 1000;
`
const PositionedMenuOpen = styled.div`
  position: absolute;
  top: 100;
  left: 100;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 1000;
`

const Header = ({ siteTitle, image }) => (
  <HeaderWrapper>
    <HeaderLogo src={hexLogo} alt="Hexagon" />
    <HeaderTitle>
      <HeaderTitleMargin>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderTitleMargin>
    </HeaderTitle>
    <PositionedMenuIcon>
      <Toggle>
        {({ on, toggle }) => (
          <PositionedMenuIcon onClick={toggle}>
            <Icon color="red" name="menu" />
            <PositionedMenuOpen>{on && <Topics />}</PositionedMenuOpen>
          </PositionedMenuIcon>
        )}
      </Toggle>
    </PositionedMenuIcon>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
