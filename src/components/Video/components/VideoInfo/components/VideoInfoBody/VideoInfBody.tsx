import React, { FC, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { MoviesDetail } from "@/interfaces/movie";

interface Props {
  movie: MoviesDetail;
}

const VideoInfBody: FC<Props> = ({ movie }) => {
  return (
    <Box
      className="video_info_body"
      sx={{
        py: "10px",
      }}
    >
      <Typography component="p" sx={{ pb: "5px", lineHeight: "25px" }}>
        Kino tavsifi
      </Typography>
      <Typography component="p">{movie.description}</Typography>
    </Box>
  );
};

export default VideoInfBody;
