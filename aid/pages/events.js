import React from 'react'
import Event from 'components/Event'
import data from './assets/data/_data.json'

const Events = () => {
  const events = data.map(event => ({
    name: event.name,
    location: event.place ? event.place.name : null,
    time: event.start_time,
    id: event.id,
  }));

  const toRender = events.map((item) => (
    <Event name={item.name} location={item.location} time={item.time} id={item.id} key={item.id} />
  ));

  return (
    <div className="content">
      <section className="events">
        <h2>Events</h2>
        {toRender}
      </section>
    </div>
  )
}

export default Events;
