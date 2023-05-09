import { Box, Pagination } from "@mui/material";
import React from "react";

const PaginationComponent = () => {
  return (
    <Box
      className="pagination"
      sx={{ pt: "10px", pb: "30px", display: "flex", justifyContent: "center" }}
    >
      <Pagination
        count={10}
        variant="outlined"
        color="secondary"
        sx={{ color: "green !important" }}
      />
    </Box>
  );
};

export default PaginationComponent;
