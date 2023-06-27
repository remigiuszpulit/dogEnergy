"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Picture from "./Picture";
import DescriptionText from "./DescriptionText";

export interface AboutItem {
  name: string;
  about: string;
  photoUrl: string;
  left: boolean;
}

export default function Card({ name, about, photoUrl, left }: AboutItem) {
  const orderLeft = [Picture, DescriptionText];
  const orderRight = [DescriptionText, Picture];
  const initialPosition = left ? -400 : 400;
  return (
    <motion.div
      initial={{ x: initialPosition }}
      viewport={{ once: true }}
      whileInView={{ x: 0, transition: { duration: 0.7 } }}
      className="w-full h-400  md:h-800 grid  grid-cols-2"
    >
      {left
        ? orderLeft.map((Component) => (
            <Component key={name} url={photoUrl} name={name} about={about} />
          ))
        : orderRight.map((Component) => (
            <Component key={name} url={photoUrl} name={name} about={about} />
          ))}
    </motion.div>
  );
}
