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
import { INavbar } from "./navbar.props";

import style from "./navbar.module.scss";

const Navbar = ({ toggleDrawer }: INavbar) => {
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
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="p"
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                Muz
                <Typography
                  variant="h6"
                  component="span"
                  className="header-logo"
                >
                  Kino
                </Typography>
              </Typography>
              <Button color="inherit">Search</Button>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
