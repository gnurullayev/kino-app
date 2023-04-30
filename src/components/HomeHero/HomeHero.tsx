import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./homeHero.module.scss";
import HomeHeroCarousel from "../HomeHeroCarusel/HomeHeroCarusel";

const HomeHero = () => {
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

            <HomeHeroCarousel />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
