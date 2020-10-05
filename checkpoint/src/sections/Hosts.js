import React, { Component } from 'react'
import { Element } from 'react-scroll';
import Row from 'react-bootstrap/Row'

import StaffMember from '../components/StaffMember'
import BaseDiv from '../components/BaseDiv'


export default class Hosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg')
    }
  }
  render() {
    return (
      <Element name="Hosts" className="Hosts">
        <BaseDiv
          header="Meet Your Hosts"
          bg={this.state.background}
          maincontent={
            <Row>
              <StaffMember />
              <StaffMember />
            </Row>
          }
        />
      </Element>
    )
  }
}
