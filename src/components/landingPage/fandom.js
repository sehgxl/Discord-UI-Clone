import React from "react";
import { ReactComponent as YourSvg } from "../../assets/fandom_landing.svg";
const Fandom = () => {
  return (
    <section className="min-h-screen grid grid-cols-[0.6fr_0.4fr] items-center px-20 bg-white">
      <YourSvg />
      <div>
        <h1 className="text-5xl text-[#292841] font-bold text-left  leading-[3.5rem]  mb-8">
          From few to fandom
        </h1>
        <h2 className="text-left text-[#292841] leading-7">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </h2>
      </div>
    </section>
  );
};

export default Fandom;
