import React from "react";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import { heroData } from "./data";
import FilmCard from "../FilmCard/FilmCard";
import HomeSliderCard from "../HomeSliderCard/HomeSliderCard";

const HomeHeroCarousel = () => {
  return (
    <Box className="home_hero_carousel" sx={{ p: "20px 0" }}>
      <Swiper
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: ".home_hero_carousel__btn_left",
          nextEl: ".home_hero_carousel__btn_right",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper home-hero-carousel"
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id} className="nav-item">
            <HomeSliderCard
              name={item.title}
              image={item.image}
              slug={item.slug}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="home_hero_carousel__btn home_hero_carousel__btn_left">
        <KeyboardArrowLeftIcon className="home_hero_carousel__btn_icon" />
      </button>

      <button className="home_hero_carousel__btn home_hero_carousel__btn_right">
        <KeyboardArrowRightIcon />
      </button>
    </Box>
  );
};

export default HomeHeroCarousel;
