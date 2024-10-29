import { CategorySection } from "@/components";
import React, { FC } from "react";
import HomeHero from "./components/HomeHero";
import { IHome } from "@/interfaces/home";

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
        subtitle="Eng Sara seriallar"
        list={data.series.list}
        url="http://localhost:3001/"
      />
      {
        data.categories.length > 0 &&
        data.categories.map(category => (
          <CategorySection
            key={category.id}
            title={category.name}
            subtitle="Eng Sara hind kinolar"
            list={category.movies}
            url="http://localhost:3001/"
          />
        ))
      }
    </>
  );
};

export default Home;
