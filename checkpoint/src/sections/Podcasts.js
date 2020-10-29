import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'

import PodcastItem from '../components/PodcastItem'
import BaseDiv from '../components/BaseDiv'

import { podcastStyles } from '../styles'

import podcastsFile from '../cms/podcasts.json'

export default class Hosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/7.jpg')
    }
  }
  render() {
    return (
      <BaseDiv
      navName="Podcasts"
          header="Listen to our Podcasts."
          bg={this.state.background}
          maincontent={
            <Row style={podcastStyles.container}>
              {podcastsFile.map((podcast) => {
                return (
                  <PodcastItem
                    name={podcast.name}
                    desc={podcast.headline}
                    spotify={podcast.link_spotify}
                    apple={podcast.link_apple}
                  />
                )
              })}
            </Row>
          }
        />
    )
  }
}
