import React from "react";
import classes from "./CreateVideoBrowse.module.scss";
import ButtonCustom from "../components/ButtonCustom";
import { Link } from "react-router-dom";

const CreateVideoBrowse = () => {
  return (
    <div className={classes["video-browse-container"]}>
      <div className={classes["video-browse-header-container"]}>
        <h2>Saved Videos</h2>
        <Link to="/createvideo/actor">
          <ButtonCustom>Create New</ButtonCustom>
        </Link>
      </div>
      <hr />
      <div className={classes["video-browse-content-container"]}>
        <div className={classes["content-card-container"]}>
          <h1>...</h1>
          <img
            src="https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/main1.png"
            alt="Actor"
          />
          <p>Saying Hi to users!</p>
          <div className={classes["tab-container"]}>
            <span>Email</span>
            <span>Marketing</span>
            <span>Greeting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVideoBrowse;
