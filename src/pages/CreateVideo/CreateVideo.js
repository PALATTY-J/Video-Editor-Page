import React, { useState } from "react";
import ButtonCustom from "../../components/ButtonCustom";
import classes from "./CreateVideo.module.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import CreateVideoActor from "./CreateVideoActor";
import CreateVideoVoice from "./CreateVideoVoice";
import CreateVideoAlignment from "./CreateVideoAlignment";
import CreateVideoBackground from "./CreateVideoBackground";
import VideoActorDescription from "../VideoActorDescription";

const CreateVideo = () => {
  const [editName, setEditName] = useState(false);

  const togglePortal = () => {
    setEditName((prev) => !prev);
  };

  return (
    <>
      {/* {editName && <VideoActorDescription />} */}
      <div className={classes["create-video-main-container"]}>
        <div className={classes["create-video-header-container"]}>
          <div>
            {editName ? (
              <VideoActorDescription
                togglePortal={togglePortal}
              ></VideoActorDescription>
            ) : (
              <div className={classes["create-video-heading"]}>
                <h2>Saying Hi to my Customers</h2>
                <div onClick={togglePortal}>
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
            )}
          </div>

          <div className={classes["create-video-button-container"]}>
            <ButtonCustom backgroundColor="#F1F1F1" color="#999999">
              Cancel
            </ButtonCustom>
            <NavLink to="/createvideobrowse">
              <ButtonCustom>Save</ButtonCustom>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className={classes["create-video-content-container"]}>
          <div className={classes["create-video-content"]}>
            <div>
              <img
                src="https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/main1.png"
                alt="Speaker"
              />
              <ButtonCustom>Preview</ButtonCustom>
            </div>
            <div>
              <textarea
                rows="10"
                placeholder="Type or paste your videoscript here.You can also request a transition of an English script to any of 27 other languages"
              ></textarea>
              <ButtonCustom>Listen</ButtonCustom>
            </div>
          </div>
          <div className={classes["create-video-content-carousal-container"]}>
            <nav
              className={classes["create-video-content-carousal-navigation"]}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-nav"] : ""
                }
                to="actor"
              >
                Actor
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-nav"] : ""
                }
                to="voice"
              >
                Voice
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-nav"] : ""
                }
                to="alignment"
              >
                Alignment
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["active-nav"] : ""
                }
                to="background"
              >
                Background
              </NavLink>
            </nav>
            <div className={classes["create-video-content-carousal-content"]}>
              <Routes>
                <Route path="/actor" element={<CreateVideoActor />}></Route>
                <Route path="/voice" element={<CreateVideoVoice />}></Route>
                <Route
                  path="/alignment"
                  element={<CreateVideoAlignment />}
                ></Route>
                <Route
                  path="/background"
                  element={<CreateVideoBackground />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateVideo;
