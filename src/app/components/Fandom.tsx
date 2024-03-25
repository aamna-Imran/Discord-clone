import React from "react";

function Fandom() {
  return (
    <div className=" py-20 my-10 max-container">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className=" pl-10 ">
          <img src="fandom.svg" alt="invite" />
        </div>
        <div className="flex flex-col lg:max-w-[400px] w-full p-6">
          <h2 className="md:bold-40 text-gray-800 lg:tracking-wider bold-20">
            From few to a fandom
          </h2>
          <p className="text-gray-700 lg:text-[18px] text-[15px] lg:mt-5 mt-2">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels and
            more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fandom;
