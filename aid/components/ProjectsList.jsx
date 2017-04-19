import React from 'react'

import ProjectCard from 'components/ProjectCard'

export default class ProjectList extends React.Component {
  render() {
    const projects = this.props.projects.map(function(p) {
      let backgroundImage = p.data.image || '/assets/images/card1.png'
      return (
        <ProjectCard 
          title={p.data.title}
          subtitle={p.data.subtitle}
          description={p.data.description}
          image={backgroundImage}
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
