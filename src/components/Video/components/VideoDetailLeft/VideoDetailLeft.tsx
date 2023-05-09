import { Box } from "@mui/material";
import React from "react";
import { Actors, VideoInfo } from "../";
import { VideoBottom, Video } from "@/src/components";

const VideoDetailLeft = () => {
  return (
    <Box className="movie-inner__start">
      <Box className="move__video" sx={{ height: "400px", width: "100%" }}>
        <Video />
      </Box>
      <VideoBottom />
      <Actors />
      <VideoInfo />
    </Box>
  );
};

export default VideoDetailLeft;
