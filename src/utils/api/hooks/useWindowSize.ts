import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [size, setSize] = useState<number[]>([]);
    useEffect(() => {
      const handleResize = () => setSize([window.innerHeight, window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }
  
