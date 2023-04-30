import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ISectionHeader } from "./sectonHeader.props";

const SectionHeader = ({ title, subtitle }: ISectionHeader) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "10px",
        pb: "20px",
      }}
    >
      <Box>
        <Typography component="h2" className="section-title">
          {title}
        </Typography>
        <Typography component="p" className="section-sub-title">
          {subtitle}
        </Typography>
      </Box>
      <Button>Barchasi</Button>
    </Box>
  );
};

export default SectionHeader;
