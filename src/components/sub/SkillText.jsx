import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { IoSparkles } from "react-icons/io5";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="welcome-box  py-[15px]  px-[10px] border border-[#4042f88b] opacity-[0.9]"
      >
        <IoSparkles className="text-[#b49bff] mr-[10px] h-5 w-5 " />
        <h1 className="welcome-text text-[14px]">Moving On Next Js</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium text-center mt-[10px] mb-[15px]"
      >
        Making apps with modern technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 text-center mt-10 mb-[10px]"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
