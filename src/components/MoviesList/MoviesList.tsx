import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FilmCard from "../FilmCard/FilmCard";
import { heroData } from "../../features/home/components/HomeHeroCarusel/data";
import style from "./moviesList.module.scss";

const MoviesList = () => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent={"center"}
      component="ul"
      className={style.movies_list}
    >
      {heroData.map((item) => (
        <Grid key={item.id} xs={12} sm={4} md={3} component="li">
          <Box className={style.movies_item}>
            <FilmCard {...item} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
