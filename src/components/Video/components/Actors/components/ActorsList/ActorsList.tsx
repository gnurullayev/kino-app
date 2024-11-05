import React from "react";
import { ActorsListItem } from "../";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";

const ActorsList = () => {
  return (
    <Box className="actors-list">
      <Swiper
        slidesPerView="auto"
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: ".actors__header_prev",
          nextEl: ".actors__header_next",
        }}
        className="mySwiper home-hero-carousel"
      >
        {/* {heroData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="nav-item"
            style={{ width: "200px" }}
          >
            <ActorsListItem name={item.title} image={item.image} id={item.id} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </Box>
  );
};

export default ActorsList;
