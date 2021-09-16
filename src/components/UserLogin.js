import React,{useEffect,useState }from "react";
import { useForm } from "react-hook-form";
import { MDBCloseIcon } from "mdbreact";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UserRegistration.css";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(32).required(),
});
const UserLogin = () => {
  const [postId, setPostId] = useState(null);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('http://localhost:8080/login', requestOptions)
            .then(response => response.json())
            .then(login => setPostId(login.id));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

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
          <h2 className="registration_heading">User Login Form</h2>
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
          <button type="submit" className="btn" onSubmit={postId}>
            Login
          </button>
          </MuiThemeProvider>
          <h6><a href="/userregistration">If you have no account <Link to="/UserRegistration">register</Link> here</a></h6>
        </form>
      </div>
    </div>
  );
};
export default UserLogin;
//
