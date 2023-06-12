"use client";
import useWindowSize from "@/utils/api/hooks/useWindowSize";
import NavbarItem from "./NavbarItem";
import { routes } from "../../utils/constants";

export default function Navbar() {
  const size = useWindowSize();

  return (
    <nav className="flex flex-row py-7 px-16 justify-between fixed w-full z-20 text-white navbar-background">
      <div className=" py-5 ">Dog energy</div>
      <div className="flex flex-row py-5 gap-28">
        {routes.map((route: { name: string; path: string }) => (
          <NavbarItem key={route.name} name={route.name} path={route.path} />
        ))}
      </div>
    </nav>
  );
}
