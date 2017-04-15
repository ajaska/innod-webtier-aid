/**
 * Created by KJ on 4/10/17.
 */
import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Event from '~/components/Event'

export default class Events extends React.Component {
    render () {
        const events = [
            {
                name: "Run for India 2017",
                date: "3/1/17",
                location: "Montclair High School",
                time: "8:00am",
            },
            {
                name: "Milan Dinner",
                date: "3/2/17",
                location: "Civic Garden Plan",
                time: "6:30pm",
            }
        ];
        const event = events.map((item, i) => (
            <Event name={item.name} date={item.date} location={item.location} time={item.time} key={i} />
        ))
        return (
          <div className='events'>
            {event}
          </div>
          //<div style={styles.event}>{event}</div>
        )
    }
}
