import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import {Link} from "react-router"
import '../RemoveUser.css';

class RemoveUser extends Component{
  handleClick(e){
    if(this.state.userName != ""){
      alert("You are about to remove this user from db: "+ this.state.userName);
      //Method to interact with JSON API (@Skhumbuzo & Mnotho)
    }
    else{
      alert("Input is empty. Enter a feature to remove");
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
            <h1>Remove an existing user from a group</h1>
            <div>
            <form className="text-input">
              <input type="text" name="userName"  placeholder="Enter user name" className="input_removeUser_fromGroup" onChange={this.parseInputText.bind(this)}/>

              <Link to="groups/remove-user/remove-user-fromgroup">
                <input type="button" value="Search" className="primary_button" className="input_removeUser_fromGroup" onClick={this.handleClick.bind(this)}/>
              </Link>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RemoveUser;
