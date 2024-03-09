// icons
import { BsArrowRight } from "react-icons/bs";
// framer
import { motion } from "framer-motion";
// style
import "./Contact.css";
// variants
import { fadeIn, slideInFromRight } from "../../utils/motion";
import Swal from "sweetalert2";
import { Suspense, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import contact from "../../assets/contact.svg";

const Contact = () => {
  const ref = useRef();
  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f9xu5hu",
        "template_izhx1g4",
        ref.current,
        "S6pui1mHY5mGQipH4"
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Email sent successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong!",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
  };
  return (
    <div
      id="contact"
      className="h-full max-w-7xl mx-auto py-24 text-center lg:text-left z-50 px-3 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="flex flex-col items-center gap-2 md:gap-4 mb-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-300">
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            connect.
          </span>
        </h2>
        <p className="text-gray-200 max-w-xl text-center ">
          Engage with me, where ideas come to life through meaningful
          conversations. Let&apos;s connect and explore opportunities together!
        </p>
        <div className="flex gap-8 mt-1">
          <a href="https://web.facebook.com/profile.php?id=100092629614657">
            <button className="Btn h-[35px] md:h-[40px] w-[35px] md:w-[40px]">
              <span className="svgContainer">
                <svg
                  viewBox="0 0 320 512"
                  height="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgIcon"
                  fill="white"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                </svg>
              </span>
              <span className="BG bg-[#1877f2]"></span>
            </button>
          </a>
          <a href="https://github.com/shakib2123">
            <button className="Btn h-[35px] md:h-[40px] w-[35px] md:w-[40px]">
              <span className="svgContainer">
                <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </span>
              <span className="BG bg-[#181818]"></span>
            </button>
          </a>
          <a href="https://www.instagram.com/mshakibalhasan21?igsh=MW1nMGVoeDJqZWpzbA==">
            <button className="Btn h-[35px] md:h-[40px] w-[35px] md:w-[40px]">
              <span className="svgContainer">
                <svg
                  fill="white"
                  className="svgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </span>
              <span className="insta-bg BG"></span>
            </button>
          </a>
          <a href="#">
            <button className="Btn h-[35px] md:h-[40px] w-[35px] md:w-[40px]">
              <span className="svgContainer">
                <svg
                  viewBox="0 0 640 512"
                  fill="white"
                  height="1.4em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"></path>
                </svg>
              </span>
              <span className="BG bg-[#7289da]"></span>
            </button>
          </a>
          <a href="#">
            <button className="Btn h-[35px] md:h-[40px] w-[35px] md:w-[40px]">
              <span className="svgContainer">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </span>
              <span className="BG bg-[#0077B5]"></span>
            </button>
          </a>
        </div>
      </motion.div>

      <div className=" flex flex-col lg:flex-row items-center justify-between gap-4">
        <motion.div
          variants={slideInFromRight(0.4)}
          className="w-full min-h-[300px] md:min-h-[411px] lg:h-[475px] lg:w-[550px] hidden lg:flex justify-center items-center relative flex-1"
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
            src={contact}
            alt="contact image"
            className="img w-[80%]  absolute"
          />
        </motion.div>
        {/* text & form */}
        <div className=" flex flex-col items-center justify-center h-full mt-6 lg:mt-0">
          {/* form */}
          <motion.form
            ref={ref}
            onSubmit={handleSend}
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="w-full space-y-4"
          >
            <div className="flex gap-4">
              <div className="space-y-2 text-left">
                <label htmlFor="name" className="text-gray-200  font-semibold">
                  Your Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-[52px] rounded-lg pl-6 capitalize bg-[#3C087E52]/25 focus:bg-[#3C087E52]/45  outline-none focus:ring-1 focus:ring-cyan-500 border border-white/20 placeholder:text-white/30 placeholder:font-light text-gray-100"
                  required
                />
              </div>
              <div className="space-y-2  text-left">
                <label htmlFor="name" className="text-gray-200  font-semibold">
                  Your Email*
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="w-full h-[52px] rounded-lg pl-6 capitalize bg-[#3C087E52]/25 focus:bg-[#3C087E52]/45  outline-none focus:ring-1 focus:ring-cyan-500 border border-white/20 placeholder:text-white/30 placeholder:font-light text-gray-100"
                  required
                />
              </div>
            </div>
            <div className="space-y-2  text-left">
              <label htmlFor="name" className="text-gray-200  font-semibold">
                Your Message*
              </label>
              <textarea
                placeholder="message"
                name="message"
                className="w-full h-[180px] p-6 capitalize rounded-lg resize-none bg-[#3C087E52]/25 focus:bg-[#3C087E52]/45 outline-none focus:ring-1 focus:ring-cyan-500 border border-white/20 placeholder:text-white/30 placeholder:font-light text-gray-100"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="h-12  md:h-14 rounded-lg border border-white/50 w-[160px] md:w-[180px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-cyan-600 group text-gray-200 font-bold button-primary"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all absolute duration-300 text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
