import React, { Component } from "react";
import UserDataService from "../services/index.js";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);

    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

    this.saveUser = this.saveUser.bind(this);
    // this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  saveUser() {
    var data = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword

    };

    UserDataService.signUp(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          password: response.data.password,
          confirmPassword: response.data.confirmPassword
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

//   newUser() {
//     this.setState({
//       id: null,
//       email: "",
//       firstName: "",
//       lastName: "",
//       password: "",
//       confirmPassword:""
//     });
//   }

  render() {
    return (
      <div className="submit-form">
        
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
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                name="lastName"
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

            <div className="form-group">
              <label htmlFor="confirmPassword">confirm Password</label>
              <input
                type="text"
                className="form-control"
                id="confirmPassword"
                required
                value={this.state.confirmPassword}
                onChange={this.onChangeConfirmPassword}
                name="confirmPassword"
              />
            </div>

            

            <button onClick={this.saveUser} className="btn btn-success">
              SignUp
            </button>
          </div>
      </div>
    );
  }
}