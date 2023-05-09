import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import style from "./VideoInfoCard.module.scss";

const VideoInfoCard = () => {
  return (
    <Box
      className={style.video_info_card}
      sx={{ display: "flex", gap: "20px" }}
    >
      <Box className={style.video_info_card__img}>
        <Image
          src="https://media.graphassets.com/0aWn8NPUQNOx2S7qqqvt"
          alt="card img"
          width={180}
          height={250}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
        />
      </Box>

      <Box className={style.video_info_card__content_list} component="ul">
        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Kino nomi:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_bold}
          >
            Maxluqlar uyasi (Логово)
          </Typography>
        </Box>

        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Joylandi:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_bold}
          >
            03.05.2023
          </Typography>
        </Box>
        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Sifat:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_bold}
          >
            FullHD
          </Typography>
        </Box>

        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Yil:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_link}
          >
            2022
          </Typography>
        </Box>

        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Davomiyligi:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_bold}
          >
            1 soat. 36 min.
          </Typography>
        </Box>

        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Mamlakat:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_link}
          >
            AQSH
          </Typography>
        </Box>

        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Janr:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_link}
          >
            <Typography
              component="span"
              className={style.video_info_card__content_link}
            >
              Jangari ,
            </Typography>
            <Typography
              component="span"
              className={style.video_info_card__content_link}
            >
              {" "}
              Ujas ,
            </Typography>
            <Typography
              component="span"
              className={style.video_info_card__content_link}
            >
              {" "}
              Tarjima kinolar
            </Typography>
          </Typography>
        </Box>

        <Box component="li" className={style.video_info_card__content_item}>
          <Typography
            component="span"
            className={style.video_info_card__content_span}
          >
            Dublyaj:{" "}
          </Typography>
          <Typography
            component="b"
            className={style.video_info_card__content_bold}
          >
            Professional (PRO)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoInfoCard;
