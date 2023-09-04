import React from "react";
import SideBar from "./SideBar.js";
import MainContainer from "./MainContainer.js";
import { useSelector } from "react-redux";
import store from "../utils/store.js";
import { YOUTUBE_VIDEO_API } from "../utils/contants.js";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
