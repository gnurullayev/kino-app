import React, { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  MetaData,
  MoviesHead,
  MoviesList,
  PaginationComponent,
} from "@/components";
import { API } from "@/services/api";
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
    },
  });

  useEffect(() => {
    if (moviesByCategory.movies_data) {
      setMoviesList(moviesByCategory.movies_data.data);

      setPaginate({
        currentPage: moviesByCategory.movies_data.current_page,
        total: moviesByCategory.movies_data.total,
        });
    }
  }, [moviesByCategory.movies_data]);

  const changePaginate = (page: any) => {
    mutate({ page });
  };

  return (
    <Box className="movies" component="main">
      <Box component="section" className="movies_hero">
        <Box className="movies_hero__container container">
          <Box className="movies_hero__inner">
            <MetaData
              description={moviesByCategory.description}
              keywords={moviesByCategory.short_content}
              title={moviesByCategory.name}
            />
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
  try {
    const data = context;
    const id = data.query.slug[0];
    const key = data.query.slug[1];

    const moviesByCategory: IMoviesByCategory = await API.moviesByCategory(id, {
      key,
    });

    return { props: { moviesByCategory, id, movieKey: key } };
  } catch (error) {
    console.error("Failed to fetch movies by category:", error);

    // Return an empty or error state as needed
    return { props: { moviesByCategory: null, id: null, movieKey: null } };
  }
};
