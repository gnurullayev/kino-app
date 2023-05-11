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
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ISidebarData } from "./sidebar.props";
import { useRouter } from "next/router";
interface ISidebar {
  setActive: (a: boolean) => void;
  active: boolean;
}
const SidebarData: ISidebarData[] = [
  { label: "Bosh sahifa", id: 1, path: "/" },
  { label: "Movie", id: 2, path: "/movie/1" },
  { label: "Movies", id: 3, path: "/movies/1" },
  { label: "Multfilimlar", id: 4, path: "/multfilm" },
  { label: "Consertlar", id: 5, path: "/konsert" },
];

const NewData: ISidebarData[] = [
  { label: "Venzday", id: 1, path: "/" },
  { label: "Uch opa singil", id: 2, path: "/filimlar" },
  { label: "Ajal o'yini", id: 3, path: "/serialar" },
  { label: "Nomus", id: 4, path: "/multfilm" },
  { label: "Hukumdor usmon", id: 5, path: "/konsert" },
];

export const Sidebar = ({ setActive, active }: ISidebar) => {
  const router = useRouter();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setActive(open);
      console.log(open);
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
      <List>
        {SidebarData.map((text, index) => (
          <ListItem
            key={text.id}
            disablePadding
            onClick={() => router.push(text.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon color={"secondary"} />
                ) : (
                  <MailIcon color={"secondary"} />
                )}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {NewData.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon color={"secondary"} />
                ) : (
                  <MailIcon color={"secondary"} />
                )}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
