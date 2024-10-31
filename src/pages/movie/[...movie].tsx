import { INavData } from "@/components/Nav/nav.props";
import { TitleContext, ValueType } from "@/context/TitleContext/TitleContext";
import { useQuery } from "@/hooks/use-query";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  VideoDetailLeft,
  VideoDetailCardList,
  BreadcrumbsComponent,
} from "src/components";
interface IData {
  url: string;
  title: string;
  subtitle?: string;
}

const Movie = () => {
  const { title, changeTitle } = useContext<ValueType>(TitleContext);
  const {params, page, sort, desc, setParams}= useQuery()

  console.log(params, page);
  

  return (
    <Box className="movie" sx={{ pb: "20px" }}>
      <Box className="container">
        <Box className="movie-inner">
          <BreadcrumbsComponent label={title} />
          <Grid
            container
            spacing={3}
            justifyContent={"space-between"}
            sx={{ pt: "20px" }}
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
    </Box>
  );
};

export default Movie;
