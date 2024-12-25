import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInOptions } from "../../data/loginScreen";

const LoginRight = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  const SAASTab = () => (
    <>
      {signInOptions.slice(0, 4).map((item, index) => (
        <Link to={"/"} key={index}>
          <div className="flex items-center justify-center gap-4 py-4 xl:px-[120px] bg-[#FFFFFF] border border-[#D8DAE5] rounded-lg cursor-pointer">
            <img src={item.img} alt="icon" />
            <p className="text-[#171717] font-semibold">{item.text}</p>
          </div>
        </Link>
      ))}
    </>
  );

  const SelfHostedTab = () => (
    <>
      {signInOptions.slice(4, 6).map((item, index) => (
        <Link to={"/"} key={index}>
          <div className="flex items-center justify-center gap-4 py-4 xl:px-[150px] bg-[#FFFFFF] border border-[#D8DAE5] rounded-lg cursor-pointer">
            <img src={item.img} alt="icon" />
            <p className="text-[#171717] font-semibold">{item.text}</p>
          </div>
        </Link>
      ))}
    </>
  );

  return (
    <div className="w-full md:w-1/2 bg-[#FAFAFA] flex flex-col justify-center p-6 gap-8">
      <div className="bg-[#FFFFFF] border border-[#E9EAEB] shadow-custom-xs rounded-xl flex flex-col min-h-[580px] md:min-h-[602px]">
        <div className="py-9 px-6 flex flex-col items-center gap-5 border-b border-[#D5D7DA]">
          <div className="flex flex-col items-center gap-6 md:gap-9">
            <Link to={"/login-screen"}>
              <img src="logo-xs.svg" alt="logo" className="w-[200px] h-10" />
            </Link>
            <h2 className="text-[#181D27] font-semibold text-2xl sm:text-3xl text-center">
              Welcome to CodeAnt AI
            </h2>
          </div>
          <div className="border border-[#E9EAEB] rounded-lg overflow-hidden flex items-center gap-[2px] w-full">
            {["SAAS", "Self Hosted"].map((btnText, index) => (
              <button
                onClick={() => setActiveBtn(index)}
                key={index}
                className={`w-1/2 py-4 px-[14px] font-semibold rounded-lg transition-all duration-300 ${
                  activeBtn === index
                    ? "bg-[#1570EF] text-white border-gradient-180 shadow-custom-active"
                    : "bg-[#FAFAFA] text-[#414651]"
                }`}
              >
                {btnText}
              </button>
            ))}
          </div>
        </div>
        <div className="py-6 flex flex-col gap-4 xl:w-max xl:mx-auto px-6 xl:px-0">
          {activeBtn === 0 ? <SAASTab /> : <SelfHostedTab />}
        </div>
      </div>
      <p className="text-[#181D27] text-center text-sm sm:text-base">
        By signing up you agree to the
        <span className="font-bold"> Privacy Policy.</span>
      </p>
    </div>
  );
};

export default LoginRight;
