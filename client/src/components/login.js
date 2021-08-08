import React, { Component } from "react";
import UserDataService from "../services/index.js";
// import { Redirect, useHistory } from "react-router-dom";
// import SignUp from "../components/signup.js";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  login() {
    
    var data = {
      email: this.state.email,
      password: this.state.password
    };

    UserDataService.login(data)
      .then(response => {
        this.setState({
          email: response.data.email,
          password: response.data.password
        });
        console.log('res',response.status)
        if(response.status === 200){
          this.props.history.push('/user',{data:response.data});
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="submit-form">
          <h1>Login Here</h1>
          <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <button onClick={this.login} className="btn btn-success">
              Login
            </button>
          </div>
      </div>
    );
  }
}