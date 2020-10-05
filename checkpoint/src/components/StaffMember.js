import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { baseStyles } from '../styles';


export default class StaffMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilepic: require('../assets/pfp2.jpeg')
        }
    }
    render() {
        return (
            <Col>
                <Row>
                    <Image
                        style={baseStyles.profilepicture}
                        src={this.state.profilepic}
                    />
                </Row>
                <Row>
                    <h1>
                        Name
                    </h1>
                </Row>
                <Row>
                    <h2>
                        i like beans
                    </h2>
                </Row>
                <Row>
                    <Button
                        href="https://drive.google.com/drive/folders/1F6-c_xKXOuM0xrg8GAHExlLHkD293d-r?usp=sharing"
                    >
                        heres my button
                    </Button>
                </Row>
            </Col>
        )
    }
}
