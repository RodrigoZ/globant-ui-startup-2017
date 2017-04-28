import React, { Component } from 'react';
//import FavoriteSongBox from  './FavoriteSongBox';

class FavoriteSongsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [
        'La bamba',
        'Himno Nacional Argentino',
        'Rock del pedazo'
      ]
    }

  }

  render() {
    const songs = this.state.songs.map( (item, idx)  => {
        return <li key={idx}> {item} </li>
    })
    return (
      <div>
        <h2> Canciones </h2>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}

export default FavoriteSongsContainer;
