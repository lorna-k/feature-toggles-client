import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import breadcrumb_logo from '../breadcrumb-logo.png';
import '../AddFeature.css';
import request from "request";


class AddFeature extends Component{
  //server manipulation functions

  //function to get the highest id
  get_highest(){

    request({
      hostname: 'localhost',
      port: 3000,
      path: 'features/',
      url: "http://localhost:3000/features",
      method: "GET",

    }, function(error, response, body) {

    var jsonBody = JSON.parse(body);
    var max_id = 0 ; //max_id
    for(var i = 0; i < jsonBody.length; i++) {
      console.log(jsonBody[i].id) //the object itself - The feature
      if (i === jsonBody.length-1)
      {
        max_id = jsonBody[i].id;
      }
    }
  });

  }

  //node code to add a new feature to db
  addFeature(name){
    var formData = {
        "id" : 5,
        "applicationId" : 258,
        "name" : "latest"
    }

    //get the highest id and increment
    formData.id = this.get_highest() + 1;
    formData.name = name;

    request({
      url: "http://localhost:3000/features",
      method: "POST",
      json: true,
      body: formData
    }, function(error, response, body) {
      if(error) {
        console.log("something went wrong with posting");
        return error;
      }
      else {
          alert(name+" has been added to database");
          console.log("feature added");
      }
    });
  }

  handleClick(e){
    if(this.state.featureName !== ""){
      alert("You are about to add this feature to db: "+ this.state.featureName);
      this.addFeature(this.state.featureName);
      //Method to interact with JSON API (@Skhumbuzo & @Mnotho)
    }
    else{
      alert("Input is empty. Enter a feature to add");
    }
  }
  parseInputText(e){
    this.setState({featureName: e.target.value});
  }

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
            <li className="current-page">Add Feature</li>
          </ul>
        </div>

        <div id="container">
          <div className="form-style-8">
          <h1>Add a Feature</h1>
            <div>
              <form className="text-input">
                <input  type="text" name="featureName" placeholder="Enter feature name" className="input_addFeature" onChange={this.parseInputText.bind(this)}/>
                <input type="button" value="Save" className="input_addFeature" onClick={this.handleClick.bind(this)}/>

              </form>
            </div>

            <div className="done_Addfeature">
              <input className="done_button" type="button" value="Done"/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default AddFeature;
