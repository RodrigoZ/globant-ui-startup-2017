import React, { Component } from 'react';
import logo from './sfotify.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="Header-img" src={logo} alt="Sfotify"></img>
      </div>
    );
  }
}

export default Header;
