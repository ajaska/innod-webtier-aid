import React from 'react'
import '~/styles/ProjectCard'

/**
 * <ProjectCard 
 *     title='Title'
 *     description='Description of project'
 *     image='url/to/image'
 *     url='url/to/additional/info' // OR UNDEFINED IF NONE
 *  />
 */

export default class ProjectCard extends React.Component {
  render() {
    const backgroundImage = `url(${this.props.image})`
    return (
      <div className='ProjectCard'>
        <div className='backdrop tinted' style={{backgroundImage: backgroundImage}} />
       
        <div className='card-titles'>
          <h4>{ this.props.title }</h4>
          <h5>{ this.props.subtitle }</h5>
        </div>

        <div className='card-body'>
          <p>{ this.props.description }</p>

          {/* Renders the Read More button only if the url is defined. */}
          {'url' in this.props && typeof this.props.url !== 'undefined' &&
              <a href={this.props.url}>Read More</a>
          }
        </div>
      </div>
    )
  }
}
