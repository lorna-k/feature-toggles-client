import React, { Component } from 'react';
import {Link} from "react-router"
import logo from '../AG-Logo.png';

class Group_Manage extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="main_div_second">
          <ul>
          <li className="primary_button feat-mng"><Link to="groups/add-user">Add new user to a group</Link></li>
          <br />
          <li className="secondary_button group-mng"><Link to="groups/remove-user">Remove a user from a group</Link></li>
          <br />
          <li className="secondary_button group-mng"><Link to="#">Assign feature to a group</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Group_Manage;
