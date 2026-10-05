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
