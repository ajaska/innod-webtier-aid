import React from 'react'
import '~/styles/ActionCard'

const imageDir = '/assets/images/'

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
const ActionCard = (props) => {
  const img = {
    backgroundImage: `url(${imageDir + props.image})`,
  }

  const textStyle = {
    borderColor: props.color,
  }

  const linkStyle = {
    backgroundColor: props.color,
  }

  const tags = {}
  props.children.forEach((c) => {
    if (typeof c.props.children === 'string') { tags[c.type] = c.props.children }
  })

  return (
    <div className="ActionCard">
      <div className="backdrop tinted" style={img} />
      <p style={textStyle} >{ props.label || tags.label }</p>
      <a style={linkStyle} >{ props.title || tags.title }</a>
    </div>
  )
}

export default ActionCard;
