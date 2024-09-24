import React, { useEffect } from "react";
import bgimagechanger from "../../utils/bgimagechanger";
import BlurIn from "../../components/magicui/blur-in";
import Button from "../../components/Shared/magicui/ShimmerButton";
// import BlurIn from "../../../@/components/magicui/blur-in";

// Define images for each button
const bgimages = {
  nbi: 'https://tembeakenya.blob.core.windows.net/static/nbi-intro.jpg',
  msa: 'https://tembeakenya.blob.core.windows.net/static/msa-intro.jpg',
  cnt: 'https://tembeakenya.blob.core.windows.net/static/cnt-intro.jpg',
};

type THomeButton = { 
  /** Text to display on button */
  text: string;
  /** Corresponding background image link */
  bgLink: string;
}

const HomeButton:React.FC<THomeButton> = ({
  text,
  bgLink
}) => (
  <button
    className="font-thin text-lg bg-white py-2 md:py-6 px-10 md:px-14 text-black hover:bg-black/90 hover:text-white transition duration-500"
    onMouseOver={() => bgimagechanger(bgLink)}
  >
    {text}
  </button>
)

const Hero = () => {
  
  // Preload images when component mounts
  useEffect(() => {
    const imgArray = Object.values(bgimages);
    imgArray.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []); // Empty dependency array to run on component mount
  
  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center text-white">
      <BlurIn
        word="Tembea Kenya"
        className="text-4xl font-bold text-white dark:text-white"
        duration={1}
      />
      <BlurIn
        word="Discover the heart of Africa – Where adventure meets serenity"
        className="text-xl font-thin text-center md:text-3xl halant"
        duration={1.5}
      />
      <BlurIn
        word="Get started with a destination of choice"
        className="font-thin text-sm text-center md:text-xl halant"
        duration={2}
      />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-24 h-1/8 w-1/4 md:w-[40%]">
        <HomeButton
          text="NAIROBI"
          bgLink={bgimages.nbi}
        />
        <HomeButton
          text="MOMBASA"
          bgLink={bgimages.msa}
        />
        <HomeButton
          text="CENTRAL"
          bgLink={bgimages.cnt}
        />
      </div>
    </div>
  );
};

export default Hero;
