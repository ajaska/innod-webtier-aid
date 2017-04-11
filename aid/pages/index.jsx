import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import Helmet from 'react-helmet'

import './styles/index.scss'

class App extends React.Component
{
    render ()
    {
        return (
            <div>
                {/* TODO: HEADROOM + NAVBAR HERE */}
                <Helmet>
                    <title>AID BERKELEY</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                </Helmet>
                <header className='app' >
                    <div></div>

                    <h1>
                        <span>UC Berkeley</span>
                        <span>Association for India's Development</span>
                    </h1>

                    <a>
                        Learn More
                        <i className="material-icons">keyboard_arrow_down</i>
                    </a>
                </header>
            </div>
        )
    }
}

module.exports = App;
