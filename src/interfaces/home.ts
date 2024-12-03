import { IMovie } from "./movie";
import { ISeries } from "./series";

export interface HomeSeries {
  id: number;
  name: string;
  slug: string;
  list: IMovie[];
}

export interface HomeCategory {
  id: number;
  name: string;
  slug: string;
  movies: IMovie[];
}

export interface IHome {
  categories: HomeCategory[];
  series: HomeSeries[];
  top_movies: IMovie[] & ISeries[];
}
