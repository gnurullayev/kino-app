import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FilmCard from "../FilmCard/FilmCard";
import style from "./moviesList.module.scss";
import { IMovie } from "@/interfaces/movie";
import { FC } from "react";

interface Props {
  data: IMovie[];
}

const MoviesList: FC<Props> = ({ data }) => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent={"start"}
      component="ul"
      className={style.movies_list}
    >
      {data.map((item) => (
        <Grid key={item.id} xs={12} sm={4} md={3} component="li">
          <Box className={style.movies_item}>
            <FilmCard {...item} type={item.type} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
