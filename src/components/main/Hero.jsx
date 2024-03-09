import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-auto w-full max-w-7xl mx-auto">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute  top-[-187px] md:top-[-287px] lg:top-[-427px] left-0  w-full h-auto object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
