import { FC, Fragment } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SectionHeader from "../SectionHeader/SectionHeader";
import FilmCard from "../FilmCard/FilmCard";
import { HomeSeries } from "@/interfaces/home";
import { IMovie } from "@/interfaces/movie";
interface ICategorySection  {
  title: string;
  url: string;
  subtitle: string;
  list: IMovie[];
}

const CategorySection:FC<ICategorySection> = ( {list, title, subtitle,url,}) => {  
  return (
    <Box className="section" component="section" sx={{ pb: "30px" }}>
      <Box className="container">
        <Box className="section-inner">
          <SectionHeader title={title} subtitle={subtitle} url={url} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} justifyContent={"start"}>
              {list.length > 0 && list.map(({id,poster_url,short_content,title}) => (
                <Grid key={id} xs={12} sm={4} md={3}>
                  <Box sx={{ maxWidth: "350px", margin: "0 auto" }}>
                    <FilmCard id={id} poster_url={poster_url} title={title} short_content={short_content}/>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategorySection;
