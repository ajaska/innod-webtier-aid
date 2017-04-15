/**
 * Created by KJ on 4/14/17.
 */
import React from 'react'


class Event extends React.Component {
    render() {

        const divStyle = {
            borderColor: "#CFD8DC",
            padding: "5px",
            flexDirection: "col",
        }

        // const titleStyle = {
        //     borderColor: this.props.color
        // }
        //
        // const linkStyle = {
        //     backgroundColor: this.props.color
        // }

        return (
            <div style={divStyle}>
                <div>{this.props.date}</div>
                <div>
                    <div>{this.props.name}</div>
                    <div>{this.props.location}</div>
                    <div>{this.props.time}</div>
                </div>
            </div>
        )
    }
}

export default Event;
