import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
  import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
     
 <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            
         
           <Link to="/">
            <h1 className="font-['VT323'] text-3xl uppercase tracking-wide text-white">
              
              Search
            </h1>
           </Link>
          </div>
  
         <Link to="/collection">
          <button className="cursor-pointer rounded-0 border border-[#069494]/60 px-4 py-2 font-['VT323'] text-lg uppercase text-white transition-all duration-200 hover:bg-[#069494] hover:text-black">
            
            ♡ Favourites
          </button>
         </Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
