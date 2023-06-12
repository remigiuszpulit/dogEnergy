

interface Route {
    name:string
    path:string
}

export const routes:Route[] = [
  { name: "O nas", path: "/" },
  { name: "Aktualności", path: "/aktualnosci" },
  { name: "Oferta", path: "/oferta" },
  { name: "Kontakt", path: "/kontakt" },
];