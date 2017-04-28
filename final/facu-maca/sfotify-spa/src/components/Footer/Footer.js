import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">{this.props.text}</footer>
        );
    }
}

export default Footer;
