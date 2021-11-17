import React from "react";
import ButtonCustom from "../components/ButtonCustom";
import classes from "./VideoActorDescription.module.scss";

const VideoActorDescription = (props) => {
  const variable = "Saying Hi to my customers";
  return (
    <div className={classes["edit-name-container"]}>
      <input type="text" value={variable} />
      <textarea
        rows="4"
        value=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nam.
        Provident ut, possimus blanditiis reprehenderit nam eligendi ab rerum
        dicta nobis"
      ></textarea>
      <span>
        <span>Email</span>
        <span>Marketing</span>
        <span>Greeting</span>
        <span>Email</span>
        <span>Marketing</span>
        <span>Greeting</span>
      </span>
      <ButtonCustom onClick={props.togglePortal}>Save</ButtonCustom>
    </div>
  );
};

export default VideoActorDescription;
