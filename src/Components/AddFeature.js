import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../AddFeature.css';


class AddFeature extends Component{
  handleClick(e){
    if(this.state.featureName != ""){
      alert("You are about to add this feature to db: "+ this.state.featureName);
      //Method to interact with JSON API (@Skhumbuzo & Mnotho)
    }
    else{
      alert("Input is empty. Enter a feature to add");
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
            <h1>Add a Feature</h1>

            <div>
              <form className="text-input">
                <input  type="text" name="featureName" placeholder="Enter feature name" className="input_addFeature" onChange={this.parseInputText.bind(this)}/>
                <input type="button" value="Save" className="input_addFeature" onClick={this.handleClick.bind(this)}/>

              </form>
            </div>

            <div className="done_Addfeature">
              <input className="y" type="button" value="Done"/>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
export default AddFeature;
