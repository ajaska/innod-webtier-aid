import React from 'react'
import { config } from 'config'

import 'styles/Footer'

const Footer = () => {
  const contact = config.contact
  const contactItems = Object.keys(contact).map((type, i) => {
    const text = contact[type]
    const href = (type.toLowerCase() === 'email' ? 'mailto: ' : '') + text
    return (<li key={i} >{type}: <a href={href}>{text}</a></li>)
  })

  // Map of site -> links (ex. facebook -> www.facebook.com/aidberkeley)
  const social = config.social
  const socialLinks = Object.keys(social).map((site) => {
    const url = social[site]
    const style = { backgroundImage: `url(/assets/images/social_${site}.png)` }
    return (<a style={style} href={url} />)
  })

  return (
    <footer className="page-footer">
      <h5>Contact Us</h5>
      <div className="content">
        <ul className="contact-info">
          {contactItems}
        </ul>

        <div className="social-links">
          {socialLinks}
        </div>
      </div>
    </footer>
  )
}

export default Footer;
