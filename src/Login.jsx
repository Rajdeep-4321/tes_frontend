import { useState, useRef } from "react";
import React from "react";
import logo from "./assets/logo.svg";
import facebook from "./assets/facebook.svg";
import Form from "react-validation/build/form";
import { useNavigate, Link } from "react-router-dom";

import twitter from "./assets/twitter.svg";
import google from "./assets/google.svg";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./Login.css";
import AuthService from "./services/Auth";

function Login() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const form = useRef();
  const checkBtn = useRef();

  const handletoggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">This field is required!</div>
      );
    }
  };

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    form.current.validateAll();

    AuthService.login(username, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        setError("Invalid Username or Password");
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  };

  return (
    <>
      <div className="main">
        <div className="bg">
          <div className="Login">
            {/* Left side content */}

            <div className="Left">
              <div className="left_content">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="text1">Login into your account</h1>
                <p className="subtext">
                  Let’s take your trading to the next level!
                </p>
              </div>
            </div>

            {/* right side cntent */}

            <Form onSubmit={handleLogin} ref={form}>
              <div className="rigth_content">
                <h1 className="rightlogin">Log in</h1>
                <p className="notamember">
                  Not a member?{" "}
                  <a href="#" className="registernow">
                    <Link to="/register">Register now!</Link>
                  </a>
                </p>
                <div className="inputfield">
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="Email"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required]}
                  />
                  <div className="inputfield2">
                    <input
                      type={type}
                      name=""
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required]}
                      required
                    />
                    <span onClick={handletoggle} className="showHide">
                      <Icon icon={icon} />
                    </span>
                  </div>
                </div>
                {/* <div className='checkbox'>
                <input type="checkbox" id="rememberMebox" className=""></input>
                <label for="rememberMebox" className='rememberMe'>Remember me</label>
              </div> */}
                <button className="btn">Sign in</button>

                {error != "" && <div style={{ color: "red" }}>{error}</div>}
                <a href="#" className="fogotpass">
                  Forgot password?
                </a>
                <div className="icon">
                  <img src={google} alt="google" className="iconimg" />
                  <img src={twitter} alt="twitter" className="iconimg" />
                  <img src={facebook} alt="facebook" className="iconimg" />
                </div>
                <a href="#" className="signwith">
                  Or sign in with
                </a>
              </div>
            </Form>
          </div>
          <div className="footer">
            <footer className="">
              {" "}
              &copy; 2023 Tes Markets. All Rights Reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
