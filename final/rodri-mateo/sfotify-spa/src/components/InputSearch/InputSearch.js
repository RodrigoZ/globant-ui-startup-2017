import React, {Component} from 'react';
import Request from 'superagent';
import './InputSearch.css';
import FavSong from '../FavoriteSongsContainer/FavoriteSongsContainer';

class InputSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artists: [],
      data: [],
      id: [],
      albums: [],
      songs: [],
      idAlb: [],
      songsPrv: [],
      cover: ''
    }
  }

  handleChange(event) {
    const query = event.target.value
    // Don't duplicate searches or send redundant network requests
    if (this.state.query === query) {
      return
    }
    this.setState({query: query})
    this.submitSearch(query)
  }

  submitSearch(keyword) {
    // If the keyword isn't present, set the data object to an empty object and
    // set a flag that the input has been cleared so we don't render any
    // pending AJAX requests after the user clears the input box
    if (!keyword.length > 0) {
      this.setState({query: '', artists: []})
      return
    }
    const url = `https://api.spotify.com/v1/search?type=artist&q=${keyword}`;
    Request.get(url).then((response) => {
      //Pass the parameters to another component to render the images?
      console.log("El del submit: " + response.body.artists.items[0].name);
      console.log(response.body.artists.items[0]);

      var arr = [];
      var arrId = [];

      for (var i in response.body.artists.items) {
        arr.push(response.body.artists.items[i].name);
        arrId.push(response.body.artists.items[i].id);
      }

      console.log("El array: " + arr);

      this.setState({artists: arr});
      this.setState({data: response.body.artists.items})
      this.setState({id: response.body.artists.items.id})

      console.log("DATA: " + this.state.data);
      console.log("ID: " + arrId);
    });
  }

  handleClickArtist(key) {

    for (var i in this.state.data) {
      if (this.state.data[i].name == key) {
        const id = this.state.data[i].id;
        const url = ` https://api.spotify.com/v1/artists/${id}/albums`;
        Request.get(url).then((response) => {

          var albArray = [];
          var albIdArray = [];

          for (var i in response.body.items) {
            albArray.push(response.body.items[i].name);
            albIdArray.push(response.body.items[i].id);
          }

          this.setState({albums: albArray})
          this.setState({idAlb: albIdArray})

          console.log(albIdArray);

        });
      }
    }
  }
  handleClickAlbum(key) {

    for (var i in this.state.albums) {
      if (this.state.albums[i] === key) {

        const id = this.state.idAlb[i];
        const url = ` https://api.spotify.com/v1/albums/${id}`;
        Request.get(url).then((response) => {

          var arrSongs = [];
          var arrPrv = [];
          var cover = '';

          for (var i in response.body.tracks.items) {
            arrSongs.push(response.body.tracks.items[i].name);
            arrPrv.push(response.body.tracks.items[i].preview_url);
            cover = response.body.images[0].url;
          }

          this.setState({songs: arrSongs})
          this.setState({songsPrv: arrPrv})
          this.setState({cover: cover})
        });
      }
    }
  }

  handleClickSong(key) {
    for (var i in this.state.songs) {
      if (this.state.songs[i] === key) {

        const id = this.state.songsPrv[i];
        const url = `${id}`
        Request.get(url).then((response) => {})
      }
    }
  }

  render() {
    var self = this;
    return (
      <div>
        <input type="text" ref="val" onChange={this.handleChange.bind(this)} id="inputSearch" placeholder="Search the name of your favorite artist"/>
        <h2>Artists</h2>
        <ul>
          {this.state.artists.map(function(listValue, i) {
            return <li key={i}>
              <a href="#" onClick={() => {
                {
                  self.handleClickArtist(listValue)
                }
              }}>{listValue}</a>
            </li>;
          })}
        </ul>

        <h2>Albums</h2>
        <ul>
          {this.state.albums.map(function(listAlbum, i) {
            return <li key={i}>
              <a href="#" onClick={() => {
                {
                  self.handleClickAlbum(listAlbum)
                }
              }}>{listAlbum}</a>
            </li>;
          })}
          <img src={this.state.cover} alt=""/>
        </ul>

        <h2>Songs input</h2>

        <ul>
          {this.state.songs.map(function(listSong, i) {
            return <li key={i}>
              <a href={self.state.songsPrv[i]}>{listSong}</a>
            </li>;
          })}
        </ul>

      </div>
    )
  }
}

export default InputSearch;
