import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 py-10">
        {collection.map((item, idx) => (
          <div key={idx}>
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CollectionPage;
