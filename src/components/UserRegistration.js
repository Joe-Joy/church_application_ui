import React from "react";
import { useForm } from "react-hook-form";
import { MDBCloseIcon } from "mdbreact";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UserRegistration.css";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(32).required(),
});
const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (result) => {
    console.log({ result });
    reset();
  };
  return (
    <div>
      <MDBCloseIcon
        className="close_icon"
        onClick={(event) => (window.location.href = "/")}
      />
      <div className="user_registration">
        <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <h2 className="registration_heading">Login to User Registration Form</h2>
          <MuiThemeProvider>
          <TextField
            {...register("email")}
            floatingLabelText="Email"
            className="input_method"
            type="email"
          />
          <p>{errors.email?.message}</p>
          <TextField
            {...register("password")}
            floatingLabelText="Password"
            className="input_method"
            type="password"
          />
          <p>{errors.password?.message}</p>
          <button type="submit" className="btn">
            Login
          </button>
          </MuiThemeProvider>
        </form>
      </div>
    </div>
  );
};
export default UserRegistration;
//
