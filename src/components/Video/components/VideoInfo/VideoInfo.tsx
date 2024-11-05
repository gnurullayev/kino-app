import { FC, useState } from "react";
import { VideoInfBody, VideoInfoCard } from "./components";
import { Box, Button, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import style from "./VideoInfo.module.scss";
import { MoviesDetail } from "@/interfaces/movie";

interface Props {
  movie: MoviesDetail;
}

const VideoInfo: FC<Props> = ({ movie }) => {
  const [more, setMore] = useState<boolean>(false);

  return (
    <Box className={`${style.video_info} ${more ? style.active : ""}`}>
      <VideoInfoCard movie={movie} />
      <VideoInfBody movie={movie} />
      <Box
        sx={{
          position: "absolute",
          right: "0px",
          bottom: "0px",
          left: "0",
          display: "flex",
          justifyContent: "flex-end",
          background:
            "linear-gradient(163deg,rgba(30, 32, 41, 0) 0,#1e2029 65%,#1e2029 100%)",
        }}
      >
        <Button
          variant="text"
          sx={{ fontSize: "16px" }}
          color="success"
          onClick={() => setMore((prev) => !prev)}
        >
          {!more ? (
            <>
              <Typography
                component="span"
                sx={{ fontSize: "14px" }}
              >{`Ko'proq o'qish`}</Typography>
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "18px" }} />
            </>
          ) : (
            <>
              <KeyboardDoubleArrowLeftIcon sx={{ fontSize: "18px" }} />
              <Typography
                component="span"
                sx={{ fontSize: "14px" }}
              >{`Kamiroq o'qish`}</Typography>
            </>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default VideoInfo;
