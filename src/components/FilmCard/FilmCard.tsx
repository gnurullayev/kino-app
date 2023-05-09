import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { IFilmCard } from "./filmCard.props";
const FilmCard = ({ image, title, description, year }: IFilmCard) => {
  return (
    <Card sx={{ maxWidth: "100%" }} className="film-card">
      <Box sx={{ position: "relative", minHeight: "200px" }}>
        <Image
          src={image}
          alt={title}
          width={350}
          height={200}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{year}</Typography>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
