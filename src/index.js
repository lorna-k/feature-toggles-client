import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from "react-router";
import './index.css';

import Home from "./App";
import Feature from "./Feature_Manage";
import Group from "./Group_Manage";
import AddFeature from "./AddFeature";

class AppRouter extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"home"} component={Home} />
        <Route path={"features"} component={Feature}>
          <Route path={"/add-feature"} component={AddFeature} />
        </Route>
        <Route path={"groups"} component={Group} />
      </Router>
    );
  }
}

render(<AppRouter />, window.document.getElementById('root'));
