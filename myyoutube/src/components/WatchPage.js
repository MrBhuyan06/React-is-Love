import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appNavigator.js";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const disPatch = useDispatch();
  useState(() => {
    disPatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
