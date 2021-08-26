import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UserRegistration.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="user_registration">
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>Login to User Registration Form</h2>
        {/* <label>Email</label> */}
        <br />
        <input
          {...register("email")}
          className="input_method"
          type="email"
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>
        {/* <label>Password</label> */}
        <br />
        <input
          {...register("password")}
          className="input_method"
          type="password"
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default UserRegistration;
