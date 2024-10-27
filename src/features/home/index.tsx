import { CategorySection } from "@/components";
import React, { FC } from "react";
import HomeHero from "./components/HomeHero";
import { IHome } from "@/interfaces/home";

interface Props {
  data: IHome;
}

const Home: FC<Props> = ({ data }) => {
  return (
    <>
      <HomeHero data={data.top_movies} />

      <CategorySection
        title="Seriallar"
        subtitle="Eng Sara seriallar"
        list={[]}
        url="serials"
      />

      <CategorySection
        title="Hind kinolar"
        subtitle="Eng Sara hind kinolar"
        list={[]}
        url="indian-movies"
      />
    </>
  );
};

export default Home;
