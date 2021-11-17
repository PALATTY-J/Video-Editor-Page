import React from "react";
import InputCustom from "../../components/InputCustom";
import classes from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={classes["profile-container"]}>
      <div className={classes["profile-pic-container"]}>
        <img
          src="https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Ellipse%2036.png"
          alt="Profile Pic"
        />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#EBF2FF" />
          <path
            d="M23.3002 8.70047C22.6454 8.04729 21.7582 7.68048 20.8333 7.68048C19.9083 7.68048 19.0212 8.04729 18.3663 8.70047L9.9179 17.1485C9.80968 17.2655 9.7354 17.4098 9.70305 17.5658L8.93382 22.1812C8.91367 22.302 8.92266 22.4258 8.96002 22.5424C8.99738 22.659 9.06205 22.7651 9.14864 22.8517C9.23523 22.9382 9.34125 23.0029 9.45787 23.0403C9.57449 23.0776 9.69834 23.0866 9.81913 23.0665L14.4345 22.2972C14.5905 22.2649 14.7348 22.1906 14.8517 22.0824L23.3002 13.6344C23.6245 13.3106 23.8818 12.9261 24.0574 12.5028C24.2329 12.0795 24.3233 11.6257 24.3233 11.1674C24.3233 10.7092 24.2329 10.2554 24.0574 9.83209C23.8818 9.40878 23.6245 9.02424 23.3002 8.70047ZM14.3079 20.4508L11.5495 17.6924L18.1405 11.1013L20.899 13.8598L14.3079 20.4508ZM10.9747 19.2931L12.7072 21.0256L10.6281 21.3718L10.9747 19.2931ZM22.2121 12.5469L21.9867 12.7723L19.2283 10.0136L19.4537 9.78824C19.8195 9.42246 20.3156 9.21696 20.8329 9.21696C21.3502 9.21696 21.8463 9.42246 22.2121 9.78824C22.5778 10.154 22.7833 10.6501 22.7833 11.1674C22.7833 11.6847 22.5778 12.1808 22.2121 12.5466V12.5469Z"
            fill="#3860AD"
          />
        </svg>
      </div>
      <div className={classes["profile-form-container"]}>
        <InputCustom
          label="First Name"
          placeholder="Enter First Name"
          type="text"
          id="firstnameprofile"
        ></InputCustom>
        <InputCustom
          label="Last Name"
          placeholder="Enter Last Name"
          type="text"
          id="lastnameprofile"
        ></InputCustom>
        <InputCustom
          label="Email"
          placeholder="Enter Email"
          type="email"
          id="emailprofile"
        ></InputCustom>
      </div>
    </div>
  );
};

export default Profile;
