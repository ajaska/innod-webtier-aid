import React from 'react'
import Helmet from 'react-helmet'

import { config } from 'config'

import '~/styles/index'
import Navbar from '~/components/Navbar'
import Footer from 'components/Footer'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    // All non-home pages should account for opaque navbar.
    const notHome = (this.props.location.pathname !== '/')

    return (
      <div>
        <Helmet title={config.siteTitle} >
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Helmet>

        <Navbar opaque={notHome} />

        <div className={`body${notHome ? ' showNav' : ''}`} >
          {this.props.children}
        </div>

        <Footer />
      </div>

    )
  },
})
