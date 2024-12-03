import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import style from "./VideoInfoCard.module.scss";
import { MoviesDetail } from "@/interfaces/movie";
import { formatDate, formatTime } from "@/utils";

interface Props {
  movie: MoviesDetail;
}

const VideoInfoCard: FC<Props> = ({ movie }) => {
  return (
    <Box
      className={style.video_info_card}
      sx={{ display: "flex", gap: "20px" }}
    >
      <Box className={style.video_info_card__img}>
        <Image
          src={movie?.poster_url ? movie.poster_url : ""}
          alt={movie.title}
          width={180}
          height={250}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
            {movie.title}
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
            {`${formatDate(movie.release_date).year}.${
              formatDate(movie.release_date).day
            }.${formatDate(movie.release_date).month}`}
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
            {formatDate(movie.release_date).year}
          </Typography>
        </Box>

        {movie.duration && (
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
              {`${formatTime(movie.duration).hours} soat ${
                formatTime(movie.duration).mins > 0
                  ? formatTime(movie.duration).mins + " minut"
                  : ""
              } `}
            </Typography>
          </Box>
        )}

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
            {movie.country_name}
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
              {movie.genre}
            </Typography>
            {/* <Typography
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
            </Typography> */}
          </Typography>
        </Box>

        {/* <Box component="li" className={style.video_info_card__content_item}>
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default VideoInfoCard;
