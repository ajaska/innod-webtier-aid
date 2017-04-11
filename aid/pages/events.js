import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import EventsList from 'components/pages/EventsList'

export default class EventsPage extends React.Component {
  render() {
    return (
      <div>
        Hello
        <EventsList />
      </div>
    )
  }
}


