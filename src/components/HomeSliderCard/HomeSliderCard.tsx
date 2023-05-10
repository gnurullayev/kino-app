import React from "react";
import { IHomeSliderCard } from "./homeSiliderCard.props";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeSliderCard = ({ image, name, id }: IHomeSliderCard) => {
  const router = useRouter();
  return (
    <Card
      sx={{ maxWidth: "100%", cursor: "pointer" }}
      className="home-slider-card"
      onClick={() => router.push(`/movie/${id}`)}
    >
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
