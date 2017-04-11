import React from 'react'
import Event from 'components/pages/Event'

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.getEventData();
  } 

  getEventData() {
    fetch('data.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  render() {
    var events = this.state.data;
    var eventsList = this.state.data.map(function(event) {
      return (
        <Event 
          key={event.id}
          name={event.name}
          description={event.description}
          location={event.location}
          startTime={event.startTime}
          endTime={event.endTime}
        />
      )          
    });

    return (
      <div className="EventsList">
        {eventsList}
      </div>
    );
  }
}
