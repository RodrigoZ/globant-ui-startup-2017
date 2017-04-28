import React, { Component } from 'react';
import './InputSearch.css';

class InputSearch extends Component {
  render() {
    return (
      <form method="get" action="/">
        <label htmlFor="txtArtist">Search for an artist</label>
        <input type="text" name="txtArtist" id="txtArtist" placeholder="Search the name of your favorite artist" />

        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default InputSearch;
