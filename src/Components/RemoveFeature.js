import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../RemoveFeature.css';
import breadcrumb_logo from '../breadcrumb-logo.png';

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
        <div className="breadcrumbs">
          <ul>
          <a href="/home">  <li className="page-text">Home</li></a>
              <li className="arrow-logo"><img src={breadcrumb_logo} /></li>
          <a href="/features"><li className="page-text">Feature Management</li></a>
              <li className="arrow-logo"><img src={breadcrumb_logo} /></li>
            <li className="current-page">Remove Feature</li>
          </ul>
        </div>
        <div id="container">
          <div className="form-style-8">
            <h1>Remove an existing feature</h1>
            <div>
              <form className="text-input">
                <input type="text" name="featureName" placeholder="Enter feature name" className="input_addFeature" onChange={this.parseInputText.bind(this)}/>
                <input type="button" value="Remove" className="input_addFeature" onClick={this.handleClick.bind(this)}/>
              </form>
            </div>
            <div className="done_removefeature">
              <input type="button" id="y" value="Done"/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default RemoveFeature;
