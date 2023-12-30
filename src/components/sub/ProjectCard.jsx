
import { FaEye, FaGithub } from "react-icons/fa";
const ProjectCard = ({img,title, site, client, server, tags}) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl text-white w-full ">
      {/* overlay */}
      <div className="group-hover:bg-black/70 w-full h-full z-40  absolute transition-all duration-300"></div>
      {/* img */}
      <img
        className="group-hover:scale-125 transition-all duration-500 object-cover w-full h-full"
        src={img}
        alt=""
      />
      {/* title */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
        <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text text-3xl font-bold text-primary">
          {title}
        </span>
      </div>
      {/* links */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
        <a href={site} title="View Site">
          <FaEye className="text-3xl" />
        </a>
      </div>
      <div className="absolute -bottom-full left-28 group-hover:bottom-14 transition-all duration-1000 z-50 ">
        <a href={client} title="Client Site">
          <FaGithub className="text-3xl" />
        </a>
      </div>
      <div className="absolute -bottom-full left-44 group-hover:bottom-14 transition-all duration-[1.3s] z-50 ">
        <a href={server} title="Server Site">
          <FaGithub className="text-3xl" />
        </a>
      </div>
      <div className="absolute -bottom-full left-12 group-hover:bottom-3 md:group-hover:bottom-4 transition-all duration-[1.5s] z-50 ">
        <span className="text-sm font-semibold text-blue-600 flex-wrap">{tags}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
