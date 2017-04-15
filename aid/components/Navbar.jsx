import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import '~/styles/Navbar'

class Navbar extends React.Component
{
    render()
    {
        return (
            <nav>
                <img src="/assets/images/aid_logo_full_white.png"></img>
                <ul>
                    <li>About</li>
                    <li><Link to={prefixLink('/events/')}>Events</Link></li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
