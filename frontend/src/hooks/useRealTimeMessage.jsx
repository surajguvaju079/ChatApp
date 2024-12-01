import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/authSllice/messageSliceReducer";

const useRealTimeMessage = () => {
  const { socket } = useSelector((state) => state.socket);
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    });
    return () => socket?.off("newMessage");
  }, [setMessages, messages]);
};

export default useRealTimeMessage;
