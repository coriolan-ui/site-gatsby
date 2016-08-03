import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import iconGithub from './iconGithub.svg'
import coriolanLion from './coriolanLion.svg'

class MainMenu extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='mainmenu'>
                <div className='mainmenu__nav'>
                    <div className='mainmenu__wrapper'>

                        <Link to={ prefixLink('/')} className={`mainmenu__link mainmenu__link--coriolan ${ location.pathname === prefixLink('/') ? 'is-selected' : '' }`}>
                            <img className='mainmenu__coriolan-lion' src={ prefixLink(coriolanLion) }/>
                            Coriolan UI
                            <Ink />
                        </Link>

                        <Link to={ prefixLink('/installation/')} className={`mainmenu__link ${ location.pathname === prefixLink('/installation/') ? 'is-selected' : '' }`}>
                            Installation
                            <Ink />
                        </Link> 

                        <Link to={ prefixLink('/variables/')} className={`mainmenu__link ${ location.pathname === prefixLink('/variables/') ? 'is-selected' : '' }`}>
                            Variables
                            <Ink />
                        </Link> 

                        <Link to={ prefixLink('/mixins/')} className={`mainmenu__link ${ location.pathname.indexOf(prefixLink('/mixins/')) == 0 ? 'is-selected' : '' }`}>
                            Mixins
                            <Ink />
                        </Link> 

                        <a className='mainmenu__link mainmenu__link--social' href={ config.siteGithubUrl } target='_blank'>
                            <img className='mainmenu__svgicon' src={ prefixLink(iconGithub) }/>
                            <Ink />
                        </a>

                    </div>
                </div>

                <div className='mainmenu__subnav'>
                    <div className='mainmenu__wrapper'>

                        <img className='mainmenu__shield' src='https://img.shields.io/npm/dt/coriolan-ui.svg' target='_blank' />

                        <img className='mainmenu__shield' src='https://img.shields.io/npm/v/coriolan-ui.svg' target='_blank' />
                    </div>
                </div>
            </div>
        );
    }
}

MainMenu.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default MainMenu
