return (

    import React, { Component } from 'react';
    import logo from './AG-Logo.png';


    class add_feature extends Component {
      render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Feature Name:</h2>
              <input type="text" name="name" /><br/>
              <button className="x">Done</button>
            </div>
          </div>
        );
      }
    }

    export default add_feature;
