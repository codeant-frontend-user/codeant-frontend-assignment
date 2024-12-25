import React from "react";
import { FiDatabase } from "react-icons/fi";

const Repo = ({ repo, repolength }) => {
  return (
    <div
      className={`py-4 px-4 md:py-5 md:px-6 border-[#D5D7DA] flex flex-col gap-2 hover:bg-[#F5F5F5] transition-all duration-300 cursor-pointer ${
        repo.id === repolength ? "border-none" : "border-b"
      }`}
    >
      <div className="flex items-center gap-2">
        <p className="text-[#181D27] font-medium text-lg md:text-[20px]">
          {repo.name}
        </p>
        <span className="py-[2px] pl-2 pr-[10px] bg-[#EFF8FF] border border-[#B2DDFF] rounded-full text-[#175CD3] text-sm text-center capitalize">
          {repo.visibility}
        </span>
      </div>
      <div className="flex items-center gap-6 md:gap-8 lg:gap-10 text-[#181D27]">
        <div className="flex items-center gap-2 capitalize">
          <p className="text-sm sm:text-base">{repo.language}</p>
          <span className="w-2 h-2 bg-[#1570EF] rounded-full"></span>
        </div>
        <div className="flex items-center gap-2 uppercase">
          <FiDatabase className="text-sm" />
          <p className="text-sm sm:text-base">{repo.size}</p>
        </div>
        <p className="text-sm sm:text-base">Updated {repo.updatedAt}</p>
      </div>
    </div>
  );
};

export default Repo;
