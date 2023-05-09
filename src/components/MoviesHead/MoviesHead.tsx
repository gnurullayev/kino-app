import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { BreadcrumbsComponent } from "../";
type PropsType = {
  title: string;
  pageUrlLabel: string;
};

const MoviesHead = ({ title, pageUrlLabel }: PropsType) => {
  return (
    <>
      <BreadcrumbsComponent label={pageUrlLabel} />
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
