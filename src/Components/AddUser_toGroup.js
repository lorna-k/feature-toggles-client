import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../AddUser_toGroup.css';
import breadcrumb_logo from '../breadcrumb-logo.png';



class AddUser_toGroup extends Component{


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
              <a href="/groups/add-user"><li className="page-text">Add User</li></a>
                <li className="arrow-logo"><img src={breadcrumb_logo}  alt="breadcrumb_logo" /></li>
              <li className="current-page">Select Group</li>
          </ul>
        </div>

        <div id="container">
          <div className="form-style-8">
            <h1>Enter the group name</h1>

            <div>
              <form className="text-input">
                <input  type="text" name="featureName" placeholder="Enter Group Name" className="input_addUser_toGroup" />
                <input type="button" value="Save" className="primary_button" className="input_addUser_toGroup"/>

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
export default AddUser_toGroup;
