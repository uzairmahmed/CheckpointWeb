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
        const opacity = 0.5+ Math.min(this.state.currentScrollHeight / 250,)
        const navbarColor = "rgb(158, 158, 158, " + String(opacity) + ")"

        if ((this.state.currentScrollHeight > 100) && (!window.matchMedia("(max-width: 768px)").matches)) {
            logoComponent = (<></>)
        } else {
            logoComponent = (
                <Image
                    style={{
                        ...navbarStyles.brandImg,
                        height: Math.min(Math.max(window.innerWidth/50, 15), 25)
                    }}
                    src={require('../assets/logo/long-logo.png')}
                />
            )
        }

        return (
            <Navbar expand={'md'} fixed={'top'}
                style={{
                    ...navbarStyles.bar,
                    backgroundColor: 'rgb(255,255,255,' + opacity + ')',
                    boxShadow: theme.spacing.shadow + ' ' + navbarColor
                }}
            >
                <Row style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: 0 }}>
                    <Navbar.Brand style={navbarStyles.brand} href="#home">
                        <Image
                            style={{
                                ...navbarStyles.brandImg,
                                width: Math.min(Math.max(window.innerWidth/2.75, 200), 350)
                            }}
                            src={require('../assets/logo/long-logo.png')}
                        />
                    </Navbar.Brand>
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
                </Row>
            </Navbar>
        )
    }
}
