import React from "react";
import classes from "./CreateVideoVoice.module.scss";

const CreateVideoVoice = () => {
  return (
    <div className={classes["voice-clip-main-container"]}>
      <div className={classes["voice-clip-container"]}>
        <svg
          width="472"
          height="71"
          viewBox="0 0 472 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37" cy="35" r="20" fill="url(#paint0_linear_67_8)" />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M30.098 41.7603V29.222C30.098 28.673 30.5408 28.2302 31.0898 28.2302H34.4723C35.0213 28.2302 35.4817 28.673 35.4817 29.222V41.7603C35.4817 42.327 35.0213 42.7698 34.4723 42.7698H31.0898C30.5408 42.7698 30.098 42.327 30.098 41.7603ZM37.5183 41.7603V29.222C37.5183 28.673 37.9611 28.2302 38.5101 28.2302H41.8926C42.4416 28.2302 42.902 28.673 42.902 29.222V41.7603C42.902 42.327 42.4416 42.7698 41.8926 42.7698H38.5101C37.9611 42.7698 37.5183 42.327 37.5183 41.7603Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_67_8"
              x1="37"
              y1="15"
              x2="37"
              y2="55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A77CE" />
              <stop offset="1" stop-color="#3860AD" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <p className={classes["active-voice"]}>Asian</p>
          <img
            src="https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Group%204.png"
            alt="soundclip"
          />
        </div>
      </div>
      <div className={classes["voice-clip-container"]}>
        <svg
          width="472"
          height="71"
          viewBox="0 0 472 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37" cy="35" r="20" fill="#999999" />
          <path
            d="M33.7036 40.6286V28.3714C33.7036 28.0096 34.1118 27.7981 34.4068 28.0059L43.1053 34.1345C43.3576 34.3126 43.3576 34.6874 43.1053 34.8655L34.4087 40.9941C34.1118 41.202 33.7036 40.9904 33.7036 40.6286Z"
            fill="white"
          />
        </svg>
        <div>
          <p>British</p>
          <img
            src="https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Group%206.png"
            alt="soundclip"
          />
        </div>
      </div>
      <div className={classes["voice-clip-container"]}>
        <svg
          width="472"
          height="71"
          viewBox="0 0 472 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37" cy="35" r="20" fill="#999999" />
          <path
            d="M33.7036 40.6286V28.3714C33.7036 28.0096 34.1118 27.7981 34.4068 28.0059L43.1053 34.1345C43.3576 34.3126 43.3576 34.6874 43.1053 34.8655L34.4087 40.9941C34.1118 41.202 33.7036 40.9904 33.7036 40.6286Z"
            fill="white"
          />
        </svg>
        <div>
          <p>American</p>
          <img
            src="https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Group%206.png"
            alt="soundclip"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateVideoVoice;
