import React, { Component } from 'react';
import Row from 'react-bootstrap/esm/Row';
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
        let logoComponent
        const opacity = Math.min(this.state.currentScrollHeight / 250,)
        const navbarColor = "rgb(158, 158, 158, " + String(opacity) + ")"

        if ((this.state.currentScrollHeight > 100) && (!window.matchMedia("(max-width: 768px)").matches)) {
            logoComponent = (<></>)
        } else {
            logoComponent = (
            <Image
                style={{
                    ...navbarStyles.brandImg,
                    height: window.innerWidth / 10
                }}
                src={require('../assets/logo/long-logo.png')}
                />
            )
        }

        return (
            <div>
                <Navbar expand={'md'} fixed={'top'}
                    style={{
                        ...navbarStyles.bar,
                        backgroundColor: 'rgb(255,255,255,' + opacity + ')',
                        boxShadow: theme.spacing.shadow + ' ' + navbarColor
                    }}
                >
                    <Row style={{ justifyContent: 'space-around', width: '100%', margin: 0}}>
                        <Navbar.Brand style={navbarStyles.brand} href="#home">
                            {logoComponent}
                        </Navbar.Brand>
                        <Navbar.Toggle style={{ justifyContent: 'right' }} aria-controls="basic-navbar-nav" />
                    </Row>

                    <Row >
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav fill={true} justify={true} >
                                <NavLink title="Home" />
                                <NavLink title="Hosts" />
                                <NavLink title="Podcasts" />
                                <NavLink title="Contact" />
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Navbar>
            </div>
        )
    }
}
