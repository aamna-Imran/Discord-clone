import React from "react";

function Star() {
  return (
    <div className=" py-20 max-container bg-gray-100 ">
      <div
        className="mx-8"
        style={{
          backgroundImage: 'url("stars.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-5 items-center">
          <h2 className="lg:bold-40 bold-20 text-gray-800">
            Ready to start your journey
          </h2>
          <button className="py-3 px-5 rounded-full text-white bg-blue-600 flex gap-2">
            <img src="download-icon.png" alt="" className="w-6" />
            Download for windows
          </button>
        </div>
      </div>
    </div>
  );
}

export default Star;
