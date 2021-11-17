import React, { useState } from "react";
import classes from "./Login.module.scss";
import InputCustom from "../components/InputCustom";
import ButtonCustom from "../components/ButtonCustom";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupInitial } from "../store/authSlice";
import { notifierHandler } from "../store/notifierSlice";

const Signup = () => {
  const [newPassword, setNewPassword] = useState("");
  const [passwordStrength, setpasswordStrength] = useState({});
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    if (id === "signuppassword") {
      setNewPassword((oldpwd) => e.target.value);
      if (newPassword.length > 1 && newPassword.length < 7) {
        setpasswordStrength({
          text: "Weak",
          color: "#EE6363",
        });
      } else if (newPassword.length > 7) {
        setpasswordStrength({
          text: "Strong",
          color: "#46B13D",
        });
      } else if (newPassword.length < 1) {
        setpasswordStrength({});
      }
    } else if (id === "signupfullname") {
      setname((value) => e.target.value);
    } else if (id === "signupemail") {
      setemail((value) => e.target.value);
    }
  };

  const handleSignIn = () => {
    if (newPassword.length > 7) {
      dispatch(signupInitial({ name, email, password: newPassword }));
      setNewPassword("");
      setemail("");
      setname("");
      navigate("/");
    } else {
      dispatch(
        notifierHandler({
          type: "Danger",
          message:
            "Password is Weak. Password length must be more than 7 characters",
        })
      );
    }
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
        <h2 className={classes["login-page-heading"]}>Create an account</h2>
        <div className={classes["login-container"]}>
          <InputCustom
            id="signupfullname"
            placeholder="Enter Full Name"
            type="text"
            label="Full name"
            value={name}
            onChange={handleChange}
          ></InputCustom>
          <InputCustom
            id="signupemail"
            placeholder="Enter Email Address"
            type="email"
            label="Email Address"
            value={email}
            onChange={handleChange}
          ></InputCustom>
          <InputCustom
            id="signuppassword"
            placeholder="Enter New Password"
            type="password"
            label="New Password"
            value={newPassword}
            onChange={handleChange}
            statusText={passwordStrength}
          ></InputCustom>
          <br />
          <ButtonCustom onClick={handleSignIn}>Signup</ButtonCustom>
          <br />
          <span>
            <small>Already user? </small>
            <Link style={{ textDecoration: "none" }} to="/">
              <small className={classes["login-signup-link"]}>Login</small>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Signup;
