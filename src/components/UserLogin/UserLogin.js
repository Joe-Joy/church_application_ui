import React from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MDBCloseIcon } from "mdbreact";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UserLogin.css";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Please Enter your email"),
    password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "One number and one special Character"
    ),
});

const UserLogin = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
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
  console.log(changeHandler);

  const onSubmitHandler = async (e) => {
    if (values.email !== "" && values.password !== "") {
      axios
        .post("http://localhost:8080/login_form/login", values)
        .then((response) => {
          const datas = response.data.result;
          console.log(datas);
          if (datas.success === true) {
            localStorage.setItem("user", datas.user);
            history.push({
              pathname: "/SeatAllocation",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      e.preventDefault();
      console.log(e.preventDefault());
      e.stopPropagation();
    }
    reset();
  };

  return (
    <div>
      <MDBCloseIcon
        className="close_icon"
        onClick={(event) => (window.location.href = "/")}
      />
      <div className="user_login">
        <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <h2 className="registration_heading">User Login Form</h2>
          <MuiThemeProvider>
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
            <button type="submit" className="btn">
              Login
            </button>
          </MuiThemeProvider>
          <h6>
            If you have no account{" "}
            <Link to={"/UserRegistration"}>registration</Link> here
          </h6>
        </form>
      </div>
    </div>
  );
};
export default UserLogin;

// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(3, "Password must be 3 characters at minimum")
//     .required("Password is required")
// });
// class UserLogin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/login_form/login", this.state)
//       .then((response) => {
//         console.log(response.data.user);
//         localStorage.setItem('user', response.data.user)
//         this.props.history.push({
//           pathname: '/SeatAllocation',
//         })
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     const { email, password } = this.state;
//     console.log(this.state);
//     return (
//       <div>
//         <MDBCloseIcon
//           className="close_icon"
//           onClick={(event) => (window.location.href = "/")}
//         />
//         <div className="user_login">
//           <form className="form" onSubmit={this.submitHandler}>
//             <h2 className="registration_heading"> Login Form</h2>
//             <MuiThemeProvider>
//               <TextField
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={this.changeHandler}
//                 floatingLabelText="Email"
//                 className="input_method"
//               />
//               {/* <p>{errors.email?.message}</p> */}
//               <TextField
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={this.changeHandler}
//                 floatingLabelText="Password"
//                 className="input_method"
//               />
//               {/* <p>{errors.password?.message}</p> */}
//               <button type="submit" className="btn" onClick={this.resetForm}>
//                 Login
//               </button>
//             </MuiThemeProvider>
//             <h6>If you have no account <Link to={"/UserRegistration"}>registration</Link> here</h6>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserLogin;