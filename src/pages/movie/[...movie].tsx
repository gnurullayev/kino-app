import { INavData } from "@/components/Nav/nav.props";
import { TitleContext, ValueType } from "@/context/TitleContext/TitleContext";
import MovieType from "@/enums/movie";
import { useQuery } from "@/hooks/use-query";
import { MoviesDetail } from "@/interfaces/movie";
import { API } from "@/services/api";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, useContext, useState } from "react";
import {
  VideoDetailLeft,
  VideoDetailCardList,
  BreadcrumbsComponent,
} from "src/components";
interface Props {
  movieDetail: MoviesDetail;
  movieKey: string;
  id: number;
}

const findMovieQuality = (movieDetail: MoviesDetail, params: any) => {
  if (movieDetail.type === MovieType.MOVIE)
    return {
      title: movieDetail.title,
      id: movieDetail.id,
      quality: movieDetail.qualities[0],
    };
  else if (params.movie_part) {
    const findMovie = movieDetail.serials_parts
      ? movieDetail.serials_parts.find((item) => item.id === params.movie_part)
      : movieDetail.serials_parts[0];

    return {
      title: findMovie?.title,
      id: findMovie?.id,
      quality: findMovie?.qualities[0],
    };
  } else return {};
};

const Movie: FC<Props> = ({ movieDetail, movieKey }) => {
  const { params, page, sort, desc, setParams } = useQuery();
  const [playMovie, setPlayMovie] = useState(
    findMovieQuality(movieDetail, params)
  );

  console.log(movieDetail, playMovie);

  return (
    <Box className="movie" sx={{ pb: "20px" }}>
      <Box className="container">
        <Box className="movie-inner">
          <BreadcrumbsComponent label={movieDetail.title} />

          <Grid
            container
            spacing={3}
            justifyContent={"space-between"}
            sx={{ pt: "20px" }}
          >
            <Grid xs={12} lg={8}>
              <VideoDetailLeft />
            </Grid>

            <Grid xs={12} lg={4}>
              <Box className="movie-inner__end">
                <VideoDetailCardList movies={movieDetail.other_movies} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Movie;

export const getServerSideProps = (async (context: any) => {
  const data = context;
  const id = data.query.movie[0];
  const type = data.query.movie[1];

  const movieDetail: MoviesDetail = await API.movieDetail(id, type);

  return { props: { movieDetail, id, movieKey: type } };
}) satisfies GetServerSideProps<Props>;
