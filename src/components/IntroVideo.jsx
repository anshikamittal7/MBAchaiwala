import React from "react";
import video from "../assets/introVideo.mp4";

const IntroVideo = () => {
  return (
    <div className="intro">
      <video src={video} muted loop autoPlay controlsList="nodownload"></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;
