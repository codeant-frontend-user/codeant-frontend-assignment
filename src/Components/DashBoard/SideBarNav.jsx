import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useHandle } from "../../context/handleContext";
import { navlinks } from "../../data/dashboard";

const SideBarNav = () => {
  const [active, setActive] = useState(1);
  const { openMobileMenu, setOpenMobileMenu } = useHandle();

  const linkHandler = (id) => {
    setActive(id);
    setOpenMobileMenu(false);
  };

  const FooterLinks = () => {
    return navlinks.slice(5, 7).map((link) => (
      <Link
        to={link.path ? link.path : "/"}
        key={link.id}
        onClick={() => linkHandler(link.id)}
        className="flex items-center gap-3 px-3 text-[#414651] fill-[#414651]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={link.svgPath} />
        </svg>
        <p className="font-semibold">{link.text}</p>
      </Link>
    ));
  };

  return (
    <section
      className={`fixed top-0 left-0 z-10 md:relative bg-[#ffffff] w-full h-auto md:w-[296px] lg:w-[272px] md:h-screen md:border-r border-[#E9EAEB] md:px-4 pt-4 md:pt-5 md:pb-5 flex flex-col justify-between ${
        openMobileMenu && "pb-5"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-5">
        <div
          className={`flex items-center justify-between px-4 md:px-0 md:border-none md:pb-0 ${
            !openMobileMenu && "border-b border-[#E9EAEB] pb-3"
          }`}
        >
          <Link to={"/"}>
            <img src="codeant-logo.svg" alt="logo" className="w-max" />
          </Link>
          {!openMobileMenu ? (
            <FiMenu
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="text-2xl md:hidden cursor-pointer"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="text-2xl md:hidden cursor-pointer"
            />
          )}
        </div>
        <div
          className={`${
            openMobileMenu ? "flex" : "hidden"
          } md:flex flex-col gap-4 px-4 md:px-0`}
        >
          <select
            name="input-dropdown"
            className="w-full text-[#181D27] border border-[#D5D7DA] rounded-lg px-3 py-2 md:pr-9 shadow-custom-xs focus:outline-none appearance-none bg-[url('chevron-down.svg')] bg-no-repeat bg-[right_12px_center]"
          >
            {[
              "UtkarshDhairyaPanwar",
              "RajuSinghPanwar",
              "SunilRajputPanwar",
              "GautamKumarPanwar",
            ].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {navlinks.slice(0, 5).map((link) => (
            <Link
              to={link.path ? link.path : "/"}
              key={link.id}
              onClick={() => linkHandler(link.id)}
              className={`flex items-center gap-3 text-[#414651] fill-[#414651] px-3 transition-all duration-300
                ${
                  active === link.id &&
                  "md:bg-[#1570EF] md:text-white md:fill-white md:py-[10px] md:px-[14px] md:rounded-lg md:border-gradient-180 md:shadow-custom-active"
                }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={link.svgPath} />
              </svg>
              <p className="font-semibold">{link.text}</p>
            </Link>
          ))}

          <div className="flex flex-col gap-4 md:hidden">
            <FooterLinks />
          </div>
        </div>
      </div>
      {/* Footer  */}
      <div className="hidden md:flex flex-col gap-4">
        <FooterLinks />
      </div>
    </section>
  );
};

export default SideBarNav;
