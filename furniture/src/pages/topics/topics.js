import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Image from '../../components/image'
import SEO from '../../components/seo'
const topics = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Topics</h1>
    <p>
      The Future of Medicine is a publication produced by the JI and
      attentionspan media company.
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/">home</Link>
  </Layout>
)

export default topics
