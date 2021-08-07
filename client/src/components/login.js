import React, { Component } from "react";
import UserDataService from "../services/index.js";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      email: "",
      password: "", 
      published: false,

      submitted: false
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

  saveUser() {
    var data = {
      email: this.state.email,
      password: this.state.password
    };

    UserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          email: response.data.email,
          password: response.data.password,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: null,
      email: "",
      password: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
          <h1>Login Here</h1>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Add
            </button>
          </div>
        ) : (
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

            <button onClick={this.saveUser} className="btn btn-success">
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}