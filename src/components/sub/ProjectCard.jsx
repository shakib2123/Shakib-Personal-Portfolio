import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="flex justify-center items-center min-h-[80vh] 2xl:min-h-[50vh] max-w-7xl">
      <div className="flex items-center justify-center h-full w-full overflow-hidden">
        <div className="m-auto h-full flex flex-col lg:flex-row items-center justify-center  gap-2 lg:gap-12">
          <div

            className="flex-1 rounded-xl"
          >
            <img
              src={item.image}
              alt="image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="600"
            className="flex-1 flex flex-col gap-[20px]"
          >
            <h2 className="text-gray-200 text-2xl md:text-3xl lg:text-6xl font-semibold">
              {item.title}
            </h2>
            <p className="text-gray-400 text-left">{item.description}</p>
            <div className="flex gap-6 md:gap-16">
              <a
                href={item.site}
                className="py-2 md:py-3 px-3 md:px-4 button-primary transition-all duration-300  text-center text-white font-semibold cursor-pointer rounded-lg w-fit border-[3px] border-[#4042f88b]"
              >
                Demo
              </a>

              {item.server && (
                <>
                  <a
                    href={item.client}
                    className="py-2 md:py-3 px-3 md:px-4 button-secondary transition-all duration-300  text-center text-white font-semibold cursor-pointer rounded-lg w-fit border-[3px] border-pink-800"
                  >
                    Client
                  </a>
                  <a
                    href={item.server}
                    className="py-2 md:py-3 px-3 md:px-4 button-secondary transition-all duration-300  text-center text-white font-semibold cursor-pointer rounded-lg w-fit border-[3px] border-pink-800"
                  >
                    Server
                  </a>
                </>
              )}
              {!item.server && (
                <>
                  <a
                    href={item.client}
                    className="py-2 md:py-3 px-3 md:px-4 button-secondary transition-all duration-300  text-center text-white font-semibold cursor-pointer rounded-lg w-fit border-[3px] border-pink-800"
                  >
                    Code Here
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
