import { useState } from "react";
import { Nav, Navbar, Sidebar } from "@/src/components";
import style from "@/src/components/Layout/Header/header.module.scss";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="header">
      <Navbar setActive={setActive} />
      <Nav />
      <Sidebar setActive={setActive} active={active} />
    </div>
  );
};

export default Header;
