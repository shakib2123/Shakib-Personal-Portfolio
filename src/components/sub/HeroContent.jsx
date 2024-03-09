import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import "./HeroContent.css";
import { IoSparkles } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import headerImg from "../../assets/header-img.svg";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center gap-3 px-4 mt-0 w-full "
    >
      <div className="w-full h-full flex flex-col gap-5 justify-center m-auto text-start z-50">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box  py-[15px]  px-[10px] border border-[#4042f88b] opacity-[0.9]"
        >
          <IoSparkles className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="welcome-text text-[14px] ">Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-1  font-bold max-w-[600px] w-auto h-auto"
        >
          <span className="text-[30px] md:text-5xl text-gray-200 capitalize space-y-0 md:space-y-4">
            <p>Hello, I&apos;m Shakib</p>
          </span>{" "}
          <span className="text-[23px] md:text-[37px] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 capitalize ">
            {" "}
            i&apos;m a{" "}
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Front-end Developer",
                2000,
                "React Developer",
                2000,
                "Back-end Developer",
                2000,
              ]}
              speed={40}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          I&apos;m a Web Developer with experience in responsive and user
          friendly Website development. Check out my projects and skills.
        </motion.p>
        <div className="flex gap-8">
          <motion.a
            download={"Shakib-Web-Resume"}
            href="/Shakib-Web-Resume.pdf"
            variants={slideInFromLeft(1.2)}
            className="py-2 md:py-3 px-3 md:px-4 button-primary transition-all duration-300  text-center text-white font-semibold cursor-pointer rounded-lg w-fit border-[3px] border-[#4042f88b]"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="https://github.com/shakib2123?tab=repositories"
            variants={slideInFromLeft(1)}
            className="py-2 md:py-3 px-3 md:px-4 button-secondary transition-all duration-300  text-center text-white font-semibold cursor-pointer rounded-lg w-fit border-[3px] border-pink-800"
          >
            See All Works
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-[475px] flex justify-center items-center relative overflow-hidden"
      >
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 400, 600]} scale={2.6}>
              <MeshDistortMaterial
                color="#15045f"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        <img
          src={headerImg}
          alt="space icons"
          className="img w-[80%] md:w-[60%] lg:w-[70%] absolute"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
