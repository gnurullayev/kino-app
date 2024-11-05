import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { INavData } from "./nav.props";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/services/api";
import { ISelectData } from "@/interfaces";
import { route } from "@/utils";
import { useRouter } from "next/router";
import Routes from "@/enums/routes";
import MovieType from "@/enums/movie";

interface Props {
  data: ISelectData[];
}

const Nav: FC<Props> = ({ data }) => {
  const router = useRouter();
  // const { data } = useQuery({
  //   queryKey: ["all-categories"],
  //   queryFn: async () => await API.moviesCategories(),
  // });

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
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1050: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
            className="mySwiper navList"
          >
            {data &&
              data.map((item: ISelectData) => (
                <SwiperSlide key={item.value} className="nav-item">
                  <Typography
                    className="nav_link"
                    component="p"
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      router.push(
                        route(Routes.MOVIES, { id: item.value, key: item.type })
                      )
                    }
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
