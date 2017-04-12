import React, { Component } from 'react'
import '~/styles/ActionCard'

const image_dir = '/assets/images/'

/**
 * props:
 * - text: String       message to display
 * - image: String      url for background image
 * - color: String      hex value for the primary color
 */
class ActionCard extends Component
{
    render()
    {
        const divStyle = {
            backgroundImage: `url(${image_dir + this.props.image})`,
        }

        const textStyle = {
            borderColor: this.props.color
        }

        const linkStyle = {
            backgroundColor: this.props.color
        }

        return (
            <div className={this.constructor.name} style={divStyle} >
                <p style={textStyle} >{ this.props.label }</p>
                <a style={linkStyle}>{ this.props.title }</a>
            </div>
        )
    }
}

export default ActionCard;
