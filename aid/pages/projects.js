import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import ProjectsList from 'components/ProjectsList'

export default class Projects extends React.Component {
  render() {
  console.log(JSON.stringify(this.props.route))
    const projects = this.props.route.pages.filter(page => (
      page.file.ext === 'md' && page.path.includes('/projects/')))
    
    return (
      <div className="content">
        <section className="projects">
          <h2 className="page-title">Projects</h2>
          <ProjectsList projects={projects} />
        </section>
      </div>
    ) 
  }
}
