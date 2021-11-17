import React from "react";
import classes from "./Notifier.module.scss";
import { createPortal } from "react-dom";

const Notifier = (props) => {
  if (props.status === "Success") {
    return createPortal(
      <div className={classes["notifier-container"]} style={{background:'#46B13D'}}>{props.message}</div>,
      document.getElementById("overlay")
    );
  } else if (props.status === "Danger") {
    return createPortal(
      <div className={classes["notifier-container"]} style={{background:'#EE6363'}}>{props.message}</div>,
      document.getElementById("overlay")
    );
  }
};

export default Notifier;
