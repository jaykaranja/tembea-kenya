import React, { useState } from "react";
import bgimagechanger from "../../utils/bgimagechanger";

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
    className="font-thin text-lg bg-white py-6 px-14 text-black hover:bg-black/90 hover:text-white transition duration-500"
    onMouseOver={() => bgimagechanger(bgLink)}
  >
    {text}
  </button>
)

const Hero = () => {
  return (
    <div
      id="home-bg"
      className="bg-black w-full h-full flex flex-col gap-10 justify-center items-center text-white"
    >
      <p className="font-bold text-8xl">Tembea Kenya</p>
      <p className="font-thin text-3xl halant">
        Discover the heart of Africa – Where adventure meets serenity
      </p>
      <p className="font-thin text-xl halant">
        Get started with a destination of choice
      </p>
      <div className="flex items-center justify-center gap-4 px-24 h-1/8 w-[40%]">
        <HomeButton
          text="NAIROBI"
          bgLink={"../src/assets/nbi-intro.jpg"}
        />
        <HomeButton
          text="MOMBASA"
          bgLink={"../src/assets/msa-intro.jpg"}
        />
        <HomeButton
          text="CENTRAL"
          bgLink={"../src/assets/cnt-intro.jpg"}
        />
      </div>
    </div>
  );
};

export default Hero;
