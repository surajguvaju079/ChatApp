import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  messages: null,
  isLoading: false,
};

export const sendMessage = createAsyncThunk("/send", async (id, message) => {
  const response = await axios.post(
    `http://localhost:8000/api/v1/message/send/${id}`,
    { message },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return response?.data;
});
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.messages = [...state.messages, action.payload.data];
      })
      .addCase(sendMessage.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;
