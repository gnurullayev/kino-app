import React from "react";
import { IHomeSliderCard } from "./homeSiliderCard.props";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

const HomeSliderCard = ({ image, name }: IHomeSliderCard) => {
  return (
    <Card sx={{ maxWidth: "100%" }} className="home-slider-card">
      <Box sx={{ position: "relative", minHeight: "200px" }}>
        <Image
          src={image}
          alt={name}
          style={{ width: "100%", height: "200px", objectFit: "inherit" }}
          //   fill
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
