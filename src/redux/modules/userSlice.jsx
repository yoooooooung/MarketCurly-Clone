import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},

  reducers: {
    loginUser: (state, action) => {
      state.name = action.payload.userName;
      state.id = action.payload.loginId;
      state.isLogin = true;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
