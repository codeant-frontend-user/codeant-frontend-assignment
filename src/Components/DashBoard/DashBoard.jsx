import React, { useState } from "react";
import { SideBarNav, MainContent } from "../index";
import { handleContext } from "../../context/handleContext";

const DashBoard = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  document.body.style.overflow = openMobileMenu ? "hidden" : "auto";

  return (
    <handleContext.Provider value={{ openMobileMenu, setOpenMobileMenu }}>
      <section className="min-h-screen w-full bg-[#fafafa] flex flex-col md:flex-row">
        <SideBarNav />
        <MainContent />
        {openMobileMenu && (
          <div className="fixed bg-[#6C6C6C4D] top-0 left-0 -z-0 w-full h-screen block md:hidden"></div>
        )}
      </section>
    </handleContext.Provider>
  );
};

export default DashBoard;
