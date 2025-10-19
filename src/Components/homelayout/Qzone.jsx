import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import bgImage from "../../assets/bg.png";

const Qzone = () => {
  return (
    <div>
      <div className="bg-base-200 p-2 rounded-lg mb-5">
        <h2 className="font-bold">QZone</h2>
        <div className="space-y-3">
          <img src={swimmingImg} alt="" />
          <img src={classImg} alt="" />
          <img src={playImg} alt="" />
        </div>
      </div>
      <img src={bgImage} alt="" />
    </div>
  );
};

export default Qzone;
