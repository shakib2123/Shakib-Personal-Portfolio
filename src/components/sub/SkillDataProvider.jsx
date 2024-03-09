import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillDataProvider = ({ src, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <img src={src} alt="skill image" className="h-[24px] w-[100%] md:h-10 lg:h-14 " />
    </motion.div>
  );
};

export default SkillDataProvider;
