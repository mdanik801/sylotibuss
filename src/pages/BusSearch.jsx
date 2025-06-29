import React, { useState, useMemo } from "react";
import { FaBus, FaBusAlt, FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import busesData from "../data/buses.json";
import natureImg from "../assets/banar.jpg";

export default function BusSearch() {
   const buses = useMemo(
      () => busesData.filter((bus) => bus.id !== undefined && bus.id !== null),
      []
   );

   const [from, setFrom] = useState("");
   const [to, setTo] = useState("");
   const [results, setResults] = useState([]);

   const allStops = useMemo(() => {
      return [...new Set(buses.flatMap((bus) => bus.route))].sort();
   }, [buses]);

   const toStops = useMemo(() => {
      if (!from) return [];

      const busesWithFrom = buses.filter((bus) => bus.route.includes(from));
      const stopsAfterFrom = new Set();

      busesWithFrom.forEach((bus) => {
         const fromIndex = bus.route.indexOf(from);
         bus.route.slice(fromIndex + 1).forEach((stop) => stopsAfterFrom.add(stop));
      });

      return [...stopsAfterFrom].sort();
   }, [from, buses]);

   const toMinutes = (timeStr) => {
      const [h, m] = timeStr.split(":").map(Number);
      return h * 60 + m;
   };

   const handleSearch = () => {
      if (!from || !to || from === to) {
         setResults([]);
         return;
      }

      const filtered = buses.filter((bus) => {
         const startIndex = bus.route.indexOf(from);
         const endIndex = bus.route.indexOf(to);
         return startIndex !== -1 && endIndex !== -1 && startIndex < endIndex;
      });

      const sorted = [...filtered].sort(
         (a, b) => toMinutes(a.start_time) - toMinutes(b.start_time)
      );

      setResults(sorted);
   };

   return (
      <div className="relative min-h-screen py-10 px-4">
         {/* Background Image */}
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
               backgroundImage: `url(${natureImg})`,
               opacity: 0.8,
               zIndex: -1,
            }}
         />

         {/* Content */}
         <div className="bg-white/90 p-6 rounded-xl shadow-lg max-w-4xl mx-auto relative">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-4">
               Welcome to Syloti Bus
            </h1>
            <p className="text-center text-gray-600 mb-6">
               Select your route to find available buses
            </p>

            {/* Dropdowns */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
               <select
                  onChange={(e) => {
                     setFrom(e.target.value);
                     setTo("");
                  }}
                  value={from}
                  className="p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-1/3">
                  <option value="" disabled>
                     From
                  </option>
                  {allStops.map((stop) => (
                     <option key={stop} value={stop}>
                        {stop}
                     </option>
                  ))}
               </select>

               <select
                  onChange={(e) => setTo(e.target.value)}
                  value={to}
                  disabled={!from}
                  className="p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-1/3">
                  <option value="" disabled>
                     To
                  </option>
                  {toStops.map((stop) => (
                     <option key={stop} value={stop}>
                        {stop}
                     </option>
                  ))}
               </select>

               <button
                  onClick={handleSearch}
                  disabled={!from || !to || from === to}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 w-full sm:w-auto">
                  Search
               </button>
            </div>

            {/* Buses Summary */}
            <div className="mb-4">
               <h3 className="text-xl font-semibold text-green-800">
                  Total Available Buses: {results.length} Bus
                  {results.length !== 1 ? "es" : ""}
               </h3>
            </div>

            {/* Search Results */}
            {results.length > 0 ? (
               <div className="space-y-4">
                  {results.map((bus) => (
                     <div
                        key={bus.id}
                        className="border border-green-200 rounded-lg p-4 bg-green-50 shadow">
                        <h4 className="text-lg font-bold text-green-700 flex items-center gap-2">
                           <FaBus className="text-green-600" />
                           {bus.name} ({bus.number})
                        </h4>
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                           <FaMapMarkerAlt className="text-green-600" /> District: {bus.district}
                        </p>
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                           <FaClock className="text-green-600" /> Departure Time: {bus.start_time}
                        </p>
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                           <FaPhoneAlt className="text-green-600" /> Contact: {bus.phone_number}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                           {bus.route.map((stop, i) => (
                              <React.Fragment key={stop + i}>
                                 <span className="flex items-center gap-1 px-3 py-1 bg-green-200 text-green-900 rounded-full text-sm font-medium">
                                    <FaBusAlt className="text-green-700" /> {stop}
                                 </span>
                                 {i < bus.route.length - 1 && (
                                    <FaArrowRight className="text-green-500" />
                                 )}
                              </React.Fragment>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <p className="text-gray-700">No buses found.</p>
            )}
         </div>
      </div>
   );
}
