import React from 'react'
import { config } from 'config'

import 'styles/Footer'

export default class Footer extends React.Component {
  render() {
    const contact = config.contact
    const contact_items = Object.keys(contact).map((type, i) =>
    {
      const text = contact[type]
      const href = (type.toLowerCase() === 'email' ? 'mailto: ' : '') + text
      return (<li key={i} >{type}: <a href={href}>{text}</a></li>)
    })

    // Map of site -> links (ex. facebook -> www.facebook.com/aidberkeley)
    const social = config.social
    const social_links = Object.keys(social).map(site =>
    {
      const url = social[site]
      const style = { backgroundImage: `url(/assets/images/social_${site}.png)` }
      return (<a style={style} href={url} ></a>)
    })

    return (
      <footer className='page-footer'>
        <h5>Contact Us</h5>
        <div className='content'>
          <ul className='contact-info'>
            <ul>{contact_items}</ul>
          </ul>

          <div className='social-links'>
            {social_links}
          </div>
        </div>
      </footer>
    )
  }
}
