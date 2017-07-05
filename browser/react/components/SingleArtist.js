import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllAlbums extends Component {

  constructor(){
    super();
    this.state = { currentArtist: {}};
  }

  componentDidMount(){
    var artistId = this.props.match.params.artistId;
    axios.get(`/api/artists/${artistId}`)
    .then(res => res.data)
    .then(artist => this.setState({
      currentArtist: artist
    }));
  }

  render () {
    const artist = this.state.currentArtist;
    console.log('hi', artist);
    return (
      <div>
        <h3>ARTIST NAME</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>
    );
  }
}
