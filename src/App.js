import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import classes from "./App.module.scss";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import CreateVideo from "./pages/CreateVideo/CreateVideo";
import CreateVideoProfile from "./pages/CreateVideoProfile/CreateVideoProfile";
import CreateVideoBrowse from "./pages/CreateVideoBrowse";
import NotFoundPage from "./pages/NotFoundPage";
import Notifier from "./components/Notifier";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className={classes["main-page-container"]}>
      {state.notify.hasnotifier ? (
        <Notifier
          status={state.notify.status}
          message={state.notify.message}
        ></Notifier>
      ) : (
        ""
      )}
      <div className={classes["main-page-drawer"]}>
        <div className={classes["main-page-drawer-section1"]}>
          <div>
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="11.5965"
                cy="16.5"
                rx="10.5"
                ry="7.5"
                transform="rotate(9.52728 11.5965 16.5)"
                fill="#E7AB11"
              />
              <ellipse
                cx="22.6931"
                cy="24.1345"
                rx="10.5"
                ry="7.5"
                transform="rotate(9.52728 22.6931 24.1345)"
                fill="#12B1B1"
              />
              <circle cx="23.0964" cy="11" r="11" fill="#EE6363" />
            </svg>
          </div>

          {state.auth.isAuthenticated && (
            <>
              {" "}
              <NavLink
                to="createvideo/actor"
                className={({ isActive }) =>
                  isActive ? classes["active"] : ""
                }
              >
                <div>
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.644 10.828V5.00402L25.6 2.00802V13.824L20.644 10.828ZM18.432 15.308H1.91202C1.07202 15.308 0.400024 14.664 0.400024 13.852V2.14802C0.400024 1.33602 1.07202 0.692017 1.91202 0.692017H18.432C19.272 0.692017 19.944 1.33602 19.944 2.14802V13.824C19.944 14.664 19.272 15.308 18.432 15.308ZM16.92 3.80002C16.92 3.49202 16.668 3.24002 16.36 3.24002H13.112C12.804 3.24002 12.552 3.49202 12.552 3.80002V4.36002C12.552 4.66802 12.804 4.92002 13.112 4.92002H16.332C16.64 4.92002 16.892 4.66802 16.892 4.36002V3.80002H16.92Z"
                      fill="#999999"
                    />
                  </svg>
                </div>
              </NavLink>
              <NavLink
                to="createvideobrowse"
                className={({ isActive }) =>
                  isActive ? classes["active"] : ""
                }
              >
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.04 1.44801C22.04 0.744009 21.336 0.0400085 20.632 0.0400085H9.36796C8.66396 0.0400085 7.95996 0.744009 7.95996 1.44801V1.80001H22.04V1.44801Z"
                      fill="#999999"
                    />
                    <path
                      d="M25.56 4.968C25.56 4.264 24.856 3.56 24.152 3.56H5.848C5.144 3.56 4.44 4.264 4.44 4.968V5.32H25.56V4.968Z"
                      fill="#999999"
                    />
                    <path
                      d="M11.48 23.976L20.28 18.52L11.48 13.064V23.976Z"
                      fill="#999999"
                    />
                    <path
                      d="M25.208 7.08002H4.61598C2.67998 7.08002 0.919983 8.84002 0.919983 10.776V26.264C0.919983 28.2 2.67998 29.96 4.61598 29.96H25.384C27.32 29.96 29.08 28.2 29.08 26.088V10.776C29.08 8.84002 27.32 7.08002 25.208 7.08002ZM27.144 10.776V26.264C27.144 27.32 26.264 28.2 25.2084 28.2H4.61598C3.55998 28.2 2.67998 27.32 2.67998 26.088V10.776C2.67998 9.72002 3.55998 8.84002 4.61598 8.84002H25.384C26.44 8.84002 27.32 9.72002 27.144 10.776Z"
                      fill="#999999"
                    />
                  </svg>
                </div>
              </NavLink>
            </>
          )}
        </div>

        {state.auth.isAuthenticated && (
          <div className={classes["main-page-drawer-section2"]}>
            <NavLink to="profile/myprofile">
              <img
                src="https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/profile.png"
                alt="Profile"
              />
            </NavLink>
          </div>
        )}
      </div>
      <div className={classes["main-page-divider"]}>
        <div></div>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        {state.auth.isAuthenticated && (
          <>
            <Route path="/createvideo/*" element={<CreateVideo />} />
            <Route path="/createvideobrowse" element={<CreateVideoBrowse />} />
            <Route path="/profile/*" element={<CreateVideoProfile />} />
          </>
        )}
        <Route path="/signup" element={<Signup />} />
        {state.auth.isAuthenticated ? (
          <Route path="*" element={<NotFoundPage />} />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
