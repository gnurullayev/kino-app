import { MovieQuality } from "./quality";

export interface ISeries {
  id: string | null;
  title: string;
  release_date: string;
  poster_url: string;
  description: string;
  rating: number;
  category_id: string;
  total_movies: number;
  short_content: string;
  views: string;
}

export interface ISeriesPart {
  value: number;
  label: number;
  id: number;
  title: string;
  qualities: MovieQuality[];
}
