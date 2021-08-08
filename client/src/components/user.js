import React, { Component } from "react";


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      };    
  }

  render() {
    const { state } = this.props.history.location;
    console.log('data',state.data.data)
    console.log('id',state.data.data._id)
    return (
      <div className="submit-form">
        <h1>Welcome To Binaryveda Application!</h1>
            <div className="form-group">
              <label htmlFor="id">Id</label>
              <input
                type="text"
                className="form-control"
                id="id"
                required
                value={state.data.data._id}
                readOnly
                name="id"
              />
            </div>
           <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={state.data.data.email}
                readOnly
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
                value={state.data.data.firstName}
                readOnly
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
                value={state.data.data.lastName}
                readOnly
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
                value={state.data.data.password}
                readOnly
                name="password"
              />
            </div>
          </div> 
      </div>
    );
  }
}