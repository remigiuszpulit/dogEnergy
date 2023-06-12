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
    <section className="w-full, h-screen  min-h-800  relative overflow-hidden">
      <Image
        src="/background.png"
        alt="xd"
        fill
        className="object-contain aboutUsBg  -z-20"
      />
      <div
        className={
          "w-full, h-screen  min-h-800  flex justify-center items-center flex-col md:flex-row gap-6 md:gap-32"
        }
      >
        {aboutUsItems.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            about={item.about}
            photoUrl={item.photoUrl}
          />
        ))}
      </div>
    </section>
  );
}
