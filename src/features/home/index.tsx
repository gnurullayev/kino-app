import { CategorySection } from "@/components";
import React, { FC } from "react";
import HomeHero from "./components/HomeHero";
import { IHome } from "@/interfaces/home";
import { route } from "@/utils";
import Routes from "@/enums/routes";
import Movie from "@/enums/movie";

interface Props {
  data: IHome;
}

const Home: FC<Props> = ({ data }) => {
  return (
    <>
      <HomeHero data={data.top_movies} />

      {data.series.length > 0 &&
        data.series.map((category) => (
          <CategorySection
            key={category.id}
            title={category.name}
            subtitle={""}
            list={category.list}
            url={route(Routes.MOVIES, {
              id: category.slug,
              key: Movie.SERIES,
            })}
          />
        ))}

      {data.categories.length > 0 &&
        data.categories.map((category) => (
          <CategorySection
            key={category.id}
            title={category.name}
            subtitle={""}
            list={category.movies}
            url={route(Routes.MOVIES, {
              id: category.slug,
              key: Movie.MOVIE,
            })}
          />
        ))}
    </>
  );
};

export default Home;
