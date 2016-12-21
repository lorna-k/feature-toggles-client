import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import {Link} from "react-router"
import '../AddUser.css';
import request from "request";

class AddUser extends Component{
  //server manipulation functions

  //function to get the highest id
  get_highest(){

    request({
      hostname: 'localhost',
      port: 3000,
      path: 'features/',
      url: "http://localhost:3000/users",
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
  addNewUser(name){
    var formData = {
        "id" : 3,
        "username" : "wanderson.banks"
    }

    //get the highest id and increment
    formData.id = this.get_highest() + 1;
    formData.username = name;

    request({
      url: "http://localhost:3000/users",
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
          console.log("user added");
      }
    });
  }

  handleClick(e){
    if(this.state.userName !== ""){
      alert("You are about to add this user to db: "+ this.state.userName);
      this.addNewUser(this.state.userName);
      //Method to interact with JSON API (@Skhumbuzo & Mnotho)
    }
    else{
      alert("Input is empty. Enter a feature to add");
    }
  }
  parseInputText(e){
    var username = e.target.value.toLowerCase().split(" ");
    this.setState({userName: username.join(".")});
  }
  render(){
    return(
      //You can only return one div. SO wrap everything under one div
      <div className="Add_feat">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="container">
          <div className="form-style-8">
            <h1>Adding an existing user to a group</h1>

            <div>
            <form className="text-input">

              <input type="text" name="userName" placeholder="Enter name and surname separated by whitespace" onChange={this.parseInputText.bind(this)}/>
              <button className="primary_button" onClick={this.handleClick.bind(this)}>Save</button>
            </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default AddUser;
