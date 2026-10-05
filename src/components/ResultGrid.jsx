import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import { fetchDataGif, fetchDataPics, fetchDataVideo } from "../api/MediaAPi";
import {
  setClear,
  setactiveTab,
  seterror,
  setloading,
  setresults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        dispatch(setloading(true));
        let data = [];
        if (activeTab === "photos") {
          let res = await fetchDataPics(query);
          data = res.hits.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.name,
            thumbnail: item.previewURL,
            src: item.largeImageURL,
            btn: item.pageURL,
          }));
        }
        if (activeTab === "videos") {
          let res = await fetchDataVideo(query);
          data = res.hits.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user || "video",
            thumbnail: item.videos.medium.thumbnail,
            src: item.videos.medium.url,
            btn: item.pageURL,
          }));
        }
        if (activeTab === "gifs") {
          let res = await fetchDataGif(query);
          data = res.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.images.fixed_width_small.url,
            src: item.images.original.url,
            btn: item.pageURL,
          }));
        }
        console.log(data);

        dispatch(setresults(data));
      } catch (error) {
        dispatch(seterror(error.message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);
  if (error) {
    return <h1>error</h1>;
  }
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      {/* Results heading */}
      <div className="mb-6 flex items-center justify-between border-b border-[#069494]/30 pb-3">
        <h1 className="font-['VT323'] text-2xl uppercase text-white">
          Results
        </h1>

        <span className="font-['VT323'] text-lg text-[#069494]">
          {results.length} FOUND
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {results.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default ResultGrid;
