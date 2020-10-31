import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'

import BaseDiv from '../components/BaseDiv'
import { Element } from 'react-scroll';

import ContactCard from "../components/ContactCard";
import Col from 'react-bootstrap/Col';

import { TwitterTimelineEmbed } from "react-twitter-embed";

import socialsFile from '../cms/socials.json'

export default class Hosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/6.jpg')
    }
  }
  render() {
    return (
      <Element name="Contact" className="Contact">
        <BaseDiv
          header="Connect with us."
          bg={this.state.background}
          maincontent={
            <Row xs={1} sm={1} md={1} lg={2} xl={2} style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
              <Col style={{ alignItems: "center", justifyContent: "center" }}>
                <ContactCard
                  value={socialsFile.email}
                  link={"mailto:" + socialsFile.email}
                  img={require('../assets/icons/email.png')}
                />
                <ContactCard
                  value={"@" + socialsFile.twitter}
                  link={"https://twitter.com/" + socialsFile.twitter}
                  img={require('../assets/icons/twitter.png')}
                />
              </Col>
              <Col style={{ justifyContent: "center" }}>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName={socialsFile.twitter}
                  options={{
                    width: "100%",
                    height: "450"
                  }}
                  theme="light"
                  noBorders="true"
                  noFooter="true"
                ></TwitterTimelineEmbed>
              </Col>
            </Row>
          }
        />
      </Element>
    )
  }
}
