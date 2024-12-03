import { Box } from "@mui/material";
import React, { FC } from "react";
import { VideoDetailCard } from "../";
import { IMovie } from "@/interfaces/movie";
import MovieType from "@/enums/movie";

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
            slug={el.slug}
            year={new Date(el.release_date).getFullYear()}
            type={el.type ? el.type : MovieType.SERIES}
          />
        </Box>
      ))}
    </Box>
  );
};

export default VideoDetailCardList;
