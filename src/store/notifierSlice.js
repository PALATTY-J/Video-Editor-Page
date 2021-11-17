import { createSlice } from "@reduxjs/toolkit";



const initialState = { hasnotifier: false, message: "", status: "" };

const notifierSlice = createSlice({
  name: "notifierSlice",
  initialState: initialState,
  reducers: {
    dangerNotifier: (state, actions) => {
      state.hasnotifier = true;
      state.message = actions.payload;
      state.status = "Danger";
    },
    successNotifier: (state, actions) => {
      state.hasnotifier = true;
      state.message = actions.payload;
      state.status = "Success";
    },
    clearNotifier: (state) => {
      return (state = initialState);
    },
  },
});

export const notifierHandler = (payload) => {
  return (dispatch) => {
    if (payload.type === "Success") {
      dispatch(notifyActions.successNotifier(payload.message));
    } else if (payload.type === "Danger") {
      dispatch(notifyActions.dangerNotifier(payload.message));
    }
    setTimeout(() => {
      dispatch(notifyActions.clearNotifier());
    }, 2000);
  };
};

export default notifierSlice;
export const notifyActions = notifierSlice.actions;
