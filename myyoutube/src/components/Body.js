import React from "react";
import SideBar from "./SideBar.js";
import MainContainer from "./MainContainer.js";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid gap-4 grid-flow-col p-4 mt-2">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
