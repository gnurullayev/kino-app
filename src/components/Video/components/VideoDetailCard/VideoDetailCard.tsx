import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import style from "./videoDetailCard.module.scss";

const timeStile = {
  position: "absolute",
  right: "10px",
  bottom: "10px",
  backgroundColor: "rgba(12, 13, 12, 0.7);",
  borderRadius: "8px",
  padding: "4px 10px",
  fontSize: "12px",
};
const VideoDetailCard = () => {
  return (
    <Box className={style.video_detail_card}>
      <Box className={style.video_detail_card__img}>
        <Image
          src="https://media.graphassets.com/0aWn8NPUQNOx2S7qqqvt"
          alt="card img"
          width={260}
          height={150}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={50}
        />
        <Typography component="span" sx={timeStile}>
          02:30:15
        </Typography>
      </Box>
      <Box className={style.video_detail_card__body}>
        <Typography
          className={style.video_detail_card__title}
          variant="h6"
          component="h6"
        >
          Transformerlar: Maxluqlarning yuksalishi
        </Typography>
        <Typography
          className={style.video_detail_card__year}
          component="span"
          sx={{ color: "#909090" }}
        >
          2017
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoDetailCard;
