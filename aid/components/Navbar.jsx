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
            active: false,
            opaque: this.props.opaque
        }

        this.unfixed = this.unfixed.bind(this)
        this.unpinned = this.unpinned.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({opaque: nextProps.opaque})
    }

    unfixed()
    {
        // When at the top, repsect passed in opaque setting.
        this.setState({opaque: this.props.opaque})
    }

    unpinned()
    {
        // Always prefer opaque when scrolled.
        this.setState({opaque: true})
    }

    toggleMenu()
    {
        this.setState({active: !this.state.active})
    }

    hideMenu()
    {
        this.setState({active: false})
    }

    render()
    {
        const active = this.state.active ? 'active' : ''
        const background = { backgroundColor: this.state.opaque ? 'black' : 'transparent' }

        return (
            <Headroom 
                downTolerance={8} 
                disableInlineStyles={true}

                onUnfix={this.unfixed}
                onUnpin={this.unpinned}
                >
                <div className='background' style={background}></div>
                <img className='logo' src="/assets/images/aid_logo_full_white.png"></img>

                <div className={`button ${active}`} onClick={this.toggleMenu} >
                    <i className='menu material-icons'>menu</i>
                    <i className='clear material-icons'>clear</i>
                </div>

                <nav className={active} >
                    <ul className={active} >
                        <li><Link to={prefixLink('/')}          onClick={this.hideMenu}> Home     </Link></li>
                        <li><Link to={prefixLink('/events/')}   onClick={this.hideMenu}> Events   </Link></li>
                        <li><Link to={prefixLink('/projects/')} onClick={this.hideMenu}> Projects </Link></li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </Headroom>
        )
    }
}

export default Navbar
