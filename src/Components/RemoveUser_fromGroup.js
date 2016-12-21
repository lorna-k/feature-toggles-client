import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../RemoveUser_fromGroup.css';


class RemoveUser_fromGroup extends Component{


  render(){
    return(

      <div className="Add_feat">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="container">
          <div className="form-style-8">
            <h1>Enter the group name</h1>

            <div>
              <form className="text-input">
                <input  type="text" name="groupName" placeholder="Enter Group Name" className="input_removeUser_fromGroup" />
                <input type="button" value="Save" className="primary_button" className="input_removeUser_fromGroup"/>

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
