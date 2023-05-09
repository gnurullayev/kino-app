import React from "react";
import { Box, Typography } from "@mui/material";
import { VideoBottomButtons } from "../";

const VideoBottom = () => {
  return (
    <Box className="movie__video_bottom" sx={{ mb: "15px" }}>
      <Typography variant="h4" component="h4">
        Yengilmas jamoa va ajdar - Uzbek Tilida
      </Typography>

      <VideoBottomButtons />
    </Box>
  );
};

export default VideoBottom;
