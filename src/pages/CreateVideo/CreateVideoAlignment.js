import React from "react";
import ButtonCustom from "../../components/ButtonCustom";
import classes from "./CreateVideoAlignment.module.scss";

const CreateVideoAlignment = () => {
  return (
    <div className={classes["alignment-button-container"]}>
      <ButtonCustom backgroundColor="#F1F1F1" color="#999999">
        Left
      </ButtonCustom>
      <ButtonCustom backgroundColor="#EBF2FF" color="#3860AD">
        Center
      </ButtonCustom>
      <ButtonCustom backgroundColor="#F1F1F1" color="#999999">
        Right
      </ButtonCustom>
    </div>
  );
};

export default CreateVideoAlignment;
