import { fetchEntries } from "@/utils/api/api";
import Image from "next/image";
import * as contentful from "contentful";
import Card, { AboutItem } from "./Card";

export default async function AboutUs() {
  const aboutUsData = (await fetchEntries("aboutUsItem")) ?? [];

  const aboutUsItems: AboutItem[] = aboutUsData.map((item) => {
    const photo = item.fields.photo as contentful.Asset;
    const url = ("https:" + photo.fields.file?.url) as string;
    return {
      name: item.fields.name,
      about: item.fields.aboutMe,
      photoUrl: url,
    } as AboutItem;
  });

  return (
    <section className="w-full, flex justify-center items-center flex-col 2 bg-neutral-950">
      {aboutUsItems.map((item, index) => (
        <Card
          key={item.name}
          left={index === 0}
          name={item.name}
          about={item.about}
          photoUrl={item.photoUrl}
        />
      ))}
    </section>
  );
}
