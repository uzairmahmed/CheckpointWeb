import React, { Component } from 'react'
import { Element } from 'react-scroll';
import Row from 'react-bootstrap/Row'

import StaffMember from '../components/StaffMember'
import BaseDiv from '../components/BaseDiv'

import {hostStyles} from '../styles'

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
            <Row style={hostStyles.container}>
              <StaffMember
                name="Uzair Ahmed"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                pfp={require('../assets/pfp2.jpeg')}
                link="https://www.uzairmahmed.com"
                linktext="My Website"
              />
              <StaffMember
                name="Uzair Ahmed"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                pfp={require('../assets/pfp2.jpeg')}
                link="https://www.uzairmahmed.com"
                linktext="My Website"
              />
            </Row>
          }
        />
      </Element>
    )
  }
}
