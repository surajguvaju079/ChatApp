import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOther } from "../../store/authSllice/authSliceReducer";
const OtherUser = ({ otherUser }) => {
  const { onlineUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSetOtherUser = () => {
    dispatch(setOther(otherUser));
  };
  console.log(onlineUsers);
  const isOnline = onlineUsers?.includes(otherUser._id) || false;
  console.log("isOnline", isOnline);
  return (
    <>
      <div
        className="w-full flex gap-2 items-center cursor-pointer"
        onClick={() => handleSetOtherUser()}
      >
        <div className={`avatar ${isOnline ? "online" : ""} h-6 w-6`}>
          <img
            src={otherUser.profilePhoto}
            alt={otherUser.fullName}
            className="rounded-full"
          />
        </div>
        <div className="text-gray-500">{otherUser.fullName}</div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default OtherUser;
