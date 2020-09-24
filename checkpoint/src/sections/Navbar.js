import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import NavLink from '../components/NavLink'

import { navbarStyles } from '../styles'

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
        const opacity = Math.min(this.state.currentScrollHeight / 1000,)

        return (
            <div>
                <Navbar bg={'light'} expand={'md'} fixed={'top'}
                    style={{
                        ...navbarStyles.bar,
                        backgroundColor: 'rgb(0,0,0,' + opacity + ')',
                    }}
                >
                    <Navbar.Brand href="#home">Checkpoint</Navbar.Brand>

                    <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <NavLink title="Meet your Hosts" />
                                <NavLink title="Podcasts" />
                                <NavLink title="IRAE" />
                                <NavLink title="Connect + Collaborate" />
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
