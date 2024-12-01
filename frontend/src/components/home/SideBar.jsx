import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthUser,
  setOnlineUsers,
  setOther,
  setOtherUsers,
} from "../../store/authSllice/authSliceReducer";
import { setMessages } from "../../store/authSllice/messageSliceReducer";
const SideBar = () => {
  const [search, setSearch] = useState("");
  const { otherUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/user/logout"
    );
    if (response.data?.success) {
      toast.success(response?.data?.message);
      console.log(response, "This is reponse");
      dispatch(setAuthUser(null));
      dispatch(setOtherUsers(null));
      dispatch(setOther(null));
      dispatch(setMessages(null));
      dispatch(setOnlineUsers(null));

      navigate("/login");
    }
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    //alert(search);

    const searchedUsers = [];
    otherUsers?.map((user) => {
      if (user?.fullName.toLowerCase().includes(search.toLowerCase())) {
        searchedUsers.push(user);
      }
    });
    if (searchedUsers !== null) {
      dispatch(setOtherUsers(searchedUsers));
    }
    console.log(searchedUsers);
  };
  return (
    <div className="py-2 flex flex-col px-2">
      <form onSubmit={(e) => searchSubmitHandler(e)}>
        <label className="relative">
          <input
            type="text"
            placeholder="search..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered"
          />
          <button
            type="submit"
            className="btn h-3 bg-transparent ouline-none border-none absolute right-1"
          >
            <IoSearch />
          </button>
        </label>
      </form>
      <div className="divider"></div>
      <div className="flex-1 overflow-auto">
        <OtherUsers />
      </div>
      <div className="mt-2">
        <button className="btn btn-sm" onClick={handleLogOut}>
          <IoMdLogOut size={16} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
