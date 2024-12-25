import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import Repo from "./Repo";
import { repositories } from "../../data/dashboard";

const MainContent = () => {
  return (
    <main className="w-full pt-[60px] md:p-5">
      <div className="bg-[#ffffff] h-auto md:max-h-[calc(100vh-40px)] md:overflow-hidden w-full md:border md:border-[#E9EAEB] md:rounded-xl md:shadow-custom-xs flex flex-col">
        {/* Header */}
        <div className="border-b border-[#E9EAEB] py-5 px-4 md:px-6 flex flex-col gap-4">
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#181D27] text-xl font-semibold">
                Repositories
              </h2>
              <p className="text-[#414651] text-sm">
                {repositories.length} total repositories
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-[#D5D7DA] shadow-inner-border py-2 px-3 text-[#414651]">
                <FiRefreshCw />
                <p className="text-sm">Refresh All</p>
              </button>
              <button className="flex items-center gap-1 rounded-lg border-gradient-180 py-2 px-3 bg-[#1570EF] text-[#ffffff] shadow-custom-active">
                <IoAdd className="text-xl" />
                <p className="text-sm">Add Repository</p>
              </button>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search Repositories"
            className="shadow-inner-border bg-[url('search-icon.svg')] bg-no-repeat bg-[left_13px_center] py-[10px] px-11 border border-[#D5D7DA] md:w-max rounded-lg focus:outline-none placeholder:text-[#414651]"
          />
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:overflow-y-scroll scrollbar-custom">
          {repositories.map((repo) => (
            <Repo key={repo.id} repo={repo} repolength={repositories.length} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
