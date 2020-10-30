import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { baseStyles, podcastStyles } from '../styles';
import Image from 'react-bootstrap/esm/Image';


export default class StaffMember extends Component {
    render() {
        return (
            <Col style={podcastStyles.card}>
                <Row>
                    <h1 style={baseStyles.header}>
                        {this.props.name}
                    </h1>
                </Row>
                <Row>
                    <p>{this.props.desc}</p>
                </Row>
                <Row>
                    <Col>
                        <a href={this.props.spotify}>
                            <Image
                                style={podcastStyles.icon}
                                src={require("../assets/icons/spotify.png")}
                                roundedCircle
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href={this.props.apple}>
                            <Image
                                style={podcastStyles.icon}
                                src={require("../assets/icons/itunes.png")}
                                roundedCircle
                            />
                        </a>
                    </Col>
                </Row>
            </Col>
        )
    }
}
