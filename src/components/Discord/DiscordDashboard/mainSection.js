import React, { useState } from "react";
import { ReactComponent as FriendLogo } from "../../../assets/friends.svg";
import { ReactComponent as NoOnlineLogo } from "../../../assets/no_online_friends.svg";
import { ReactComponent as PendingLogo } from "../../../assets/pending_users_icon.svg";
import { ReactComponent as AddFriendLogo } from "../../../assets/add_friend_icon.svg";
import { ReactComponent as BlockedLogo } from "../../../assets/blocked_users_icon.svg";
const MainSection = () => {
  const [ImgClick, setImgClick] = useState({
    Online: true,
    Pending: false,
    Blocked: false,
    All: false,
    "Add Friend": false,
  });
  const clickHandler = (title) => {
    setImgClick((prevState) => {
      for (const prop in prevState) {
        if (prop === title) prevState[prop] = true;
        else prevState[prop] = false;
      }
      return { ...prevState };
    });
  };
  return (
    <section className="bg-[#36393F]">
      <nav className="flex px-6 py-4 gap-6 items-center border-b border-black">
        <div className="flex gap-2">
          <FriendLogo className="w-5 text-[#8C9095]" />
          <h1 className="text-slate-200 font-bold">Friends</h1>
        </div>
        <button
          onClick={(e) => clickHandler(e.target.innerText)}
          className="text-slate-400 hover:text-slate-200"
        >
          Online
        </button>
        <button
          onClick={(e) => clickHandler(e.target.innerText)}
          className="text-slate-400 hover:text-slate-200 "
        >
          All
        </button>
        <button
          onClick={(e) => clickHandler(e.target.innerText)}
          className="text-slate-400 hover:text-slate-200"
        >
          Pending
        </button>
        <button
          onClick={(e) => clickHandler(e.target.innerText)}
          className="text-slate-400 hover:text-slate-200"
        >
          Blocked
        </button>
        <button
          onClick={(e) => clickHandler(e.target.innerText)}
          className="text-white bg-green-600 rounded-lg px-2 py-1 hover:bg-transparent border-transparent border-2 hover:border-green-600"
        >
          Add Friend
        </button>
      </nav>
      <section className="grid grid-cols-[0.6fr_0.4fr] h-full">
        <section className="border-r border-slate-700 p-10 flex items-start justify-center">
          {ImgClick.Online ? <NoOnlineLogo className="" /> : null}
          {ImgClick.Pending ? <PendingLogo className="" /> : null}
          {ImgClick.Blocked ? <BlockedLogo className="" /> : null}
          {ImgClick["Add Friend"] ? <AddFriendLogo className="" /> : null}
          {ImgClick.All ? <AddFriendLogo className="" /> : null}
        </section>
        <section className="flex flex-col items-center px-4 py-10">
          <h1 className="text-white font-bold text-2xl mb-4">
            Its' Quite for now
          </h1>
          <h2 className="text-[#8C9095]">
            When a friend starts an activity-like playing a game or something it
            will show ip
          </h2>
        </section>
      </section>
    </section>
  );
};

export default MainSection;
