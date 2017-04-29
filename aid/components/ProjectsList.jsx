import React from 'react'

import ProjectCard from 'components/ProjectCard'
import {getBackgroundImage, getReadMoreUrl} from 'utils/projects-helpers.js'

const DEFAULT_CARD_IMAGE = '/assets/images/card1.png'

export default class ProjectList extends React.Component {
  render() {
    const projects = this.props.projects.map(function(p, index) {

      let backgroundImage = getBackgroundImage(p)
      let readMoreUrl = getReadMoreUrl(p) 
      
      return (
        <ProjectCard 
          key={index}
          title={p.data.title}
          subtitle={p.data.subtitle}
          description={p.data.description}
          image={backgroundImage}
          url={readMoreUrl}
        />
      )
    })

    return (
      <div className="ProjectsList">
        {projects}
      </div>
    )
  }
}
