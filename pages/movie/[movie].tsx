import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Video, VideoBottom } from "src/components";

const Movie = () => {
  return (
    <Box className="movie" sx={{ py: "20px" }}>
      <Box className="container">
        <Grid
          container
          spacing={3}
          className="movie-inner"
          justifyContent={"space-between"}
          sx={{ border: "1px solid red" }}
        >
          <Grid xs={12} lg={7}>
            <Box className="movie-inner__start">
              <Box
                className="move__video"
                sx={{ height: "400px", width: "100%" }}
              >
                <Video />
              </Box>
              <VideoBottom />
            </Box>
          </Grid>
          <Grid xs={12} lg={4}>
            <Box className="movie-inner__end"></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Movie;
