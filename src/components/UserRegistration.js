import React from "react";
import { useForm } from "react-hook-form";
import { MDBCloseIcon } from "mdbreact";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UserRegistration.css";

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
    alert("Loginned Successfully");
    reset();
  };
  return (
    <div>
      <MDBCloseIcon className="close_icon" onClick={(event) => (window.location.href = "/")} />
      <div className="user_registration">
        <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <h2>Login to User Registration Form</h2>
          <br />
          <input
            {...register("email")}
            className="input_method"
            type="email"
            placeholder="Email"
          />
          <p>{errors.email?.message}</p>
          <br />
          <input
            {...register("password")}
            className="input_method"
            type="password"
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserRegistration;
// 
