import React from 'react'

import ProjectCard from 'components/ProjectCard'

export default class ProjectList extends React.Component {
  render() {
    console.log(this.props.projects)
    const projects = this.props.projects.map(function(p) {
      return (
        <ProjectCard 
          title={p.data.title}
          description={p.data.description}
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
