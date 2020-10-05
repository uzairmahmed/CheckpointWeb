import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { baseStyles } from '../styles';

class BaseDiv extends Component {
  renderMain(content) {
    return (
      content
    )
  }

  renderExtra(content) {
    return (
      content
    )
  }

  render() {
    return (
      <div
        style={{
          ...baseStyles.block,
          backgroundImage: "url(" + this.props.bg + ")",
          backgroundSize:"cover"
        }}
      >
        <Container style={baseStyles.container}>
          <Row>
            <Col>
              <h2 style={baseStyles.header}>
                {this.props.header}
              </h2>
            </Col>
          </Row>
          <Row
            style={baseStyles.row}
          >
            {this.renderMain(this.props.maincontent)}
          </Row>
          {this.renderExtra(this.props.extracontent)}
        </Container>
      </div>
    );
  }
}

export default BaseDiv;
