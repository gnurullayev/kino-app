import { Fragment } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ICategorySection } from "./categorySection.props";
import FilmCard from "../FilmCard/FilmCard";

const CategorySection = ({ title, subtitle, list }: ICategorySection) => {
  return (
    <Box className="section" component="section" sx={{ pb: "30px" }}>
      <Box className="container">
        <Box className="section-inner">
          <SectionHeader title={title} subtitle={subtitle} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {list.map((item) => (
                <Grid key={item.id} xs={1} sm={3}>
                  <FilmCard {...item} />
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
