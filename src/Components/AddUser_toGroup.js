import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../AddUser_toGroup.css';


class AddUser_toGroup extends Component{


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
                <input  type="text" name="featureName" placeholder="Enter Group Name" className="input_addFeature" />
                <input type="button" value="Save" className="input_addFeature"/>

              </form>
            </div>
            
            <div className="done_AddUser_toGroup">
              <input className="y" type="button" value="Done"/>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
export default AddUser_toGroup;
