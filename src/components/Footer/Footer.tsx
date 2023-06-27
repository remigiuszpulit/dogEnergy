import { fetchEntries } from "@/utils/api/api";
import * as contentful from "contentful";
import Image from "next/image";

export default async function Footer() {
  const logoData = (await fetchEntries("logo")) ?? [];
  const contactData = (await fetchEntries("contact")) ?? [];
  const logo = logoData[0].fields.logoFile as contentful.Asset;
  const logoUrl = ("https:" + logo.fields.file?.url) as string;

  return (
    <footer className="grid grid-cols-3 h-48 lg:h-80">
      <div className="col-span-2 bg-neutral-950 pl-20 pt-10">
        <h2 className="text-sm md:text-2xl mb-4   text-white">
          {contactData[0].fields.tytu as string}
        </h2>
        <h3 className="text-sm md:text-2xl mb-1   text-white">
          {contactData[0].fields.name1 as string}
        </h3>
        <h4 className="text-sm md:text-xl mb-4   text-white">
          {contactData[0].fields.phone1 as string}
        </h4>
        <h3 className="text-sm md:text-2xl mb-1   text-white">
          {contactData[0].fields.name2 as string}
        </h3>
        <h4 className="text-sm md:text-xl mb-4   text-white">
          {contactData[0].fields.phone2 as string}
        </h4>
        <h4 className="text-sm md:text-xl mb-2   text-white">
          {contactData[0].fields.email as string}
        </h4>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <div className="w-1/2 h-48  relative ">
          <Image src={logoUrl} alt="Logo" fill className="object-contain" />
        </div>
      </div>
    </footer>
  );
}
