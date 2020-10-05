import React, { Component } from 'react'
import { Element } from 'react-scroll';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { baseStyles } from '../styles'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: require('../assets/backgrounds/2.jpg')
        }
    }
    render() {
        return (
            <Element name='Home' className="Home">
                <div
                    style={{
                        ...baseStyles.block,
                        backgroundImage: "url(" + this.state.background + ")",
                        backgroundSize: "cover"
                    }}
                >
                    <Row style={baseStyles.row}>
                        <Col>
                            <h1>
                                Welcome to the Checkpoint Podcast
                            </h1>
                            <p>
                                heyo
                            </p>
                        </Col>
                    </Row>

                </div>
            </Element>
        )
    }
}
