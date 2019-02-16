import React from 'react'
import Layout from '../components/layout'
import Bio from '../components/bio'
import SEO from '../components/seo'

const AboutPage = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title='All posts'
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      <div>
        <section />
        <section>
          <h2>Software Engineer</h2>
        </section>
        <div>
          <div>
            <section>
              <p>
                Previously: 501 Auctions, Thrive Global, InRhythm. Currently:
                Harry's
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
