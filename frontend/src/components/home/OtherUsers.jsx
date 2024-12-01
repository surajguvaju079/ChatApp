import React from "react";

import OtherUser from "./OtherUser";
import { useSelector } from "react-redux";

import useGetOtherUsers from "../../hooks/useGetOtherUsers";

const OtherUsers = () => {
  const { otherUsers, otherUserMessage } = useSelector((state) => state.user);
  useGetOtherUsers();
  if (!otherUsers) return;
  console.log(otherUserMessage);

  return (
    <div className=" h-full overflow-auto">
      {otherUsers &&
        otherUsers?.map((otherUser, index) => {
          return (
            <div
              key={index}
              className={`${
                otherUserMessage?._id === otherUser?._id
                  ? "bg-slate-100"
                  : "hover:font-bold "
              } px-2 pt-1  w-full`}
            >
              <OtherUser otherUser={otherUser} />
            </div>
          );
        })}
    </div>
  );
};

export default OtherUsers;
