import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import ProjectsList from 'components/ProjectsList'

export default class Projects extends React.Component {
  render() {
    const projects = this.props.route.pages.filter(page => (
      page.file.ext === 'md' && page.path.includes('/projects/')))
    return (
      <div className="content">
        <section className="projects">
          <h3 className="title">Projects</h3>
          <ProjectsList projects={projects} />
        </section>
      </div>
    ) 
  }
}
