import React, { Component } from 'react';
import logo from './AG-Logo.png';
import './App.css';
//import FormField from '@agct/react-common/src/components/FormField/FormField';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div id="main_div">
        <div className="form-style-8">
          <h1>Add a Feature</h1>
          <form className="text-input">
            <input type="text" name="field1" placeholder="Enter feature name" />
            <input type="button" value="Save" />
          </form>

        </div>
      </div>
      </div>
      );
  }
}

export default App;
