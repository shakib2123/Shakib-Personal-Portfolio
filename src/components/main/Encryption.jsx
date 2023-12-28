import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";
const Encryption = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row relative items-center justify-center w-full h-full min-h-[60vh] md:min-h-[80vh]">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-3xl md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className=" flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-full h-auto">
        <div className=" flex flex-col items-center cursor-pointer group w-auto h-auto overflow-hidden">
          <img
            src="/LockTop.png"
            alt="Lock top"
            // width={50}
            // height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-8 md:group-hover:translate-y-14 w-8 md:w-[50px] h-8 md:h-[50px]"
          />
          <img
            src="/LockMain.png"
            alt="Lock main"
            // width={70}
            // height={70}
            className="z-10 w-10 md:w-[70px] h-10 md:h-[70px]"
          />
        </div>
        <div className="welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9] ">
          <h1 className="welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-200">
          Secure your data end-to-end encryption
        </div>
      </div>
      <div className="w-full flex items-center justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
