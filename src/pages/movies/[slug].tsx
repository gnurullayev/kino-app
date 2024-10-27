import React from "react";
import { Box } from "@mui/material";
import { MoviesHead, MoviesList, PaginationComponent } from "@/components";

const Movies = () => {
  return (
    <Box className="movies" component="main">
      <Box component="section" className="movies_hero">
        <Box className="movies_hero__container container">
          <Box className="movies_hero__inner">
            <MoviesHead />
            <MoviesList />
            <PaginationComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Movies;
