import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import '~/styles/Navbar'

class Navbar extends React.Component
{
    render()
    {
        return (
            <Headroom disableInlineStyles={true} >
                <i className='menu material-icons'>menu</i>
                <img className='logo' src="/assets/images/aid_logo_full_white.png"></img>
                <ul>
                    <li>About</li>
                    <li><Link to={prefixLink('/events/')}>Events</Link></li>
                    <li><Link to={prefixLink('/projects/')}>Projects</Link></li>
                    <li>Contact</li>
                </ul>
            </Headroom>
        )
    }
}

export default Navbar
