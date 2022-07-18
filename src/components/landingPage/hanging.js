import React from "react";
import { ReactComponent as YourSvg } from "../../assets/hanging_out_easy_landing.svg";
const Hanging = () => {
  return (
    <section className="min-h-screen grid grid-cols-[0.4fr_0.6fr] items-center px-20 bg-[#F6F6F6]">
      <div>
        <h1 className="text-5xl text-[#292841] font-bold text-left  leading-[3.5rem]  mb-8">
          Where hanging out it easy
        </h1>
        <h2 className="text-left text-[#292841] leading-7">
          Grab a seat in a voice channel when you're free. Friends in your
          server can see you're around and instantly pop in to talk without
          having to call.
        </h2>
      </div>
      <YourSvg />
    </section>
  );
};

export default Hanging;
