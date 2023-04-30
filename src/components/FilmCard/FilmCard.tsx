import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { IFilmCard } from "./filmCard.props";
const FilmCard = ({ image, title, description }: IFilmCard) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <Box sx={{ position: "relative", minHeight: "250px" }}>
        <Image src={image} alt={title} fill objectPosition="center top" />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
