import Image from "next/image";

export interface AboutItem {
  name: string;
  about: string;
  photoUrl: string;
}

export default function Card({ name, about, photoUrl }: AboutItem) {
  return (
    <div className="w-56  md:w-96   flex flex-col gap-6 md:gap-8">
      <div className="w-full h-56 md:h-96 relative ">
        <Image
          src={photoUrl}
          alt={`${name} profile picture`}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-base md:text-2xl text-center">{name}</h3>
      <p className="text-sm md:text-base text-center">{about}</p>
    </div>
  );
}
