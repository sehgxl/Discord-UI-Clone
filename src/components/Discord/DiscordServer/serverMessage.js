import React from "react";
import { ReactComponent as HashLogo } from "../../../assets/hashtag-solid.svg";
import { ReactComponent as ArrowDown } from "../../../assets/chevron-down-solid.svg";
const ServerMessage = (props) => {
  const setChannelData = props.setData;
  const channels = ["html", "css", "javascript"];
  const clickHandler = (title) => {
    setChannelData((prevState) => {
      for (const prop in prevState) {
        if (prop === title) prevState[prop] = true;
        else prevState[prop] = false;
      }
      console.log(prevState);
      return { ...prevState };
    });
  };
  return (
    <section className=" bg-[#2F3136] flex flex-col py-3 px-4 justify-start gap-5 ">
      <div
        id="info"
        className="flex gap-3 items-center  hover:bg-[#393C43] [&>*]:hover:text-[#C9CACC]"
        onClick={(e) => clickHandler(e.target.id)}
      >
        <HashLogo
          className="w-5 fill-[#8C9095]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <h1
          className="text-[#8C9095] font-semibold text-lg"
          onClick={(e) => {
            e.stopPropagation();
            clickHandler(e.target.parentElement.id);
          }}
        >
          info
        </h1>
      </div>
      <div
        id="TEXT CHANNELS"
        className="flex gap-3 items-center  hover:bg-[#393C43] [&>*]:hover:text-[#C9CACC]"
      >
        <ArrowDown className="w-5 fill-[#8C9095]" />
        <h1 className="text-[#8C9095] font-semibold text-lg">TEXT CHANNELS</h1>
      </div>
      {channels.map((channel) => {
        return (
          <div
            id={channel}
            className="flex gap-3 items-center  hover:bg-[#393C43] [&>*]:hover:text-[#C9CACC]"
            onClick={(e) => clickHandler(e.target.id)}
          >
            <HashLogo
              className="w-5 fill-[#8C9095]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <h1
              className="text-[#8C9095] font-semibold text-lg"
              onClick={(e) => {
                e.stopPropagation();
                clickHandler(e.target.parentElement.id);
              }}
            >
              {channel}
            </h1>
          </div>
        );
      })}
    </section>
  );
};

export default ServerMessage;
