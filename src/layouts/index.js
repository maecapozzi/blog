import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#272B2E',
      marginBottom: '1.45rem',
      borderBottom: '5px solid pink',
      zIndex: '1'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: '#FFBAC8',
            textDecoration: 'none'
          }}
        >
          Mae Capozzi
        </Link>
      </h1>

      <Link
        style={{
          color: '#FFBAC8',
          textDecoration: 'none'
        }}
        to='/about'
      >
        About
      </Link>

    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Mae Capozzi'
      meta={[
        {
          name: 'description',
          content: 'Mae Capozzi writes about web development and software engineering ethics.'
        },
        {
          name: 'keywords',
          content: 'reactjs, software, coding, technology, web development, ethics'
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
