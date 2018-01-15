import React, { Component } from 'react';
import './App.css';
import Profile from './profile/profile';
import Maintenance from './maintenance/maintenance';
import Electrician from './electrician/electrician';
import Carpenter from './carpenter/carpenter';
import Gardner from './gardner/gardner';
import Plumber from './plumber/plumber';
import Maid from './maid/maid';
import Others from './others/others';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Main Router</h2>
          <ul>
            <li><Link to={'/profile'}>Profile Component</Link></li>
            <li><Link to={'/maintenance'}>Maintenance Component</Link></li>
            </ul>
          
          <Switch>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/maintenance' component={Maintenance} />
            <Route exact path='/electrician' component={Electrician} />
            <Route exact path='/gardner' component={Gardner} />
            <Route exact path='/carpenter' component={Carpenter} />
            <Route exact path='/plumber' component={Plumber} />
            <Route exact path='/maid' component={Maid} />
            <Route exact path='/others' component={Others} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;


/*

      <div className="App">


      <Profile/>
      <Maintenance/>
        <Electrician/> 
         <Carpenter/>
          <Gardner/>
            <Plumber/> 
                <Maid/> 
                <Others/>
      </div>
*/