import React, { Component } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { FaAngleDown } from 'react-icons/fa'
import { baseStyles, theme, welcomeStyles } from '../styles'

import headerFile from '../cms/header.json'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: require('../assets/backgrounds/3.jpg')
        }
    }
    render() {
        return (
            <Element name='Home' className="Home">
                <div
                    style={{
                        ...welcomeStyles.hero,
                        backgroundImage: "url(" + this.state.background + ")",
                        backgroundSize: "cover"
                    }}
                >
                    <Row style={baseStyles.row}>
                        <Col style={{ margin: theme.spacing.regular }}>
                            <h1 style={welcomeStyles.title}>
                                {headerFile.title}
                            </h1>
                            <h3 style={welcomeStyles.subtitle}>
                                {headerFile.subtitle}
                            </h3>
                            <Button style={baseStyles.button} onClick={() => scroll.scrollTo(800)}>
                                <FaAngleDown />
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Element>
        )
    }
}
