
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();

  const collection = useSelector((state) => state.collection.items);

  const clearData = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8 text-white sm:px-6 lg:px-10">

      {/* PAGE HEADER */}
      <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between border-b border-[#069494]/30 pb-5">

        {/* Title */}
        <div>
          <h1 className="font-['VT323'] text-4xl uppercase tracking-wide text-white">
            My Favourites
          </h1>

          <p className="mt-1 font-['VT323'] text-lg uppercase text-[#069494]">
            {collection.length} SAVED MEDIA
          </p>
        </div>

        {/* Clear Button */}
        {collection.length > 0 && (
          <button
            onClick={clearData}
            className="cursor-pointer border border-[#069494] bg-black px-5 py-2 font-['VT323'] text-lg uppercase text-[#069494] transition-all duration-200 hover:bg-[#069494] hover:text-black"
          >
            CLEAR FAVOURITES
          </button>
        )}
      </div>

      {/* EMPTY STATE */}
      {collection.length === 0 ? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="border border-[#069494]/30 bg-black px-10 py-12 text-center">
            <div className="mb-3 font-['VT323'] text-5xl text-[#069494]">
              ♡
            </div>

            <h2 className="font-['VT323'] text-3xl uppercase text-white">
              No Favourites Yet
            </h2>

            <p className="mt-2 font-['VT323'] text-lg text-gray-500">
              Save some media to see it here.
            </p>
          </div>
        </div>
      ) : (
        /* CARDS */
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {collection.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;

