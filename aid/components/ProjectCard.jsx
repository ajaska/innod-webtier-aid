import React from 'react'

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className='ProjectCard'>
        { this.props.title } { this.props.description }
      </div>
    )
  }
}
