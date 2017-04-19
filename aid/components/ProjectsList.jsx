import React from 'react'

import ProjectCard from 'components/ProjectCard'
const DEFAULT_CARD_IMAGE = '/assets/images/card1.png'

export default class ProjectList extends React.Component {
  render() {
    const projects = this.props.projects.map(function(p, index) {

      var backgroundImage
      var readMoreUrl
      
      // Uses image as defined in the page.md, or
      // default image 
      if ('image' in p.data && p.data.image !== '') {
        backgroundImage = p.path + p.data.image
      } else {
        backgroundImage = DEFAULT_CARD_IMAGE
      }

      // Sets url to either a url defined in page.md,
      // or the url of the page if it has a body.
      // url will be undefined otherwise.
      if ('url' in p.data && p.data.url !== '') {
        readMoreUrl = p.data.url
      } else if (p.data.body !== '') {
        readMoreUrl = p.path
      }

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
