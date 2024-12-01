import React from "react";

const MessageHeader = ({ user }) => {
  console.log("it is the user", user);
  return (
    <div className="w-full flex gap-2 items-center border-t-50 py-3 px-2 bg-slate-400">
      <div className="avatar online h-8 w-8 ">
        <img
          src={user?.profilePhoto}
          alt={user?.fullName}
          className="rounded-full"
        />
      </div>
      <div className="font-bold text-black">{user?.fullName}</div>
    </div>
  );
};

export default MessageHeader;
