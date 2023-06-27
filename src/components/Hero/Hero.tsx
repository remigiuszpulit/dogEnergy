import { fetchEntries } from "@/utils/api/api";
import Image from "next/image";
import * as contentful from "contentful";
import Link from "next/link";
import { routes } from "../../utils/constants";

export default async function Hero() {
  const heroData = (await fetchEntries("heroText")) ?? [];

  const background = heroData[0].fields.background as contentful.Asset;
  const { title, subtitle } = heroData[0].fields;

  const url = ("https:" + background.fields.file?.url) as string;

  return (
    <article
      id="about"
      className="w-full, h-screen min-h-800  relative overflow-hidden"
    >
      <Image
        src={url}
        alt="background-picture"
        fill
        className="object-cover brightness-19 -z-20"
      />
      <div
        className={`w-full, h-screen min-h-800 flex-col flex justify-center items-center relative text-white gap-10 text-center`}
      >
        <h1 className="text-lg md:text-4xl  w-2/3	md:w-1/2">
          {title as string}
        </h1>
        <h2 className="font-normal text-base md:text-2xl w-2/3	md:w-1/2">
          {subtitle as string}
        </h2>
        <Link className="cta-button" href="#contact">
          UMÓW SIĘ
        </Link>
      </div>
    </article>
  );
}
