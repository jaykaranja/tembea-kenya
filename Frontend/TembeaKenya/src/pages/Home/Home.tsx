import React from "react";
import Hero from "../Landing/hero";

const Home = () => {
  return (
    <div 
      className="flex flex-col h-fulL" 
      style={{
        backgroundImage: "url(../../../assets/Sarova-Whitesands-Pool-1.jpg)"
      }}
    >
      <Hero />
    </div>
  );
};

export default Home;
