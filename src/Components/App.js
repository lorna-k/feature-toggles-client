import React, { Component } from 'react';
import {Link} from "react-router"
import logo from '../AG-Logo.png';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="/home"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id="main_div">
          <h1 className="welcome">Welcome to the feature toggling system</h1>
          <ul>
            <li className="primary_button feat-mng"><Link to="/features">Feature Management</Link></li>
            <br />
            <li className="secondary_button group-mng"><Link to="/groups">Group Management</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
