import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'

import PodcastItem from '../components/PodcastItem'
import BaseDiv from '../components/BaseDiv'
import { Element } from 'react-scroll';

import { podcastStyles } from '../styles'

import podcastsFile from '../cms/podcasts.json'

export default class Hosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '/assets/backgrounds/7.jpg'
    }
  }
  render() {
    return (
      <Element name="Podcasts" className="Podcasts">

        <BaseDiv
          header="Listen to our Podcasts."
          bg={this.state.background}
          maincontent={
            <Row xs={1} sm={1} md={1} lg={2} xl={2}
              style={podcastStyles.container}>
              {podcastsFile.map((podcast) => {
                return (
                  <PodcastItem
                    name={podcast.name}
                    desc={podcast.headline}
                    hosts={podcast.hosts}
                    spotify={podcast.link_spotify}
                    apple={podcast.link_apple}
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
