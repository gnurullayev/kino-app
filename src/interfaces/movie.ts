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
  poster_url: string;
  video_url: string;
  genre: string;
  is_active: boolean;
}


export interface IMoviesByCategory {
  id: number;
  name: string;
  short_content: string;
  description: string;
  movies_data:{
    current_page: number,
    data: IMovie[],
    per_page: number,
    total: number
  }
}