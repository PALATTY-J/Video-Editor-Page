import React, { useRef } from "react";
import classes from "./CreateVideoBackground.module.scss";

const imageContentArray = [
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/image6.png",
    name: "Office",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/image5.png",
    name: "Space",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/image4.png",
    name: "Noise",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/image3.png",
    name: "Meeting Room",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/image2.png",
    name: "Books",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/image1.png",
    name: "Desk",
  },
];

const CreateVideoBackground = () => {
  const refContainer = useRef();
  return (
    <div className={classes["video-background-container"]}>
      <div className={classes["active-accordian"]}>
        <div className={classes["accordian-heading-container"]}>
          <p>Images</p>
          <svg
            className={classes["active-accordian-svg"]}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.43413 7.62725L9.82036 3.25599C10.0599 3.0015 10.0599 2.61228 9.82036 2.37276C9.58084 2.13323 9.17665 2.13323 8.93713 2.37276L5 6.30988L1.06287 2.37276C0.808383 2.13323 0.419162 2.13323 0.179641 2.37276C-0.0598802 2.61228 -0.0598802 3.0015 0.179641 3.25599L4.5509 7.62725C4.80539 7.86677 5.19461 7.86677 5.43413 7.62725Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={classes["accordian-content"]}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={refContainer}
            style={{ display: "none" }}
          />
          <div>
            <div
              className={classes["file-uploader"]}
              onClick={() => {
                refContainer.current.click();
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6249 13.1258H11.8751C11.3693 13.1258 10.9136 12.8216 10.7203 12.3539C10.5266 11.8873 10.6338 11.3498 10.991 10.9914L19.1157 2.8664C19.3503 2.63203 19.668 2.50078 19.9998 2.50078C20.331 2.50078 20.6493 2.63203 20.8834 2.8664L29.0086 10.9914C29.3662 11.3498 29.473 11.8873 29.2797 12.3539C29.086 12.8216 28.6302 13.1258 28.1245 13.1258C28.1245 13.1258 25.8558 13.1258 24.3746 13.1258V26.2508C24.3746 26.9144 24.1111 27.5498 23.6424 28.0185C23.1737 28.4873 22.5376 28.7508 21.8747 28.7508C20.7853 28.7508 19.2142 28.7508 18.1248 28.7508C17.4619 28.7508 16.8259 28.4873 16.3571 28.0185C15.8884 27.5498 15.6249 26.9144 15.6249 26.2508C15.6249 23.3237 15.6249 16.0529 15.6249 13.1258Z"
                  fill="#999999"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.875 18.75C26.875 18.0594 27.4344 17.5 28.125 17.5C29.4181 17.5 31.25 17.5 31.25 17.5C32.2444 17.5 33.1981 17.895 33.9019 18.5981C34.605 19.3019 35 20.2556 35 21.25V33.75C35 34.7444 34.605 35.6981 33.9019 36.4019C33.1981 37.105 32.2444 37.5 31.25 37.5C26.0206 37.5 13.9794 37.5 8.75 37.5C7.75563 37.5 6.80187 37.105 6.09812 36.4019C5.395 35.6981 5 34.7444 5 33.75C5 30.4237 5 24.5763 5 21.25C5 20.2556 5.395 19.3019 6.09812 18.5981C6.80187 17.895 7.75563 17.5 8.75 17.5H11.875C12.5656 17.5 13.125 18.0594 13.125 18.75C13.125 19.4406 12.5656 20 11.875 20C10.5819 20 8.75 20 8.75 20C8.41875 20 8.10063 20.1319 7.86625 20.3662C7.63188 20.6006 7.5 20.9188 7.5 21.25C7.5 24.5763 7.5 30.4237 7.5 33.75C7.5 34.0812 7.63188 34.3994 7.86625 34.6338C8.10063 34.8681 8.41875 35 8.75 35C13.9794 35 26.0206 35 31.25 35C31.5812 35 31.8994 34.8681 32.1338 34.6338C32.3681 34.3994 32.5 34.0812 32.5 33.75V21.25C32.5 20.9188 32.3681 20.6006 32.1338 20.3662C31.8994 20.1319 31.5812 20 31.25 20C31.25 20 29.4181 20 28.125 20C27.4344 20 26.875 19.4406 26.875 18.75Z"
                  fill="#999999"
                />
              </svg>
            </div>
            <p>Upload</p>
          </div>

          {imageContentArray.map((content) => (
            <div key={content.name}>
              <img src={content.src} alt={content.name} />
              <p>{content.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={classes["accordian-heading-container"]}>
          <p>Solid Colours</p>
          <svg
            className={classes["active-accordian"]}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.43413 7.62725L9.82036 3.25599C10.0599 3.0015 10.0599 2.61228 9.82036 2.37276C9.58084 2.13323 9.17665 2.13323 8.93713 2.37276L5 6.30988L1.06287 2.37276C0.808383 2.13323 0.419162 2.13323 0.179641 2.37276C-0.0598802 2.61228 -0.0598802 3.0015 0.179641 3.25599L4.5509 7.62725C4.80539 7.86677 5.19461 7.86677 5.43413 7.62725Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <hr />
      <div>
        <div className={classes["accordian-heading-container"]}>
          <p>Videos</p>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.43413 7.62725L9.82036 3.25599C10.0599 3.0015 10.0599 2.61228 9.82036 2.37276C9.58084 2.13323 9.17665 2.13323 8.93713 2.37276L5 6.30988L1.06287 2.37276C0.808383 2.13323 0.419162 2.13323 0.179641 2.37276C-0.0598802 2.61228 -0.0598802 3.0015 0.179641 3.25599L4.5509 7.62725C4.80539 7.86677 5.19461 7.86677 5.43413 7.62725Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CreateVideoBackground;
