import React, { Component } from 'react';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';
import EmailAlbum from './EmailAlbum'
import HandleEmail from './HandleEmail'
import { HashRouter, Route, Switch} from 'react-router-dom';

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
          <Switch>
            <Route path= '/' component={StatefulAlbums} exact />
            <Route path="/albums/:albumId/add-post" component={HandleEmail} exact />
            <Route path="/albums/:albumId/new-post" component={EmailAlbum}exact />
            <Route path= '/albums' component={StatefulAlbums} exact />
            <Route path= '/albums/:albumId' component={SingleAlbum} exact/>
            <Route path= '/artists' component={AllArtists} exact />
            <Route path= '/artists/:artistId' component={SingleArtist} />
            <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
        </HashRouter>
      </div>
    );
  }
}
