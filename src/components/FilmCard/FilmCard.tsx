import React, { FC } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { route } from "@/utils";
import Routes from "@/enums/routes";

interface Props {
  id: number;
  title: string;
  short_content: string;
  poster_url: string;
  type?: string;
  slug: string;
}

const FilmCard: FC<Props> = ({ poster_url, title, id, type, slug }) => {
  const router = useRouter();
  const key = type ? type : "series";

  return (
    <Card
      sx={{ maxWidth: "100%" }}
      className="film-card"
      onClick={() => router.push(route(Routes.MOVIE, { id: slug, key }))}
    >
      <Box sx={{ position: "relative", minHeight: "200px" }}>
        <Image
          src={poster_url}
          alt={title}
          width={350}
          height={200}
          style={{ objectFit: "contain", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
