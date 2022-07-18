import React from "react";
import { ReactComponent as InboxLogo } from "../../../assets/inbox_icon.svg";
import { ReactComponent as DiscordLogo } from "../../../assets/discord_mini_icon.svg";
const UserList = () => {
  const users = [{ name: "Sam" }, { name: "Harry" }, { name: "Steve" }];
  return (
    <section className="bg-[#2F3136]">
      <nav className="flex justify-between p-2 bg-[#36393F]">
        <input
          type="text"
          placeholder="Search"
          className="text-[#8C9095] bg-[#202225] px-2 py-1 "
        />
        <InboxLogo className="w-7 text-[#8C9095]" />
      </nav>
      <div className="px-2 py-5 text-[#8C9095] flex flex-col gap-6 font-bold">
        <h1>Online - 3</h1>
        {users.map((user) => {
          return (
            <div className="flex gap-3 items-center">
              <DiscordLogo className="bg-red-500 p-2 w-10 h-10 text-white rounded-full" />
              <h1 className="font-normal">{user.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UserList;
