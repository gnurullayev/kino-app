import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { VideoDetailLeft, VideoDetailCardList } from "src/components";

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
          <Grid xs={12} lg={8}>
            <VideoDetailLeft />
          </Grid>
          <Grid xs={12} lg={4}>
            <Box className="movie-inner__end">
              <VideoDetailCardList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Movie;
