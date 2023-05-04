import { useState } from "react";
import { Nav, Navbar, Sidebar } from "@/src/components";
import style from "@/src/components/Layout/Header/header.module.scss";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setActive(open);
    };
  return (
    <div className="header">
      <Navbar toggleDrawer={toggleDrawer} />
      <Nav />
      <Sidebar toggleDrawer={toggleDrawer} active={active} />
    </div>
  );
};

export default Header;
