import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import '~/styles/md'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    const dirname = this.props.route.page.file

    return (
      <div className="content">
        <div className="markdown">
          <Helmet
            title={`${config.siteTitle} | ${post.title}`}
          />
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    )
  },
})

class ProjectPageWrapper extends React.Component {
  render() {
    const post = this.props.route.page.data
    return (
      <div className="ProjectContent">
        post.title
        post.subtitle
        post.description
        
      </div>
    )
  }
}
