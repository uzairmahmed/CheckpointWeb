import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import NavLink from '../components/NavLink'

import { navbarStyles, theme } from '../styles'

export default class NavbarSec extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentScrollHeight: 0
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (this.state.currentScrollHeight !== newScrollHeight) {
                this.setState({ currentScrollHeight: newScrollHeight })
            }
        }
    }

    render() {
        const opacity = 0.5+ Math.min(this.state.currentScrollHeight / 250,)
        const navbarColor = "rgb(158, 158, 158, " + String(opacity) + ")"

        return (
            <Navbar expand={'md'} fixed={'top'}
                style={{
                    ...navbarStyles.bar,
                    // width: '100%',
                    flexDirection:'row',
                    backgroundColor: 'rgb(255,255,255)',
                    boxShadow: theme.spacing.shadow + ' ' + navbarColor
                }}
            >
                {/* <Row style={{ justifyContent: 'space-evenly', alignItems: 'center', display:'flex'}}> */}
                    <Navbar.Brand style={navbarStyles.brand} href="#home">
                        <Image
                            style={{
                                ...navbarStyles.brandImg,
                                width: Math.min(Math.max(window.innerWidth/2.75, 100), 250)
                            }}
                        // src={require('../assets/logo/long-logo.png')}
                        src={'/assets/logo/logo.svg'}
                        
                        />
                    </Navbar.Brand>
                    <div style={{flex:1}}></div>
                    <div style = {{marginRight: theme.spacing.regular}}>
                        <Navbar.Toggle style={{ justifyContent: 'right' }} aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse style={{ alignItems: 'center' }} id="basic-navbar-nav">
                            <Nav fill={true} justify={true} >
                                <NavLink title="Home" />
                                <NavLink title="Hosts" />
                                <NavLink title="Podcasts" />
                                <NavLink title="Contact" />
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                {/* </Row> */}
            </Navbar>
        )
    }
}
