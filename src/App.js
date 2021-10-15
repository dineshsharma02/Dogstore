import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './containers/login';
import Signup from './containers/signup';
import Store from './containers/store';
import Logout from "./containers/logout";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Store />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}