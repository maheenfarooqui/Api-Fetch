import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
  import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default App;
