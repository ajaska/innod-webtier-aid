import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className="projects">
          <h3 className="title">Projects</h3>
          <ProjectsList />
        </section>
      </div>
    ) 
  }

}
