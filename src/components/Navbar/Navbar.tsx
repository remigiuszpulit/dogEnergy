import NavbarItem from "./NavbarItem";

export const routes = [
  { name: "O nas", path: "/" },
  { name: "Aktualności", path: "/aktualnosci" },
  { name: "Oferta", path: "/oferta" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-row py-7 px-16 justify-between fixed w-full z-20 text-white navbar-background">
      <div className=" py-5 ">Dog energy</div>
      <div className="flex flex-row py-5 gap-28">
        {routes.map((route) => (
          <NavbarItem key={route.name} name={route.name} path={route.path} />
        ))}
      </div>
    </nav>
  );
}
