import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import User from "./components/user.js";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/login" className="navbar-brand">
            Binaryveda
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/signUp"} className="nav-link">
                SignUp
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;