import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    setCredential(state, action) {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logOut(state) {
      localStorage.removeItem("userInfo");
      state.userInfo = null;
    },
  },
});

const authActions = authSlice.actions;
const authreducer = authSlice.reducer;

export { authActions, authreducer };
