import { Suspense, useState } from "react";

// image
import avatar from "../../assets/avatar.png";

// icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// framer motion
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../utils/motion";
import certificate from "../../assets/certificate.png";
import { FaEye } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End Development",
      },
      {
        title: "MERN Stack Development",
      },
      {
        title: "Back-End Development",
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Frontend Framework Adoption",
      },
      {
        title: "Accessibility Implementation",
      },
      {
        title: "Responsive Design Complexities",
      },
      {
        title: "Performance Optimization",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "College (HSC - Higher Secondary Certificate) - Sengerchar Govt. College",
        stage: "(2023 - Present)",
      },
      {
        title:
          "Complete Web Development Course With Jhankar Mahbub - Programming Hero",
        stage: "(2023 - 2024)",
      },
    ],
  },
  {
    title: "Achievements",
    info: [{ image: certificate }],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto z-50 pt-16 px-3  lg:pt-24  w-full"
    >
      <div className="flex flex-col md:flex-row  gap-6">
        <motion.div
          variants={slideInFromLeft(0.4)}
          className="hidden w-full h-full lg:h-[475px] lg:flex justify-center items-center relative flex-1 "
        >
          {" "}
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 400, 600]} scale={2.9}>
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
            src={avatar}
            alt="contact image"
            className="w-[500px] h-full img  absolute top-0"
          />
        </motion.div>
        <div className="max-w-7xl mx-auto h-full flex-col lg:flex-row gap-x-6 text-white flex-1">
          <div className="flex-1 flex flex-col justify-center items-center py-4 space-y-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-200 font-bold text-center">
              Captivating stories birth{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                magnificent
              </span>{" "}
              development.
            </h2>
            <p className="text-gray-300 max-w-lg mx-auto text-center">
              In just one year, I initiated my web development journey, working
              on various projects. Today, I proudly identify as a skilled web
              developer.
            </p>
          </div>
          <div className="flex flex-col items-center min-h-[250px] w-full mt-4">
            <div className="flex gap-x-4 lg:gap-x-8 mx-auto lg:mx-0 mb-4 ">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 after:w-[100%] after:bg-gradient-to-r from-pink-500 to-cyan-500 after:transition-all duration-300"
                  } cursor-pointer capitalize lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item?.title}
                </div>
              ))}
            </div>
            <div className="py-2 lg:py-6 px-4 flex flex-col  gap-y-2 lg:gap-y-4 max-w-lg mx-auto">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex}>
                    {/* title */}
                    <div
                      className={`text-sm md:text-lg text-gray-200 flex items-start gap-2 ${
                        item?.image
                          ? " grid grid-cols-2 gap-4"
                          : "bg-[#4042f88b]/25 p-1 rounded-xl"
                      } `}
                    >
                      <IoMdCheckmarkCircleOutline
                        className={`${
                          item?.image
                            ? "hidden"
                            : "text-2xl text-gray-200 md:mt-1"
                        }`}
                      />{" "}
                      <span>
                        {item?.title} {item?.stage}
                      </span>
                      {item?.image && (
                        <>
                          <div className="relative overflow-hidden border-2 bg-gray-400 group">
                            <img
                              src={item?.image}
                              alt="certificate"
                              className="w-full group-hover:scale-125 transition-all duration-500"
                            />
                            <div className="absolute top-0 left-0 group-hover:bg-black/50 w-full h-full transition-all duration-300"></div>
                            <div className="absolute -bottom-full left-8 group-hover:bottom-5 transition-all duration-700 z-50 ">
                              <a
                                target="_blank"
                                href="https://drive.google.com/file/d/1_GR34a3E07cdK_HBn--R8NDJG780R6Bu/view?usp=sharing"
                                title="View"
                                rel="noreferrer"
                              >
                                <FaEye className="text-3xl" />
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
