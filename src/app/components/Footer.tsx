import React from "react";

function Footer() {
  return (
    <div className="max-container border-2 border-yellow-700 py-20 bg-button padding-container">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex items-center text-white gap-4">
            <img src="flag.png" alt="" className="w-8" />
            <p className="text-[13px]">English (UK)</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src="x.svg" alt="" />
            <img src="f.svg" alt="" />
            <img src="i.svg" alt="" />
            <img src="y.svg" alt="" />
            <img src="t.svg" alt="" />
          </div>
        </div>
        <div className="text-white grid lg:grid-cols-4 grid-cols-2">
          <div className="flex flex-col gap-5 mb-5">
            <h3 className="text-blue-600">Product</h3>
            <div className="flex flex-col gap-3 text-[15px]">
              <a href="/">Download</a>
              <a href="/">Nitro</a>
              <a href="/">Status</a>
              <a href="/">App Directory</a>
              <a href="/">New mobile experience</a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-blue-600">Company</h3>
            <div className="flex flex-col gap-3 text-[15px]">
              <a href="/">About</a>
              <a href="/">Jobs</a>
              <a href="/">Brand</a>
              <a href="/">Newsroom</a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-blue-600">Resources</h3>
            <div className="flex flex-col gap-3 text-[15px]">
              <a href="/">College</a>
              <a href="/">Support</a>
              <a href="/">Safety</a>
              <a href="/">Blog</a>
              <a href="/">Feedback</a>
              <a href="/">streamKit</a>
              <a href="/">Creator</a>
              <a href="/">Community</a>
              <a href="/">Developers</a>
              <a href="/">Gaming</a>
              <a href="/">Quests</a>
              <a href="/">Official Third-Party Merch</a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-blue-600">Policies</h3>
            <div className="flex flex-col gap-3 text-[15px]">
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
              <a href="/">Cookie Settings</a>
              <a href="/">Guidelines</a>
              <a href="/">Acknowledgments</a>
              <a href="/">Licences</a>
              <a href="/">Company Information</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-blue-700 mt-5" />
      <div className="flex justify-between mt-6">
        <img src="logo.svg" alt="" className="w-36" />
        <button className="py-3 px-5 text-white bg-blue-500 font-semibold rounded-full text-[15px]">
          Open Discord
        </button>
      </div>
    </div>
  );
}

export default Footer;
