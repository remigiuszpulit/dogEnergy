interface descProps {
  about: string;
  name: string;
}

export default function DescriptionText({ name, about }: descProps) {
  return (
    <div className="w-full 2 bg-neutral-950 flex justify-center items-center">
      <div className="w-2/3">
        <h3 className="text-sm md:text-2xl mb-9   text-white">{name}</h3>
        <p className="text-xs md:text-base  text-white">{about}</p>
      </div>
    </div>
  );
}
