import { Box, Pagination } from "@mui/material";
import React, { FC } from "react";

interface Props {
  total:number,
  activePage:number,
  changePaginate:()=>void
}

export function calculatePaginate(total:number,perPage:number): number {

  const pages = Math.ceil(total/perPage)

  return pages;
}

const PaginationComponent:FC<Props> = ({total,activePage,changePaginate}) => {
  return (
    <Box
      className="pagination"
      sx={{ pt: "10px", pb: "30px", display: "flex", justifyContent: "center" }}
    >
      <Pagination
        count={calculatePaginate(total,10)}
        page={activePage}
        variant="outlined"
        color="secondary"
        sx={{ color: "green !important" }}
      />
    </Box>
  );
};

export default PaginationComponent;
