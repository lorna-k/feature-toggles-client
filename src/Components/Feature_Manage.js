import React, { Component } from 'react';
import {Link} from "react-router"
import logo from '../AG-Logo.png';

class Feature_Manage extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="main_div">
          <ul>
            <li className="primary_button feat-mng"><Link to="features/add-feature">Add new feature to a group</Link></li>
            <br />
            <li className="secondary_button group-mng"><Link to="features/remove-feature">Remove feature from a group</Link></li>
            <br />
            <li className="secondary_button group-mng"><Link to="#">Assign feature to a group</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Feature_Manage;
