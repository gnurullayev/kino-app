import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import style from "./videoDetailCard.module.scss";
import { useRouter } from "next/router";
import {
  ITitleContextData,
  TitleContext,
  ValueType,
} from "@/context/TitleContext/TitleContext";
interface IProps {
  id: string | number;
  name: string;
  year: string;
  image: string | StaticImageData;
}

const timeStile = {
  position: "absolute",
  right: "10px",
  bottom: "10px",
  backgroundColor: "rgba(12, 13, 12, 0.7);",
  borderRadius: "8px",
  padding: "4px 10px",
  fontSize: "12px",
};

const VideoDetailCard = ({ id, image, name, year }: IProps) => {
  const router = useRouter();
  const { changeTitle } = useContext<ValueType>(TitleContext);
  const handleClick = (data: ITitleContextData): void => {
    changeTitle(data);
  };
  return (
    <Box
      className={style.video_detail_card}
      onClick={() => {
        router.push(`/movie/${id}`);
        handleClick({ title: name, url: id });
      }}
    >
      <Box className={style.video_detail_card__img}>
        <Image
          src={image}
          alt="card img"
          width={260}
          height={150}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
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
          {name}
        </Typography>
        <Typography
          className={style.video_detail_card__year}
          component="span"
          sx={{ color: "#909090" }}
        >
          {year}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoDetailCard;
