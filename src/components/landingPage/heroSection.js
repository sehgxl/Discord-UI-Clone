import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftSVG } from "../../assets/left_bg_landing_header.svg";
import { ReactComponent as RightSVG } from "../../assets/right_bg_landing_header.svg";
import { ReactComponent as DiscordLogo } from "../../assets/discord_main_logo.svg";
import { ReactComponent as DownloadBtn } from "../../assets/download-solid.svg";
import { ReactComponent as Clouds } from "../../assets/center_bg_landing_header.svg";
const HeroSection = (props) => {
  const buttons = props.buttons;
  const Navigate = useNavigate();
  return (
    <section className="relative z-0 min-h-screen bg-[#404EED] overflow-hidden flex flex-col items-center">
      <LeftSVG className="w-[35rem] absolute -left-36 bottom-0 -z-10 " />
      <Clouds className="absolute -z-30 bottom-0" />
      <RightSVG className="w-[35rem] absolute -right-28 -bottom-5 -z-20" />
      <nav className="flex justify-around mt-7 mb-24 w-screen ">
        <DiscordLogo />

        <div className="flex ">
          {buttons.map((item) => {
            return (
              <button className="text-white mr-8 font-medium hover:underline">
                {item}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => Navigate("/Login")}
          className="text-[#36393F] font-medium bg-white rounded-3xl px-5 hover:text-[#404EED] hover:shadow-black/40 hover:shadow-lg "
        >
          Login
        </button>
      </nav>
      <h1 className="text-7xl font-bold text-white mb-12  ">
        IMAGINE A PLACE...
      </h1>
      <h2 className="text-center mx-80 text-white leading-8 mb-7">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </h2>
      <div className="flex justify-around gap-5">
        <button
          id="downloadMac"
          className="text-[#36393F] font-medium bg-white rounded-3xl px-5 py-3 hover:shadow-black/40 hover:shadow-lg hover:text-[#404EED] [&>*]:hover:fill-[#404EED]  "
        >
          <DownloadBtn className="w-4 inline mr-2 fill-[#36393F] " />
          DownLoad for Mac
        </button>
        <button
          id="OpenBrowser"
          className="text-white font-medium bg-slate-800 hover:bg-slate-700 rounded-3xl px-5 py-3 hover:shadow-black/40 hover:shadow-lg"
        >
          Open Discord in Your Browser
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
