import React from "react";
import { Box, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { INavData } from "./nav.props";

const Nav = () => {
  const navData: INavData[] = [
    { label: "Detektiv", id: 1, path: "/" },
    { label: "Drama", id: 2, path: "/" },
    { label: "Fontastik", id: 3, path: "/" },
    { label: "Fontaziya", id: 4, path: "/" },
    { label: "Harbiy", id: 5, path: "/" },
    { label: "Jangari", id: 6, path: "/" },
    { label: "Komediya", id: 7, path: "/" },
    { label: "Kriminal", id: 8, path: "/" },
    { label: "Melodrama", id: 9, path: "/" },
    { label: "Multfilmlar", id: 10, path: "/" },
    { label: "Sarguzashtlar", id: 11, path: "/" },
    { label: "Tarixiy", id: 12, path: "/" },
    { label: "Ujas", id: 13, path: "/" },
  ];
  return (
    <Box className="nav" sx={{ p: "15px 0" }}>
      <Box className="container">
        <Box className="nav-inner">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1050: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            className="mySwiper navList"
          >
            {navData.map((item) => (
              <SwiperSlide key={item.id} className="nav-item">
                <Typography
                  className="nav_link"
                  component="p"
                  sx={{ cursor: "pointer" }}
                >
                  {item.label}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
