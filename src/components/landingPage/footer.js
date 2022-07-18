import React from "react";
import { ReactComponent as DiscordLogo } from "../../assets/discord_main_logo.svg";
import "./FontHeading.css";
import { ReactComponent as FbIcon } from "../../assets/facebook_icon.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram_icon.svg";
import { ReactComponent as TwIcon } from "../../assets/twitter_icon.svg";
import { ReactComponent as YtIcon } from "../../assets/youtube_icon.svg";
import logo from "../../assets/usa_flag.png";
const Footer = (props) => {
  const linksData = props.links;
  return (
    <footer className="bg-[#23272A]  px-36 py-20">
      <section className="flex  justify-between  border-[#5865F2] border-b-2 mb-10 pb-10">
        <article>
          <h1 id="footerHeading" className="text-[#5865F2] text-5xl mb-5">
            IMAGINE A <br /> PLACE
          </h1>
          <div className="flex items-centerm mb-5 cursor-pointer">
            <img src={logo} alt="flag" className="w-6 inline mr-1" />
            <select
              className="bg-transparent text-white cursor-pointer"
              name="language"
              id="language"
            >
              <option value="eng">English</option>
            </select>
          </div>
          <div className="flex ">
            <FbIcon className="text-white mr-4 cursor-pointer hover:text-[#5865F2]  " />
            <InstaIcon className="text-white mr-4 cursor-pointer hover:text-[#5865F2]" />
            <TwIcon className="text-white mr-4 cursor-pointer hover:text-[#5865F2]" />
            <YtIcon className="text-white mr-4 cursor-pointer hover:text-[#5865F2]" />
          </div>
        </article>
        {linksData.map((item) => {
          return (
            <article>
              <h1 className="text-[#5865F2] mb-4">{item.h1}</h1>
              <ul>
                {item.links.map((link) => {
                  return (
                    <li className="text-white mb-2 hover:underline hover:cursor-pointer">
                      {link}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </section>
      <div className="flex justify-between ">
        <DiscordLogo className="cursor-pointer" />
        <button className="font-medium bg-[#404EED] rounded-3xl px-5 py-2 text-white hover:shadow-black/40 hover:shadow-lg hover:bg-[#7983F5]">
          Sign up
        </button>
      </div>
    </footer>
  );
};

export default Footer;
