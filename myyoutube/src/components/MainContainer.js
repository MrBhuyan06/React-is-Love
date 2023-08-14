import React from "react";
import VideoContainer from "./VideoContainer.js";
import ButtonList from "./ButtonList.js";

const MainContainer = () => {
  return (
    <div className="col-span-10">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
