import React from "react";
import QrCode from "../../assets/qr_code.png";
import { ReactComponent as LoginBg } from "../../assets/login_bg.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate();
  return (
    <section className="relative h-screen overflow-hidden flex justify-center items-center">
      <LoginBg className="absolute w-screen h-screen   -z-10" />
      <article className="bg-[#36393F]  p-10 rounded-md grid grid-cols-[0.6fr_0.4fr] gap-20 ">
        <div>
          <h1 className="text-white font-bold text-3xl text-center mb-2">
            Welcome back!
          </h1>
          <h2 className="text-[#B9BBBE]  text-center mb-6">
            We're so excited to see you again!
          </h2>
          <label
            htmlFor=""
            className="text-[#B9BBBE] text-xs font-bold block mb-2"
          >
            EMAIL OR PHONE NUMBER
          </label>
          <input
            className="min-w-full text-[#B9BBBE]  p-3 bg-[#202225] rounded  mb-6"
            type="text"
          />

          <label
            className="text-[#B9BBBE] text-xs font-bold rounded block mb-2"
            htmlFor=""
          >
            PASSWORD
          </label>
          <input
            className="min-w-full bg-[#202225] text-[#B9BBBE] p-3 rounded mb-2"
            type="password"
          />
          <h3 className="text-[#00AFF4] text-sm hover:underline cursor-pointer mb-6">
            Forget your password?
          </h3>
          <button
            onClick={() => {
              Navigate("/DiscordDashBoard");
            }}
            className="bg-[#5865F2] text-white hover:bg-[#4752C4] min-w-full leading-9 mb-2 rounded"
          >
            Login
          </button>
          <h4 className="text-[#656970] font-normal">
            Need an account?{" "}
            <span
              onClick={() => {
                Navigate("/Register");
              }}
              className="text-[#00AFF4] text-sm hover:underline cursor-pointer"
            >
              Register
            </span>
          </h4>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-56 border-8 border-white rounded"
            src={QrCode}
            alt="OrCodeHere"
          />
          <div>
            <h1 className="text-white font-bold text-3xl text-center ">
              Login in with QR Code
            </h1>
            <h2 className="text-[#B9BBBE]   text-center">
              Scan this with the{" "}
              <span className="font-bold">Discord mobile app</span> to log in
              instantly
            </h2>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
