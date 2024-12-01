import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: null,
  otherUsers: null,
  otherUserMessage: null,
  onlineUsers: null,
};

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.userAuth = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setOther: (state, action) => {
      state.otherUserMessage = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});
export const { setAuthUser, setOtherUsers, setOther, setOnlineUsers } =
  authSlice.actions;
export default authSlice.reducer;
