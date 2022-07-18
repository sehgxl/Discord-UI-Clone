import React from "react";
import { ReactComponent as YourSvg } from "../../assets/invite_only_landing.svg";
const Invite = () => {
  return (
    <section className="min-h-screen grid grid-cols-[0.6fr_0.4fr] items-center px-20 ">
      <YourSvg />
      <div className="">
        <h1 className="text-5xl text-[#292841] font-bold text-left  leading-[3.5rem]  mb-8">
          Create an <br /> invite-only <br /> place where you belong
        </h1>
        <h2 className="text-left text-[#292841] leading-7">
          Discord servers are organized into topic- based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </h2>
      </div>
    </section>
  );
};

export default Invite;
