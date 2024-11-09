import React, { FC } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { MoviesDetail } from "@/interfaces/movie";
import MovieType from "@/enums/movie";
import { ActiveMovie } from "@/pages/movie-detail/[...movie]";
import { MovieQuality } from "@/interfaces/quality";
import { useQuery } from "@/hooks/use-query";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props {
  movie: MoviesDetail;
  playMovie: ActiveMovie;
  setPlayMovie: (a: ActiveMovie) => void;
}

const VideoBottom: FC<Props> = ({ movie, playMovie, setPlayMovie }) => {
  const { updateQuery } = useQuery();
  const handleChange = (evt: any) => {
    const value = evt.target.value;
    const findMovie = movie.serials_parts.find(
      (item) => item.id === Number(value)
    );

    updateQuery({ part: value });

    setPlayMovie({
      id: findMovie?.id as number,
      title: findMovie?.title as string,
      quality: findMovie?.qualities[0] as MovieQuality,
    });
  };

  return (
    <Box className="movie__video_bottom" sx={{ mb: "15px" }}>
      <Typography variant="h4" component="h4">
        {playMovie.title}
      </Typography>

      {/* <VideoBottomButtons /> */}
      <Box
        className="movie__video_btn--group"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "340px 200px" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          py: "8px",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            variant="outlined"
            color={"success"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <DownloadIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
            <Typography
              component={"span"}
              sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            >
              Yuklab olish
            </Typography>
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <VisibilityIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
            <Typography
              component={"span"}
              sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            >
              {movie.views}
            </Typography>
          </Box>
        </Box>

        {movie.type !== MovieType.MOVIE && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FormControl style={{ width: "100%" }}>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                style={{ color: "#fff", fontSize: "20px" }}
              >
                Serial qismini tanlang
              </InputLabel>

              <NativeSelect
                defaultValue={playMovie.id}
                onChange={handleChange}
                style={{ color: "#fff", fontSize: "20px" }}
              >
                {movie.serials_parts.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    style={{ color: "#000", fontSize: "20px" }}
                  >
                    {item.title}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
            {/* <Button
            variant="outlined"
            color={"success"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <ThumbUpIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
            <Typography
              component={"span"}
              sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            >
              50
            </Typography>
          </Button>

          <Button
            variant="outlined"
            color={"success"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              width: "100%",
            }}
          >
            <ThumbDownIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
            <Typography
              component={"span"}
              sx={{ fontSize: { xs: "13px", sm: "14px" } }}
            >
              2
            </Typography>
          </Button> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VideoBottom;
