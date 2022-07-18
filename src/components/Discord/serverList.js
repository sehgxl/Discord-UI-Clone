import React from "react";
import { ReactComponent as DiscordLogo } from "../../assets/discord_mini_icon.svg";
import { ReactComponent as PlusLogo } from "../../assets/plus.svg";
import { ReactComponent as DownloadLogo } from "../../assets/download-solid.svg";
import NewLineLogo from "../../assets/new_line.png";
import { useNavigate } from "react-router-dom";

const ServerList = () => {
  const Navigate = useNavigate();
  return (
    <section className="bg-[#202225] flex flex-col items-center py-6 overflow-hidden">
      <DiscordLogo
        onClick={() => Navigate("/DiscordDashboard")}
        className="mb-3 text-white rounded-2xl p-2 w-14 h-14 bg-[#5865F2] cursor-pointer "
      />
      <img
        onClick={() => Navigate("/DiscordServer")}
        src={NewLineLogo}
        alt=""
        className="mb-3 w-14 h-14 rounded-2xl cursor-pointer"
      />
      <PlusLogo className="mb-3 w-14 h-14 p-4 bg-[#36393F] rounded-full hover:bg-neutral-600" />
      <DownloadLogo className="mb-3 fill-[#43B581] w-14 h-14 p-4 bg-[#36393F] rounded-full hover:bg-neutral-600" />
    </section>
  );
};

export default ServerList;
