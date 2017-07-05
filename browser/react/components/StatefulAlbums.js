import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AllAlbums from './AllAlbums'

export default class StatefulAlbums extends Component {

  constructor(){
    super();
    this.state = { albums: []};
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }

  render(){
    return (<AllAlbums albums={this.state.albums}/>)
  }

}
