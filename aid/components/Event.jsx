/**
 * Created by KJ on 4/14/17.
 */
import React from 'react'


class Event extends React.Component {
    render() {

        const divStyle = {
            borderWidth: "1px",
            borderColor: "#CFD8DC",
            borderStyle: "solid",
            padding: "5px",
            flexDirection: "row",
            margin: "5px",
        }

        const nameStyle = {
            fontWeight: "bold",

        }

        const detailStyle = {
            color: "#8D8D8D",
            fontSize: "small",
        }

        return (
            <div style={divStyle}>
                <div>{this.props.date}</div>
                <div>
                    <div style={nameStyle}>{this.props.name}</div>
                    <div style={detailStyle}>{this.props.location}</div>
                    <div style={detailStyle}>{this.props.time}</div>
                </div>
            </div>
        )
    }
}

export default Event;
