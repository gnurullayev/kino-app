import { Box } from "@mui/material";
import React from "react";
import Video from "../../Video";
import VideoBottom from "@/src/components/VideoBottom/VideoBottom";

const VideoDetailLeft = () => {
  return (
    <Box className="movie-inner__start">
      <Box className="move__video" sx={{ height: "400px", width: "100%" }}>
        <Video />
      </Box>
      <VideoBottom />
    </Box>
  );
};

export default VideoDetailLeft;
