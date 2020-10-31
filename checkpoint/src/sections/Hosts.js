import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'

import StaffMember from '../components/StaffMember'
import BaseDiv from '../components/BaseDiv'
import { Element } from 'react-scroll';

import { hostStyles } from '../styles'

import hostsFile from '../cms/hosts.json'

export default class Hosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/4.jpg')
    }
  }
  render() {
    return (
      <Element name="Hosts" className="Hosts">
        <BaseDiv
          header="Meet Your Hosts"
          bg={this.state.background}
          maincontent={
            <Row xs={1} sm={1} md={1} lg={2} xl={2}
              style={hostStyles.container}>
              {hostsFile.map((host) => {
                console.log(host)
                return (
                  <StaffMember
                    name={host.name}
                    desc={host.body}
                    pfp={require("../assets" + host.profilepic)}//.replace('/images',''))}
                    link={host.link}
                    linktext={host.link_title}
                  />
                )
              })}
            </Row>
          }
        />
      </Element>
    )
  }
}
