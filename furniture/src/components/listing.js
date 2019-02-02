import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Listing = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Future of Medicine Review</h1>
    <p>
      The Future of Medicine is a publication produced by the JI and attention
      span media company.
    </p>
    <p>Now go build something great.</p>

    <Link to="/about/">About</Link>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/topics/topics">Topics</Link>
  </div>
)

export default Listing
