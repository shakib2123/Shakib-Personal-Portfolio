
const Footer = () => {
  return (
    <div className="py-20 lg:py-10 z-40 bg-[#0d0433]/35 w-full">
      <div className="max-w-7xl mx-auto">
        <a
          href="#about"
          className="h-auto w-auto flex flex-row items-center justify-center"
        >
          <img
            src="/NavLogo.png"
            alt="logo"
            className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] cursor-pointer hover:animate-slow-spin"
          />

          <span className="font-bold text-primary text-xl md:text-3xl ml-[5px]  text-gray-300 uppercase">
            Shakib
          </span>
        </a>
        <div className="flex items-center justify-center gap-8 mt-1">
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
        </div>
        <div className="mb-[10px] mt-4 text-[17px] text-center text-gray-200">
          mshakibalhasan21@gmail.com
        </div>
        <div className="mb-[20px] lg:mb-2 text-[15px] text-center text-gray-300">
          &copy; Shakib 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
