import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import styles from "./Hero.module.css";
import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <BackgroundBeams className="w-full"></BackgroundBeams>
      <div className="flex flex-col md:flex-row items-start justify-center relative">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          <p className="uppercase tracking-widest text-xs text-left text-blue-100 max-w-80">
            Welcome to my portfolio!
          </p>
          <TextGenerateEffect
            words="Hi! I&apos;m Ashley, a Software Developer based in Houston, Texas."
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I am a full stack developer with 2 years of experience in JavaScript (HTML, CSS, React.js, etc) and with 1 year experience in Python.
            Please reach out if you&apos;d like to learn more!
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>


        <div className={styles.heroImg}>
          {/* Replace the image path below with your actual image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="skills/meCircle.png" alt="Your Image"  className="max-w-full h-auto" />
        </div>
      </div>

      {/* Your Spotlight components */}
      {/* Add your Spotlight components here */}
    </div>
  );
};

export default Hero;
