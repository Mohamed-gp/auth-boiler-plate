import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: undefined ? localStorage.getItem("user") : null,
  },
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOut(state,action){
      localStorage.removeItem("user")
      state.user = null
    }
  },
});

const authActions = authSlice.actions;
const authreducer = authSlice.reducer;

export { authActions, authreducer };
