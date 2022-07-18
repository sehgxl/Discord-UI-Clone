import React from "react";
import ServerList from "../serverList";
import MessagesSection from "./Messages";
import MainSection from "./mainSection";
const DiscordDashBoard = () => {
  return (
    <section className="h-screen grid grid-cols-[0.07fr_0.23fr_0.7fr] overflow-clip ">
      <ServerList />
      <MessagesSection />
      <MainSection />
    </section>
  );
};

export default DiscordDashBoard;
