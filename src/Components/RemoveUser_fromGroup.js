import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../RemoveUser_fromGroup.css';
import breadcrumb_logo from '../breadcrumb-logo.png';


class RemoveUser_fromGroup extends Component{


  render(){
    return(

      <div className="Add_feat">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>

        <div className="breadcrumbs">
          <ul>
              <a href="/home">  <li className="page-text">Home</li></a>
                <li className="arrow-logo"><img src={breadcrumb_logo}  alt="breadcrumb_logo" /></li>
              <a href="/groups"><li className="page-text" >Group Management</li></a>
                <li className="arrow-logo"><img src={breadcrumb_logo}  alt="breadcrumb_logo"/></li>
              <li className="page-text">Removexvxcvc User</li>
                <li className="arrow-logo"><img src={breadcrumb_logo}  alt="breadcrumb_logo" /></li>
              <li className="current-page">Select Group</li>
          </ul>
        </div>

        <div id="container">
          <div className="form-style-8">
            <h1>Enter the group namewer</h1>

            <div>
              <form className="text-input">
                <input  type="text" name="groupName" placeholder="Enter Group Name" className="input_removeUser_fromGroup" />
                <input type="button" value="Sashfdhgfhve" className="primary_button" className="input_removeUser_fromGroup"/>

              </form>
            </div>

            <div className="done_addUser_toGroup">
              <input className="y" type="button" value="Done"/>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
export default RemoveUser_fromGroup;
