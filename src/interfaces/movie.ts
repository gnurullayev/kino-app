import { MovieQuality } from "./quality";
import { ISeriesPart } from "./series";

export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  short_content: string;
  views: number;
  duration: number;
  rating: number;
  country_id: number | string;
  country_name: number;
  movie_part_number: number;
  description: string;
  type: string;
  series_id: number;
  poster_url: string;
  video_url: string;
  genre: string;
  is_active: boolean;
  slug: string;
}

export interface IMoviesByCategory {
  id: number;
  name: string;
  short_content: string;
  description: string;
  movies_data: {
    current_page: number;
    data: IMovie[];
    per_page: number;
    total: number;
  };
}

export interface MoviesDetail {
  id: number;
  title: string;
  release_date: string;
  duration: number;
  short_content: string;
  description: string;
  poster_url: string;
  video_url: string;
  genre: string | null;
  rating: number;
  views: number;
  movie_part_number: number;
  type: "movie" | "series";
  country_id: number;
  country_name: string;
  category_id: number;
  series_id: number | null;
  qualities: MovieQuality[] | [];
  other_movies: IMovie[];
  serials_parts: ISeriesPart[] | [];
  slug: string;
  link: string;
}

export interface ISearchMovies {
  data: IMovie[];
  current_page: number;
  per_page: number;
  total: number;
}
