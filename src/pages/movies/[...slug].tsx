import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import { MoviesHead, MoviesList, PaginationComponent } from "@/components";
import { IHome } from "@/interfaces/home";
import { API } from "@/services/api";
import { GetServerSideProps } from "next";
import { IMoviesByCategory } from "@/interfaces/movie";
import { useMutation } from "@tanstack/react-query";

interface Props {
  moviesByCategory: IMoviesByCategory;
  id: number;
  movieKey: string;
}

const Movies: FC<Props> = ({ moviesByCategory, id, movieKey }) => {
  const [moviesList, setMoviesList] = useState(
    moviesByCategory.movies_data.data
  );
  const [paginate, setPaginate] = useState({
    currentPage: moviesByCategory.movies_data.current_page,
    total: moviesByCategory.movies_data.total,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) =>
      await API.moviesByCategory(id, {
        key: movieKey,
        page: data.page,
      }),
    onSuccess: (res: IMoviesByCategory) => {
      setMoviesList(res.movies_data.data);

      setPaginate({
        total: res.movies_data.total,
        currentPage: res.movies_data.current_page,
      });
      console.log(res);
    },
  });

  const changePaginate = (page: any) => {
    console.log("page", page);
    mutate({ page });
  };

  return (
    <Box className="movies" component="main">
      <Box component="section" className="movies_hero">
        <Box className="movies_hero__container container">
          <Box className="movies_hero__inner">
            <MoviesHead title={moviesByCategory.name} />
            <MoviesList data={moviesList} />
            <PaginationComponent
              total={paginate.total}
              activePage={paginate.currentPage}
              changePaginate={changePaginate}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Movies;

export const getServerSideProps = async (context: any) => {
  const data = context;
  const id = data.query.slug[0];
  const key = data.query.slug[1];

  const moviesByCategory: IMoviesByCategory = await API.moviesByCategory(id, {
    key,
  });
  return { props: { moviesByCategory, id, movieKey: key } };
};
