import React from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MDBCloseIcon } from "mdbreact";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UserRegistration.css";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  username: yup.string()
  .max(15, 'Must be 15 characters or less')
  .required("please Enter your username"),
  email: yup.string().email().required("Please Enter your email"),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "One number and one special Character"
    ),
    confirmPassword: yup
    .string()
    .required('Please Enter your confirmPassword')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
      "One number and one special Character"
    ),
});

const UserRegistration = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    if (values.username !== "" && values.email !== "" && values.password !== "" && values.confirmPassword !== "") {
      axios
        .post("http://localhost:8080/login_form/postLogin", values)
        .then((response) => {
          const datas = response.data.result;
          console.log(datas);
          history.push({
            pathname: "/UserLogin",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      e.preventDefault();
      console.log(e.preventDefault());
      e.stopPropagation();
    }
    alert("scccesfully registered");
    reset();

  };
  return (
    <div>
      <MDBCloseIcon
        className="close_icon"
        onClick={() => (window.location.href = "/")}
      />
      <div className="user_login">
        <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <h2 className="registration_heading">User Login Form</h2>
          <MuiThemeProvider>
          <TextField
              {...register("username")}
                type="username"
                name="username"
                value={values.username}
                onChange={changeHandler}
                floatingLabelText="User name"
                className="input_method"
              />
            <p>{errors.username?.message}</p>
            <TextField
              {...register("email")}
              onChange={changeHandler}
              floatingLabelText="Email"
              className="input_method"
              type="email"
              value={values.email}
            />
            <p>{errors.email?.message}</p>
            <TextField
              {...register("password")}
              onChange={changeHandler}
              floatingLabelText="Password"
              className="input_method"
              type="password"
              value={values.password}
            />
            <p>{errors.password?.message}</p>
            <TextField
              {...register("confirmPassword")}
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={changeHandler}
                floatingLabelText="Confirm Password"
                className="input_method"
              />
            <p>{errors.confirmPassword?.message}</p>
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



// class UserRegistration extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//   }
//   // change handler
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   // reset form
//   // resetForm = () => {
//   //   this.setState({
//   //     username: "",
//   //     email: "",
//   //     password: "",
//   //     confirmPassword: "",
//   //   });
//   // };
//   // submit
//   submitHandler = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     console.log(this.state);
//     axios
//       .post("http://localhost:8080/login_form/postLogin", this.state)
//       .then((response) => {
//         console.log(response);
//         // console.log("the registration details inserted");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     // const { email, password, confirmPassword } = this.state;
//     // console.log(this.state);
//     return (
//       <div>
//         <MDBCloseIcon
//           className="close_icon"
//           onClick={(event) => (window.location.href = "/")}
//         />
//         <div className="user_registration">
//           <form className="form" onSubmit={this.submitHandler}>
//             <h2 className="registration_heading">Registration Form</h2>
//             <MuiThemeProvider>
//               <TextField
//                 type="username"
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.changeHandler}
//                 floatingLabelText="User name"
//                 className="input_method"
//               />
//               <TextField
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.changeHandler}
//                 floatingLabelText="Email"
//                 className="input_method"
//               />
//               {/* <p>{errors.email?.message}</p> */}
//               <TextField
//                 type="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.changeHandler}
//                 floatingLabelText="Password"
//                 className="input_method"
//               />
//               <TextField
//                 type="password"
//                 name="confirmPassword"
//                 value={this.state.confirmPassword}
//                 onChange={this.changeHandler}
//                 floatingLabelText="Confirm Password"
//                 className="input_method"
//               />
//               {/* <p>{errors.password?.message}</p> */}
//               <button type="submit" className="btn"  >
//                 Login
//               </button>
              
//             </MuiThemeProvider>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserRegistration;
