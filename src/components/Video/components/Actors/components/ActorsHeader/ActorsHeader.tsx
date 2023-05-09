import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import style from "./actorsHeader.module.scss";

const ActorsHeader = () => {
  return (
    <Box
      className={style.actors__header}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography className={style.actors__header__title} component="h6">
        Aktyorlar
      </Typography>
      <Box
        className={style.actors__header__controls}
        sx={{ display: "flex", gap: "8px" }}
      >
        <IconButton
          aria-label="delete"
          className={`${style.actors__header__control_btn} actors__header_prev`}
          sx={{ p: "4px", width: "30px", height: "30px" }}
        >
          <NavigateBeforeIcon color="success" sx={{ fontSize: "22px" }} />
        </IconButton>
        <IconButton
          aria-label="delete"
          className={`${style.actors__header__control_btn} actors__header_next`}
          sx={{ p: "4px", width: "30px", height: "30px" }}
        >
          <NavigateNextIcon color="success" sx={{ fontSize: "22px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ActorsHeader;
