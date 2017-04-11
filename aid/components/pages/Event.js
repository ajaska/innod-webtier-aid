import React from 'react'

export default function Event(props) {
  return (
    <div className="Event">
      {props.name} {props.startTime}
    </div>
  )
}

