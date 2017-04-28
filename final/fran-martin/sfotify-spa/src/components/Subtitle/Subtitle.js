import React, { Component } from 'react';
import './Subtitle.css'

class Subtitle extends Component {

   render() {
      return (
           <div>
                <h2>{this.props.subtitleText}</h2>
           </div>
      );
   }
}

Subtitle.defaultProps = {
    subtitleText: "Search your favourite songs over Spotify, just enter an artist's name in the following search box and enjoy!"
}

export default Subtitle;
