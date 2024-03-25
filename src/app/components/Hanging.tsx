import React from "react";

function Hanging() {
  return (
    <div className=" py-32 max-container bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col lg:max-w-[400px] w-full p-6 ml-10 float-left">
          <h2 className="md:bold-40 text-gray-800 lg:tracking-wider bold-20">
            Where hanging out is easy
          </h2>
          <p className="text-gray-700 lg:text-[18px] text-[15px] lg:mt-5 mt-2">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>

        <div className="float-right">
          <img src="hanging.svg" alt="invite" />
        </div>
      </div>
    </div>
  );
}

export default Hanging;
