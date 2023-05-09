import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import style from "./ActorsListItem.module.scss";

type ActorsListItemProps = {
  name: string;
  image: string | StaticImageData;
  id: number | string;
};
const ActorsListItem = ({ name, image }: ActorsListItemProps) => {
  return (
    <Box className={style.actors_list_item}>
      <Box className={style.actors_list_item__img}>
        <Image
          src={image}
          alt="card img"
          width={200}
          height={150}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={50}
        />
      </Box>
      <Typography
        className={style.actors_list_item__title}
        sx={{ p: "8px 10px" }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default ActorsListItem;
