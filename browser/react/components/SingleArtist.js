import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route} from 'react-router-dom';
import axios from 'axios';
import Songs from './Songs';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {

  constructor(){
    super();
    this.state = { 
      artist : {},
      albums : [],
      songs : []
    };
  }

  componentDidMount(){
    var artistId = this.props.match.params.artistId;
    console.log('artist ID??? ', artistId);
    var artistPromise = axios.get(`/api/artists/${artistId}`);
    var albumsPromise = axios.get(`api/artists/${artistId}/albums`);
    var songsPromise = axios.get(`api/artists/${artistId}/songs`);

    Promise.all([artistPromise, albumsPromise, songsPromise])
    .then(res => {
      this.setState({
        artist: res[0].data,
        albums : res[1].data,
        songs : res[2].data
      });
    })
    .catch(function(err){
      console.log(err);
    });
  }

  // render () {
  //   console.log('hi', this.state);
  //   var information = this.state;
  //   return (
  //     <div>
  //       <h3>{information.artist.name}</h3>
  //       <AllAlbums albums={information.albums}/>
  //       <Songs songs={information.songs}/>
  //     </div>
  //     );
  // }


  render () {

    const artist = this.state.artist; // or however you've named it
    const artistAlbums = this.state.albums;
    const artistSongs = this.state.songs;
    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>

          <Route path="/artists/:artistId/albums" render={
  (routeProps) => <AllAlbums albums={artistAlbums} />
} />
          <Route path="/artists/:artistId/songs" render={
  (routeProps) => <Songs songs={artistSongs} />
} />
      </div>
    );
  }
}
