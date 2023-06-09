import { fetchEntries } from "@/utils/api/api";
import Image from "next/image";
import * as contentful from "contentful";
import Link from "next/link";
import { routes } from "../Navbar/Navbar";

export default async function Hero() {
  const heroData = (await fetchEntries("heroText")) ?? [];

  const background = heroData[0].fields.background as contentful.Asset;
  const { title, subtitle } = heroData[0].fields;

  const url = ("https:" + background.fields.file?.url) as string;

  return (
    <div className="w-full, h-screen  relative overflow-hidden">
      <Image
        src={url}
        alt="xd"
        fill
        className="object-cover brightness-19 -z-20"
      />
      <div
        className={`w-full, h-screen flex-col flex justify-center items-center relative text-white gap-10 text-center`}
      >
        <h1 className="text-4xl w-1/2">{title as string}</h1>
        <h2 className="font-normal text-2xl w-1/2">{subtitle as string}</h2>
        <Link
          className="cta-button"
          href={routes.filter((route) => route.name === "Kontakt")[0].path}
        >
          UMÓW SIĘ
        </Link>
      </div>
    </div>
  );
}