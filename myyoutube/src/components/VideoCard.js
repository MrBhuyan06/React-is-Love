import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="w-72 p-4 border-2 border-gray-300 rounded-lg ">
      <img src={thumbnails.medium.url} className="rounded-lg" alt="" />
      <h2 className="mt-2 mb-1 font-bold">{channelTitle}</h2>
      <h3 className=" text-base-200 text-gray-400">{title}</h3>
      <p className="underline mt-2">{statistics.viewCount}</p>
    </div>
  );
};

export default VideoCard;
