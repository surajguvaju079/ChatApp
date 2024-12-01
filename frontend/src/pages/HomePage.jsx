import React from "react";
import MessageBox from "../components/home/MessageBox";
import SideBar from "../components/home/SideBar";

const HomePage = () => {
  return (
    <div className="flex ">
      <div className="gap-2  flex h-[600px] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <SideBar />
        <div className="divider divider-vertical"></div>
        <MessageBox />
      </div>
    </div>
  );
};

export default HomePage;
