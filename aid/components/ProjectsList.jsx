import React from 'react'
import ProjectCard from 'components/ProjectCard'
import { getBackgroundImage, getReadMoreUrl } from 'utils/projects-helpers.js'

const ProjectsList = ({ projects }) => {
  const projectsChildren = projects.map((p, index) => {
    const backgroundImage = getBackgroundImage(p)
    const readMoreUrl = getReadMoreUrl(p)

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
      {projectsChildren}
    </div>
  )
}

export default ProjectsList
