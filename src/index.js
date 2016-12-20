import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from "react-router";
import './index.css';

import Home from "./Components/App";
import Feature from "./Components/Feature_Manage";
import Group from "./Components/Group_Manage";
import AddFeature from "./Components/AddFeature";

class AppRouter extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"home"} component={Home} />
        <Route path={"features"} component={Feature}/>
        <Route path={"features/add-feature"} component={AddFeature} />
        <Route path={"groups"} component={Group} />
      </Router>
    );
  }
}

render(<AppRouter />, window.document.getElementById('root'));
