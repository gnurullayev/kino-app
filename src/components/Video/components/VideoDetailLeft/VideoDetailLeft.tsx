import { Box } from "@mui/material";
import React from "react";
import { Actors, VideoInfo } from "../";
import { VideoBottom, Video } from "@/components";

const VideoDetailLeft = () => {
  return (
    <Box className="movie-inner__start">
      <Box className="move__video" sx={{ width: "100%" }}>
        <Video />
      </Box>

      <VideoBottom />
      <Actors />
      <VideoInfo />
    </Box>
  );
};

export default VideoDetailLeft;
