import { ReactComponent as HashLogo } from "../../../assets/hashtag-solid.svg";
import { ReactComponent as PlusLogo } from "../../../assets/plus_icon.svg";
import { ReactComponent as GIFLogo } from "../../../assets/gif_icon.svg";
import { ReactComponent as SmileLogo } from "../../../assets/emoji_icon.svg";
import { ReactComponent as GiftBoxLogo } from "../../../assets/gift_box_icon.svg";
import { ReactComponent as PinLogo } from "../../../assets/pin_icon.svg";
const ServerMain = (props) => {
  const ChannelData = props.data;
  return (
    <section className="bg-[#36393F] p-5 h-full flex flex-col justify-between">
      <nav className="flex justify-between">
        {ChannelData.info ? (
          <div className="flex items-center gap-3">
            <HashLogo className="w-5 fill-[#8C9095]" />
            <h1 className="text-white  font-bold text-lg">info</h1>
          </div>
        ) : null}
        {ChannelData.html ? (
          <div className="flex items-center gap-3">
            <HashLogo className="w-5 fill-[#8C9095]" />
            <h1 className="text-white  font-bold text-lg">html</h1>
          </div>
        ) : null}
        {ChannelData.css ? (
          <div className="flex items-center gap-3">
            <HashLogo className="w-5 fill-[#8C9095]" />
            <h1 className="text-white  font-bold text-lg">css</h1>
          </div>
        ) : null}
        {ChannelData.javascript ? (
          <div className="flex items-center gap-3">
            <HashLogo className="w-5 fill-[#8C9095]" />
            <h1 className="text-white  font-bold text-lg">javascript</h1>
          </div>
        ) : null}

        <PinLogo className="w-6 text-[#8C9095]" />
      </nav>

      <footer>
        <div className="flex bg-[#41444B] px-4 py-2 gap-3 rounded-lg">
          <PlusLogo className="text-[#B9BBBE] w-5" />
          <input
            type="text"
            className="w-full bg-transparent text-[#B9BBBE]"
            placeholder="Message"
          />
          <GiftBoxLogo className="text-[#B9BBBE] w-5" />
          <GIFLogo className="text-[#B9BBBE] w-5" />
          <SmileLogo className="text-[#B9BBBE] w-5" />
        </div>
      </footer>
    </section>
  );
};

export default ServerMain;
