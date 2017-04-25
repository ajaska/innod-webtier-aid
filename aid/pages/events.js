/**
 * Created by KJ on 4/10/17.
 */
import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Event from '~/components/Event'
import data from './assets/data/_data.json'

export default class Events extends React.Component {

    render () {

        console.log(data[0].place)
        // 2016-10-21T18:00:00-0700

        const events = data.map(event => ({
            name: event.name,
            date: event.start_time,
            location: event.place ? event.place.name : null,
            time: event.start_time,
            id: event.id,
        }));

        const toRender = events.map((item) => (
            <Event name={item.name} date={item.date} location={item.location} time={item.time} id={item.id} key={item.id} />
        ));

        return (
            <div className='content'>
                <section className='events'>
                    <h2>Events</h2>
                    {toRender}
                </section>
            </div>
        )
    }
}
