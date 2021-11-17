import React, { useState, useEffect } from "react";
import classes from "./Login.module.scss";
import InputCustom from "../components/InputCustom";
import ButtonCustom from "../components/ButtonCustom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginInitial } from "../store/authSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const state = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/createvideo/actor");
    }
  }, [state.isAuthenticated, navigate]);

  const handleChange = (e) => {
    const id = e.target.id;
    if (id === "loginemail") {
      setemail((value) => e.target.value);
    } else if (id === "loginpassword") {
      setpassword((value) => e.target.value);
    }
  };

  const handleLogin = () => {
    dispatch(loginInitial({ email, password }));
  };

  return (
    <section>
      <svg
        className={classes["login-background-svg"]}
        width="534"
        height="509"
        viewBox="0 0 534 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <ellipse
            cx="203.352"
            cy="214.336"
            rx="184.124"
            ry="131.517"
            transform="rotate(9.52728 203.352 214.336)"
            fill="#E7AB11"
          />
          <ellipse
            cx="397.939"
            cy="348.212"
            rx="184.124"
            ry="131.517"
            transform="rotate(9.52728 397.939 348.212)"
            fill="#12B1B1"
          />
          <circle cx="405.011" cy="117.891" r="192.891" fill="#EE6363" />
        </g>
      </svg>
      <div className={classes["login-page"]}>
        <h2 className={classes["login-page-heading"]}>Sign In</h2>
        <div className={classes["login-container"]}>
          <InputCustom
            id="loginemail"
            placeholder="Enter Email Address"
            type="email"
            label="Email Address"
            value={email}
            onChange={handleChange}
          ></InputCustom>
          <InputCustom
            id="loginpassword"
            placeholder="Enter Password"
            type="password"
            label="Password"
            statusText={{
              text: "Forgot ?",
              color: "#3860AD",
              cursor: "pointer",
            }}
            value={password}
            onChange={handleChange}
          ></InputCustom>
          <br />
          <ButtonCustom onClick={handleLogin}>Login</ButtonCustom>

          <br />
          <span>
            <small>New here? </small>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <small className={classes["login-signup-link"]}>Signup</small>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
