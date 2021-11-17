import { createSlice } from "@reduxjs/toolkit";
import { notifierHandler } from "./notifierSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const loginInitial = (credentials) => {
  return (dispatch) => {
    let db = localStorage.getItem("db");
    if (db) {
      db = JSON.parse(db);
      const filteredArray = db.filter(
        (element) => element.email === credentials.email
      );
      if (filteredArray.length !== 0) {
        if (filteredArray[0].password === credentials.password) {
          dispatch(authActions.login());
        } else {
          dispatch(
            notifierHandler({ type: "Danger", message: "Wrong Password" })
          );
        }
      } else {
        dispatch(notifierHandler({ type: "Danger", message: "No User Found" }));
      }
    } else {
      dispatch(notifierHandler({ type: "Danger", message: "No User Found" }));
    }
  };
};

export const signupInitial = (credentials) => {
  return (dispatch) => {
    let db = localStorage.getItem("db");
    if (db) {
      db = JSON.parse(db);
      db.push(credentials);
      localStorage.setItem("db", JSON.stringify(db));
    } else {
      db = [];
      db.push(credentials);
      localStorage.setItem("db", JSON.stringify(db));
    }
    console.log(localStorage.getItem("db"));
  };
};

export default authSlice;
export const authActions = authSlice.actions;
