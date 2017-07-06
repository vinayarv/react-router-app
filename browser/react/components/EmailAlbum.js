import React from 'react'
import {Link} from 'react-router-dom'

export default class EmailAlbum extends React.Component{

  render() {
    return (
    <form >
      <input type='textarea' name="comment"/>
      <Link to={`/albums/${this.props.match.params.albumId}/add-post`}>
      <input type="submit" value="Send"/>
      </Link>
    </form>
    )
  }
}
