import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

import style from "./actors.module.scss";
import { ActorsHeader, ActorsList } from "./components";

const Actors = () => {
  return (
    <Box
      className={style.actors}
      sx={{
        p: "20px 15px",
        mb: "20px",
        backgroundColor: "#1E2029",
        borderRadius: "10px",
      }}
    >
      <ActorsHeader />
      <ActorsList />
    </Box>
  );
};

export default Actors;
