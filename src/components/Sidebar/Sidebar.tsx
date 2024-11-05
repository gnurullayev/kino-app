import { Fragment } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useRouter } from "next/router";
import { ISelectData } from "@/interfaces";
import { route } from "@/utils";
import Routes from "@/enums/routes";
interface ISidebar {
  setActive: (a: boolean) => void;
  active: boolean;
  data: ISelectData[];
}

export const Sidebar = ({ setActive, active, data }: ISidebar) => {
  const router = useRouter();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setActive(open);
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{ flexGrow: 1, cursor: "pointer", pl: "16px" }}
        onClick={() => router.push("/")}
      >
        Muz
        <Typography variant="h6" component="span" className="header-logo">
          Kino
        </Typography>
      </Typography>

      <List>
        <ListItem disablePadding onClick={() => router.push(Routes.HOME)}>
          <ListItemButton>
            <ListItemIcon>
              <VideoLibraryIcon color={"secondary"} />
            </ListItemIcon>
            <ListItemText primary={"Bosh sahifa"} />
          </ListItemButton>
        </ListItem>

        {data &&
          data.map((item: ISelectData, idx) => (
            <ListItem
              key={item.value}
              disablePadding
              onClick={() =>
                router.push(
                  route(Routes.MOVIES, { id: item.value, key: item.type })
                )
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  {idx % 2 === 0 ? (
                    <PlayCircleIcon color={"secondary"} />
                  ) : (
                    <VideoLibraryIcon color={"secondary"} />
                  )}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="sidebar">
      <Fragment>
        <Drawer open={active} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Fragment>
    </div>
  );
};
