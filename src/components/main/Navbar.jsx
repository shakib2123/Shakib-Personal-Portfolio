import Github from "../../assets/gitwhite.png";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Discord from "../../assets/discord.svg";
import Avatar from "../sub/Avatar";
const Navbar = () => {
  return (
    <div
      id="home"
      className="w-full  shadow-sm shadow-purple-600  bg-[#03001417] backdrop-blur-sm z-[150]"
    >
      <div className="max-w-7xl mx-auto px-3 py-3 md:py-4">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          <Avatar />

          <div className="flex flex-row gap-5 z-50">
            <a target="_blank" href="https://github.com/shakib2123">
              <img
                src={Github}
                alt="Github"
                className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] "
              />
            </a>
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=100092629614657"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] "
              />
            </a>
            <a href="https://www.instagram.com/mshakibalhasan21?igsh=MW1nMGVoeDJqZWpzbA==">
              <img
                src={Instagram}
                alt="Instagram"
                className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] "
              />
            </a>
            <a href="https://discord.com/channels/md.shakib221">
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
