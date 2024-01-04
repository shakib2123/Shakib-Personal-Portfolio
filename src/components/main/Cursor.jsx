import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[999] overflow-hidden w-[50px]">
      <motion.div
        className="cursor"
        animate={{ x: position.x+8, y: position.y+8 }}
      ></motion.div>
     
    </div>
  );
};

export default Cursor;
