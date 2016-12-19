import React, { Component } from 'react';
import logo from './AG-Logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div id="main_div">
          <center>
            <a className="primary_button feat-mng" href="feature_manage.html">Feature Management</a>
            <br />
            <a className="secondary_button group-mng" href="group_manage">Group Management</a>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
