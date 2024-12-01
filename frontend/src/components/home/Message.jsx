import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const Message = ({ user, message }) => {
  const { userAuth } = useSelector((state) => state.user);
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <>
      <div ref={scroll} className="px-2 py-2 ">
        <div
          className={`chat ${
            message?.receiverId !== user._id ? "chat-start " : "chat-end "
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={
                  message?.receiverId !== user._id
                    ? user?.profilePhoto
                    : userAuth?.profilePhoto
                }
              />
            </div>
          </div>
          <div className="chat-header">
            {message?.receiverId !== user._id
              ? user?.fullName
              : userAuth?.fullName}
            <time className="text-xs opacity-50">{message?.updatedAt}</time>
          </div>
          <div
            className={`${
              message?.receiverId !== user._id ? "bg-green-300" : "bg-blue-300 "
            } chat-bubble text-gray-700`}
          >
            {message?.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
