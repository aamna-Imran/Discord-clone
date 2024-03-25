import React from "react";

function Belong() {
  return (
    <div className=" max-container py-20 my-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div>
          <img src="invite.svg" alt="invite" />
        </div>
        <div className="flex flex-col lg:max-w-[400px] w-full p-6">
          <h2 className="md:bold-40 text-gray-800 lg:tracking-wider bold-20">
            Create an invite-only place where you belong
          </h2>
          <p className="text-gray-700 lg:text-[18px] text-[15px] lg:mt-5 mt-2">
            Discord servers are organised into topic-based channels where you
            can collaborate, share and just talk about your day without clogging
            up a group chat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Belong;
