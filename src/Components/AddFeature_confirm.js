import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import breadcrumb_logo from '../breadcrumb-logo.png';
import '../AddFeature_confirm.css';
import request from "request";


class AddFeature_confirm extends Component{

  //ReactJs code for rendering components
  render(){
    return(
      //You can only return one div. SO wrap everything under one div
      <div className="Add_feat">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>

        </div>

        <div className="breadcrumbs">
          <ul>
          <a href="/home">  <li className="page-text">Home</li></a>
              <li className="arrow-logo"><img src={breadcrumb_logo} /></li>
          <a href="/features"><li className="page-text">Feature Management</li></a>
              <li className="arrow-logo"><img src={breadcrumb_logo} /></li>
              <a href="/features/add-feature"><li className="page-text">Add a Feature</li></a>
                  <li className="arrow-logo"><img src={breadcrumb_logo} /></li>
            <li className="current-page">Feature Confirmation</li>
          </ul>
        </div>

        <div id="container">
          <div className="form-style-8">
            <div className="confirmationbox">
                <div>
                  <h1>Feature added successfully</h1>
               </div>
               <div className="emptydiv_confirm">
               </div>
               <div className="input_confirm">
                 <a href="/home"><button className="primary_button">Done</button></a>
               </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}
export default AddFeature_confirm;
