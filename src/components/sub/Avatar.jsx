const Avatar = () => {
  return (
    <a href="#about" className="h-auto w-auto flex flex-row items-center">
      <img
        src="/NavLogo.png"
        alt="logo"
        className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] cursor-pointer hover:animate-slow-spin"
      />

      <span className="font-bold text-primary text-xl md:text-3xl ml-[5px]  text-gray-300 uppercase">
        Shakib
      </span>
    </a>
  );
};

export default Avatar;
