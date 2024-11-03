import { INavData } from "@/components/Nav/nav.props";
import { TitleContext, ValueType } from "@/context/TitleContext/TitleContext";
import MovieType from "@/enums/movie";
import { useQuery } from "@/hooks/use-query";
import { MoviesDetail } from "@/interfaces/movie";
import { MovieQuality } from "@/interfaces/quality";
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

export interface ActiveMovie {
  title: string;
  id: number;
  quality: MovieQuality;
}

const findMovieQuality = (
  movieDetail: MoviesDetail,
  params: any
): ActiveMovie => {
  if (movieDetail.type === MovieType.MOVIE)
    return {
      title: movieDetail.title as string,
      id: movieDetail.id as number,
      quality: movieDetail.qualities[0] as MovieQuality,
    };
  else if (params.part) {
    const findMovie = movieDetail.serials_parts
      ? movieDetail.serials_parts.find(
          (item) => item.id === Number(params.part)
        )
      : movieDetail.serials_parts[0];

    return {
      title: findMovie?.title as string,
      id: findMovie?.id as number,
      quality: findMovie?.qualities[0] as MovieQuality,
    };
  } else
    return {
      title: movieDetail.serials_parts[0]?.title as string,
      id: movieDetail.serials_parts[0]?.id as number,
      quality: movieDetail.serials_parts[0]?.qualities[0] as MovieQuality,
    };
};

const Movie: FC<Props> = ({ movieDetail, movieKey }) => {
  const { params } = useQuery();
  const [playMovie, setPlayMovie] = useState<ActiveMovie>(
    findMovieQuality(movieDetail, params)
  );

  console.log(playMovie);

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
              <VideoDetailLeft
                movie={movieDetail}
                playMovie={playMovie}
                setPlayMovie={setPlayMovie}
              />
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
