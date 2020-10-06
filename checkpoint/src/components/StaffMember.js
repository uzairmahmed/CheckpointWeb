import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { baseStyles, hostStyles } from '../styles';


export default class StaffMember extends Component {
    render() {
        return (
            <Col style={hostStyles.card}>
                <Row>
                    <Image
                        style={baseStyles.profilepicture}
                        src={this.props.pfp}
                        roundedCircle
                    />
                </Row>
                <Row>
                    <h1 style={baseStyles.header}>
                        {this.props.name}
                    </h1>
                </Row>
                <Row>
                    <p>
                        {this.props.desc}
                    </p>
                </Row>
                <Row>
                    <Button href={this.props.link}>
                        {this.props.linktext}
                    </Button>
                </Row>
            </Col>
        )
    }
}
