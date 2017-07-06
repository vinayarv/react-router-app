import React, { Component } from 'react';
import Songs from '../components/Songs';
import StatefulAlbums from './StatefulAlbums'
import EmailAlbum from './EmailAlbum'
import { Route, Link} from 'react-router-dom'
import axios from 'axios';

export default class SingleAlbum extends Component {

  constructor(){
    super();
    this.state = {
      selectedAlbum: {}
    }
  }

  componentDidMount(){
    var albumId = this.props.match.params.albumId;
    axios.get(`/api/albums/${albumId}`)
    .then(res => res.data)
    .then(album => this.setState({
      selectedAlbum: album
    }));
  }

  render () {
    const album = this.state.selectedAlbum;

    return (
      // (Object.keys(album).length === 0) ?
      // <Route component={StatefulAlbums} /> :
      <div className="album">
        <div>
          <h3>{ album.name }
          <Link to={`/albums/${album.id}/new-post`}>
          <button type="button" className='btn btn-default'><span className='glyphicon glyphicon-envelope' /></button>
          </Link>
          </h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />

      </div>
    );
  }
}


