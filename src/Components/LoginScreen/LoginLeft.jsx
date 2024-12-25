import React from "react";
import { features } from "../../data/loginScreen";

const LoginLeft = () => {
  return (
    <div className="w-1/2 bg-[#FFFFFF] border-r border-[#E9EAEB] md:flex items-center justify-center relative px-10 hidden">
      <div className="relative mb-36">
        <div className="bg-[#FFFFFF] shadow-[0_0_24px_0px_#08173529] rounded-3xl flex flex-col py-5">
          <div className="flex items-center gap-2 pb-4 px-6 border-b border-[#E6E8F0]">
            <img src="subtract-xs.svg" alt="subtract-img" />
            <h2 className="text-[#081735] font-bold text-lg">
              AI to Detect & Autofix Bad Code
            </h2>
          </div>
          <div className="flex items-center gap-x-10 pt-5 pb-2 px-6">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col text-center">
                <h3 className="text-[#081735] text-lg font-bold">
                  {item.text}
                </h3>
                <p className="text-[#171717] text-sm">{item.subText}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-max min-w-[270px] bg-[#FFFFFF] shadow-[0_0_24px_0px_#08173529] rounded-3xl py-3 px-7 flex flex-col gap-4 absolute -right-3 lg:-right-5 -mt-4">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 bg-[#9D90FA40] rounded-full flex items-center justify-center">
              <img src="vector.svg" alt="vector-img" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-[#0049C6] font-bold text-sm">
                <span>&#8593; </span>
                14%
              </h5>
              <p className="text-[#171717] text-xs">This week</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 font-bold">
            <h5 className="text-[#171717] text-sm">Issues Fixed</h5>
            <h2 className="text-[#081735] text-3xl">500K+</h2>
          </div>
        </div>
      </div>
      <img
        src="subtract-lg.svg"
        alt="subtract-img"
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};

export default LoginLeft;
