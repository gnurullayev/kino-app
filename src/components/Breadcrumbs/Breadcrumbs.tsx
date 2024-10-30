import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
type PropsType = {
  label: string;
};
const BreadcrumbsComponent = ({ label }: PropsType) => {
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    router.push("/");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      onClick={handleClick}
      sx={{ color: "#057970", cursor: "pointer" }}
    >
      Bosh sahifa
    </Link>,

    <Typography key="3" color={"white"}>
      {label}
    </Typography>,
  ];
  
  return (
    <Box
      className="breadcrumbs"
      sx={{
        pt: "15px",
        pb: "5px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" color={"success"} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsComponent;
