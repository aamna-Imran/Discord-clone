import { url } from "inspector";
import React from "react";

function Hero() {
  return (
    <>
      <section
        className=" h-[570px] max-container padding-container"
        style={{
          backgroundImage: 'url("hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-start lg:items-center  ">
          <h1 className="lg:bold-88 bold-40 text-white lg:mt-28 mt-10 ">
            IMAGINE A PLACE...
          </h1>
          <p className="text-white w-full lg:w-[70%] lg:text-center lg:text-height lg:text-[18px] text-[15px] lg:mt-8 text-left">
            ...where you can belong to a school club, a gaming group or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="flex flex-col lg:flex-row mt-6 gap-5">
            <button className="py-3 px-6 bg-white font-[400] text-[20px] rounded-full hover:shadow-xl hover:text-blue-600 flex gap-2">
              <img src="download-icon.png" alt="" className="w-6" />
              Download for windows
            </button>
            <button className="py-3 px-6 bg-button text-white font-[400] text-[20px] rounded-full hover:shadow-xl">
              Download for talk,chat and hangout
            </button>
          </div>
        </div>
        {/* <img src="hero-bg.jpg" alt="" className="w-full" /> */}
      </section>
    </>
  );
}

export default Hero;
