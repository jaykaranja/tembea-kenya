import React, { useEffect } from "react";
import bgimagechanger from "../../utils/bgimagechanger";

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
    <div
      // id="home-bg"
      className="w-full h-full flex flex-col gap-10 justify-center items-center text-white"
    >
      <p className="font-semibold text-4xl md:font-bold md:text-8xl">Tembea Kenya</p>
      <p className="text-xl font-thin text-center md:text-3xl halant">
        Discover the heart of Africa – Where adventure meets serenity
      </p>
      <p className="font-thin text-xl text-center halant">
        Get started with a destination of choice
      </p>
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
