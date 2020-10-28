import React, { Component } from 'react'
import { Element } from 'react-scroll';
import Row from 'react-bootstrap/Row'

import PodcastItem from '../components/PodcastItem'
import BaseDiv from '../components/BaseDiv'

import ContactCard from "../components/ContactCard";
import Col from 'react-bootstrap/Col';

import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Hosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/6.jpg')
    }
  }
  render() {
    return (
      <Element name="Podcasts" className="Podcasts">
        <BaseDiv
          header="Connect with us."
          bg={this.state.background}
          maincontent={
            <Row style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
              <Col style={{ alignItems: "center", justifyContent: "center" }}>
                <ContactCard
                  value="uzairmahmed@gmail.com"
                  link="mailto:uzairmahmed@gmail.com"
                  img={require('../assets/icons/mail.png')}
                />
                <ContactCard
                  value="@CheckpointNowMD"
                  link="https://twitter.com/CheckpointNowMD"
                  img={require('../assets/icons/insta.png')}
                />
              </Col>
              <Col style={{justifyContent: "center"}}>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="CheckpointNowMD"
                  options={{
                    // tweetLimit: "5",
                    width: "100%",
                    height: "450"
                  }}
                  theme="light"
                  // noHeader="true"
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
