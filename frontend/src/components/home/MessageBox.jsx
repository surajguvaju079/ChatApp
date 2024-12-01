import React, { useEffect, useState } from "react";
import MessageHeader from "./MessageHeader";
import SendMessage from "./SendMessage";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  // sendMessage,
  setMessages,
} from "../../store/authSllice/messageSliceReducer";
//import { setOther } from "../../store/authSllice/authSliceReducer";

const MessageBox = () => {
  const { otherUserMessage, userAuth } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [messageForm, setMessageForm] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      if (messageForm === "") return;
      const response = await axios.post(
        `http://localhost:8000/api/v1/message/send/${otherUserMessage._id}`,
        { message: messageForm },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      dispatch(setMessages([...messages, response?.data?.message]));
      setMessageForm("");
    } catch (error) {
      console.log(error);
    }
  };
  /* const handleMessage = (e) => {
    e.preventDefault();
    try {
      dispatch(sendMessage(otherUserMessage._id, messageForm))
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }; */
  console.log(messageForm);
  /* useEffect(() => {
    return () => dispatch(setOther(null));
  }, []); */
  return (
    <>
      {otherUserMessage ? (
        <div className="border-x-2 position-relative min-w-[500px] overflow-auto">
          <div className="flex flex-col h-full">
            <div>
              <MessageHeader
                user={otherUserMessage ? otherUserMessage : null}
              />
            </div>
            <div className="flex-1 overflow-auto">
              <Messages user={otherUserMessage ? otherUserMessage : null} />
            </div>
            <div>
              <SendMessage
                handleMessage={handleMessage}
                messageForm={messageForm}
                setMessageForm={setMessageForm}
                user={otherUserMessage ? otherUserMessage : null}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col px-2">
          <div className="text-3xl">Hi! {userAuth?.fullName}</div>
          <h1 className="text-2xl">Let's start a conversation</h1>
        </div>
      )}
    </>
  );
};

export default MessageBox;
