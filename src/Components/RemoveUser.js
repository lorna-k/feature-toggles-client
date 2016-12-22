import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import {Link} from "react-router"
import '../RemoveUser.css';
import breadcrumb_logo from '../breadcrumb-logo.png';

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
        <div className="breadcrumbs">
          <ul>
              <a href="/home">  <li className="page-text">Home</li></a>
              <li className="arrow-logo"><img src={breadcrumb_logo}  alt="breadcrumb_logo"/></li>
              <a href="/groups"><li className="page-text" >Group Management</li></a>
              <li className="arrow-logo"><img src={breadcrumb_logo}  alt="breadcrumb_logo" /></li>
              <li className="current-page">Remove User</li>
          </ul>
        </div>
        <div id="container">
          <div className="form-style-8">
            <h1>Remove an existing user from a group</h1>

            <div>
            <form className="text-input">
              <input type="text" name="userName"  placeholder="Enter user name" className="input_removeUser" onChange={this.parseInputText.bind(this)}/>

              <Link to="groups/remove-user/remove-user-fromgroup">
                <input type="button" value="Search" className="primary_button" className="input_removeUser" onClick={this.handleClick.bind(this)}/>
              </Link>
              <div className="emptydiv"></div>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RemoveUser;
