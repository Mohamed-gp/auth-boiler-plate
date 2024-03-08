import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: undefined ? JSON.parse(localStorage.getItem("user")) : undefined,
  },
  reducers: {
    saveUser(state, action) {
      console.log(action.payload);
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOut(state, action) {
      localStorage.removeItem("user");
      state.user = undefined;
    },
  },
});

const authActions = authSlice.actions;
const authreducer = authSlice.reducer;

export { authActions, authreducer };
