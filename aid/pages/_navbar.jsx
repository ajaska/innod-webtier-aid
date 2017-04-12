import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


class Navbar extends React.component
{
    render()
    {
        return (
            <nav>
                <img src="/assets/images/ai_logo_full_black.png"></img>
                <ul>
                    <li>About</li>
                    <li>Events</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}
