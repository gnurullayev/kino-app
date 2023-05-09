import { Box, Typography } from "@mui/material";
import React from "react";
import { VideoDetailCard } from "../";

const VideoDetailCardList = () => {
  const list: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <Box className="video-detail-card-list" component="ul">
      {list.map((el) => (
        <Box component="li" key={el} sx={{ mb: "20px" }}>
          <VideoDetailCard />
        </Box>
      ))}
    </Box>
  );
};

export default VideoDetailCardList;
