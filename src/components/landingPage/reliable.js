import React from "react";
import { ReactComponent as YourSvg } from "../../assets/image.svg";
import { ReactComponent as Stars } from "../../assets/tiny_stars_landing.svg";
import { ReactComponent as DownloadBtn } from "../../assets/download-solid.svg";
import "./FontHeading.css";
const Reliable = () => {
  return (
    <section className="flex flex-col items-center justify-around relative min-h-screen bg-[#F6F6F6] px-40 ">
      <div className="flex flex-col">
        <h1
          id="ReliableHeading"
          className="text-7xl text-[#292841] font-bold text-center mt-20 mb-7  tracking-wide"
        >
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <h2 className="text-base text-center text-[#292841]  leading-7">
          Low-latency voice and video feels like you're in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </h2>
      </div>
      <YourSvg />
      <div className="relative w-full flex flex-col items-center my-20 py-10">
        <Stars className="absolute z-10 top-0 w-[50rem] " />
        <h1 className="center font-bold text-5xl mb-14">
          Ready to start your journey?
        </h1>
        <button className="font-medium bg-[#404EED] rounded-3xl px-5 py-3 text-white hover:shadow-black/40 hover:shadow-lg hover:bg-[#7983F5]">
          <DownloadBtn className="w-4 inline mr-2 fill-white " />
          Download for Windows
        </button>
      </div>
    </section>
  );
};

export default Reliable;
