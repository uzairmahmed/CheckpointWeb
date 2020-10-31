import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';

import { contactStyles } from '../styles'

export default class ContactCard extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <Card style={contactStyles.card}>
          <Col>
            <Image src={this.props.img} style={contactStyles.icon} />
            <h2 style={contactStyles.text} >
              {this.props.value}
            </h2>
          </Col>
        </Card>
      </a>
    );
  }
}

