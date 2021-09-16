import React, { Component } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
import { MDBCloseIcon } from "mdbreact";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import "./UserLogin.css";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { Link } from "react-router-dom";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;
    console.log(this.state);
    return (
      <div>
        <MDBCloseIcon
          className="close_icon"
          onClick={(event) => (window.location.href = "/")}
        />
        <div className="user_login">
          <form className="form" onSubmit={this.submitHandler}>
            <h2 className="registration_heading">User Login Form</h2>
            <MuiThemeProvider>
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

export default UserLogin;

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(5).max(32).required(),
// });

// const UserLogin = () => {
//   const url = "http://localhost:8080/login_form/postLogin";
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     axios
//       .post(url, {
//         email: data.email,
//         password: data.password,
//       })
//       .then((res) => {
//         console.log(res.data);
//       });

//     reset();
//   };
//   const handle = (e) => {
//     const newData = { ...data };
//     newData[e.target.id] = e.target.value;
//     setData(newData);
//     // console.log(newData);
//   };
//   return (
//     <div>
//       <MDBCloseIcon
//         className="close_icon"
//         onClick={(event) => (window.location.href = "/")}
//       />
//       <div className="user_login">
//         <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
//           <h2 className="registration_heading">User Login Form</h2>
//           <MuiThemeProvider>
//             <TextField
//               {...register("email")}
//               onChange={(e) => handle(e)}
//               floatingLabelText="Email"
//               className="input_method"
//               type="email"
//               value={data.email}
//             />
//             <p>{errors.email?.message}</p>
//             <TextField
//               {...register("password")}
//               onChange={(e) => handle(e)}
//               floatingLabelText="Password"
//               className="input_method"
//               type="password"
//               value={data.password}
//             />
//             <p>{errors.password?.message}</p>
//             <button type="submit" className="btn">
//               Login
//             </button>
//           </MuiThemeProvider>
//           <h6>
//             If you have no account{" "}
//             register here
//           </h6>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default UserLogin;

// "http://localhost:8080/login_form/postLogin"
