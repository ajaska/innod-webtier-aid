import React from 'react'
import { config } from 'config'

import 'styles/Footer'

export default class Footer extends React.Component {
  render() {
    let aidGlobalUrl = config.aidGlobalUrl
    let aidBAUrl = config.aidBayAreaUrl
    let email = config.email
    return (
      <footer className='page-footer'>
        <div className='footer-container'>
          <div className='contact-info'>
            <h5>Contact Us</h5>
            <ul>
              <li>AID Global: <a href={aidGlobalUrl}>{aidGlobalUrl}</a></li>
              <li>AID Bay Area: <a href={aidBAUrl}>{aidBAUrl}</a></li>
              <li>Email: <a href={'mailto:' + email}>{email}</a></li>
            </ul>
          </div>

          <div className='footer-icons'>
            <div className='social-media'>
              Facebook Twitter Something
            </div>
            <div className='watermark'>
              Developed by Innovative Design
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
