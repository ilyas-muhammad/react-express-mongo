import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { TodoManage } from './TodoManage';
import style from './style.css';


class IndexApp extends Component {
  render() {
    return (
      <div>
        <h1 className='app-page-title'>React Express Node</h1>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Login}/>
            {/* <Route exact path={'/'} component={Home}/> */}
            <Route exect path={'/todo'} component={Home} />
            <Route exact path={'/create-todo'} component={TodoManage}/>
            <Route exact path={'/create-todo/:id'} component={TodoManage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default IndexApp;
