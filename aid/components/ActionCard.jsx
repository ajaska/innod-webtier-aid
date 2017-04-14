import React from 'react'
import '~/styles/ActionCard'

const image_dir = '/assets/images/'

/**
 * usage
 * <ActionCard color='' image=''>
 *     <label>LABEL</label>
 *     <title>TITLE</title>
 * </ActionCard>
 * 
 * props
 * - image: String filename for background image (e.g. test.png)
 * - color: String hex value for the primary color (e.g. #FFFFFF)
 *
 * children (these can also be passed as props)
 * - <label>: message to display
 * - <title>: title to put on the button
 */
class ActionCard extends React.Component {

    render() {
        const divStyle = {
            backgroundImage: `url(${image_dir + this.props.image})`,
        }

        const textStyle = {
            borderColor: this.props.color
        }

        const linkStyle = {
            backgroundColor: this.props.color
        }

        const tags = {}
        this.props.children.forEach(c => {
            if (typeof c.props.children === 'string')
                tags[c.type] = c.props.children
        })

        return (
            <div className='ActionCard' style={divStyle} >
                <p style={textStyle} >{ this.props.label || tags.label }</p>
                <a style={linkStyle} >{ this.props.title || tags.title }</a>
            </div>
        )
    }
}

export default ActionCard;
