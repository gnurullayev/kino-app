import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import { MoviesHead, MoviesList, PaginationComponent } from "@/components";
import { IHome } from "@/interfaces/home";
import { API } from "@/services/api";
import { GetServerSideProps } from "next";
import { IMoviesByCategory } from "@/interfaces/movie";

interface Props {
  moviesByCategory: IMoviesByCategory
}

const Movies: FC<Props> = ({ moviesByCategory }) => {
  const [moviesList, setMOviesList] = useState(moviesByCategory.movies_data)
  const [paginate, setPaginate] = useState({ currentPage: moviesByCategory.movies_data.current_page, total: moviesByCategory.movies_data.total })

  const changePaginate = () => {
    console.log("salom");
  }

  return (
    <Box className="movies" component="main">
      <Box component="section" className="movies_hero">
        <Box className="movies_hero__container container">
          <Box className="movies_hero__inner">
            <MoviesHead title={moviesByCategory.name} />
            <MoviesList />
            <PaginationComponent total={paginate.total} activePage={paginate.currentPage} changePaginate={changePaginate} />
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

  const moviesByCategory: IMoviesByCategory = await API.moviesByCategory(id, { key });

  return { props: { moviesByCategory } };
}) satisfies GetServerSideProps<{ moviesByCategory: IMoviesByCategory }>;
