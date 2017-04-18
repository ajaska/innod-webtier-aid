import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import '~/styles/Navbar'

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            menuActive: false
        }
    }

    toggleMenu()
    {
        this.setState({menuActive: !this.state.menuActive})
    }

    hideMenu()
    {
        this.setState({menuActive: false})
    }

    render()
    {
        const menuActive = this.state.menuActive ? 'active' : ''

        return (
            <Headroom 
                disableInlineStyles={true} 
                downTolerance={8} 
                onUnpin={() => this.hideMenu()}
                >
                <img className='logo' src="/assets/images/aid_logo_full_white.png"></img>

                <div className={`button ${menuActive}`} onClick={() => this.toggleMenu()} >
                    <i className='menu material-icons'>menu</i>
                    <i className='clear material-icons'>clear</i>
                </div>

                <nav className={menuActive} >
                    <ul className={menuActive} >
                        <li>About</li>
                        <li><Link to={prefixLink('/events/')}>Events</Link></li>
                        <li><Link to={prefixLink('/projects/')}>Projects</Link></li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </Headroom>
        )
    }
}

export default Navbar
