import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { baseStyles, podcastStyles } from '../styles';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default class StaffMember extends Component {
    render() {
        let textAligned;
        let imgAligned;

        if (window.matchMedia("(max-width: 768px)").matches) {
            textAligned = 'center'
            imgAligned = 'center'
        } else {
            textAligned = 'left'
            imgAligned = 'right'
        }

        return (
            <Col style={podcastStyles.card}>
                <Row>
                    <h1 style={baseStyles.cardTitle}>
                        {this.props.name}
                    </h1>
                </Row>
                <Row>
                    <p>{this.props.desc}</p>
                    <p>Hosts: {this.props.hosts}</p>
                </Row>
                
                <Row style={{ justifyContent: 'center' }}>
                    <a href={this.props.spotify} style= {{ alignSelf: "center"}}>
                        <Image
                            style={podcastStyles.icon}
                            src={require("../assets/icons/spotify_podcast.png")}
                        />
                    </a>
                    <a href={this.props.apple} style= {{ alignSelf: "center"}}>
                        <Image
                            style={podcastStyles.icon}
                            src={require("../assets/icons/apple_podcast.png")}
                        />
                    </a>
                </Row>
            </Col>
        )
    }
}
