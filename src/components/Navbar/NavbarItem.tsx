"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface OwnProps {
  path: string;
  name: string;
}

export default function NavbarItem({ path, name }: OwnProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(path);

  return (
    <Link href={path} className={`${isActive ? "font-black" : "font-normal"}`}>
      {" "}
      {name}{" "}
    </Link>
  );
}
