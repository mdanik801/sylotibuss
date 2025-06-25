import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import buses from "../data/buses.json";
import {
   FaArrowLeft,
   FaBus,
   FaPhoneAlt,
   FaClock,
   FaMapMarkerAlt,
   FaIdCard,
   FaRoad,
   FaHashtag,
} from "react-icons/fa";

export default function BusDetail() {
   const { busId } = useParams();
   const navigate = useNavigate();

   const bus = buses.find((b) => b.id === busId);

   if (!bus) {
      return (
         <div className="p-8 text-center">
            <p className="text-red-600 text-xl font-semibold">Bus not found.</p>
            <button
               onClick={() => navigate(-1)}
               className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
               Go Back
            </button>
         </div>
      );
   }

   return (
      <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg mt-12 space-y-6">
         {/* Back Button */}
         <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-green-700 hover:underline">
            <FaArrowLeft /> Back to Tracking
         </button>

         {/* Bus Name */}
         <h1 className="text-4xl font-bold text-green-800 flex items-center gap-3 mb-4">
            <FaBus /> {bus.name}
         </h1>

         {/* Details List */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-green-800">
            <div className="flex items-center gap-3">
               <FaIdCard className="text-green-600" />
               <span className="font-semibold">ID:</span> {bus.id}
            </div>
            <div className="flex items-center gap-3">
               <FaHashtag className="text-green-600" />
               <span className="font-semibold">Bus Number:</span> {bus.number}
            </div>
            <div className="flex items-center gap-3">
               <FaMapMarkerAlt className="text-green-600" />
               <span className="font-semibold">District:</span> {bus.district}
            </div>
            <div className="flex items-center gap-3">
               <FaClock className="text-green-600" />
               <span className="font-semibold">Start Time:</span> {bus.start_time}
            </div>
            <div className="flex items-center gap-3">
               <FaClock className="text-green-600" />
               <span className="font-semibold">End Time:</span> {bus.end_time}
            </div>
            <div className="flex items-center gap-3">
               <FaClock className="text-green-600" />
               <span className="font-semibold">Interval:</span> {bus.interval_minutes} mins
            </div>
            <div className="flex items-center gap-3">
               <FaPhoneAlt className="text-green-600" />
               <span className="font-semibold">Contact:</span> {bus.phone_number}
            </div>
         </div>

         {/* Route Path */}
         <div className="mt-6">
            <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
               <FaRoad className="text-green-600" />
               Route Path
            </h2>

            <div className="flex flex-wrap items-center gap-2">
               {bus.route.map((stop, idx) => (
                  <React.Fragment key={idx}>
                     <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-900 font-semibold rounded-full shadow-sm text-sm sm:text-base">
                        <FaMapMarkerAlt className="text-green-700" />
                        {stop}
                     </div>
                     {idx < bus.route.length - 1 && (
                        <span className="text-green-700 text-lg sm:text-xl font-bold">→</span>
                     )}
                  </React.Fragment>
               ))}
            </div>
         </div>
      </div>
   );
}
