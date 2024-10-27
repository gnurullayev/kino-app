export interface IMovie {
  id: string | null;
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
