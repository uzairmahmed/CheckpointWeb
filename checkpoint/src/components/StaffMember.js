import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { baseStyles, hostStyles } from '../styles';


export default class StaffMember extends Component {
    render() {
        let button1, button2, button3

        if (this.props.link === "" || this.props.link === undefined) {
            button1 = (<></>)
        } else {
            button1 = (
                <Button style={hostStyles.button} href={this.props.link}>
                    {this.props.linktext}
                </Button>
            )
        } if (this.props.link2 === "" || this.props.link2 === undefined) {
            button2 = (<></>)
        } else {
            button2 = (
                <Button style={hostStyles.button} href={this.props.link2}>
                    {this.props.linktext2}
                </Button>
            )
        } if (this.props.link3 === "" || this.props.link3 === undefined) {
            button3 = (<></>)
        } else {
            button3 = (
                <Button style={hostStyles.button} href={this.props.link3}>
                    {this.props.linktext3}
                </Button>
            )
        }


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
                    <h1 style={baseStyles.cardTitle}>
                        {this.props.name}
                    </h1>
                </Row>
                <Row>
                    <p>
                        {this.props.desc}
                    </p>
                </Row>
                <Row xs={1} sm={1} md={1} lg={1} xl={1}>
                    {button1}
                    {button2}
                    {button3}
                </Row>
            </Col>
        )
    }
}
