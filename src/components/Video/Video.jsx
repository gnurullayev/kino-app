import React, { useState } from "react";
import ReactPlayer from "react-player";
import css from "./video.module.scss";

const Video = () => {
  const [playing, setPlaying] = useState(false);

  console.log(playing);
  return (
    <div className={css.vide_box}>
      {/* <button style={{ height: "50px" }} onClick={() => setPlaying(!playing)}>
        click
      </button> */}
      <ReactPlayer
        className={css.video_css}
        url="/video.mp4"
        controls
        playing={playing}

        // width={"100%"}
        // height={"100%"}
      />

      {/* <video src="/video.mp4" controls className={css.video_css}></video> */}
      {/* <video controls>
        <source src="vimeo-video-url.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> */}
      {/* <iframe
        className={css.video_css}
        src="https://player.vimeo.com/video/1021066385?h=1640566c03"
        width="100%"
        height="100%"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </div>
  );
};

export default Video;
