import React, { Component } from 'react';
import {Link} from "react-router"
import logo from './AG-Logo.png';

class Feature_Manage extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="main_div">
          <ul>
            <a className="primary_button feat-mng" href="/features/add-feature">Add feature to a group</a>
            <br />
            <a className="secondary_button group-mng" href="#">Remove feature from a group</a>
            <br />
            <a className="secondary_button group-mng" href="#">Assign feature to a group</a>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feature_Manage;
