import React, { Component } from 'react';
import {Link} from "react-router"
import logo from './AG-Logo.png';

class AddFeature extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="main_div">
          <h1>This is the UI for adding a feature</h1>
        </div>
      </div>
    );
  }
}
export default AddFeature;
