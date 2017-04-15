import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'

import '~/styles/App'
import ActionCard from '~/components/ActionCard'

class Index extends React.Component
{
    render ()
    {
        return (
            <div>
                <header className='app' >
                    <div></div>

                    <h1>
                        <span>UC Berkeley</span>
                        <span>Association for India's Development</span>
                    </h1>

                    <a href="#">
                        Learn More
                        <i className="material-icons">keyboard_arrow_down</i>
                    </a>
                </header>

                <section className="about">
                    <h3 className="title">whom'st are we'm</h3>
                    <p>Association for India's Development (AID) is a volunteer movement committed to promoting sustainable, equitable and just development. In solidarity with non-violent people's struggles, AID supports grassroots organizations in India and initiates efforts in various interconnected spheres such as education, livelihoods, natural resources, health, women's empowerment and social justice.</p>
                    <p>AID's holistic vision enables it to address underlying causes rather than just responding to symptoms, by using powerful tools for bringing out change, such as campaigning against corrupton, in addition to constructive and creative work through various projects.</p>
                </section>

                <section className="cards">
                    <ActionCard color='#E53935' image='card1.png'>
                        <label>Empower underprevileged communities of India</label>
                        <title>Join Us</title>
                    </ActionCard>

                    <ActionCard color='#03A9F4' image='card2.png'>
                        <label>Make a real impact with your contribution</label>
                        <title>Donate</title>
                    </ActionCard>
                </section>

                <section className="people">
                    <h3 className="title">Squad</h3>
                    {/* TODO: IMPLEMENT PEOPLE */}
                </section>

            </div>
        )
    }
}

export default Index
