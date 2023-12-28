import { Socials } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-ms h-[65px] z-50 hidden md:block">
      <div className="max-w-7xl mx-auto z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="#about" className="h-auto w-auto flex flex-row items-center">
            <img
              src="/NavLogo.png"
              alt="logo"
              className="w-[70px] h-[70px] cursor-pointer hover:animate-slow-spin"
            />

            <span className="font-bold text-2xl cursive ml-[10px] hidden md:block text-gray-300">
              Shakib
            </span>
          </a>

          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <img
                src={social.src}
                alt={social.name}
                key={social.name}
                className="h-[24px] w-[24px] cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
