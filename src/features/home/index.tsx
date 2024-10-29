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
  console.log(data);

  return (
    <>
      <HomeHero data={data.top_movies} />

      <CategorySection
        title={data.series.name}
        subtitle={""}
        list={data.series.list}
        url={route(Routes.MOVIES, { id: data.series.id, key: Movie.SERIES })}
      />
      {data.categories.length > 0 &&
        data.categories.map((category) => (
          <CategorySection
            key={category.id}
            title={category.name}
            subtitle={""}
            list={category.movies}
            url={route(Routes.MOVIES, {
              id: category.id,
              key: Movie.MOVIE,
            })}
          />
        ))}
    </>
  );
};

export default Home;
