import React, { Component } from 'react';
import logo from './AG-Logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="main_div">
          <ul>
            <a className="primary_button feat-mng" href="/features">Feature Management</a>
            <br />
            <a className="secondary_button group-mng" href="/groups">Group Management</a>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
