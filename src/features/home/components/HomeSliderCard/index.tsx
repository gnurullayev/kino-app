import React, { useContext } from "react";
import { IHomeSliderCard } from "./homeSiliderCard.props";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ITitleContextData,
  TitleContext,
  ValueType,
} from "@/context/TitleContext/TitleContext";
import { route } from "@/utils";
import Routes from "@/enums/routes";

const HomeSliderCard = ({ image, name, id, type }: IHomeSliderCard) => {
  const router = useRouter();
  const { changeTitle } = useContext<ValueType>(TitleContext);
  const handleClick = (data: ITitleContextData): void => {
    changeTitle(data);
  };

  return (
    <Card
      sx={{ maxWidth: "100%", cursor: "pointer" }}
      className="home-slider-card"
      onClick={() => {
        router.push(route(Routes.MOVIE, { id, key: type }));
        handleClick({ title: name, url: id });
      }}
    >
      <Box sx={{ position: "relative", minHeight: "200px" }}>
        <Image
          src={image}
          alt={name}
          // style={{ width: "100%", height: "200px", objectFit: "inherit" }}
          fill
          //   objectPosition="center top"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeSliderCard;
