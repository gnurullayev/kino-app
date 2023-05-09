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
            <Grid container spacing={3} justifyContent={"center"}>
              {list.map((item) => (
                <Grid key={item.id} xs={12} sm={4} md={3}>
                  <Box sx={{ maxWidth: "350px", margin: "0 auto" }}>
                    <FilmCard {...item} />
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
