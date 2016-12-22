import React, { Component } from 'react';
import logo from '../AG-Logo.png';
import '../RemoveFeature.css';
import request from "request";

class RemoveFeature extends Component{
  //server manipulation functions


  deleteFeature(name)
  {

     var match=false;

    request({
      url: "http://localhost:3000/features",
      method: "GET",
      json:true,

    }, function(error, response, body)
       {

            var jsonBody = JSON.parse(body);
            for(var i = 0; i < jsonBody.length; i++)
            {

              if (name === (jsonBody[i].name))
              {

                match=true;
                //this.deleteFeatureById(jsonBody[i].id);
                var ID=jsonBody[i].id;

                 alert("got it");
              }

            }
            if(!match)
            {
              alert("Feature to delete not found");



            }

        });

  }


  deleteFeatureById(ID)
  {

    request({
        url:"http://localhost:3000/features/"+ID,
        method:"DELETE",
        json:true,


      }, function (error,response,body)
         {
              if(error)
              {
                console.log("feature not deleted error");
                return error;
              }

           });
  }




  handleClick(e){
    if(this.state.featureName !== ""){
      alert("You are about to remove this feature from db: "+ this.state.featureName);
      this.deleteFeature("scrum");

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
              <input type="text" name="featureName" placeholder="Enter name of feature to remove" onChange={this.parseInputText.bind(this)}/>
              <button className="primary_button" onClick={this.handleClick.bind(this)}>Remove</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default RemoveFeature;
