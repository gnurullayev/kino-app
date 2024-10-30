import { Box, Pagination } from "@mui/material";
import React, { FC, useEffect } from "react";

interface Props {
  total: number;
  activePage: number;
  changePaginate: (a: any) => void;
}

export function calculatePaginate(total: number, perPage: number): number {
  const pages = Math.ceil(total / perPage);

  return pages;
}

const PaginationComponent: FC<Props> = ({
  total,
  activePage,
  changePaginate,
}) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    changePaginate(value);
  };

  useEffect(() => {
    setPage(activePage);
  }, [activePage]);

  return (
    <Box
      className="pagination"
      sx={{ pt: "10px", pb: "30px", display: "flex", justifyContent: "center" }}
    >
      <Pagination
        count={calculatePaginate(total, 10)}
        page={page}
        variant="outlined"
        color="secondary"
        sx={{ color: "green !important" }}
        onChange={handleChange}
      />
    </Box>
  );
};

export default PaginationComponent;
