import React from "react";
import classes from "./ButtonCustom.module.scss";

const ButtonCustom = (props) => {
  return (
    <button
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
      className={classes["form-control-button"]}
      onClick={props.onClick}
    >
      <h4> {props.children}</h4>
    </button>
  );
};

export default ButtonCustom;
