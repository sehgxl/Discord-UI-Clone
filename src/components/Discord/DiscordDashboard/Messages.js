import React from "react";
import { ReactComponent as FriendLogo } from "../../../assets/friends.svg";
import { ReactComponent as NitroLogo } from "../../../assets/nitro_icon.svg";
import { ReactComponent as DiscoveryLogo } from "../../../assets/stage_discovery.svg";
import { ReactComponent as SmallPlusLogo } from "../../../assets/plus_icon.svg";
import { ReactComponent as EmptyList } from "../../../assets/empty_dm_list.svg";
const MessagesSection = () => {
  return (
    <section className=" bg-[#2F3136] flex flex-col py-3 px-4  ">
      <input
        type="text"
        className="bg-[#202225] placeholder:text-gray-500 text-gray-300 p-2 mb-4"
        placeholder="Find or start a conversation "
      />
      <div className="flex gap-3 items-center p-2 hover:bg-[#393C43] [&>*]:hover:text-[#C9CACC]">
        <FriendLogo className="w-5 text-[#8C9095]" />
        <h1 className="text-[#8C9095] font-bold">Friends</h1>
      </div>
      <div className="flex gap-3 items-center p-2 hover:bg-[#393C43] [&>*]:hover:text-[#C9CACC]">
        <DiscoveryLogo className="w-5 text-[#8C9095]" />
        <h1 className="text-[#8C9095] font-bold">Stage Discovery</h1>
      </div>
      <div className="flex gap-3 items-center p-2 hover:bg-[#393C43] [&>*]:hover:text-[#C9CACC]">
        <NitroLogo className="w-10 text-[#8C9095]" />
        <h1 className="text-[#8C9095] font-bold">Nitro</h1>
      </div>

      <div className="flex gap-3 items-center justify-between p-2 mb-6 ">
        <h1 className="text-[#8C9095]">Direct Messages</h1>
        <SmallPlusLogo className="w-5 text-[#8C9095] hover:text-[#C9CACC] " />
      </div>
      <EmptyList className="h-[40rem] fill-[#36393F]" />
    </section>
  );
};

export default MessagesSection;
