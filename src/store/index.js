import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import notifierSlice from "./notifierSlice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, notify: notifierSlice.reducer },
});

export default store;
