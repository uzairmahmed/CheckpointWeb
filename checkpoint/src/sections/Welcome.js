import React, { Component } from 'react'
import { Element } from 'react-scroll';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { baseStyles, welcomeStyles } from '../styles'

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
                        <Col>
                            <h1 style={welcomeStyles.title}>
                                {headerFile.title}
                            </h1>
                            <h3 style={welcomeStyles.subtitle}>
                                {headerFile.subtitle}
                            </h3>
                        </Col>
                    </Row>

                </div>
            </Element>
        )
    }
}
