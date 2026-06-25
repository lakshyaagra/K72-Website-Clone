import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-46 lg:mt-0 pt-3.5 text-center">
      <div className="lg:text-[9.5vw] text-[10.9vw] flex justify-center items-center uppercase leading-[10vw] lg:leading-[8vw] text-white">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[10.9vw] flex justify-center items-center uppercase leading-[10vw] lg:leading-[8vw] text-white">
        qui
        <div className="h-[7vw] rounded-full -mt-5 w-[16vw] overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[10.9vw] flex justify-center items-center uppercase leading-[10vw] lg:leading-[8vw] text-white">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
