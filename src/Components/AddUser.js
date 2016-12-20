import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../AddUser.css';

class AddUser extends Component{
  handleClick(e){
    if(this.state.userName != ""){
      alert("You are about to add this user to db: "+ this.state.userName);
      //Method to interact with JSON API (@Skhumbuzo & Mnotho)
    }
    else{
      alert("Input is empty. Enter a feature to add");
    }
  }
  parseInputText(e){
    this.setState({userName: e.target.value});
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
            <h1>Add a new user to a group</h1>
            <form className="text-input">
              <input type="text" name="userName" placeholder="Enter user name" onChange={this.parseInputText.bind(this)}/>
              <button className="primary_button" onClick={this.handleClick.bind(this)}>Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddUser;
