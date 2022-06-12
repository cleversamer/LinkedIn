import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    auth: null,
  },
  reducers: {
    userAuthenticated: (user, action) => {
      user.auth = action.payload.data;
    },

    userLoggedOut: (user, action) => {
      user.auth = null;
    },
  },
});

const { userAuthenticated, userLoggedOut } = slice.actions;

export const authUser = (auth) => userAuthenticated({ data: auth });

export const logoutUser = () => userLoggedOut();

export const getUserAuth = () =>
  createSelector(
    (state) => state.user,
    (user) => user.auth
  );

export default slice.reducer;
