import React from "react";
import classes from "./InputCustom.module.scss";
const InputCustom = (props) => {
  return (
    <div className={classes["form-control"]}>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        {props.statusText !== undefined ? (
          <small
            style={{
              color: props.statusText.color,
              cursor: props.statusText.cursor,
            }}
          >
            {props.statusText.text}
          </small>
        ) : (
          ""
        )}
      </div>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default InputCustom;
