import React from "react";
import Search from "../components/Search";
import Tab from "../components/Tab";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const Home = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <>
      <div className="min-h-screen w-full bg-gray-950 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            
         
            <h1 className="font-['VT323'] text-3xl uppercase tracking-wide text-white">
              
              Search
            </h1>
          </div>
  
          <button className="border border-[#069494]/60 px-4 py-2 font-['VT323'] text-lg uppercase text-white transition-all duration-200 hover:bg-[#069494] hover:text-black">
            
            ♡ Favourites
          </button>
        </div>
        <Search />
        {query !== "" ? (
          <div>
            <Tab />
            <ResultGrid />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
