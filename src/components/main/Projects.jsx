import ProjectCard from "../sub/ProjectCard";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
const Projects = () => {
  return (
    <div
      id="works"
      className="max-w-7xl mx-auto pt-24 md:pt-40  pb-0 md:pb-20 z-50 px-3 space-y-10"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="flex flex-col gap-4 text-center"
      >
        <h1 className="text-3xl lg:text-[45px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 uppercase text-primary">
          My Latest Works
        </h1>
        <p className="text-gray-300 w-full md:w-[70%] lg:w-[60%] mx-auto">
          Discover my latest projects – a snapshot of creativity, innovation,
          and seamless design. Explore a project that speaks to my commitment to
          excellence in web development.
        </p>
        <a  href="https://github.com/shakib2123?tab=repositories">
          <button className="py-2 md:py-3 px-3 md:px-4 button-primary text-center text-white cursor-pointer rounded-lg w-fit border-[3px] border-[#4042f88b] capitalize">
            See My All Projects
          </button>
        </a>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-[2]"
      >
        {/* project-1 */}
        <ProjectCard
          img={project1}
          title={"Context Hub"}
          site={"https://contesthub-7485a.web.app"}
          client={"https://github.com/shakib2123/ContestHub-Client-Site"}
          server={"https://github.com/shakib2123/ContestHub-server-site"}
          tags={"#React #Firebase #Node #Express #Mongoose"}
        />
        {/* project-2 */}
        <ProjectCard
          img={project2}
          title={"Restica Food"}
          site={"https://restica-food.web.app"}
          client={"https://github.com/shakib2123/restica-client"}
          server={"https://github.com/shakib2123/restica-server"}
          tags={"#React #Firebase #Node #Express #MongoDB"}
        />
        {/* project-3 */}
        <ProjectCard
          img={project3}
          title={"Brand Shop"}
          site={"https://brand-shop-21fa9.web.app"}
          client={"https://github.com/shakib2123/brand-shop-client"}
          server={"https://github.com/shakib2123/brand-shop-server"}
          tags={"#React #Firebase #Node #Express #MongoDB"}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
