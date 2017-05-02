/**
 * Created by KJ on 4/14/17.
 */
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

class Event extends React.Component {
  render() {
    const dateTime = getDateAndTime(this.props.time);

    return (
      <div className="Event">
        <div className="date">
          <div>{dateTime[0]}</div>
          <div className="day">{dateTime[1]}</div>
          <div>{dateTime[2]}</div>
        </div>
        <div>
          <div className="name">
            <a href={`https://www.facebook.com/events/${this.props.id}`} target="_blank" rel="noopeer noreferrer">{this.props.name}</a>
          </div>

          {this.props.location &&
            <div className="location">
              <i className="material-icons location-icon">location_on</i>
              <span className="location-text">{this.props.location}</span>
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
}

export default Event;
