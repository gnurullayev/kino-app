import { useState } from "react";
import { Nav, Navbar, Sidebar } from "@/components";
import style from "@/components/Layout/Header/header.module.scss";
import { API } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const { data } = useQuery({
    queryKey: ["all-categories"],
    queryFn: async () => await API.moviesCategories(),
  });

  return (
    <div className="header">
      <Navbar setActive={setActive} />
      <Nav data={data} />
      <Sidebar setActive={setActive} active={active} data={data} />
    </div>
  );
};

export default Header;
