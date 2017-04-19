import React from 'react'
import '~/styles/ProjectCard'

/**
 * <ProjectCard 
 *     title='Title'
 *     description='Description of project'
 *  />
 */

export default class ProjectCard extends React.Component {
  render() {
    const backgroundImage = `url(${this.props.image})`
    const accentColor = this.props.color || '#ffffff'


    return (
      <div className='ProjectCard' style={{backgroundImage: backgroundImage}}>
        <h4>{ this.props.title }</h4>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}
