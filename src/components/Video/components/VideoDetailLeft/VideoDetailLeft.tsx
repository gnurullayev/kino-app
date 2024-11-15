import { Box } from "@mui/material";
import React, { FC } from "react";
import { Actors, VideoInfo } from "../";
import { VideoBottom, Video } from "@/components";
import { MoviesDetail } from "@/interfaces/movie";
import { ActiveMovie } from "@/pages/movie-detail/[...movie]";
import { BASE_URL } from "@/services/api";

interface Props {
  movie: MoviesDetail;
  playMovie: ActiveMovie;
  setPlayMovie: (a: ActiveMovie) => void;
}

const VideoDetailLeft: FC<Props> = ({ movie, playMovie, setPlayMovie }) => {
  return (
    <Box className="movie-inner__start">
      <Box className="move__video" sx={{ width: "100%" }}>
        <Video path={playMovie.video_url} />
        {/* path={`${BASE_URL}/storage/${playMovie?.quality?.video_url}`} /> */}
      </Box>

      <VideoBottom
        movie={movie}
        playMovie={playMovie}
        setPlayMovie={setPlayMovie}
      />
      {/* <Actors /> */}
      <VideoInfo movie={movie} />
    </Box>
  );
};

export default VideoDetailLeft;
