import React from "react";
import classes from "./CreateVideoProfile.module.scss";
import { NavLink, Routes, Route } from "react-router-dom";
import Plan from "./Plan";
import Profile from "./Profile";
import Billing from "./Billing";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const CreateVideoProfile = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className={classes["profile-main-container"]}>
      <div className={classes["profile-header"]}>
        <h2>My Account</h2>
        <p onClick={logoutHandler}>Logout</p>
      </div>
      <hr />
      <nav className={"profile-nav"}>
        <NavLink
          className={({ isActive }) => (isActive ? classes["active-nav"] : "")}
          to="myprofile"
        >
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes["active-nav"] : "")}
          to="myplan"
        >
          My Plan
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes["active-nav"] : "")}
          to="billing"
        >
          Billing
        </NavLink>
      </nav>
      <Routes>
        <Route path="/myprofile" element={<Profile />}></Route>
        <Route path="/myplan" element={<Plan />}></Route>
        <Route path="/billing" element={<Billing />}></Route>
      </Routes>
    </div>
  );
};

export default CreateVideoProfile;
