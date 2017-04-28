import React, { Component } from 'react';
import './FavoriteSongBox.css';

class FavoriteSongBox extends Component {
  render() {
    return (
      <div className="FavoriteSongBox">
        <div className="FavoriteSongBox-album">
          <img src={this.props.logo} className="FavoriteSongBox-albumImage" alt={this.props.albumName} />
        </div>
        <div className="FavoriteSongBox-description">
          <p className="FavoriteSongBox-songName">{this.props.songName}</p>
          <p className="FavoriteSongBox-artistName">{this.props.artistName}</p>
          <p className="FavoriteSongBox-albumName">{this.props.albumName}</p>
        </div>
      </div>
    );
  }
}

export default FavoriteSongBox;
