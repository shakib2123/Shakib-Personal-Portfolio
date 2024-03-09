import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
export const navData = [
  { name: "Home", path: "#home", icon: <HiHome /> },
  { name: "About", path: "#about", icon: <HiUser /> },
  { name: "Skills", path: "#skills", icon: <FaTools /> },
  { name: "Works", path: "#works", icon: <HiViewColumns /> },
  { name: "Contact", path: "#contact", icon: <HiEnvelope /> },
];

const NavMenus = () => {
  return (
    <div className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-[1000] top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      <div className="z-50 flex w-full lg:flex-col items-center justify-between lg:justify-center gap-10 px-4 md:px-40 lg:px-0 h-[60px] lg:h-max py-8 bg-white/10 text-white backdrop-blur-sm text-2xl lg:text-xl lg:rounded-full ">
        {navData.map((link, index) => (
          <a
            className={`hover:cursor-pointer transition-all duration-300 hover:text-[#06B6D4] relative flex items-center group `}
            key={index}
            href={link.path}
          >
            <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
              <div className="bg-white relative flex text-gray-900 items-center p-[6px] rounded-[3px] ">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            <div>{link.icon}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavMenus;
