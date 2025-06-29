// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home";
import BusSearch from "./pages/BusSearch";
import Contact from "./pages/Contact";
import LiveTracking from "./pages/LiveTracking"; // ✅ LiveTracking added
import BusDetail from "./pages/BusDetail";
import NotFound from "./shared/NotFound";

function App() {
   return (
      <>
         <Navbar />
         <div className=" mt-15 p-4">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="*" element={<NotFound />} />
               <Route path="/schedules" element={<BusSearch />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/bus/:busId" element={<BusDetail />} />
               <Route path="/live-tracking" element={<LiveTracking />} /> {/* ✅ Route added */}
            </Routes>
         </div>
      </>
   );
}

export default App;
