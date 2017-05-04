import React from 'react'
import '~/styles/ProjectCard'

/**
 * <ProjectCard
 *     title='Title'
 *     subtitle='Subtitle'
 *     description='Description of project'
 *     image='url/to/image'
 *     url='url/to/additional/info' // OR UNDEFINED IF NONE
 *  />
 */

const ProjectCard = (props) => {
  const backgroundImage = `url(${props.image})`
  return (
    <div className="ProjectCard">
      <div className="backdrop tinted" style={{ backgroundImage }} />

      <div className="card-titles">
        <h4>{ props.title }</h4>
        <h5>{ props.subtitle }</h5>
      </div>

      <div className="card-body">
        <p>{ props.description }</p>

        {/* Renders the Read More button only if the url is defined. */}
        {'url' in props && typeof url !== 'undefined' &&
        <a href={props.url}>Read More</a>
        }
      </div>
    </div>
  )
}

export default ProjectCard
