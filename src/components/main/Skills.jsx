import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
  Tools,
} from "../../constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-8 md:py-18 lg:py-28 max-w-7xl mx-auto"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-3 md:mt-4 gap-[10px] md:gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} index={index} />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-3 md:mt-4 gap-[10px] md:gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} index={index} />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-3 md:mt-4 gap-[10px] md:gap-5 items-center">
        {Tools.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} index={index} />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-3 md:mt-4 gap-[10px] md:gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} index={index} />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
