import { Box } from "@mui/material";
import React, { FC } from "react";
import { VideoDetailCard } from "../";
import { IMovie } from "@/interfaces/movie";

interface Props {
  movies: IMovie[];
}

const VideoDetailCardList: FC<Props> = ({ movies }) => {
  return (
    <Box className="video-detail-card-list" component="ul">
      {movies.map((el) => (
        <Box component="li" key={el.id} sx={{ mb: "20px" }}>
          <VideoDetailCard
            name={el.title}
            image={el.poster_url}
            id={el.id}
            year={new Date(el.release_date).getFullYear()}
          />
        </Box>
      ))}
    </Box>
  );
};

export default VideoDetailCardList;
