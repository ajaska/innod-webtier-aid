import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

import '~/styles/index'
import Navbar from '~/components/Navbar'
import Footer from 'components/Footer'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>

        <Helmet>
          <title>AID BERKELEY</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Helmet>

        <div className="head">
          <Navbar />
        </div>

        <div className="body">    
          {this.props.children}
        </div>

        <Footer /> 
      </div>

    )
  },
})
