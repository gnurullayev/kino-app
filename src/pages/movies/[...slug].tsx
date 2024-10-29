import React from "react";
import { Box } from "@mui/material";
import { MoviesHead, MoviesList, PaginationComponent } from "@/components";
import { IHome } from "@/interfaces/home";
import { API } from "@/services/api";
import { GetServerSideProps } from "next";

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

export const getServerSideProps = (async (context: any) => {
  const data = context;
  const id = data.query.slug[0];
  const key = data.query.slug[1];

  const home: IHome = await API.getHome();
  return { props: { home } };
}) satisfies GetServerSideProps<{ home: IHome }>;
