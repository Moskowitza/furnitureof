import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const about = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Future of Medicine Review</h1>
    <p>
      I have worked in healthcare technology and innovation in many roles. My
      formal education is as a scientist and an engineer. I have produced review
      publications, founded startups, funded start-ups, participated on FDA
      panels as an advocate for patient safety. I founded and left a venture
      capital firm. I was the director of a non-profit. I program and produce
      websites. I am an educator.
    </p>
    <p>
      A contact at the JI brought this report to my attention. After a quick
      review I dismissed it entirely as a waste of everyone's time. Upon finding
      time on my hands, I decided to give back. If you have time, I encourage you to visit their website and then proceed here.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/">home</Link>
  </Layout>
)

export default about
