import React, { Component } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
import { MDBCloseIcon } from "mdbreact";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import "./UserRegistration.css";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { Link } from "react-router-dom";

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
// change handler
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // reset form
  resetForm = () => {
    this.setState({ email: "", password: ""});
}
// submit
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login_form/postLogin", this.state)
      .then((response) => {
        console.log(response);
        console.log("the login details inserted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { username,email, password, confirmPassword } = this.state;
    console.log(this.state);
    return (
      <div>
        <MDBCloseIcon
          className="close_icon"
          onClick={(event) => (window.location.href = "/")}
        />
        <div className="user_registration">
          <form className="form" onSubmit={this.submitHandler}>
            <h2 className="registration_heading">Registration Form</h2>
            <MuiThemeProvider>
            <TextField
                type="username"
                name="username"
                value={username}
                onChange={this.changeHandler}
                floatingLabelText="User name"
                className="input_method"
              />
              <TextField
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
                floatingLabelText="Email"
                className="input_method"
              />
              {/* <p>{errors.email?.message}</p> */}
              <TextField
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
                floatingLabelText="Password"
                className="input_method"
              />
              <TextField
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.changeHandler}
                floatingLabelText="Confirm Password"
                className="input_method"
              />
              {/* <p>{errors.password?.message}</p> */}
              <button type="submit" className="btn" onClick={this.resetForm}>
                Login
              </button>
            </MuiThemeProvider>
            <h6>If you have no account register here</h6>
          </form>
        </div>
      </div>
    );
  }
}

export default UserRegistration;


