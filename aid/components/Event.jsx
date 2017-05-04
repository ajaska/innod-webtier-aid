//
import React from 'react'
import 'styles/Event'

function getDateAndTime(date) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const d = new Date(date);
  return [monthNames[d.getMonth()], d.getDay(), d.getFullYear(), d.getHours(), d.getMinutes()];
}

function pad(n) {
  return n < 10 ? `0${n}` : n;
}

const Event = ({ name, location, time, id }) => {
  const dateTime = getDateAndTime(time);
  return (
    <div className="Event">
      <div className="date">
        <div>{dateTime[0]}</div>
        <div className="day">{dateTime[1]}</div>
        <div>{dateTime[2]}</div>
      </div>
      <div>
        <div className="name">
          <a href={`https://www.facebook.com/events/${id}`} target="_blank" rel="noopener noreferrer">{name}</a>
        </div>

        {location &&
          <div className="location">
            <i className="material-icons location-icon">location_on</i>
            <span className="location-text">{location}</span>
          </div>
        }

        <div className="time">
          <i className="material-icons clock-icon">access_time</i>
          <span className="time-text">{dateTime[3]}:{pad(dateTime[4])}</span>
        </div>
      </div>
    </div>
  )
}

export default Event;
