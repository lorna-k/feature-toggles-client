import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from "react-router";
import './index.css';

import Home from "./Components/App";
import Feature from "./Components/Feature_Manage";
import Group from "./Components/Group_Manage";
import AddFeature from "./Components/AddFeature";
import RemoveFeature from "./Components/RemoveFeature";
import AddUser from "./Components/AddUser";
import AddUser_toGroup from "./Components/AddUser_toGroup";
import RemoveUser from "./Components/RemoveUser";

class AppRouter extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path={"home"} component={Home}/>
        <Route path={"features"} component={Feature}/>
        <Route path={"features/add-feature"} component={AddFeature} />
        <Route path={"features/remove-feature"} component={RemoveFeature} />
        <Route path={"groups"} component={Group} />
        <Route path={"groups/add-user"} component={AddUser} />
        <Route path={"groups/add-user/add-user-togroup"} component={AddUser_toGroup} />
        <Route path={"groups/remove-user"} component={RemoveUser} />
      </Router>
    );
  }
}

render(<AppRouter />, window.document.getElementById('root'));
