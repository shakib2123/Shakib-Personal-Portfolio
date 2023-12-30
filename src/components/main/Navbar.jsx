import { Socials } from "../../constants";

const Navbar = () => {
  return (
    <div
      id="home"
      className="w-full  shadow-sm shadow-purple-600  bg-[#03001417] backdrop-blur-sm h-[65px] z-[150] "
    >
      <div className="max-w-7xl mx-auto z-50 px-3">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="#about" className="h-auto w-auto flex flex-row items-center"> 
            <img
              src="/NavLogo.png"
              alt="logo"
              className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] cursor-pointer hover:animate-slow-spin"
            />

            <span className="font-bold text-primary text-xl md:text-3xl ml-[5px]  text-gray-300 uppercase">
              Shakib
            </span>
          </a>

          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <img
                src={social.src}
                alt={social.name}
                key={social.name}
                className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
