import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import style from "./navbar.module.scss";
import Routes from "@/enums/routes";
import { useRouter } from "next/router";
import { route } from "@/utils";

interface INavbar {
  setActive: (a: boolean) => void;
}

const Navbar = ({ setActive }: INavbar) => {
  const router = useRouter();
  return (
    <Box className={style.navbar}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box className="container">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  setActive(true);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="p"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                onClick={() => router.push(route(Routes.HOME))}
              >
                Top
                <Typography
                  variant="h6"
                  component="span"
                  className="header-logo"
                >
                  Movie
                </Typography>
              </Typography>
              <Button
                color="inherit"
                onClick={() =>
                  router.push(route(Routes.SEARCH_MOVIES, { search: "search" }))
                }
              >
                Search
              </Button>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
