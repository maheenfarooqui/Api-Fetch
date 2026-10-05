import React from "react";
import { useDispatch } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const saveData = () => {
    dispatch(addCollection(item));
  };
  return (
    <div className="group overflow-hidden border border-[#069494]/40 bg-black transition-all duration-300 hover:-translate-y-1 hover:border-[#069494] hover:shadow-[0_0_25px_rgba(6,148,148,0.25)]">
      {/* Media */}
      <div className="relative aspect-square overflow-hidden bg-[#111]">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.thumbnail}
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Type badge */}
        <span className="absolute left-2 top-2 bg-[#069494] px-2 py-1 font-['VT323'] text-sm uppercase text-white">
          {item.type}
        </span>
      </div>

      {/* Card info */}
      <div className="border-t border-[#069494]/30 px-4 py-3">
        <h2 className="truncate font-['VT323'] text-xl uppercase tracking-wide text-white">
          {item.title || "Untitled"}
        </h2>

        <div className="flex justify-between">
          <a
            href={item.btn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-['VT323'] text-sm uppercase text-[#069494]"
          >
            {" "}
            VIEW MEDIA →{" "}
          </a>
          <button
            className="cursor-pointer mt-1 block font-['VT323'] text-sm uppercase text-[#069494]"
            onClick={() => {
              saveData(item);
            }}
          >
            {" "}
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
