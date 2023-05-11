import { Box, Typography } from "@mui/material";
import React from "react";
import { VideoDetailCard } from "../";
import { heroData } from "@/src/components/HomeHeroCarusel/data";

const VideoDetailCardList = () => {
  const list: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <Box className="video-detail-card-list" component="ul">
      {heroData.slice(0, 5).map((el) => (
        <Box component="li" key={el.id} sx={{ mb: "20px" }}>
          <VideoDetailCard
            name={el.title}
            image={el.image}
            id={el.id}
            year={el.year}
          />
        </Box>
      ))}
    </Box>
  );
};

export default VideoDetailCardList;
