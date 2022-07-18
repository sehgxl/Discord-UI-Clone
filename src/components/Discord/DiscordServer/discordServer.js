import React from "react";
import ServerList from "../serverList";
import ServerMessage from "./serverMessage";
import ServerMain from "./serverMain";
import { useState } from "react";
import UserList from "./userllist";
const DiscordServer = () => {
  const [ChannelName, setChannelName] = useState({
    info: true,
    html: false,
    css: false,
    javascript: false,
  });
  return (
    <section className="h-screen grid grid-cols-[0.07fr_0.23fr_0.5fr_0.2fr] overflow-clip ">
      <ServerList />
      <ServerMessage data={ChannelName} setData={setChannelName} />
      <ServerMain data={ChannelName} setData={setChannelName} />
      <UserList />
    </section>
  );
};

export default DiscordServer;
