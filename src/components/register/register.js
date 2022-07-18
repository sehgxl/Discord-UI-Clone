import React from "react";
import QrCode from "../../assets/qr_code.png";
import { ReactComponent as LoginBg } from "../../assets/login_bg.svg";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const Navigate = useNavigate();
  return (
    <section className="relative h-screen overflow-hidden flex justify-center items-center">
      <LoginBg className="absolute w-screen h-screen   -z-10" />
      <article className="bg-[#36393F]  p-10 rounded-md flex flex-col ">
        <div>
          <h1 className="text-white font-bold text-3xl text-center mb-6">
            Create an account
          </h1>

          <label
            htmlFor=""
            className="text-[#B9BBBE] text-xs font-bold block mb-2"
          >
            EMAIL
          </label>
          <input
            className="min-w-full text-[#B9BBBE]  p-3 bg-[#202225] rounded  mb-6"
            type="text"
          />

          <label
            htmlFor=""
            className="text-[#B9BBBE] text-xs font-bold block mb-2"
          >
            Username
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
            className="min-w-full bg-[#202225] text-[#B9BBBE] p-3 rounded mb-6"
            type="password"
          />

          <button className="bg-[#5865F2] text-white hover:bg-[#4752C4] min-w-full leading-9 mb-2 rounded ">
            Continue
          </button>
          <h2
            onClick={() => Navigate("/Login")}
            className="text-[#00AFF4] text-sm hover:underline cursor-pointer mb-6"
          >
            Already have an account?
          </h2>
        </div>
      </article>
    </section>
  );
};

export default Register;
