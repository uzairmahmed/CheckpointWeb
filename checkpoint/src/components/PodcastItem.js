import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { baseStyles, podcastStyles } from '../styles';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


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
                    <ButtonGroup>
                        <Button style={{...podcastStyles.button, ...podcastStyles.leftButton}} href={this.props.spotify}>
                            <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                                <Col >
                                    <Image
                                        style={podcastStyles.icon}
                                        src={require("../assets/icons/spotify.png")}
                                        roundedCircle
                                    />
                                </Col>
                                <Col style={{textAlign:'left'}}>
                                    Listen on Spotify
                                </Col>
                            </Row>
                        </Button>
                        <Button style={{...podcastStyles.button, ...podcastStyles.rightButton}} href={this.props.apple}>
                            <Row xs={1} sm={1} md={2} lg={2} xl={2} >
                                <Col>
                                    <Image
                                        style={podcastStyles.icon}
                                        src={require("../assets/icons/itunes.png")}
                                        roundedCircle
                                    />
                                </Col>
                                <Col style={{textAlign:'left'}}>
                                    Listen on Apple Music
                            </Col>
                            </Row>
                        </Button>
                    </ButtonGroup>
                </Row>
            </Col>
        )
    }
}
