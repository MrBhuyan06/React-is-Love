import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard.js";
import { YOUTUBE_VIDEO_API } from "../utils/constants.js";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEO_API);
    const data = await res.json();
    // console.log(data);
    setVideos(data.items);
  };
  //early return
  if (!videos.length) return null;
  console.log(videos);

  return (
    <div className="flex flex-wrap gap-2 mt-3 w-full justify-center">
      {videos.map((video) => {
        return (
          <Link to={`/watchvideo?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
