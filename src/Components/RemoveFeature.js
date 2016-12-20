import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../RemoveFeature.css';

class RemoveFeature extends Component{
  handleClick(e){
    if(this.state.featureName != ""){
      alert("You are about to remove this feature from db: "+ this.state.featureName);
      //Method to interact with JSON API (@Skhumbuzo & Mnotho)
    }
    else{
      alert("Input is empty. Enter a feature to remove");
    }
  }
  parseInputText(e){
    this.setState({featureName: e.target.value});
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
            <h1>Remove an existing feature</h1>
            <form className="text-input">
              <input type="text" name="featureName" placeholder="Enter feature name" onChange={this.parseInputText.bind(this)}/>
              <button className="primary_button" onClick={this.handleClick.bind(this)}>Remove</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default RemoveFeature;
