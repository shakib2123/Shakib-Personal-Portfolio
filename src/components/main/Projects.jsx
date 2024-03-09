import ProjectCard from "../sub/ProjectCard";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ProjectsInfo } from "../../constants";

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <section
      id="works"
      ref={ref}
      className="max-w-7xl mx-auto relative pb-0 md:pb-20 z-[999] px-3 min-h-screen"
    >
      {/* text */}
      <div className="space-y-3 text-center sticky top-0 left-0 z-[999] mb-8 lg:mb-4 px-2">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent z-50 h-full capitalize">
          Featured Works
        </h1>
        <motion.div
          style={{ scaleX }}
          className="h-[8px] md:h-[10px] bg-gradient-to-r from-pink-500 to-cyan-500 "
        ></motion.div>
      </div>
      <div className="px-6 md:px-12 space-y-16">
      {ProjectsInfo.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
      </div>
    </section>
  );
};

export default Projects;
