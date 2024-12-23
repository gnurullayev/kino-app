import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import {
  MetaData,
  MoviesHead,
  MoviesList,
  PaginationComponent,
} from "@/components";
import { API } from "@/services/api";
import { IMoviesByCategory, ISearchMovies } from "@/interfaces/movie";
import { useMutation } from "@tanstack/react-query";
import { MovieSearch } from "@/features/movies-search";
import { useQuery } from "@/hooks/use-query";
import PageSchema from "@/components/PageSchema";

interface Props {
  searchMovies: ISearchMovies;
  search: string;
}

const MoviesSearch: FC<Props> = ({ searchMovies, search }) => {
  const [moviesList, setMoviesList] = useState(searchMovies.data);
  const { updateQuery, page } = useQuery();
  const [paginate, setPaginate] = useState({
    currentPage: searchMovies.current_page,
    total: searchMovies.total,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) =>
      await API.moviesSearch({
        query: data.search,
        page: data.page,
      }),
    onSuccess: (res: ISearchMovies) => {
      setMoviesList(res.data);

      setPaginate({
        total: res.total,
        currentPage: res.current_page,
      });
    },
  });

  const changePaginate = (page: any) => {
    mutate({ page, search });
    updateQuery({ page });
  };

  return (
    <>
      <Box className="movies" component="main">
        <Box component="section" className="movies_hero">
          <Box className="movies_hero__container container">
            <Box className="movies_hero__inner">
              <MetaData
                title={
                  search +
                  " " +
                  "Eng so'ngi kino va seriallar topmovie.me saytida"
                }
              />
              <MoviesHead title={search} />
              <MovieSearch searchValue={search ? search : ""} mutate={mutate} />
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
      <PageSchema name="Topmovie saytida eng yangi va qiziqarli kino va seriallarni qidirish" />
    </>
  );
};

export default MoviesSearch;

export const getServerSideProps = async (context: any) => {
  try {
    const data = context;
    const search = data.query.search;
    const page = data.query.page;

    const searchMovies: IMoviesByCategory = await API.moviesSearch({
      query: search,
      page: page ? page : 1,
    });

    return {
      props: { searchMovies, search: search?.includes("search") ? "" : search },
    };
  } catch (error) {
    console.error("Failed to fetch movies:", error);

    // Return an empty or error state as needed
    return { props: { searchMovies: null, search: "" } };
  }
};
