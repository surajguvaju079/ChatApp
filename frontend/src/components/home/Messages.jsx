import React, { useEffect } from "react";
//import useGetMessage from "../../hooks/useGetMessage";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import useRealTimeMessage from "../../hooks/useRealTimeMessage";
import useGetMessage from "../../hooks/useGetMessage";
//import { setMessages } from "../../store/authSllice/messageSliceReducer";

const Messages = ({ user }) => {
  useGetMessage();
  useRealTimeMessage();
  const { messages } = useSelector((state) => state.messages);

  return (
    <div >
      {messages &&
        messages?.map((message) => (
          <Message user={user} message={message} key={message?._id} />
        ))}
    </div>
  );
};

export default Messages;
