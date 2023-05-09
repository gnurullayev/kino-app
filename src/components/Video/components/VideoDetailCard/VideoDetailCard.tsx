import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const timeStile = {
  position: "absolute",
  right: "10px",
  bottom: "10px",
  backgroundColor: "rgba(12, 13, 12, 0.7);",
  borderRadius: "8px",
  padding: "4px 10px",
  fontSize: "12px",
};
const VideoDetailCard = () => {
  return (
    <Box
      className="video-detail-card"
      sx={{
        display: "flex",
        gap: "15px",
        cursor: "pointer",
      }}
    >
      <Box
        className="video-detail-card__img"
        sx={{
          position: "relative",
          display: "block",
          maxWidth: "200px",
          height: "150px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://media.graphassets.com/0aWn8NPUQNOx2S7qqqvt"
          alt="card img"
          width={200}
          height={150}
          objectFit="contain"
        />
        <Typography component="span" sx={timeStile}>
          02:30:15
        </Typography>
      </Box>
      <Box className="video-detail-card__body">
        <Typography variant="h5" component="h5" sx={{ fontSize: "20px" }}>
          Transformerlar: Maxluqlarning yuksalishi
        </Typography>
        <Typography
          component="span"
          sx={{ color: "#909090", fontSize: "15px" }}
        >
          2017
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoDetailCard;
