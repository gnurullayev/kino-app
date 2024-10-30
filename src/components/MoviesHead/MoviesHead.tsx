import { FC, useContext } from "react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { BreadcrumbsComponent } from "../";
import { TitleContext } from "@/context/TitleContext/TitleContext";

interface Props {
  title:string
}
const MoviesHead:FC<Props> = ({title=""}) => {
  return (
    <>
      <BreadcrumbsComponent label={title} />

      <Box
        sx={{
          pt: "10px",
          pb: "20px",
        }}
        className="section-header"
      >
        <Box>
          <Typography component="h2" className="section-title">
            {title}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MoviesHead;
