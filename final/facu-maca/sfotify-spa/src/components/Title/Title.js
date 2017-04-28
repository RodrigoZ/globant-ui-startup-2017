import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    const title = this.props.texts;

    return (
      <div>
        <h1 className="default">{title}</h1>
      </div>
    );
  }
}

export default Title;
