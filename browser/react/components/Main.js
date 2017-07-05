import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';
import { HashRouter, Route} from 'react-router-dom';

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <HashRouter>
        <div>
          <div className="col-xs-2">
            <Sidebar/>
          </div>
          <div className="col-xs-10">
            <Route path= '/' component={StatefulAlbums} exact />
            <Route path= '/albums' component={StatefulAlbums} exact />
            <Route path= '/albums/:albumId' component={SingleAlbum} />
            <Route path= '/artists' component={AllArtists} exact />
            <Route path= '/artists/:artistId' component={SingleArtist} />
          </div>
          <Player />
        </div>
        </HashRouter>
      </div>
    );
  }
}
