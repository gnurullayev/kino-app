import PageSchema from "@/components/PageSchema";
import MovieType from "@/enums/movie";
import { MoviesDetail } from "@/interfaces/movie";
import { MovieQuality } from "@/interfaces/quality";
import { API } from "@/services/api";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, useEffect, useMemo, useState } from "react";
import {
  VideoDetailLeft,
  VideoDetailCardList,
  BreadcrumbsComponent,
  MetaData,
} from "src/components";
interface Props {
  movieDetail: MoviesDetail | null;
  movieKey: string | null;
  id: number | null;
}

export interface ActiveMovie {
  title: string;
  id: number;
  quality: MovieQuality;
  video_url: string | undefined;
  slug: string;
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
      video_url: movieDetail.video_url,
      slug: movieDetail.slug,
    };
  else if (params.part) {
    const findMovie = movieDetail.serials_parts
      ? movieDetail.serials_parts.find(
          (item) => item.slug === String(params.part)
        )
      : movieDetail.serials_parts[0];

    return {
      title: findMovie?.title as string,
      id: findMovie?.id as number,
      quality: findMovie?.qualities[0] as MovieQuality,
      video_url: findMovie?.video_url,
      slug: findMovie?.slug as string,
    };
  } else
    return {
      title: movieDetail.serials_parts[0]?.title as string,
      id: movieDetail.serials_parts[0]?.id as number,
      quality: movieDetail.serials_parts[0]?.qualities[0] as MovieQuality,
      video_url: movieDetail.serials_parts[0]?.video_url,
      slug: movieDetail.serials_parts[0]?.slug as string,
    };
};

const Movie: FC<Props> = ({ movieDetail, movieKey }) => {
  const router = useRouter();
  const { query }: any = router;
  const params = useMemo(() => {
    return {
      type: query.movie[1],
      id: query.movie[0],
      part: query.part,
    };
  }, [query]);

  const [playMovie, setPlayMovie] = useState<ActiveMovie>(
    movieDetail ? findMovieQuality(movieDetail, params) : ({} as ActiveMovie)
  );

  useEffect(() => {
    if (movieDetail) {
      setPlayMovie(findMovieQuality(movieDetail, params));
    }
  }, [movieDetail, params]);

  if (!movieDetail) return null;

  return (
    <>
      <Box className="movie" sx={{ pb: "20px" }}>
        <Box className="container">
          <Box className="movie-inner">
            <MetaData
              description={movieDetail.description}
              keywords={movieDetail.short_content + " " + movieDetail.genre}
              title={movieDetail.title}
              image={movieDetail.poster_url}
            />

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

      <PageSchema
        name={movieDetail.title}
        description={movieDetail.description}
        genre={movieDetail.genre as string}
        url={movieDetail.link}
        image={movieDetail.poster_url}
        datePublished={movieDetail.release_date}
        type={"Kino batafsil malumotlari " + movieDetail.short_content}
      />
    </>
  );
};

export default Movie;

export const getServerSideProps = (async (context: any) => {
  const data = context;
  const id = data.query.movie[0];
  const type = data.query.movie[1];

  try {
    const movieDetail: MoviesDetail = await API.movieDetail(id, type);

    return { props: { movieDetail, id, movieKey: type } };
  } catch (error) {
    console.error("Failed to fetch movie details:", error);

    // Return an error state or fallback data as needed
    return { props: { movieDetail: null, id: null, movieKey: null } };
  }
}) satisfies GetServerSideProps<Props>;
