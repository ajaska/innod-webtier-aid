/**
 * Created by KJ on 4/14/17.
 */
import React from 'react'
import '~/styles/Event'

function getDateAndTime(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    var d = new Date(date);
    return [monthNames[d.getMonth()], d.getDay(), d.getFullYear(), d.getHours(), d.getMinutes()];

}

function pad(n) {
    return n<10 ? '0' +n : n;
}

class Event extends React.Component {
    render() {
        console.log(this.props.location);
        let dateTime = getDateAndTime(this.props.time);


        return (
            <div className="event">
                <div className="date">
                    <div>{dateTime[0]}</div>
                    <div className="day">{dateTime[1]}</div>
                    <div>{dateTime[2]}</div>
                </div>
                <div>
                    <div className="name">{this.props.name}</div>
                    {this.props.location &&
                        <div className="location">
                            <span>
                                <i className='material-icons location-icon'>location_on</i>
                                {this.props.location}
                            </span>
                        </div>
                    }

                    <div className="time">
                        <span>
                            <i className='material-icons clock-icon'>access_time</i>
                            {dateTime[3]}:{pad(dateTime[4])}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;
