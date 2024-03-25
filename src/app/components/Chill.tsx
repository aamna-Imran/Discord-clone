import React from "react";

function Chill() {
  return (
    <div className="bg-gray-100 pt-20 max-container">
      <div className="flex flex-col items-center">
        <h1 className="lg:bold-64 bold-52 text-center tracking-tight text-gray-800">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <h4 className="text-center lg:px-40 px-10 text-gray-500 mt-6 text-[15px] lg:text-[18px]">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games or gather together
          over a drawing session with Screen Share.
        </h4>
        <img src="chill.svg" alt="" />
      </div>
    </div>
  );
}

export default Chill;
