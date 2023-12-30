import Facebook from "../../assets/facebook.svg";
import Discord from "../../assets/discord.svg";
const Navbar = () => {
  return (
    <div
      id="home"
      className="w-full  shadow-sm shadow-purple-600  bg-[#03001417] backdrop-blur-sm h-[65px] z-[150] "
    >
      <div className="max-w-7xl mx-auto px-3">
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

          <div className="flex flex-row gap-5 z-50">
            <a target="_blank"
              href="https://web.facebook.com/profile.php?id=100092629614657"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] "
              />
            </a>
            <a  href="#">
              <img
                src={Discord}
                alt="Discord"
                className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
