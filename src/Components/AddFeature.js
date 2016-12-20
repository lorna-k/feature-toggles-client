import React, { Component } from 'react';
import {Link} from "react-router"
import logo from '../AG-Logo.png';
import '../AddFeature.css';


class AddFeature extends Component{
  render(){
    return(
      <div className="Add_feat">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="container">
          <div className="form-style-8">
            <h1>Add a Feature</h1>
            <div>
              <form className="text-input">
                <input  type="text" name="field1" placeholder="Enter feature name" className="input_addFeature"/>
                <input type="button" value="Save" className="input_addFeature"/>

              </form>
            </div>
            
            <div className="x">
              <input className="y" type="button" value="Done"/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default AddFeature;
