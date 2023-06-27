import Image from "next/image";

interface PictureProps {
  url: string;
  name: string;
}

export default function Picture({ name, url }: PictureProps) {
  return (
    <div className="w-full h-400  md:h-800  relative ">
      <Image
        src={url}
        alt={`${name} profile picture`}
        fill
        className="object-cover"
      />
    </div>
  );
}
