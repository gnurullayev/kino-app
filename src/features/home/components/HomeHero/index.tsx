import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import HomeHeroCarousel from "../HomeHeroCarusel";
import { IMovie } from "@/interfaces/movie";
import { ISeries } from "@/interfaces/series";

interface Props {
  data: IMovie[] & ISeries[];
}

const HomeHero: FC<Props> = ({ data }) => {
  return (
    <Box className="home-hero">
      <Box className="container">
        <Box className="home-hero__inner">
          <Box className="section-top">
            <Typography component="h2" className="section-title">
              Primyeralar
            </Typography>
            <Typography component="p" className="section-sub-title">
              Eng sara premyeralar bizda
            </Typography>

            <HomeHeroCarousel data={data} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
