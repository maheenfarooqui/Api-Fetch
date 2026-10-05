
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setactiveTab } from "../redux/features/searchSlice";

const Tab = () => {
  const tabs = ["photos", "videos", "gifs"];

  const dispatch = useDispatch();

  const currentTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex justify-center px-4 py-4">
      <div className="flex w-fit items-center gap-1 rounded-0 border border-[#069494] bg-black p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              dispatch(setactiveTab(tab));
            }}
            className={`cursor-pointer rounded-0 px-6 py-2 font-['VT323'] text-xl uppercase transition-all duration-200 ${
              currentTab === tab
                ? "bg-[#069494] text-white"
                : "bg-black text-white hover:bg-[#069494]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
