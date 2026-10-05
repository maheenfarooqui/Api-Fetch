import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl items-center gap-3 rounded-0 border-2 border-[#069494] bg-black p-2 shadow-[0_0_20px_rgba(6,148,148,0.2)]"
      >
        <input
          type="text"
          value={text}
          required
          name="search"
          placeholder="Search something..."
          className="flex-1 bg-transparent px-4 py-3 font-['VT323'] text-2xl text-white outline-none placeholder:text-gray-500 focus:bg-black focus:outline-none"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          type="submit"
          className="rounded-0 cursor-pointer bg-[#069494] px-7 py-3 font-['VT323'] text-xl text-white transition-all duration-200 hover:bg-white hover:text-black"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Search;
